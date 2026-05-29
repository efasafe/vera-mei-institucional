// Offline authentication using localStorage

interface User {
  id: string;
  email: string;
  name: string;
  password: string;
}

const USERS_KEY = 'offline_users';

export const OfflineAuth = {
  // Get all users
  getUsers(): User[] {
    try {
      const data = localStorage.getItem(USERS_KEY);
      if (!data) return [];
      const users = JSON.parse(data);
      return Array.isArray(users) ? users : [];
    } catch (error) {
      console.error('Error reading users from localStorage:', error);
      return [];
    }
  },

  // Save all users
  saveUsers(users: User[]): void {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (error) {
      console.error('Error saving users to localStorage:', error);
    }
  },

  // Sign up
  signup(email: string, password: string, name?: string): { success: boolean; access_token?: string; user?: any; error?: string } {
    const users = this.getUsers();

    // Check if user exists
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Usuário já existe' };
    }

    const newUser: User = {
      id: `offline-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      email,
      password, // In real app, this would be hashed
      name: name || email.split('@')[0],
    };

    users.push(newUser);
    this.saveUsers(users);

    // Generate fake token
    const token = btoa(JSON.stringify({ userId: newUser.id, email: newUser.email }));

    return {
      success: true,
      access_token: token,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      },
    };
  },

  // Sign in
  signin(email: string, password: string): { success: boolean; access_token?: string; user?: any; error?: string } {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return { success: false, error: 'Credenciais inválidas' };
    }

    // Generate fake token
    const token = btoa(JSON.stringify({ userId: user.id, email: user.email }));

    return {
      success: true,
      access_token: token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  },

  // Verify token
  verifyToken(token: string): { valid: boolean; userId?: string } {
    try {
      const decoded = JSON.parse(atob(token));
      return { valid: true, userId: decoded.userId };
    } catch (error) {
      return { valid: false };
    }
  },
};
