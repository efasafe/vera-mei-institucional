interface Post {
  id: string;
  title: string;
  content: string;
  images?: string[];
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

const STORAGE_KEY = 'local_posts';

export const LocalPostStore = {
  // Obter todos os posts
  getAll(): Post[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];
      const posts = JSON.parse(data);
      return Array.isArray(posts) ? posts : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  },

  // Obter um post por ID
  getById(id: string): Post | null {
    const posts = this.getAll();
    return posts.find(p => p.id === id) || null;
  },

  // Criar novo post
  create(postData: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Post {
    const posts = this.getAll();
    const newPost: Post = {
      ...postData,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    posts.push(newPost);
    this.saveAll(posts);

    console.log('✅ Post created in localStorage:', newPost);
    console.log('Total posts in localStorage:', posts.length);

    return newPost;
  },

  // Atualizar post existente
  update(id: string, updates: Partial<Post>): Post | null {
    const posts = this.getAll();
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
      console.error('Post not found:', id);
      return null;
    }

    const updatedPost: Post = {
      ...posts[index],
      ...updates,
      id: posts[index].id, // Não permite mudar o ID
      createdAt: posts[index].createdAt, // Não permite mudar createdAt
      updatedAt: new Date().toISOString(),
    };

    posts[index] = updatedPost;
    this.saveAll(posts);

    console.log('✅ Post updated in localStorage:', updatedPost);

    return updatedPost;
  },

  // Deletar post
  delete(id: string): boolean {
    const posts = this.getAll();
    const filteredPosts = posts.filter(p => p.id !== id);

    if (filteredPosts.length === posts.length) {
      console.error('Post not found for deletion:', id);
      return false;
    }

    this.saveAll(filteredPosts);
    console.log('✅ Post deleted from localStorage:', id);
    console.log('Remaining posts:', filteredPosts.length);

    return true;
  },

  // Salvar todos os posts
  saveAll(posts: Post[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  // Limpar todos os posts
  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
    console.log('✅ All posts cleared from localStorage');
  },

  // Gerar ID único
  generateId(): string {
    return `local-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  },

  // Importar posts do Supabase
  importFromSupabase(posts: Post[]): void {
    const existingPosts = this.getAll();
    const localPostIds = new Set(existingPosts.map(p => p.id));

    // Adiciona apenas posts que não existem localmente
    const newPosts = posts.filter(p => !localPostIds.has(p.id));

    if (newPosts.length > 0) {
      const allPosts = [...existingPosts, ...newPosts];
      this.saveAll(allPosts);
      console.log(`✅ Imported ${newPosts.length} posts from Supabase`);
    }
  },

  // Contar posts
  count(): number {
    return this.getAll().length;
  },

  // Verificar se está vazio
  isEmpty(): boolean {
    return this.count() === 0;
  },
};
