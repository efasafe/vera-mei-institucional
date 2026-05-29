import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Clock, ChevronRight, Search } from "lucide-react";
import { FirebasePosts } from '../../utils/firebasePosts';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

interface Post {
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

const placeholderPosts: Post[] = [
  {
    id: 'placeholder-1',
    title: 'Como construir uma marca pessoal poderosa como empreendedora',
    content: 'Sua marca pessoal é seu ativo mais valioso no mundo dos negócios. Descubra como posicioná-la estrategicamente para atrair clientes, parceiros e oportunidades. Neste artigo, você vai aprender as principais estratégias para construir uma presença marcante.',
    images: ['https://images.unsplash.com/photo-1558478551-1a378f63328e?w=800&h=500&fit=crop'],
    tag: 'Marca Pessoal',
    status: 'published',
    createdAt: '2026-05-12T10:00:00Z',
    updatedAt: '2026-05-12T10:00:00Z',
    authorId: 'placeholder',
  },
  {
    id: 'placeholder-2',
    title: '5 estratégias de networking que realmente funcionam para mulheres',
    content: 'Conectar-se vai muito além de trocar cartões. Aprenda como criar relacionamentos estratégicos que impulsionam seu negócio a longo prazo. Descubra técnicas comprovadas para expandir sua rede de contatos.',
    images: ['https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&h=500&fit=crop'],
    tag: 'Networking',
    status: 'published',
    createdAt: '2026-05-05T10:00:00Z',
    updatedAt: '2026-05-05T10:00:00Z',
    authorId: 'placeholder',
  },
  {
    id: 'placeholder-3',
    title: 'Liderança feminina: como navegar ambientes desafiadores com confiança',
    content: 'Desenvolva sua presença executiva e aprenda a liderar com autenticidade em qualquer contexto, sem abrir mão de quem você é. Este guia completo vai te ajudar a se posicionar como líder.',
    images: ['https://images.unsplash.com/photo-1573165662973-4ab3cf3d3508?w=800&h=500&fit=crop'],
    tag: 'Liderança',
    status: 'published',
    createdAt: '2026-04-28T10:00:00Z',
    updatedAt: '2026-04-28T10:00:00Z',
    authorId: 'placeholder',
  },
  {
    id: 'placeholder-4',
    title: 'Gestão financeira para empreendedoras: guia completo para iniciantes',
    content: 'Entender as finanças do seu negócio é fundamental. Aprenda os conceitos essenciais e as ferramentas que toda empreendedora precisa dominar para ter sucesso financeiro.',
    images: ['https://images.unsplash.com/photo-1655988940601-7702d8685f95?w=800&h=500&fit=crop'],
    tag: 'Finanças',
    status: 'published',
    createdAt: '2026-04-20T10:00:00Z',
    updatedAt: '2026-04-20T10:00:00Z',
    authorId: 'placeholder',
  },
  {
    id: 'placeholder-5',
    title: 'Marketing digital para pequenos negócios: por onde começar',
    content: 'Presença digital não é opcional — é necessidade. Descubra como criar uma estratégia de marketing digital eficiente mesmo com orçamento limitado.',
    images: ['https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=500&fit=crop'],
    tag: 'Marketing',
    status: 'published',
    createdAt: '2026-04-14T10:00:00Z',
    updatedAt: '2026-04-14T10:00:00Z',
    authorId: 'placeholder',
  },
  {
    id: 'placeholder-6',
    title: 'Mindset empreendedor: como superar o síndrome do impostor',
    content: 'O síndrome do impostor afeta até 70% das mulheres em posições de liderança. Saiba como identificar e superar esse obstáculo invisível que pode estar limitando seu crescimento.',
    images: ['https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=800&h=500&fit=crop'],
    tag: 'Mindset',
    status: 'published',
    createdAt: '2026-04-07T10:00:00Z',
    updatedAt: '2026-04-07T10:00:00Z',
    authorId: 'placeholder',
  },
];

// Helper para extrair texto puro do HTML
const stripHtml = (html: string): string => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

export function BlogPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      console.log('[BlogPage] Fetching posts from Firebase...');

      const firebasePosts = await FirebasePosts.getAllPublished();

      if (firebasePosts.length > 0) {
        setPosts(firebasePosts);
        console.log('[BlogPage] Using posts from Firebase:', firebasePosts.length);
      } else {
        setPosts(placeholderPosts);
        console.log('[BlogPage] No posts found, using placeholders');
      }
    } catch (err) {
      console.error('[BlogPage] Error loading posts:', err);
      setPosts(placeholderPosts);
      console.log('[BlogPage] Exception loading posts, using placeholders');
    } finally {
      setLoading(false);
    }
  };

  const availableTags = [...new Set(posts.map((p) => p.tag).filter((t): t is string => !!t))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stripHtml(post.content).toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === null || post.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const plainText = stripHtml(content);
    const words = plainText.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── HERO ── */}
      <section
        className="pt-40 pb-20"
        style={{
          background: "linear-gradient(160deg, var(--vera-mei-dark) 0%, #441328 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "rgba(253,248,243,0.4)" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "rgba(253,248,243,0.65)", fontWeight: 500, letterSpacing: "0.15em" }}
              >
                Blog & Conteúdo
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-cream)",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              Conhecimento que{" "}
              <em style={{ color: "rgba(253,248,243,0.9)", fontStyle: "italic" }}>
                transforma
              </em>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base"
              style={{ color: "rgba(253,248,243,0.65)", lineHeight: 1.7 }}
            >
              Artigos, guias e recursos práticos para empreendedoras que querem crescer com estratégia e propósito.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── POSTS GRID ── */}
      <section className="py-16" style={{ background: "var(--vera-mei-light)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1 max-w-xs">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--vera-mei-muted)" }} />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-full text-sm"
                style={{
                  background: "white",
                  border: "1px solid var(--vera-mei-border)",
                  color: "var(--vera-mei-dark)",
                  outline: "none",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
            </div>
          </div>

          {/* Tag filter chips */}
          {availableTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSelectedTag(null)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all"
                style={
                  selectedTag === null
                    ? { background: "var(--vera-mei-wine)", color: "white" }
                    : { background: "white", border: "1px solid var(--vera-mei-border)", color: "var(--vera-mei-muted)" }
                }
              >
                Todos
              </button>
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all"
                  style={
                    selectedTag === tag
                      ? { background: "var(--vera-mei-wine)", color: "white" }
                      : { background: "white", border: "1px solid var(--vera-mei-border)", color: "var(--vera-mei-muted)" }
                  }
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Grid */}
          {loading ? (
            <div className="col-span-3 py-16 text-center">
              <p style={{ color: "var(--vera-mei-muted)" }}>Carregando posts...</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filteredPosts.length === 0 ? (
                <div className="col-span-3 py-16 text-center">
                  <p style={{ color: "var(--vera-mei-muted)" }}>
                    {posts.length === 0 ? 'Nenhum post publicado ainda.' : 'Nenhum artigo encontrado.'}
                  </p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.01] transition-all duration-300 relative"
                    style={{
                      background: "white",
                      border: "1px solid var(--vera-mei-border)",
                      boxShadow: "0 2px 20px rgba(107,48,80,0.06)",
                    }}
                  >
                    {post.id.startsWith('placeholder-') && (
                      <div className="absolute top-2 right-2 z-10">
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                          Exemplo
                        </span>
                      </div>
                    )}
                    {post.images && post.images.length > 0 ? (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.images[0]}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                        <span className="text-3xl">📝</span>
                      </div>
                    )}
                    <div className="p-6">
                      {post.tag && (
                        <span
                          className="inline-block mb-3 text-xs px-2.5 py-1 rounded-full"
                          style={{ background: "var(--vera-mei-blush)", color: "var(--vera-mei-wine)", fontWeight: 600 }}
                        >
                          {post.tag}
                        </span>
                      )}
                      <h3
                        className="mb-2 leading-snug"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "var(--vera-mei-dark)",
                          fontSize: "1rem",
                          fontWeight: 600,
                        }}
                      >
                        {post.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{ color: "var(--vera-mei-muted)", lineHeight: 1.7 }}
                      >
                        {stripHtml(post.content).substring(0, 100)}
                        {stripHtml(post.content).length > 100 ? '...' : ''}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--vera-mei-muted)" }}>
                          <Clock size={11} />
                          <span>{estimateReadTime(post.content)}</span>
                          <span>·</span>
                          <span>{formatDate(post.createdAt)}</span>
                        </div>
                        <button
                          className="inline-flex items-center gap-1 text-xs transition-all group-hover:gap-2"
                          style={{ color: "var(--vera-mei-wine)", fontWeight: 600 }}
                        >
                          Ler <ChevronRight size={13} />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, var(--vera-mei-wine) 0%, #441328 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-cream)",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 600,
              }}
            >
              Receba conteúdos exclusivos
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm mb-7"
              style={{ color: "rgba(253,248,243,0.7)", lineHeight: 1.8 }}
            >
              Inscreva-se na nossa newsletter e receba artigos, dicas e recursos diretamente no seu e-mail.
            </motion.p>
            <motion.form
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-full text-sm"
                style={{
                  background: "rgba(253,248,243,0.12)",
                  border: "1px solid rgba(253,248,243,0.2)",
                  color: "var(--vera-mei-cream)",
                  outline: "none",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full text-sm whitespace-nowrap transition-all hover:opacity-90"
                style={{
                  background: "var(--vera-mei-cream)",
                  color: "var(--vera-mei-wine)",
                  fontWeight: 600,
                }}
              >
                Inscrever-se
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
