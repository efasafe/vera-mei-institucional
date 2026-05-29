import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FirebaseAuth } from '../../utils/firebaseAuth';

export function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await FirebaseAuth.signup(email, password, name);

      if (!result.success) {
        setError(result.error || 'Erro ao criar usuário');
        setLoading(false);
        return;
      }

      if (result.needsConfirmation) {
        setConfirming(true);
        setLoading(false);
        return;
      }

      navigate('/admin');
    } catch (err) {
      console.error('Signup exception:', err);
      setError('Erro ao criar conta. Tente novamente.');
      setLoading(false);
    }
  };

  if (confirming) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-vera-mei-cream px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-2xl font-bold text-vera-mei-dark mb-2">Confirme seu email</h2>
            <p className="text-vera-mei-muted mb-6">
              Enviamos um link de confirmação para <strong>{email}</strong>.
              Clique no link e depois faça login.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-vera-mei-wine text-white py-2 px-4 rounded-lg hover:bg-vera-mei-dark font-medium transition-colors"
            >
              Ir para o Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-vera-mei-cream px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-vera-mei-dark">
            Criar Conta Admin
          </h1>
          <p className="text-center text-vera-mei-muted mb-6">
            Cadastre-se para acessar o painel administrativo
          </p>

          <form onSubmit={handleSignup} className="space-y-6">
            {error && (
              <div className="bg-vera-mei-blush border border-vera-mei-rose/30 text-vera-mei-wine px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-vera-mei-muted mb-2">
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-vera-mei-wine/20 rounded-lg focus:ring-2 focus:ring-vera-mei-gold focus:border-transparent"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-vera-mei-muted mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-vera-mei-wine/20 rounded-lg focus:ring-2 focus:ring-vera-mei-gold focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-vera-mei-muted mb-2">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-2 border border-vera-mei-wine/20 rounded-lg focus:ring-2 focus:ring-vera-mei-gold focus:border-transparent"
                placeholder="••••••••"
              />
              <p className="text-sm text-vera-mei-muted mt-1">Mínimo 6 caracteres</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-vera-mei-wine text-white py-2 px-4 rounded-lg hover:bg-vera-mei-dark disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
            >
              {loading ? 'Criando conta...' : 'Criar Conta'}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="block w-full text-vera-mei-wine hover:text-vera-mei-dark text-sm font-medium"
              >
                Já tem uma conta? Faça login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
