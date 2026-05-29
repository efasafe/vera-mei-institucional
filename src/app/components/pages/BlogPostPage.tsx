import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Clock, ArrowLeft } from "lucide-react";
import { FirebasePosts, Post } from "../../utils/firebasePosts";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const placeholderPosts: Post[] = [
  {
    id: "placeholder-1",
    title: "Como construir uma marca pessoal poderosa como empreendedora",
    content:
      "<p>Sua marca pessoal é seu ativo mais valioso no mundo dos negócios. Descubra como posicioná-la estrategicamente para atrair clientes, parceiros e oportunidades. Neste artigo, você vai aprender as principais estratégias para construir uma presença marcante.</p><p>O primeiro passo é entender quem você é e o que representa. Defina seus valores, sua missão e a forma como quer ser reconhecida no mercado. Esse autoconhecimento é a base de tudo.</p><p>Em seguida, invista na sua presença digital: perfis profissionais, conteúdo relevante e consistência na comunicação. Lembre-se que cada post, cada interação e cada projeto comunica algo sobre quem você é.</p>",
    images: [
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?w=800&h=500&fit=crop",
    ],
    createdAt: "2026-05-12T10:00:00Z",
    updatedAt: "2026-05-12T10:00:00Z",
    authorId: "placeholder",
  },
  {
    id: "placeholder-2",
    title: "5 estratégias de networking que realmente funcionam para mulheres",
    content:
      "<p>Conectar-se vai muito além de trocar cartões. Aprenda como criar relacionamentos estratégicos que impulsionam seu negócio a longo prazo. Descubra técnicas comprovadas para expandir sua rede de contatos.</p><p>1. Seja genuína. As conexões mais duradouras nascem da autenticidade.</p><p>2. Ofereça antes de pedir. Quando você agrega valor sem expectativa de retorno imediato, cria um ciclo positivo.</p><p>3. Cuide das relações existentes. Muitas vezes, as melhores oportunidades vêm de quem já te conhece.</p>",
    images: [
      "https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&h=500&fit=crop",
    ],
    createdAt: "2026-05-05T10:00:00Z",
    updatedAt: "2026-05-05T10:00:00Z",
    authorId: "placeholder",
  },
  {
    id: "placeholder-3",
    title:
      "Liderança feminina: como navegar ambientes desafiadores com confiança",
    content:
      "<p>Desenvolva sua presença executiva e aprenda a liderar com autenticidade em qualquer contexto, sem abrir mão de quem você é. Este guia completo vai te ajudar a se posicionar como líder.</p><p>Liderar não é sobre perfeição, mas sobre presença. Mulheres que lideram com confiança não são aquelas que nunca erram, mas as que aprendem e seguem em frente.</p>",
    images: [
      "https://images.unsplash.com/photo-1573165662973-4ab3cf3d3508?w=800&h=500&fit=crop",
    ],
    createdAt: "2026-04-28T10:00:00Z",
    updatedAt: "2026-04-28T10:00:00Z",
    authorId: "placeholder",
  },
  {
    id: "placeholder-4",
    title:
      "Gestão financeira para empreendedoras: guia completo para iniciantes",
    content:
      "<p>Entender as finanças do seu negócio é fundamental. Aprenda os conceitos essenciais e as ferramentas que toda empreendedora precisa dominar para ter sucesso financeiro.</p><p>Comece separando as finanças pessoais das empresariais. Esse é o passo mais básico — e o mais ignorado.</p>",
    images: [
      "https://images.unsplash.com/photo-1655988940601-7702d8685f95?w=800&h=500&fit=crop",
    ],
    createdAt: "2026-04-20T10:00:00Z",
    updatedAt: "2026-04-20T10:00:00Z",
    authorId: "placeholder",
  },
  {
    id: "placeholder-5",
    title: "Marketing digital para pequenos negócios: por onde começar",
    content:
      "<p>Presença digital não é opcional — é necessidade. Descubra como criar uma estratégia de marketing digital eficiente mesmo com orçamento limitado.</p><p>Foque em um canal por vez. Tentar estar em todos os lugares ao mesmo tempo é a receita para o esgotamento sem resultados.</p>",
    images: [
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=500&fit=crop",
    ],
    createdAt: "2026-04-14T10:00:00Z",
    updatedAt: "2026-04-14T10:00:00Z",
    authorId: "placeholder",
  },
  {
    id: "placeholder-6",
    title: "Mindset empreendedor: como superar o síndrome do impostor",
    content:
      "<p>O síndrome do impostor afeta até 70% das mulheres em posições de liderança. Saiba como identificar e superar esse obstáculo invisível que pode estar limitando seu crescimento.</p><p>Reconhecer o padrão é o primeiro passo. Quando surgir aquela voz que diz que você não é boa o suficiente, questione: quais evidências comprovam o contrário?</p>",
    images: [
      "https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=800&h=500&fit=crop",
    ],
    createdAt: "2026-04-07T10:00:00Z",
    updatedAt: "2026-04-07T10:00:00Z",
    authorId: "placeholder",
  },
];

const stripHtml = (html: string): string => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (id) loadPost(id);
  }, [id]);

  const loadPost = async (postId: string) => {
    try {
      if (postId.startsWith("placeholder-")) {
        const found = placeholderPosts.find((p) => p.id === postId);
        setPost(found || null);
        if (!found) setNotFound(true);
      } else {
        const firebasePost = await FirebasePosts.getById(postId);
        if (firebasePost) {
          setPost(firebasePost);
        } else {
          const found = placeholderPosts.find((p) => p.id === postId);
          setPost(found || null);
          if (!found) setNotFound(true);
        }
      }
    } catch {
      const found = placeholderPosts.find((p) => p.id === postId);
      setPost(found || null);
      if (!found) setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const plainText = stripHtml(content);
    const words = plainText.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min de leitura`;
  };

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "var(--vera-mei-light)" }}
      >
        <p style={{ color: "var(--vera-mei-muted)", fontFamily: "'DM Sans', sans-serif" }}>
          Carregando post...
        </p>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{ background: "var(--vera-mei-light)", fontFamily: "'DM Sans', sans-serif" }}
      >
        <p style={{ color: "var(--vera-mei-muted)" }}>Post não encontrado.</p>
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 text-sm"
          style={{ color: "var(--vera-mei-wine)", fontWeight: 600 }}
        >
          <ArrowLeft size={15} /> Voltar ao blog
        </button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── HERO ── */}
      <section
        className="pt-40 pb-16"
        style={{
          background:
            "linear-gradient(160deg, var(--vera-mei-dark) 0%, #441328 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.button
              variants={fadeUp}
              onClick={() => navigate("/blog")}
              className="inline-flex items-center gap-2 mb-8 text-sm transition-opacity hover:opacity-80"
              style={{ color: "rgba(253,248,243,0.65)", fontWeight: 500 }}
            >
              <ArrowLeft size={14} />
              Voltar ao blog
            </motion.button>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-4"
            >
              <div
                className="h-px w-8"
                style={{ background: "rgba(253,248,243,0.4)" }}
              />
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  color: "rgba(253,248,243,0.65)",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                }}
              >
                Blog & Conteúdo
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-cream)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              {post.title}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 text-xs"
              style={{ color: "rgba(253,248,243,0.55)" }}
            >
              <Clock size={12} />
              <span>{estimateReadTime(post.content)}</span>
              <span>·</span>
              <span>{formatDate(post.createdAt)}</span>
              {post.id.startsWith("placeholder-") && (
                <>
                  <span>·</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-medium">
                    Exemplo
                  </span>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── COVER IMAGE ── */}
      {post.images && post.images.length > 0 && (
        <div
          className="w-full"
          style={{ background: "var(--vera-mei-dark)" }}
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div
              className="rounded-2xl overflow-hidden -mt-1"
              style={{
                boxShadow: "0 16px 60px rgba(0,0,0,0.25)",
                maxHeight: "480px",
              }}
            >
              <img
                src={post.images[0]}
                alt={post.title}
                className="w-full h-full object-cover"
                style={{ maxHeight: "480px" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── CONTENT ── */}
      <section
        className="py-16"
        style={{ background: "var(--vera-mei-cream)" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="prose-content"
            style={{
              color: "var(--vera-mei-dark)",
              lineHeight: 1.85,
              fontSize: "1.05rem",
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-14 pt-8"
            style={{ borderTop: "1px solid var(--vera-mei-border)" }}
          >
            <button
              onClick={() => navigate("/blog")}
              className="inline-flex items-center gap-2 text-sm transition-all hover:gap-3"
              style={{ color: "var(--vera-mei-wine)", fontWeight: 600 }}
            >
              <ArrowLeft size={15} />
              Ver todos os artigos
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--vera-mei-wine) 0%, #441328 100%)",
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
              Inscreva-se na nossa newsletter e receba artigos, dicas e recursos
              diretamente no seu e-mail.
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
