import { useState, useEffect } from 'react';
import { X, Upload, Trash2 } from 'lucide-react';
import { API_BASE_URL } from '../config/api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../styles/quill-custom.css';

interface Post {
  id: string;
  title: string;
  content: string;
  images?: string[];
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

interface PostFormProps {
  post: Post | null;
  onClose: () => void;
  accessToken: string;
}

export function PostForm({ post, onClose, accessToken }: PostFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImages(post.images || []);
    }
  }, [post]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError('');

    try {
      const uploadedUrls: string[] = [];

      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(
          `${API_BASE_URL}/upload`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
            body: formData,
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Upload error response:', errorText);
          try {
            const errorData = JSON.parse(errorText);
            setError(errorData.error || 'Erro ao fazer upload da imagem');
          } catch {
            if (response.status === 404) {
              setError('Endpoint não encontrado. Verifique se o servidor está rodando.');
            } else {
              setError(`Erro ao fazer upload: ${response.status} ${response.statusText}. Verifique se o servidor está rodando.`);
            }
          }
          setUploading(false);
          return;
        }

        let data;
        try {
          const responseText = await response.text();
          console.log('Upload response:', responseText);
          data = JSON.parse(responseText);
        } catch (parseError) {
          console.error('Error parsing JSON response:', parseError);
          setError('Erro: resposta inválida do servidor. Verifique se o servidor está rodando.');
          setUploading(false);
          return;
        }

        if (!data.url) {
          console.error('No URL in response:', data);
          setError('Erro: resposta inválida do servidor');
          setUploading(false);
          return;
        }

        uploadedUrls.push(data.url);
      }

      setImages([...images, ...uploadedUrls]);
      e.target.value = '';
    } catch (err) {
      console.error('Exception uploading image:', err);
      setError(`Erro ao conectar ao servidor: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const url = post
        ? `${API_BASE_URL}/posts/${post.id}`
        : `${API_BASE_URL}/posts`;

      const response = await fetch(url, {
        method: post ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ title, content, images }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Error saving post:', data);
        setError(data.error || 'Erro ao salvar post');
        setLoading(false);
        return;
      }

      console.log('✅ Post saved successfully:', data);
      console.log('Post ID:', data.post?.id);
      console.log('Post will be available at key:', `post:${data.post?.id}`);

      onClose();
    } catch (err) {
      console.error('Exception saving post:', err);
      setError('Erro ao conectar ao servidor');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {post ? 'Editar Post' : 'Novo Post'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Título *
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Digite o título do post"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Conteúdo
            </label>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
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
                style={{ minHeight: '200px' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Imagens
            </label>
            <div className="space-y-4">
              <label
                htmlFor="image-upload"
                className={`flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Upload size={20} className="text-gray-500" />
                <span className="text-gray-600">
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
                        className="w-full h-32 object-cover rounded-lg border border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
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
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading || uploading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
            >
              {loading ? 'Salvando...' : post ? 'Atualizar' : 'Criar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
