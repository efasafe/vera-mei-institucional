import { supabase } from '../config/supabase';

export interface Post {
  id: string;
  title: string;
  content: string;
  images?: string[];
  tag?: string;
  status: 'published' | 'draft';
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

export const FirebasePosts = {
  async getAll(): Promise<Post[]> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return [];
    }

    return (data || []).map((row) => ({
      id: row.id,
      title: row.title,
      content: row.content,
      images: row.images || [],
      tag: row.tag || undefined,
      status: (row.status as 'published' | 'draft') || 'published',
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      authorId: row.author_id,
    }));
  },

  async getAllPublished(): Promise<Post[]> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching published posts:', error);
      return [];
    }

    return (data || []).map((row) => ({
      id: row.id,
      title: row.title,
      content: row.content,
      images: row.images || [],
      tag: row.tag || undefined,
      status: 'published' as const,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      authorId: row.author_id,
    }));
  },

  async getById(id: string): Promise<Post | null> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      console.error('Error fetching post:', error);
      return null;
    }

    return {
      id: data.id,
      title: data.title,
      content: data.content,
      images: data.images || [],
      tag: data.tag || undefined,
      status: (data.status as 'published' | 'draft') || 'published',
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      authorId: data.author_id,
    };
  },

  async create(post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const { data, error } = await supabase
      .from('posts')
      .insert({
        title: post.title,
        content: post.content,
        images: post.images || [],
        tag: post.tag || null,
        status: post.status || 'published',
        author_id: post.authorId,
      })
      .select('id')
      .single();

    if (error || !data) {
      console.error('Error creating post:', error);
      throw error;
    }

    return data.id;
  },

  async update(id: string, updates: Partial<Omit<Post, 'id' | 'createdAt'>>): Promise<void> {
    const payload: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (updates.title !== undefined) payload.title = updates.title;
    if (updates.content !== undefined) payload.content = updates.content;
    if (updates.images !== undefined) payload.images = updates.images;
    if (updates.authorId !== undefined) payload.author_id = updates.authorId;
    if (updates.tag !== undefined) payload.tag = updates.tag || null;
    if (updates.status !== undefined) payload.status = updates.status;

    const { error } = await supabase
      .from('posts')
      .update(payload)
      .eq('id', id);

    if (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from('posts').delete().eq('id', id);

    if (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  },

  async uploadImage(file: File): Promise<string> {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Tipo de arquivo inválido. Apenas imagens são permitidas.');
    }
    if (file.size > 5 * 1024 * 1024) {
      throw new Error('Arquivo muito grande. Tamanho máximo é 5MB.');
    }

    const ext = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`;

    const { error } = await supabase.storage
      .from('post-images')
      .upload(fileName, file);

    if (error) {
      console.error('Error uploading image:', error);
      throw error;
    }

    const { data } = supabase.storage.from('post-images').getPublicUrl(fileName);
    return data.publicUrl;
  },
};
