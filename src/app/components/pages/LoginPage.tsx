import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FirebaseAuth } from '../../utils/firebaseAuth';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await FirebaseAuth.signin(email, password);

      if (!result.success) {
        setError(result.error || 'Email ou senha incorretos');
        setLoading(false);
        return;
      }

      navigate('/admin');
    } catch (err) {
      console.error('Login exception:', err);
      setError('Erro ao fazer login. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-vera-mei-cream px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-vera-mei-dark">
            Painel Administrativo
          </h1>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-vera-mei-blush border border-vera-mei-rose/30 text-vera-mei-wine px-4 py-3 rounded">
                {error}
              </div>
            )}

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
                className="w-full px-4 py-2 border border-vera-mei-wine/20 rounded-lg focus:ring-2 focus:ring-vera-mei-gold focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-vera-mei-wine text-white py-2 px-4 rounded-lg hover:bg-vera-mei-dark disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="block w-full text-vera-mei-wine hover:text-vera-mei-dark text-sm font-medium"
              >
                Não tem uma conta? Cadastre-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
