import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Users,
  BookOpen,
  Briefcase,
  Globe,
  Calendar,
  Video,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: BookOpen,
    title: "Mentorias",
    subtitle: "Orientação especializada 1:1 e em grupo",
    desc: "Sessões de mentoria com profissionais experientes que já percorreram o caminho que você deseja trilhar. Abordagem personalizada para suas necessidades e objetivos.",
    features: [
      "Mentorias individuais 1:1",
      "Grupos de mentoria temáticos",
      "Acompanhamento de metas",
      "Plano de ação personalizado",
      "Acesso ao network da mentora",
    ],
    color: "var(--vera-mei-wine)",
    highlight: true,
  },
  {
    icon: Video,
    title: "Capacitações",
    subtitle: "Trilhas de aprendizado práticas",
    desc: "Programas estruturados de capacitação em gestão, marketing, finanças, liderança e muito mais. Do básico ao avançado, no seu ritmo.",
    features: [
      "Mais de 50 cursos disponíveis",
      "Certificados reconhecidos",
      "Workshops ao vivo mensais",
      "Materiais exclusivos",
      "Comunidade de estudantes",
    ],
    color: "var(--vera-mei-rose)",
    highlight: false,
  },
  {
    icon: Briefcase,
    title: "Consultorias",
    subtitle: "Diagnóstico e estratégia para seu negócio",
    desc: "Análise profunda do seu negócio e desenvolvimento de estratégias personalizadas para superar desafios e acelerar o crescimento.",
    features: [
      "Diagnóstico completo do negócio",
      "Planejamento estratégico",
      "Análise financeira",
      "Posicionamento de marca",
      "Implementação assistida",
    ],
    color: "var(--vera-mei-gold)",
    highlight: false,
  },
  {
    icon: Users,
    title: "Networking",
    subtitle: "Conexões que transformam carreiras",
    desc: "Acesse uma rede exclusiva de mulheres empreendedoras, investidoras, parceiras e líderes de mercado. Porque seus próximos passos dependem das pessoas ao seu redor.",
    features: [
      "Encontros exclusivos mensais",
      "Grupos de interesse específico",
      "Conexões com investidoras",
      "Parcerias estratégicas",
      "Diretório de membros",
    ],
    color: "var(--vera-mei-muted)",
    highlight: false,
  },
  {
    icon: Globe,
    title: "Comunidade",
    subtitle: "Seu ecossistema de suporte",
    desc: "Uma comunidade vibrante e engajada onde você pode tirar dúvidas, celebrar conquistas, encontrar parceiras e se sentir parte de algo maior.",
    features: [
      "Grupo privado ativo",
      "Desafios e gamificação",
      "Biblioteca de recursos",
      "Suporte entre pares",
      "Celebração de conquistas",
    ],
    color: "#5f6f52",
    highlight: false,
  },
  {
    icon: Calendar,
    title: "Eventos",
    subtitle: "Experiências presenciais e online",
    desc: "Encontros, workshops, palestras e conferências que inspiram, conectam e impulsionam. Experiências memoráveis que transformam perspectivas.",
    features: [
      "Conferência anual Vera MEI",
      "Workshops mensais temáticos",
      "Meetups presenciais regionais",
      "Lives com especialistas",
      "Retiros de imersão",
    ],
    color: "#a24055",
    highlight: false,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Entendemos seu momento atual, seus objetivos e os desafios que enfrenta.",
  },
  {
    num: "02",
    title: "Personalização",
    desc: "Criamos um plano sob medida com os serviços e recursos ideais para você.",
  },
  {
    num: "03",
    title: "Implementação",
    desc: "Você aplica com suporte contínuo da nossa equipe e comunidade.",
  },
  {
    num: "04",
    title: "Transformação",
    desc: "Colhe os resultados e evolui para o próximo nível da sua jornada.",
  },
];

export function ServicesPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── HERO ── */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "var(--vera-mei-dark)" }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573165662973-4ab3cf3d3508?w=1920&h=800&fit=crop"
            alt="Serviços Vera MEI"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(26,15,19,0.98) 40%, rgba(107,48,80,0.5) 100%)",
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
                Serviços
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-cream)",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              Tudo que você precisa para{" "}
              <em style={{ color: "rgba(253,248,243,0.9)", fontStyle: "italic" }}>
                crescer
              </em>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed"
              style={{ color: "rgba(253,248,243,0.7)", maxWidth: "480px" }}
            >
              Do aprendizado ao networking, da mentoria à consultoria — oferecemos o suporte completo que sua jornada empreendedora merece.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24" style={{ background: "var(--vera-mei-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden group hover:scale-[1.01] transition-all duration-300"
                style={{
                  background: service.highlight ? service.color : "white",
                  border: service.highlight ? "none" : "1px solid var(--vera-mei-border)",
                  boxShadow: service.highlight
                    ? `0 12px 40px ${service.color}50`
                    : "0 2px 20px rgba(107,48,80,0.06)",
                }}
              >
                <div className="p-7">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: service.highlight
                        ? "rgba(253,248,243,0.15)"
                        : "var(--vera-mei-blush)",
                    }}
                  >
                    <service.icon
                      size={22}
                      style={{
                        color: service.highlight ? "var(--vera-mei-cream)" : service.color,
                      }}
                    />
                  </div>
                  <div
                    className="text-xs mb-1 tracking-wider uppercase"
                    style={{
                      color: service.highlight
                        ? "rgba(253,248,243,0.6)"
                        : "var(--vera-mei-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {service.subtitle}
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: service.highlight ? "var(--vera-mei-cream)" : "var(--vera-mei-dark)",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{
                      color: service.highlight
                        ? "rgba(253,248,243,0.75)"
                        : "var(--vera-mei-muted)",
                    }}
                  >
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          size={14}
                          style={{
                            color: service.highlight ? "var(--vera-mei-gold)" : service.color,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            color: service.highlight
                              ? "rgba(253,248,243,0.8)"
                              : "var(--vera-mei-muted)",
                          }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm transition-all hover:gap-3"
                    style={{
                      color: service.highlight ? "var(--vera-mei-gold)" : service.color,
                      fontWeight: 600,
                    }}
                  >
                    Saiba mais <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24" style={{ background: "var(--vera-mei-light)" }}>
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
                Como Funciona
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
              Sua jornada na{" "}
              <em style={{ color: "var(--vera-mei-wine)", fontStyle: "italic" }}>Vera MEI</em>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative p-6 rounded-2xl"
                style={{ background: "white", border: "1px solid var(--vera-mei-border)" }}
              >
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 -right-3 z-10"
                    style={{ color: "var(--vera-mei-blush)" }}
                  >
                    <ChevronRight size={20} />
                  </div>
                )}
                <div
                  className="text-3xl mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--vera-mei-blush)",
                    fontWeight: 700,
                    fontSize: "2.5rem",
                  }}
                >
                  {step.num}
                </div>
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--vera-mei-dark)",
                    fontWeight: 600,
                  }}
                >
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--vera-mei-muted)" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, var(--vera-mei-wine) 0%, #441328 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
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
                color: "var(--vera-mei-cream)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 600,
              }}
            >
              Pronta para começar?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm mb-8"
              style={{ color: "rgba(253,248,243,0.7)", lineHeight: 1.8 }}
            >
              Entre em contato e descubra qual serviço é ideal para o seu momento atual.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:opacity-90 hover:scale-105"
                style={{
                  background: "var(--vera-mei-cream)",
                  color: "var(--vera-mei-wine)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                Falar via WhatsApp <ArrowRight size={18} />
              </a>
              <Link
                to="/contato"
                className="px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:opacity-80"
                style={{
                  border: "1.5px solid rgba(253,248,243,0.35)",
                  color: "var(--vera-mei-cream)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              >
                Enviar Mensagem
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
