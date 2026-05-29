import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Pencil, Trash2, FileText, LogOut, User, Upload, X } from 'lucide-react';
import { FirebasePosts } from '../../utils/firebasePosts';
import { FirebaseAuth } from '../../utils/firebaseAuth';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../../styles/quill-custom.css';

interface Post {
  id: string;
  title: string;
  content: string;
  images?: string[];
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

const placeholderPosts: Post[] = [
  {
    id: 'placeholder-1',
    title: 'Oportunidade de acesso a consultorias',
    content: 'Sua marca pessoal é seu ativo mais valioso no mundo dos negócios. Descubra como posicioná-la estrategicamente para atrair clientes, parceiros e oportunidades.',
    images: ['https://images.unsplash.com/photo-1558478551-1a378f63328e?w=800&h=500&fit=crop'],
    createdAt: '2026-04-14T16:10:00Z',
    updatedAt: '2026-04-14T16:10:00Z',
    authorId: 'placeholder',
  },
  {
    id: 'placeholder-2',
    title: 'A Força da União',
    content: 'Conectar-se vai muito além de trocar cartões. Aprenda como criar relacionamentos estratégicos que impulsionam seu negócio a longo prazo.',
    images: ['https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&h=500&fit=crop'],
    createdAt: '2026-03-31T08:40:00Z',
    updatedAt: '2026-03-31T08:40:00Z',
    authorId: 'placeholder',
  },
  {
    id: 'placeholder-3',
    title: 'A Peça que Falta',
    content: 'Desenvolva sua presença executiva e aprenda a liderar com autenticidade em qualquer contexto.',
    images: ['https://images.unsplash.com/photo-1573165662973-4ab3cf3d3508?w=800&h=500&fit=crop'],
    createdAt: '2026-03-31T08:39:00Z',
    updatedAt: '2026-03-31T08:39:00Z',
    authorId: 'placeholder',
  },
  {
    id: 'placeholder-4',
    title: 'O Círculo do Diálogo',
    content: 'Entender as finanças do seu negócio é fundamental para o crescimento sustentável.',
    images: ['https://images.unsplash.com/photo-1655988940601-7702d8685f95?w=800&h=500&fit=crop'],
    createdAt: '2026-03-31T08:35:00Z',
    updatedAt: '2026-03-31T08:35:00Z',
    authorId: 'placeholder',
  },
];

export function AdminDashboardLocal() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.user-menu')) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showUserMenu]);

  const loadPosts = async () => {
    try {
      const firebasePosts = await FirebasePosts.getAll();

      if (firebasePosts.length > 0) {
        setPosts(firebasePosts);
        console.log('[Firebase] Loaded posts:', firebasePosts.length);
      } else {
        setPosts(placeholderPosts);
        console.log('[Firebase] No posts found, using placeholders');
      }
    } catch (err) {
      console.error('[Firebase] Error loading posts:', err);
      setPosts(placeholderPosts);
    }
  };

  const handleDelete = async (postId: string) => {
    if (postId.startsWith('placeholder-')) {
      alert('Posts de exemplo não podem ser deletados. Crie seus próprios posts para gerenciá-los.');
      return;
    }

    if (!confirm('Tem certeza que deseja deletar este post?')) {
      return;
    }

    try {
      await FirebasePosts.delete(postId);
      loadPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Erro ao deletar post');
    }
  };

  const handleEdit = (post: Post) => {
    if (post.id.startsWith('placeholder-')) {
      alert('Posts de exemplo não podem ser editados. Crie seus próprios posts para gerenciá-los.');
      return;
    }

    setEditingPost(post);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingPost(null);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingPost(null);
    setTimeout(() => loadPosts(), 100);
  };

  const handleSavePost = async (postData: { title: string; content: string; images: string[] }) => {
    try {
      const currentUser = FirebaseAuth.getCurrentUser();

      if (editingPost) {
        // Atualizar post existente
        await FirebasePosts.update(editingPost.id, {
          title: postData.title,
          content: postData.content,
          images: postData.images,
        });
      } else {
        // Criar novo post
        await FirebasePosts.create({
          title: postData.title,
          content: postData.content,
          images: postData.images,
          authorId: currentUser?.uid || 'anonymous',
        });
      }

      handleFormClose();
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Erro ao salvar post');
    }
  };

  const handleLogout = async () => {
    await FirebaseAuth.signout();
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleClearAll = async () => {
    if (confirm('Tem certeza que deseja deletar TODOS os posts? Esta ação não pode ser desfeita.')) {
      try {
        const allPosts = await FirebasePosts.getAll();
        for (const post of allPosts) {
          await FirebasePosts.delete(post.id);
        }
        loadPosts();
      } catch (error) {
        console.error('Error clearing posts:', error);
        alert('Erro ao limpar posts');
      }
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const realPostsCount = posts.filter(p => !p.id.startsWith('placeholder-')).length;

  return (
    <div className="min-h-screen bg-vera-mei-cream flex">
      {/* Sidebar */}
      <div className="w-16 bg-white border-r border-vera-mei-wine/10 flex flex-col items-center py-6">
        <button className="w-10 h-10 rounded-lg bg-vera-mei-gold text-white flex items-center justify-center mb-6">
          <FileText size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-vera-mei-wine/10 px-8 py-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-semibold text-vera-mei-dark mb-1 flex items-center gap-3">
                Postagens
                <span className="text-sm font-normal text-white bg-vera-mei-sage px-3 py-1 rounded-full flex items-center gap-1.5">
                  <HardDrive size={14} />
                  Modo Local
                </span>
              </h1>
              <p className="text-vera-mei-muted text-sm">Gerenciar postagens do sistema (armazenamento local)</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleCreate}
                className="bg-vera-mei-gold text-white px-4 py-2 rounded-lg hover:bg-vera-mei-wine flex items-center gap-2 font-medium transition-colors"
              >
                <span className="text-lg">+</span>
                Nova Postagem
              </button>
              <div className="relative user-menu">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="w-10 h-10 rounded-full bg-orange-100 text-vera-mei-gold flex items-center justify-center hover:bg-orange-200 transition-colors"
                >
                  <User size={20} />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-vera-mei-wine/10 py-2 z-10">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-vera-mei-dark">{user.email || 'Modo Local'}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm text-vera-mei-muted hover:bg-vera-mei-cream flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      Sair
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-vera-mei-muted mb-2">Buscar Título</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-vera-mei-muted" size={18} />
                <input
                  type="text"
                  placeholder="Buscar pelo título da postagem..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-vera-mei-wine/20 rounded-lg focus:ring-2 focus:ring-vera-mei-gold focus:border-transparent"
                />
              </div>
            </div>
            <div className="w-48">
              <label className="block text-sm font-medium text-vera-mei-muted mb-2">Tipo</label>
              <select className="w-full px-4 py-2 border border-vera-mei-wine/20 rounded-lg bg-white focus:ring-2 focus:ring-vera-mei-gold focus:border-transparent">
                <option>Mostrar Tudo</option>
              </select>
            </div>
            <div className="w-48">
              <label className="block text-sm font-medium text-vera-mei-muted mb-2">Status</label>
              <select className="w-full px-4 py-2 border border-vera-mei-wine/20 rounded-lg bg-white focus:ring-2 focus:ring-vera-mei-gold focus:border-transparent">
                <option>Mostrar Tudo</option>
              </select>
            </div>
          </div>
        </div>

        {/* Info banner */}
        <div className="mx-8 mt-6">
          {realPostsCount === 0 ? (
            <div className="bg-vera-mei-blush border border-vera-mei-rose/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="text-vera-mei-wine text-xl">💡</div>
                <div className="flex-1">
                  <p className="text-vera-mei-dark text-sm mb-3">
                    <strong>Modo Local Ativo:</strong> Posts são salvos no navegador. Crie seu primeiro post para começar!
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate('/admin')}
                      className="text-xs bg-vera-mei-wine text-white px-3 py-1.5 rounded hover:bg-vera-mei-dark"
                    >
                      <Database size={12} className="inline mr-1" />
                      Voltar para Modo Supabase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-vera-mei-sage/10 border border-vera-mei-sage/30 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-vera-mei-sage text-xl">✅</div>
                  <p className="text-vera-mei-dark text-sm">
                    <strong>{realPostsCount}</strong> post(s) salvo(s) localmente
                  </p>
                </div>
                <button
                  onClick={handleClearAll}
                  className="text-xs bg-vera-mei-rose text-white px-3 py-1.5 rounded hover:bg-vera-mei-wine"
                >
                  Limpar Todos
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="flex-1 px-8 py-6">
          <div className="bg-white rounded-lg border border-vera-mei-wine/10 overflow-hidden">
            <table className="w-full">
              <thead className="bg-vera-mei-cream border-b border-vera-mei-wine/10">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-vera-mei-muted uppercase tracking-wider">
                    Título
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-vera-mei-muted uppercase tracking-wider">
                    Tipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-vera-mei-muted uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-vera-mei-muted uppercase tracking-wider">
                    Criado em
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-vera-mei-muted uppercase tracking-wider">

                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentPosts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-vera-mei-muted">
                      Nenhum post encontrado
                    </td>
                  </tr>
                ) : (
                  currentPosts.map((post) => {
                    const isPlaceholder = post.id.startsWith('placeholder-');
                    return (
                      <tr key={post.id} className="hover:bg-vera-mei-cream">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-vera-mei-dark">{post.title}</span>
                            {isPlaceholder && (
                              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-vera-mei-blush text-vera-mei-wine font-medium">
                                Exemplo
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-full bg-vera-mei-blush text-vera-mei-wine text-xs font-medium">
                            Postagem
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-full bg-vera-mei-sage/20 text-vera-mei-sage text-xs font-medium">
                            Publicado
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-vera-mei-muted">
                          {formatDate(post.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => handleEdit(post)}
                              disabled={isPlaceholder}
                              className={`p-2 rounded-lg transition-colors ${
                                isPlaceholder
                                  ? 'text-gray-300 cursor-not-allowed'
                                  : 'text-vera-mei-muted hover:bg-vera-mei-light'
                              }`}
                              title={isPlaceholder ? 'Posts de exemplo não podem ser editados' : 'Editar'}
                            >
                              <Pencil size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(post.id)}
                              disabled={isPlaceholder}
                              className={`p-2 rounded-lg transition-colors ${
                                isPlaceholder
                                  ? 'text-gray-300 cursor-not-allowed'
                                  : 'text-vera-mei-rose hover:bg-vera-mei-blush'
                              }`}
                              title={isPlaceholder ? 'Posts de exemplo não podem ser deletados' : 'Deletar'}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="bg-white border-t border-vera-mei-wine/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-vera-mei-muted">Linhas por página</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="px-3 py-1 border border-vera-mei-wine/20 rounded bg-white text-sm"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-vera-mei-muted">
                  {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} de {filteredPosts.length}
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded hover:bg-vera-mei-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronsLeft size={16} />
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded hover:bg-vera-mei-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded hover:bg-vera-mei-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded hover:bg-vera-mei-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronsRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <PostFormLocal
          post={editingPost}
          onClose={handleFormClose}
          onSave={handleSavePost}
        />
      )}
    </div>
  );
}

// Componente de formulário simplificado para modo local
interface PostFormLocalProps {
  post: Post | null;
  onClose: () => void;
  onSave: (data: { title: string; content: string; images: string[] }) => void;
}

function PostFormLocal({ post, onClose, onSave }: PostFormLocalProps) {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [images, setImages] = useState<string[]>(post?.images || []);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      const uploadedUrls: string[] = [];

      for (const file of Array.from(files)) {
        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
          alert('Tipo de arquivo inválido. Apenas imagens são permitidas.');
          continue;
        }

        // Validate file size (5MB max)
        if (file.size > 5242880) {
          alert('Arquivo muito grande. Tamanho máximo é 5MB.');
          continue;
        }

        // Convert to base64
        const reader = new FileReader();
        const base64Promise = new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        const dataUrl = await base64Promise;
        uploadedUrls.push(dataUrl);
      }

      setImages([...images, ...uploadedUrls]);
      e.target.value = '';
    } catch (err) {
      console.error('Exception uploading image:', err);
      alert('Erro ao fazer upload da imagem');
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('O título é obrigatório');
      return;
    }
    onSave({ title, content, images });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-vera-mei-wine/10 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-vera-mei-dark">
            {post ? 'Editar Post' : 'Novo Post'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-vera-mei-muted hover:bg-vera-mei-light rounded-lg transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-vera-mei-muted mb-2">
              Título *
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border border-vera-mei-wine/20 rounded-lg focus:ring-2 focus:ring-vera-mei-gold focus:border-transparent"
              placeholder="Digite o título do post"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-vera-mei-muted mb-2">
              Conteúdo
            </label>
            <div className="border border-vera-mei-wine/20 rounded-lg overflow-hidden">
              <ReactQuill
                value={content}
                onChange={setContent}
                modules={{
                  toolbar: [
                    ['bold', 'italic'],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                  ]
                }}
                formats={['bold', 'italic', 'size']}
                placeholder="Digite o conteúdo do post..."
                className="bg-white"
                style={{ minHeight: '250px' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-vera-mei-muted mb-2">
              Imagens
            </label>
            <div className="space-y-4">
              <label
                htmlFor="image-upload"
                className={`flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-vera-mei-wine/20 rounded-lg cursor-pointer hover:border-vera-mei-gold hover:bg-vera-mei-blush transition-colors ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Upload size={20} className="text-vera-mei-muted" />
                <span className="text-vera-mei-muted">
                  {uploading ? 'Enviando...' : 'Clique para adicionar imagens'}
                </span>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                />
              </label>

              {images.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {images.map((imageUrl, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={imageUrl}
                        alt={`Imagem ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border border-vera-mei-wine/10"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-2 right-2 p-1.5 bg-vera-mei-rose text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-vera-mei-wine"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-vera-mei-wine/20 text-vera-mei-muted rounded-lg hover:bg-vera-mei-cream font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium transition-colors"
            >
              {post ? 'Atualizar' : 'Criar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
