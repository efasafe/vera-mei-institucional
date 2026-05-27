import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock, ChevronRight, Search } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const categories = ["Todos", "Liderança", "Branding", "Finanças", "Marketing", "Networking", "Mindset", "Negócios"];

const posts = [
  {
    id: 1,
    title: "Como construir uma marca pessoal poderosa como empreendedora",
    category: "Branding",
    date: "12 Mai 2026",
    readTime: "7 min",
    excerpt: "Sua marca pessoal é seu ativo mais valioso no mundo dos negócios. Descubra como posicioná-la estrategicamente para atrair clientes, parceiros e oportunidades.",
    img: "https://images.unsplash.com/photo-1558478551-1a378f63328e?w=800&h=500&fit=crop",
    featured: true,
    author: "Ana Paula Rocha",
  },
  {
    id: 2,
    title: "5 estratégias de networking que realmente funcionam para mulheres",
    category: "Networking",
    date: "5 Mai 2026",
    readTime: "5 min",
    excerpt: "Conectar-se vai muito além de trocar cartões. Aprenda como criar relacionamentos estratégicos que impulsionam seu negócio a longo prazo.",
    img: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&h=500&fit=crop",
    featured: false,
    author: "Carla Mendes",
  },
  {
    id: 3,
    title: "Liderança feminina: como navegar ambientes desafiadores com confiança",
    category: "Liderança",
    date: "28 Abr 2026",
    readTime: "8 min",
    excerpt: "Desenvolva sua presença executiva e aprenda a liderar com autenticidade em qualquer contexto, sem abrir mão de quem você é.",
    img: "https://images.unsplash.com/photo-1573165662973-4ab3cf3d3508?w=800&h=500&fit=crop",
    featured: false,
    author: "Mariana Ferreira",
  },
  {
    id: 4,
    title: "Gestão financeira para empreendedoras: guia completo para iniciantes",
    category: "Finanças",
    date: "20 Abr 2026",
    readTime: "10 min",
    excerpt: "Entender as finanças do seu negócio é fundamental. Aprenda os conceitos essenciais e as ferramentas que toda empreendedora precisa dominar.",
    img: "https://images.unsplash.com/photo-1655988940601-7702d8685f95?w=800&h=500&fit=crop",
    featured: false,
    author: "Juliana Costa",
  },
  {
    id: 5,
    title: "Marketing digital para pequenos negócios: por onde começar",
    category: "Marketing",
    date: "14 Abr 2026",
    readTime: "6 min",
    excerpt: "Presença digital não é opcional — é necessidade. Descubra como criar uma estratégia de marketing digital eficiente mesmo com orçamento limitado.",
    img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=500&fit=crop",
    featured: false,
    author: "Raquel Lima",
  },
  {
    id: 6,
    title: "Mindset empreendedor: como superar o síndrome do impostor",
    category: "Mindset",
    date: "7 Abr 2026",
    readTime: "5 min",
    excerpt: "O síndrome do impostor afeta até 70% das mulheres em posições de liderança. Saiba como identificar e superar esse obstáculo invisível.",
    img: "https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=800&h=500&fit=crop",
    featured: false,
    author: "Sofia Andrade",
  },
  {
    id: 7,
    title: "Como escalar seu negócio sem perder a essência",
    category: "Negócios",
    date: "1 Abr 2026",
    readTime: "7 min",
    excerpt: "Crescer é o sonho de toda empreendedora. Mas como manter a cultura e a qualidade enquanto escala? Confira estratégias comprovadas.",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&h=500&fit=crop",
    featured: false,
    author: "Beatriz Nunes",
  },
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = posts.find((p) => p.featured);
  const filteredPosts = posts
    .filter((p) => !p.featured)
    .filter(
      (p) =>
        (activeCategory === "Todos" || p.category === activeCategory) &&
        (searchQuery === "" ||
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

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

      {/* ── FEATURED POST ── */}
      {featuredPost && (
        <section className="py-16" style={{ background: "var(--vera-mei-cream)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden"
              style={{
                background: "white",
                border: "1px solid var(--vera-mei-border)",
                boxShadow: "0 8px 40px rgba(107,48,80,0.1)",
              }}
            >
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--vera-mei-blush)",
                      color: "var(--vera-mei-wine)",
                      fontWeight: 600,
                    }}
                  >
                    Destaque
                  </span>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: "var(--vera-mei-light)", color: "var(--vera-mei-wine)", fontWeight: 500 }}
                  >
                    {featuredPost.category}
                  </span>
                </div>
                <h2
                  className="mb-4 leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--vera-mei-dark)",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                    fontWeight: 600,
                  }}
                >
                  {featuredPost.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--vera-mei-muted)", lineHeight: 1.8 }}
                >
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                      style={{ background: "var(--vera-mei-blush)", color: "var(--vera-mei-wine)", fontWeight: 700 }}
                    >
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: "var(--vera-mei-dark)", fontWeight: 500 }}>
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2 text-xs" style={{ color: "var(--vera-mei-muted)" }}>
                        <span>{featuredPost.date}</span>
                        <span>·</span>
                        <Clock size={11} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="inline-flex items-center gap-1.5 text-sm transition-all hover:gap-2.5"
                    style={{ color: "var(--vera-mei-wine)", fontWeight: 600 }}
                  >
                    Ler artigo <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── POSTS GRID ── */}
      <section className="py-16" style={{ background: "var(--vera-mei-light)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Search */}
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
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-xs transition-all hover:scale-105"
                  style={{
                    background: activeCategory === cat ? "var(--vera-mei-sage)" : "white",
                    color: activeCategory === cat ? "var(--vera-mei-cream)" : "var(--vera-mei-muted)",
                    border: activeCategory === cat ? "none" : "1px solid var(--vera-mei-border)",
                    fontWeight: 500,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filteredPosts.length === 0 ? (
              <div className="col-span-3 py-16 text-center">
                <p style={{ color: "var(--vera-mei-muted)" }}>Nenhum artigo encontrado.</p>
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
                  className="rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.01] transition-all duration-300"
                  style={{
                    background: "white",
                    border: "1px solid var(--vera-mei-border)",
                    boxShadow: "0 2px 20px rgba(107,48,80,0.06)",
                  }}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: "var(--vera-mei-blush)",
                          color: "var(--vera-mei-wine)",
                          fontWeight: 500,
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
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
                      {post.excerpt.length > 100
                        ? post.excerpt.slice(0, 100) + "..."
                        : post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--vera-mei-muted)" }}>
                        <Clock size={11} />
                        <span>{post.readTime}</span>
                        <span>·</span>
                        <span>{post.date}</span>
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

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mt-12"
            >
              <button
                className="px-8 py-3.5 rounded-full text-sm transition-all hover:scale-105"
                style={{
                  border: "1.5px solid var(--vera-mei-wine)",
                  color: "var(--vera-mei-wine)",
                  fontWeight: 500,
                }}
              >
                Carregar mais artigos
              </button>
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
