import { supabase } from '../config/supabase';

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  photoURL: string | null;
}

export const FirebaseAuth = {
  async signup(email: string, password: string, name?: string): Promise<{
    success: boolean;
    needsConfirmation?: boolean;
    user?: AuthUser;
    error?: string;
  }> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: name || email.split('@')[0] },
      },
    });

    if (error) {

      console.debug('Signup error details:', {
        message: error.message,
        code: error.code,
        status: error.status,
      });
      let errorMessage = 'Erro ao criar conta';
      if (error.message.toLowerCase().includes('rate limit') || error.message.toLowerCase().includes('email rate')) {
        errorMessage = 'Limite de emails atingido. Desative a confirmação de email no Supabase (Authentication → Settings → desmarcar "Confirm email") ou aguarde alguns minutos.';
      } else if (error.message.includes('already registered')) {
        errorMessage = 'Este email já está em uso';
      } else if (error.message.includes('weak')) {
        errorMessage = 'Senha muito fraca. Use pelo menos 6 caracteres';
      }
      return { success: false, error: errorMessage };
    }

    if (!data.user) {
      return { success: false, error: 'Erro ao criar conta' };
    }

    // Supabase requires email confirmation — session will be null
    if (!data.session) {
      return { success: true, needsConfirmation: true };
    }

    const user: AuthUser = {
      uid: data.user.id,
      email: data.user.email ?? null,
      displayName: (data.user.user_metadata?.display_name as string) || name || null,
      emailVerified: data.user.email_confirmed_at != null,
      photoURL: null,
    };

    localStorage.setItem('user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }));
    localStorage.setItem('access_token', data.session.access_token);

    return { success: true, user };
  },

  async signin(email: string, password: string): Promise<{
    success: boolean;
    user?: AuthUser;
    error?: string;
  }> {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      let errorMessage = 'Email ou senha incorretos';
      if (error.message.includes('Email not confirmed')) {
        errorMessage = 'Confirme seu email antes de fazer login';
      }
      return { success: false, error: errorMessage };
    }

    if (!data.user) {
      return { success: false, error: 'Erro ao fazer login' };
    }

    const user: AuthUser = {
      uid: data.user.id,
      email: data.user.email ?? null,
      displayName: (data.user.user_metadata?.display_name as string) || null,
      emailVerified: data.user.email_confirmed_at != null,
      photoURL: null,
    };

    localStorage.setItem('user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }));
    localStorage.setItem('access_token', data.session.access_token);

    return { success: true, user };
  },

  async signout(): Promise<void> {
    await supabase.auth.signOut();
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
  },

  getCurrentUser(): AuthUser | null {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        return {
          uid: userData.uid,
          email: userData.email,
          displayName: userData.displayName,
          emailVerified: true,
          photoURL: null,
        };
      } catch {
        return null;
      }
    }
    return null;
  },

  onAuthStateChanged(callback: (user: AuthUser | null) => void): () => void {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        callback({
          uid: session.user.id,
          email: session.user.email ?? null,
          displayName: (session.user.user_metadata?.display_name as string) || null,
          emailVerified: session.user.email_confirmed_at != null,
          photoURL: null,
        });
      } else {
        callback(null);
      }
    });
    return () => subscription.unsubscribe();
  },
};
