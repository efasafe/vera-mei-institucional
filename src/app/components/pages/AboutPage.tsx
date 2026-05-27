import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Heart, Target, Eye, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const values = [
  {
    icon: Heart,
    title: "Acolhimento",
    desc: "Acreditamos que cada mulher merece um espaço seguro para crescer sem julgamentos.",
  },
  {
    icon: Target,
    title: "Protagonismo",
    desc: "Incentivamos cada mulher a assumir o papel de autora da sua própria história.",
  },
  {
    icon: Eye,
    title: "Transparência",
    desc: "Construímos relações baseadas na honestidade e na comunicação aberta.",
  },
  {
    icon: Sparkles,
    title: "Excelência",
    desc: "Buscamos o mais alto padrão de qualidade em tudo que entregamos.",
  },
];

const impactNumbers = [
  { value: "500+", label: "Mulheres impactadas" },
  { value: "R$2M+", label: "Em negócios gerados" },
  { value: "98%", label: "Taxa de satisfação" },
  { value: "50+", label: "Eventos realizados" },
];

const milestones = [
  {
    year: "2020",
    title: "O início da jornada",
    desc: "A Vera MEI nasceu de uma conversa entre amigas empreendedoras que sentiam falta de um espaço verdadeiramente feito para mulheres.",
  },
  {
    year: "2021",
    title: "Primeiros 100 membros",
    desc: "Em menos de um ano, nossa comunidade cresceu para mais de 100 mulheres apaixonadas por empreendedorismo.",
  },
  {
    year: "2022",
    title: "Lançamento das mentorias",
    desc: "Estruturamos nosso programa de mentorias com especialistas renomadas do mercado brasileiro.",
  },
  {
    year: "2023",
    title: "Expansão nacional",
    desc: "A Vera MEI chegou a todas as regiões do Brasil, com membros em mais de 20 estados.",
  },
  {
    year: "2024",
    title: "Plataforma digital",
    desc: "Lançamos nossa plataforma digital completa, ampliando o acesso e os recursos disponíveis.",
  },
  {
    year: "2025",
    title: "500+ mulheres impactadas",
    desc: "Alcançamos a marca de 500 mulheres transformadas e milhões em negócios gerados pela nossa comunidade.",
  },
];

export function AboutPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── HERO ── */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "var(--vera-mei-dark)" }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=1920&h=800&fit=crop"
            alt="Vera MEI Team"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(26,15,19,0.98) 40%, rgba(107,48,80,0.7) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
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
                Sobre Nós
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-cream)",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
              className="mb-5"
            >
              A história por trás da{" "}
              <em style={{ color: "rgba(253,248,243,0.9)", fontStyle: "italic" }}>Vera MEI</em>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed"
              style={{ color: "rgba(253,248,243,0.7)", maxWidth: "500px" }}
            >
              Uma iniciativa nascida do coração de mulheres que acreditam no poder coletivo para transformar sonhos em realidade.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-24" style={{ background: "var(--vera-mei-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  Nossa História
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--vera-mei-dark)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                Nascemos da necessidade de{" "}
                <em style={{ color: "var(--vera-mei-wine)", fontStyle: "italic" }}>
                  pertencer
                </em>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-sm leading-relaxed mb-4" style={{ color: "var(--vera-mei-muted)", lineHeight: 1.9 }}>
                A Vera MEI surgiu em 2020, no meio de uma pandemia que isolou o mundo mas aproximou almas. Um grupo de mulheres empreendedoras começou a se reunir virtualmente para compartilhar desafios, aprendizados e, principalmente, esperança.
              </motion.p>
              <motion.p variants={fadeUp} className="text-sm leading-relaxed mb-4" style={{ color: "var(--vera-mei-muted)", lineHeight: 1.9 }}>
                O que começou como encontros informais tornou-se rapidamente uma força transformadora. Percebemos que o empreendedorismo feminino precisava de um espaço próprio — com linguagem, metodologia e energia que honrassem a singularidade da jornada de cada mulher.
              </motion.p>
              <motion.p variants={fadeUp} className="text-sm leading-relaxed" style={{ color: "var(--vera-mei-muted)", lineHeight: 1.9 }}>
                Hoje, a Vera MEI é esse espaço. Uma plataforma viva, em constante evolução, construída colaborativamente por e para mulheres que não aceitam limites impostos.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=500&fit=crop"
                      alt="Mentoria"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="rounded-2xl p-5"
                    style={{ background: "var(--vera-mei-wine)" }}
                  >
                    <div
                      className="text-2xl mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "var(--vera-mei-cream)",
                        fontWeight: 700,
                      }}
                    >
                      2020
                    </div>
                    <p className="text-xs" style={{ color: "rgba(253,248,243,0.75)" }}>
                      Ano de fundação da Vera MEI
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div
                    className="rounded-2xl p-5"
                    style={{ background: "var(--vera-mei-sage)" }}
                  >
                    <div
                      className="text-2xl mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "var(--vera-mei-cream)",
                        fontWeight: 700,
                      }}
                    >
                      500+
                    </div>
                    <p className="text-xs" style={{ color: "rgba(255,249,249,0.8)" }}>
                      Vidas transformadas
                    </p>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=400&h=500&fit=crop"
                      alt="Comunidade"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION VISION VALUES ── */}
      <section className="py-24" style={{ background: "var(--vera-mei-light)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-dark)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
              }}
            >
              O que nos{" "}
              <em style={{ color: "var(--vera-mei-wine)", fontStyle: "italic" }}>move</em>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                label: "Missão",
                icon: Target,
                text: "Empoderar mulheres empreendedoras a alcançar liberdade financeira e impacto social através de comunidade, mentoria e educação de excelência.",
                bg: "var(--vera-mei-wine)",
              },
              {
                label: "Visão",
                icon: Eye,
                text: "Ser a maior e mais impactante plataforma de empreendedorismo feminino do Brasil, onde cada mulher encontra o suporte necessário para realizar seu potencial máximo.",
                bg: "var(--vera-mei-rose)",
              },
              {
                label: "Propósito",
                icon: Sparkles,
                text: "Provar que quando mulheres se unem e se apoiam, são capazes de transformar não apenas seus negócios, mas o mundo ao redor.",
                bg: "var(--vera-mei-sage)",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-8 rounded-2xl text-center"
                style={{
                  background: item.bg,
                  boxShadow: `0 8px 30px ${item.bg}40`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(253,248,243,0.15)" }}
                >
                  <item.icon size={24} style={{ color: "var(--vera-mei-cream)" }} />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--vera-mei-cream)",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(253,248,243,0.8)",
                  }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeUp}
              className="text-center mb-10"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-dark)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 600,
              }}
            >
              Nossos Valores
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-6 rounded-2xl"
                  style={{
                    background: "white",
                    border: "1px solid var(--vera-mei-border)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "var(--vera-mei-blush)" }}
                  >
                    <v.icon size={18} style={{ color: "var(--vera-mei-wine)" }} />
                  </div>
                  <h4
                    className="mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--vera-mei-dark)",
                      fontWeight: 600,
                    }}
                  >
                    {v.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--vera-mei-muted)" }}>
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="py-20" style={{ background: "var(--vera-mei-wine)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactNumbers.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--vera-mei-cream)",
                    fontWeight: 700,
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  }}
                >
                  {item.value}
                </div>
                <div className="text-sm mt-1" style={{ color: "rgba(253,248,243,0.65)" }}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24" style={{ background: "var(--vera-mei-cream)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-dark)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 600,
              }}
            >
              Nossa{" "}
              <em style={{ color: "var(--vera-mei-wine)", fontStyle: "italic" }}>trajetória</em>
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: "var(--vera-mei-border)" }}
            />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`relative flex gap-8 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-1.5"
                    style={{ background: "var(--vera-mei-wine)", border: "3px solid var(--vera-mei-cream)" }}
                  />
                  {/* Spacer for md */}
                  <div className="hidden md:block md:w-1/2" />
                  {/* Content */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"
                    }`}
                  >
                    <span
                      className="text-xs tracking-widest"
                      style={{ color: "var(--vera-mei-gold)", fontWeight: 600, letterSpacing: "0.1em" }}
                    >
                      {m.year}
                    </span>
                    <h4
                      className="mt-1 mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "var(--vera-mei-dark)",
                        fontWeight: 600,
                        fontSize: "1rem",
                      }}
                    >
                      {m.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--vera-mei-muted)" }}>
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 text-center"
        style={{ background: "var(--vera-mei-light)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-dark)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 600,
              }}
            >
              Faça parte dessa{" "}
              <em style={{ color: "var(--vera-mei-wine)", fontStyle: "italic" }}>história</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm mb-8" style={{ color: "var(--vera-mei-muted)", lineHeight: 1.8 }}>
              A próxima capítulo da Vera MEI tem o seu nome. Junte-se à nossa comunidade e comece sua transformação hoje.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all hover:opacity-90 hover:scale-105"
                style={{
                  background: "var(--vera-mei-wine)",
                  color: "var(--vera-mei-cream)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                }}
              >
                Quero Participar <ArrowRight size={16} />
              </a>
              <Link
                to="/servicos"
                className="px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all hover:opacity-80"
                style={{
                  border: "1.5px solid var(--vera-mei-wine)",
                  color: "var(--vera-mei-wine)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                }}
              >
                Ver Nossos Serviços
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
