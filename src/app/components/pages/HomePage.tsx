import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Award,
  Heart,
  Zap,
  Globe,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "500+", label: "Mulheres Impactadas" },
  { value: "98%", label: "Satisfação" },
  { value: "12+", label: "Programas Ativos" },
  { value: "5 Anos", label: "de Experiência" },
];

const benefits = [
  {
    icon: Users,
    title: "Comunidade Vibrante",
    desc: "Uma rede exclusiva de mulheres que se apoiam, colaboram e crescem juntas.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Real",
    desc: "Metodologia comprovada que transforma conhecimento em resultados concretos.",
  },
  {
    icon: Award,
    title: "Mentoria de Elite",
    desc: "Acesso direto a mentoras experientes que já percorreram o caminho que você quer trilhar.",
  },
  {
    icon: Heart,
    title: "Acolhimento Genuíno",
    desc: "Um ambiente seguro onde você pode ser autêntica, vulnerável e poderosa ao mesmo tempo.",
  },
  {
    icon: Zap,
    title: "Ação Estratégica",
    desc: "Ferramentas práticas e frameworks que você pode implementar imediatamente.",
  },
  {
    icon: Globe,
    title: "Impacto Duradouro",
    desc: "Construa um negócio com propósito que transforma sua vida e da sua comunidade.",
  },
];

const services = [
  {
    title: "Mentorias",
    desc: "Sessões individuais e em grupo com mentoras que entendem o universo do empreendedorismo feminino.",
    color: "var(--vera-mei-wine)",
  },
  {
    title: "Capacitações",
    desc: "Trilhas de aprendizado práticas, dos fundamentos ao avançado, em gestão, marketing e liderança.",
    color: "var(--vera-mei-rose)",
  },
  {
    title: "Networking",
    desc: "Conexões estratégicas com outras empreendedoras, investidores e parceiros de negócios.",
    color: "var(--vera-mei-sage)",
  },
  {
    title: "Eventos",
    desc: "Encontros presenciais e online para aprender, conectar e celebrar conquistas.",
    color: "var(--vera-mei-muted)",
  },
];

const testimonials = [
  {
    name: "Ana Carolina Silva",
    role: "Fundadora da ACS Consultoria",
    quote:
      "A Vera MEI transformou completamente a forma como vejo meu negócio. A mentorias e a comunidade me deram o suporte e a clareza que eu precisava para dar o próximo passo.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Mariana Ferreira",
    role: "CEO da MF Digital",
    quote:
      "Nunca imaginei encontrar um espaço tão acolhedor e ao mesmo tempo tão profissional. As conexões que fiz aqui mudaram o rumo da minha empresa.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Juliana Costa",
    role: "Empreendedora & Coach",
    quote:
      "A Vera MEI não é só uma plataforma, é uma família. O suporte que recebi foi fundamental para superar os desafios dos primeiros anos do meu negócio.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1585240975858-7264fd020798?w=120&h=120&fit=crop&crop=face",
  },
];

const blogPosts = [
  {
    title: "Como construir uma marca pessoal poderosa como empreendedora",
    category: "Branding",
    date: "12 Mai 2026",
    img: "https://images.unsplash.com/photo-1558478551-1a378f63328e?w=600&h=400&fit=crop",
    excerpt: "Sua marca pessoal é seu ativo mais valioso. Descubra como posicioná-la estrategicamente.",
  },
  {
    title: "5 estratégias de networking que realmente funcionam para mulheres",
    category: "Networking",
    date: "5 Mai 2026",
    img: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=600&h=400&fit=crop",
    excerpt: "Conectar-se vai além de trocar cartões. Aprenda como criar relacionamentos que impulsionam negócios.",
  },
  {
    title: "Liderança feminina: como navegar ambientes desafiadores com confiança",
    category: "Liderança",
    date: "28 Abr 2026",
    img: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=600&h=400&fit=crop",
    excerpt: "Desenvolva sua presença executiva e lidere com autenticidade em qualquer contexto.",
  },
];

export function HomePage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "var(--vera-mei-dark)" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1650784854863-d8c77b04926e?w=1920&h=1080&fit=crop"
            alt="Vera MEI Community"
            className="w-full h-full object-cover opacity-30"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,15,19,0.95) 0%, rgba(107,48,80,0.6) 50%, rgba(26,15,19,0.85) 100%)",
            }}
          />
        </div>

        {/* Decorative orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(95,111,82,0.2)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(107,48,80,0.3)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-6"
            >
              <div
                className="h-px w-10"
                style={{ background: "rgba(253,248,243,0.4)" }}
              />
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(253,248,243,0.65)",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                }}
              >
                Empreendedorismo Feminino
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-cream)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              Desperte o seu{" "}
              <em style={{ color: "var(--vera-mei-gold)", fontStyle: "italic" }}>
                potencial
              </em>{" "}
              como empreendedora
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg leading-relaxed mb-10"
              style={{ color: "rgba(253,248,243,0.75)", maxWidth: "520px" }}
            >
              A Vera MEI é a plataforma que une comunidade, mentoria e conhecimento para mulheres que desejam construir negócios com propósito, impacto e liberdade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:opacity-90 hover:scale-105 active:scale-95"
                style={{
                  background: "var(--vera-mei-gold)",
                  color: "var(--vera-mei-dark)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                Quero Fazer Parte
                <ArrowRight size={18} />
              </a>
              <Link
                to="/sobre"
                className="px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:opacity-90"
                style={{
                  border: "1px solid rgba(253,248,243,0.3)",
                  color: "var(--vera-mei-cream)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              >
                Conheça a Vera MEI
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1"
            style={{ borderColor: "rgba(253,248,243,0.3)" }}
          >
            <div
              className="w-1 h-3 rounded-full"
              style={{ background: "rgba(253,248,243,0.5)" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "var(--vera-mei-wine)" }} className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div
                  className="text-3xl mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--vera-mei-cream)",
                    fontWeight: 700,
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "rgba(253,248,243,0.7)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section
        className="py-24 overflow-hidden"
        style={{ background: "var(--vera-mei-cream)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20"
                style={{ background: "var(--vera-mei-gold)" }}
              />
              <div
                className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full opacity-10"
                style={{ background: "var(--vera-mei-wine)" }}
              />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=1000&fit=crop"
                  alt="Vera MEI - Mulheres empreendedoras"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl"
                  style={{
                    background: "rgba(253,248,243,0.92)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(107,48,80,0.1)",
                  }}
                >
                  <div
                    className="text-2xl mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--vera-mei-wine)",
                      fontWeight: 700,
                    }}
                  >
                    Nossa Missão
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--vera-mei-muted)" }}
                  >
                    Empoderar mulheres empreendedoras a alcançar liberdade e impacto real.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: "var(--vera-mei-gold)" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--vera-mei-gold)", fontWeight: 500, letterSpacing: "0.15em" }}
                >
                  Sobre a Vera MEI
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--vera-mei-dark)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                Criada por mulheres,{" "}
                <em style={{ color: "var(--vera-mei-wine)", fontStyle: "italic" }}>
                  para mulheres
                </em>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--vera-mei-muted)", lineHeight: 1.8 }}
              >
                A Vera MEI nasceu da crença de que cada mulher tem em si o potencial para construir algo extraordinário. Nossa plataforma reúne mentoria, comunidade e ferramentas práticas para transformar esse potencial em realidade.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--vera-mei-muted)", lineHeight: 1.8 }}
              >
                Mais do que uma plataforma de negócios, somos um ecossistema de apoio, aprendizado e protagonismo feminino.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  to="/sobre"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full transition-all hover:opacity-90 hover:scale-105"
                  style={{
                    background: "var(--vera-mei-wine)",
                    color: "var(--vera-mei-cream)",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                  }}
                >
                  Nossa História
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section
        className="py-24"
        style={{ background: "var(--vera-mei-light)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--vera-mei-gold)" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--vera-mei-gold)", fontWeight: 500, letterSpacing: "0.15em" }}
              >
                Por que escolher a Vera MEI
              </span>
              <div className="h-px w-8" style={{ background: "var(--vera-mei-gold)" }} />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-dark)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
              }}
            >
              Tudo que você precisa para{" "}
              <em style={{ color: "var(--vera-mei-wine)", fontStyle: "italic" }}>florescer</em>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-7 rounded-2xl group hover:scale-[1.02] transition-all duration-300"
                style={{
                  background: "white",
                  border: "1px solid var(--vera-mei-border)",
                  boxShadow: "0 2px 20px rgba(107,48,80,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--vera-mei-blush)" }}
                >
                  <b.icon size={22} style={{ color: "var(--vera-mei-wine)" }} />
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--vera-mei-dark)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--vera-mei-muted)" }}
                >
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24" style={{ background: "var(--vera-mei-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--vera-mei-gold)" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--vera-mei-gold)", fontWeight: 500, letterSpacing: "0.15em" }}
              >
                Nossos Serviços
              </span>
              <div className="h-px w-8" style={{ background: "var(--vera-mei-gold)" }} />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-dark)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
              }}
            >
              Como a Vera MEI{" "}
              <em style={{ color: "var(--vera-mei-wine)", fontStyle: "italic" }}>transforma</em>{" "}
              sua trajetória
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-7 rounded-2xl group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                style={{
                  background: s.color,
                  boxShadow: `0 8px 30px ${s.color}40`,
                }}
              >
                <div
                  className="w-8 h-1 rounded-full mb-6"
                  style={{ background: "rgba(253,248,243,0.5)" }}
                />
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--vera-mei-cream)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "rgba(253,248,243,0.75)" }}
                >
                  {s.desc}
                </p>
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-1 text-sm transition-all group-hover:gap-2"
                  style={{ color: "var(--vera-mei-cream)", fontWeight: 500 }}
                >
                  Saiba mais <ChevronRight size={15} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border transition-all hover:scale-105"
              style={{
                border: "1.5px solid var(--vera-mei-wine)",
                color: "var(--vera-mei-wine)",
                fontWeight: 500,
              }}
            >
              Ver Todos os Serviços
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="py-24 overflow-hidden"
        style={{ background: "var(--vera-mei-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "rgba(253,248,243,0.4)" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "rgba(253,248,243,0.65)", fontWeight: 500, letterSpacing: "0.15em" }}
              >
                Depoimentos
              </span>
              <div className="h-px w-8" style={{ background: "rgba(253,248,243,0.4)" }} />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-cream)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
              }}
            >
              Histórias que{" "}
              <em style={{ color: "rgba(253,248,243,0.9)", fontStyle: "italic" }}>inspiram</em>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-7 rounded-2xl"
                style={{
                  background: "rgba(253,248,243,0.05)",
                  border: "1px solid rgba(253,248,243,0.08)",
                }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill="var(--vera-mei-gold)"
                      style={{ color: "var(--vera-mei-gold)" }}
                    />
                  ))}
                </div>
                <blockquote
                  className="text-sm leading-relaxed mb-6 italic"
                  style={{ color: "rgba(253,248,243,0.75)" }}
                >
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    style={{ border: "2px solid var(--vera-mei-wine)" }}
                  />
                  <div>
                    <div
                      className="text-sm"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "var(--vera-mei-cream)",
                        fontWeight: 600,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "rgba(253,248,243,0.5)" }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="py-24" style={{ background: "var(--vera-mei-light)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: "var(--vera-mei-gold)" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--vera-mei-gold)", fontWeight: 500, letterSpacing: "0.15em" }}
                >
                  Blog & Conteúdo
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--vera-mei-dark)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 600,
                }}
              >
                Conhecimento para{" "}
                <em style={{ color: "var(--vera-mei-wine)", fontStyle: "italic" }}>crescer</em>
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: "var(--vera-mei-wine)", fontWeight: 500 }}
              >
                Ver todos os artigos <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Posts preview removido - visite /blog para ver os posts */}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--vera-mei-wine) 0%, #441328 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "var(--vera-mei-sage)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ background: "var(--vera-mei-rose)" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: "rgba(253,248,243,0.4)" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "rgba(253,248,243,0.75)", fontWeight: 500, letterSpacing: "0.15em" }}
              >
                Comece Agora
              </span>
              <div className="h-px w-8" style={{ background: "rgba(253,248,243,0.4)" }} />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-cream)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Sua melhor versão começa{" "}
              <em style={{ color: "rgba(253,248,243,0.9)", fontStyle: "italic" }}>hoje</em>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed mb-10"
              style={{ color: "rgba(253,248,243,0.75)" }}
            >
              Junte-se a centenas de mulheres que já transformaram seus negócios e suas vidas com o suporte da comunidade Vera MEI.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:opacity-90 hover:scale-105"
                style={{
                  background: "var(--vera-mei-cream)",
                  color: "var(--vera-mei-wine)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                Entrar na Comunidade
                <ArrowRight size={18} />
              </a>
              <Link
                to="/contato"
                className="px-9 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:opacity-80"
                style={{
                  border: "1.5px solid rgba(253,248,243,0.35)",
                  color: "var(--vera-mei-cream)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              >
                Fale Conosco
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
