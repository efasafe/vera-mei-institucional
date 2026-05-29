import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Star,
  Heart,
  CheckCircle2,
  Target,
  Sparkles,
  Rocket,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const journeySteps = [
  {
    number: "1",
    title: "Escuta",
    description:
      "Desabafe sem medo. Traga todos os seus desafios com relação ao financeiro e contabilidade da empresa. Aqui você pode ser sincera, sem julgamento.",
    icon: Heart,
    emoji: "💜",
  },
  {
    number: "2",
    title: "Diagnóstico",
    description:
      "Categorizamos cada desafio e criamos um plano de ação personalizado para resolver pendências e construir sua jornada de crescimento sustentável.",
    icon: Target,
    emoji: "🎯",
  },
  {
    number: "3",
    title: "Match perfeito",
    description:
      "Conectamos você ao plano e à contabilidade ideal para o seu momento e necessidades.",
    icon: Sparkles,
    emoji: "✨",
  },
  {
    number: "4",
    title: "Assessoria ativa",
    description:
      "Sua contabilidade funciona, suas obrigações em dia, seu CNPJ protegido.",
    icon: Rocket,
    emoji: "🚀",
  },
];

const testimonials = [
  {
    name: "Simone Cardoso",
    role: "Doces artesanais · SP",
    quote:
      "Eu devia 3 anos de DAS e achei que ia perder meu CNPJ. A Vera me disse que ainda tinha solução e me guiou em cada passo. Hoje estou em dia e cresci 40% esse ano.",
    rating: 5,
    initials: "SC",
    featured: true,
  },
  {
    name: "Maria Paula",
    role: "Costureira · MG",
    quote:
      "Finalmente entendo o que é DAS, CNAE e tudo mais. A Vera explica sem me tratar como burra.",
    rating: 5,
    initials: "MP",
  },
  {
    name: "Renata Lima",
    role: "Estética · RJ",
    quote:
      "Chorei na primeira conversa. Finalmente alguém entendeu minha situação sem me julgar.",
    rating: 5,
    initials: "RL",
  },
  {
    name: "Fernanda Silva",
    role: "Pet shop · RS",
    quote:
      "Suporte via WhatsApp que responde de verdade. Parece que tem uma contadora amiga do meu lado.",
    rating: 5,
    initials: "FS",
  },
];

export function HomePage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── HERO ── */}
      <section
        id="inicio"
        className="grid lg:grid-cols-2"
        style={{ minHeight: "88vh", overflow: "hidden" }}
      >
        {/* Left Side */}
        <div
          className="px-12 py-20 flex flex-col justify-center relative"
          style={{ background: "#FDF6EE" }}
        >
          <div
            className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] pointer-events-none"
            style={{
              background: "radial-gradient(circle, #F4C0D1 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7"
              style={{
                background: "#FBEAF0",
                color: "#D4537E",
                fontSize: "0.8rem",
                fontWeight: 500,
                border: "1px solid #F4C0D1",
              }}
            >
              <span>✦</span>
              Contabilidade amiga da empreendedora
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 3.6rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                color: "#4B1528",
              }}
            ><br /><br />finalmente uma contabilidade que <em style={{ color: "#D85A30", fontStyle: "italic" }}>te entende</em></motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg mb-10"
              style={{
                color: "#2C2C2A",
                opacity: 0.75,
                lineHeight: 1.7,
                maxWidth: "420px",
              }}
            >
              A Vera MEI conecta você ao ecossistema contábil e financeiro que fala a sua língua — com empatia, sem julgamento, sem enrolação.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-5 flex-wrap mb-8"
            >
              <Link
                to="/login"
                className="px-8 py-4 rounded-full transition-all hover:scale-105"
                style={{
                  background: "#D4537E",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >Iniciar jornada</Link>
              <button
                className="px-8 py-4 rounded-full transition-all hover:border-[#D4537E] hover:text-[#D4537E]"
                style={{
                  background: "transparent",
                  color: "#2C2C2A",
                  border: "1.5px solid #ddd",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                Ver como funciona
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <div className="flex">
                <span
                  className="w-[34px] h-[34px] rounded-full border-2 border-white flex items-center justify-center text-xs font-bold"
                  style={{ background: "#F4C0D1", color: "#4B1528" }}
                >
                  A
                </span>
                <span
                  className="w-[34px] h-[34px] rounded-full border-2 border-white flex items-center justify-center text-xs font-bold -ml-2"
                  style={{ background: "#FAECE7", color: "#993C1D" }}
                >
                  M
                </span>
                <span
                  className="w-[34px] h-[34px] rounded-full border-2 border-white flex items-center justify-center text-xs font-bold -ml-2"
                  style={{ background: "#D4537E", color: "#fff" }}
                >
                  R
                </span>
              </div>
              <p className="text-sm" style={{ color: "#2C2C2A", opacity: 0.7 }}>
                <strong style={{ color: "#D4537E", opacity: 1, fontWeight: 600 }}>
                  +3.200 empreendedoras
                </strong>{" "}
                já organizaram as contas
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Chat Card */}
        <div
          className="flex items-center justify-center relative overflow-hidden p-12"
          style={{ background: "#D4537E" }}
        >
          <div
            className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div
            className="absolute bottom-[-100px] left-[-80px] w-[300px] h-[300px] rounded-full"
            style={{ background: "rgba(0,0,0,0.06)" }}
          />

          <div
            className="absolute top-20 right-8 px-4 py-2 rounded-xl text-sm font-semibold z-10"
            style={{
              background: "#fff",
              color: "#4B1528",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          >
            ✦ Sem julgamento
          </div>
          <div
            className="absolute bottom-24 left-5 px-4 py-2 rounded-xl text-sm font-semibold z-10"
            style={{
              background: "#fff",
              color: "#4B1528",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          >
            💜 Fala a sua língua
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 w-full max-w-[340px] relative z-20"
            style={{ boxShadow: "0 40px 80px rgba(75,21,40,0.25)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: "#FBEAF0",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  color: "#D4537E",
                }}
              >
                V
              </div>
              <div>
                <h4 className="text-sm font-semibold" style={{ color: "#2C2C2A" }}>
                  Vera MEI
                </h4>
                <p className="text-xs flex items-center" style={{ color: "#888780" }}>
                  <span
                    className="inline-block w-2 h-2 rounded-full mr-1"
                    style={{ background: "#4CAF50" }}
                  />
                  Online agora
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl rounded-bl-sm px-4 py-3 mb-3 text-sm"
              style={{ background: "#F5F5F0", color: "#2C2C2A", lineHeight: 1.5 }}
            >
              "Oi! Vi que você tem uma dívida com a Receita. Isso tem solução — e a gente resolve junto. 💕"
            </div>

            <div
              className="rounded-2xl rounded-br-sm px-4 py-3 mb-3 text-sm text-right"
              style={{ background: "#D4537E", color: "#fff", lineHeight: 1.5 }}
            >
              "Eu tenho medo de perder meu CNPJ..."
            </div>

            <div
              className="rounded-2xl rounded-bl-sm px-4 py-3 mb-4 text-sm"
              style={{ background: "#F5F5F0", color: "#2C2C2A", lineHeight: 1.5 }}
            >
              "Entendo completamente. Mas enquanto houver <em style={{ fontStyle: "italic", opacity: 0.9 }}>1% de chance, há solução</em>. Vamos ver suas opções?"
            </div>

            <Link
              to="/login"
              className="w-full py-3 rounded-full text-center block transition-all hover:opacity-90"
              style={{
                background: "#D4537E",
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              Falar com a Vera
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div
        className="py-5 px-12 flex items-center justify-center gap-12 flex-wrap"
        style={{ background: "#2C2C2A" }}
      >
        {[
          "Sem burocracia",
          "Assessoria completa",
          "Contabilidade digital",
          "Suporte humanizado",
          "Para MEIs de todo o Brasil",
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm"
            style={{ color: "#fff", opacity: 0.8 }}
          >
            <span style={{ opacity: 0.5, fontSize: "1.1rem" }}>✓</span>
            {item}
          </div>
        ))}
      </div>

      {/* ── COMO FUNCIONA ── */}
      <section id="como-funciona" className="py-28 px-12" style={{ background: "#fff" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase mb-3"
            style={{ color: "#D4537E", letterSpacing: "2px" }}
          >
            Jornada simples
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.8rem",
              fontWeight: 900,
              color: "#4B1528",
              lineHeight: 1.15,
            }}
          >
            De perdida a <em style={{ color: "#D85A30", fontStyle: "italic" }}>dona</em> do negócio
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base mb-16"
            style={{
              color: "#2C2C2A",
              opacity: 0.7,
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Em 4 passos, você sai do caos financeiro e assume o controle da sua empresa.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-3xl p-8 relative overflow-hidden"
                style={{ background: "#FDF6EE" }}
              >
                <div
                  className="absolute top-[-10px] right-4 text-[5rem] opacity-[0.12]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    color: "#D4537E",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: "#FBEAF0" }}
                >
                  {step.emoji}
                </div>
                <h3
                  className="font-semibold mb-2 text-[20px]"
                  style={{ color: "#4B1528" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#2C2C2A", opacity: 0.7, lineHeight: 1.6 }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Link
              to="/login"
              className="px-10 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:opacity-90"
              style={{
                background: "#D4537E",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Quero iniciar a minha jornada agora
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── PARA QUEM ── */}
      <section
        id="para-quem"
        className="py-28 px-12 relative overflow-hidden"
        style={{ background: "#4B1528" }}
      >
        <div
          className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full"
          style={{ background: "rgba(255,255,255,0.04)" }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase mb-3"
            style={{ color: "#F4C0D1", letterSpacing: "2px" }}
          >
            Para quem é a Vera
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.8rem",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.15,
              maxWidth: "600px",
            }}
          >
            Você se reconhece <em style={{ color: "#F4C0D1", fontStyle: "italic" }}>aqui?</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base mb-16"
            style={{
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            A Vera foi criada para quem está cansada de sentir vergonha da própria situação financeira.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                emoji: "😰",
                title: "Perdida na contabilidade",
                desc: "DAS, IRPF, CNPJ, DEFIS... tudo parece um idioma diferente. A Vera traduz tudo.",
              },
              {
                emoji: "🙈",
                title: "Medo das consequências",
                desc: "Multa, bloqueio, perda do CNPJ. O medo paralisa, mas ignorar só piora.",
              },
              {
                emoji: "💸",
                title: "Dívida sem conversa",
                desc: "Empreendedora sem dívida é empreendedora sem história. A Vera escuta sem filtro.",
              },
            ].map((dor, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-3xl p-7 transition-all hover:bg-white/12"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="text-3xl mb-4">{dor.emoji}</div>
                <h3 className="text-base font-semibold mb-2" style={{ color: "#fff" }}>
                  {dor.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}
                >
                  {dor.desc}
                </p>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              className="col-span-full rounded-3xl p-10 flex items-center gap-8 flex-wrap"
              style={{ background: "#D4537E" }}
            >
              <blockquote
                className="flex-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  color: "#fff",
                  lineHeight: 1.4,
                }}
              >
                "Ou você domina o monstro, ou é dominado por ele."
                <cite
                  className="block mt-2 text-sm not-italic"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  — Filosofia da Vera MEI
                </cite>
              </blockquote>
              <Link
                to="/login"
                className="px-8 py-4 rounded-full transition-all hover:opacity-90 whitespace-nowrap"
                style={{
                  background: "#fff",
                  color: "#993C1D",
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                Quero dominar →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section id="depoimentos" className="py-28 px-12" style={{ background: "#fff" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase mb-3"
            style={{ color: "#D4537E", letterSpacing: "2px" }}
          >
            Histórias reais
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.8rem",
              fontWeight: 900,
              color: "#4B1528",
              lineHeight: 1.15,
            }}
          >
            Empreendedoras que <em style={{ color: "#D85A30", fontStyle: "italic" }}>dominaram</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base mb-12"
            style={{ color: "#2C2C2A", opacity: 0.7, lineHeight: 1.7 }}
          >
            Nada de texto inventado. Experiências de quem passou pelo mesmo que você.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`rounded-3xl p-8 ${
                  t.featured ? "col-span-full md:col-span-2" : ""
                }`}
                style={{
                  background: t.featured ? "#4B1528" : "#FDF6EE",
                }}
              >
                <div
                  className="mb-4"
                  style={{
                    color: "#EF9F27",
                    fontSize: "0.9rem",
                    letterSpacing: "2px",
                  }}
                >
                  ★★★★★
                </div>
                <p
                  className="mb-5"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: t.featured ? "1.1rem" : "1rem",
                    lineHeight: 1.6,
                    color: t.featured ? "rgba(255,255,255,0.9)" : "#2C2C2A",
                  }}
                >
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: t.featured
                        ? "rgba(255,255,255,0.15)"
                        : i === 1
                        ? "#D85A30"
                        : i === 2
                        ? "#3C3489"
                        : "#D4537E",
                      color: t.featured ? "#F4C0D1" : "#fff",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: t.featured ? "#F4C0D1" : "#4B1528" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: t.featured ? "rgba(255,255,255,0.5)" : "#888780",
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        className="py-28 px-12 grid lg:grid-cols-2 gap-16 items-center relative overflow-hidden"
        style={{ background: "#D85A30" }}
      >
        <div
          className="absolute right-[-2rem] bottom-[-4rem] text-[20rem] pointer-events-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "rgba(255,255,255,0.06)",
            lineHeight: 1,
          }}
        >
          ✦
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase mb-3"
            style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "2px" }}
          >
            Comece hoje
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3rem",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            Enquanto houver <em style={{ color: "#FAEEDA", fontStyle: "italic" }}>1%</em> de chance, há solução.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base mb-8"
            style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}
          >
            Não espere a dívida crescer. Não espere o medo paralisar. A Vera está aqui, sem julgamento, pronta para caminhar com você.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
            <Link
              to="/login"
              className="px-8 py-4 rounded-full transition-all hover:opacity-90"
              style={{
                background: "#fff",
                color: "#993C1D",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Falar com a Vera agora →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-6 relative z-10"
        >
          {[
            { num: "3.200+", label: "empreendedoras atendidas" },
            { num: "92%", label: "regularizaram a situação fiscal" },
            { num: "4.9★", label: "avaliação média das usuárias" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
