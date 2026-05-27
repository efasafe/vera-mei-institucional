import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const faqCategories = [
  {
    category: "Sobre a Vera MEI",
    questions: [
      {
        q: "O que é a Vera MEI e como ela surgiu?",
        a: "A Vera MEI é uma plataforma de empreendedorismo feminino que surgiu em 2020 de um encontro entre mulheres empreendedoras que sentiam falta de um espaço criado especificamente para suas necessidades. Oferecemos mentoria, capacitação, networking e comunidade para mulheres que desejam construir e escalar seus negócios.",
      },
      {
        q: "Para quem é a Vera MEI?",
        a: "A Vera MEI é para toda mulher que empreende ou deseja empreender — seja você uma iniciante querendo dar os primeiros passos, uma empreendedora em crescimento buscando escalar, ou uma CEO consolidada que quer se conectar com outras líderes. Não importa o estágio do seu negócio, você encontrará valor em nossa comunidade.",
      },
      {
        q: "A Vera MEI é apenas online?",
        a: "Temos tanto recursos digitais quanto eventos presenciais. Nossa plataforma e comunidade são 100% online, mas realizamos meetups regionais e nossa conferência anual de forma presencial em várias cidades do Brasil.",
      },
    ],
  },
  {
    category: "Participação e Comunidade",
    questions: [
      {
        q: "Como posso participar da comunidade Vera MEI?",
        a: "É simples! Entre em contato conosco pelo WhatsApp ou pelo formulário de contato no site. Nossa equipe fará uma breve conversa de boas-vindas para entender seu perfil e objetivos, e então te guiará para os recursos mais adequados para você.",
      },
      {
        q: "Existe algum processo seletivo para entrar?",
        a: "Não temos um processo seletivo rígido, mas fazemos uma conversa inicial para garantir que você esteja no lugar certo. Queremos que cada membro tire o máximo da Vera MEI, então é importante entender seu momento e objetivos.",
      },
      {
        q: "Posso participar se ainda não tenho um negócio?",
        a: "Absolutamente! Muitas das nossas membros chegaram à Vera MEI com a ideia do negócio na cabeça e encontraram aqui o suporte e o conhecimento para tirar do papel. Temos recursos específicos para quem está no início da jornada.",
      },
      {
        q: "Como funciona a comunidade após entrar?",
        a: "Nossa comunidade acontece principalmente em um grupo privado onde são compartilhados conteúdos exclusivos, desafios, perguntas e celebrações. Além disso, você terá acesso a workshops ao vivo, mentorias em grupo e eventos temáticos mensais.",
      },
    ],
  },
  {
    category: "Serviços e Mentorias",
    questions: [
      {
        q: "Como funcionam as mentorias?",
        a: "Oferecemos dois formatos: mentorias individuais 1:1 com duração de 60 a 90 minutos, onde a pauta é inteiramente focada nos seus desafios; e grupos de mentoria temáticos com 5 a 8 participantes em sessões quinzenais. Em ambos os casos, você escolhe uma mentora alinhada com sua área e objetivos.",
      },
      {
        q: "Quais temas são abordados nas capacitações?",
        a: "Nossa biblioteca de capacitações cobre: gestão financeira, marketing digital, vendas e negociação, liderança e gestão de equipes, branding e posicionamento, produtividade, bem-estar para empreendedoras, e muito mais. O catálogo é atualizado constantemente.",
      },
      {
        q: "Posso contratar uma consultoria pontal sem ser membro?",
        a: "Sim! Nossas consultorias estão disponíveis para não-membros também, com foco em diagnóstico de negócio, planejamento estratégico e questões específicas. Entre em contato para saber mais sobre disponibilidade e investimento.",
      },
    ],
  },
  {
    category: "Investimento e Planos",
    questions: [
      {
        q: "Qual é o investimento para participar da Vera MEI?",
        a: "Temos diferentes modelos de participação, desde acesso à comunidade básica até programas premium com mentoria e consultoria incluídos. Para saber os valores atualizados e qual plano faz mais sentido para você, entre em contato pelo WhatsApp — nossa equipe será transparente sobre todos os valores.",
      },
      {
        q: "Existe garantia ou política de reembolso?",
        a: "Sim. Oferecemos uma garantia de 7 dias para os principais programas. Se nos primeiros 7 dias você sentir que o programa não atende às suas expectativas, fazemos o reembolso integral sem perguntas.",
      },
      {
        q: "Existem bolsas ou condições especiais?",
        a: "Temos um programa de bolsas parciais para empreendedoras em situação de vulnerabilidade financeira que demonstrem potencial e comprometimento. Também realizamos parcerias com empresas e instituições para ampliar o acesso. Consulte-nos para saber as condições atuais.",
      },
    ],
  },
  {
    category: "Contato e Suporte",
    questions: [
      {
        q: "Qual é o melhor canal para entrar em contato?",
        a: "O canal mais rápido é o WhatsApp Business. Você também pode nos enviar um e-mail pelo formulário de contato no site. Nossa equipe responde em até 24 horas nos dias úteis.",
      },
      {
        q: "Tenho uma dúvida que não está aqui. Como posso tirar?",
        a: "Sem problemas! Entre em contato diretamente pelo WhatsApp ou pelo formulário de contato. Nossa equipe está pronta para responder qualquer questão que você tiver.",
      },
    ],
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="border-b last:border-0"
      style={{ borderColor: "var(--vera-mei-border)" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left transition-colors hover:opacity-80"
      >
        <span
          className="text-sm leading-relaxed"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: isOpen ? "var(--vera-mei-wine)" : "var(--vera-mei-dark)",
            fontWeight: isOpen ? 500 : 400,
          }}
        >
          {q}
        </span>
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{
            background: isOpen ? "var(--vera-mei-wine)" : "var(--vera-mei-blush)",
            color: isOpen ? "var(--vera-mei-cream)" : "var(--vera-mei-wine)",
          }}
        >
          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="text-sm leading-relaxed pb-5 pr-8"
              style={{ color: "var(--vera-mei-muted)", lineHeight: 1.85 }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── HERO ── */}
      <section
        className="pt-40 pb-20"
        style={{
          background:
            "linear-gradient(160deg, var(--vera-mei-dark) 0%, #441328 100%)",
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
                Perguntas Frequentes
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
              Como podemos{" "}
              <em style={{ color: "rgba(253,248,243,0.9)", fontStyle: "italic" }}>
                ajudá-la?
              </em>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base"
              style={{ color: "rgba(253,248,243,0.65)", lineHeight: 1.7 }}
            >
              Reunimos as dúvidas mais comuns sobre a Vera MEI. Não encontrou o que procura? Entre em contato diretamente.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ CONTENT ── */}
      <section className="py-20" style={{ background: "var(--vera-mei-cream)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {faqCategories.map((cat, ci) => (
              <motion.div
                key={ci}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h2
                  className="mb-2 pb-4 border-b"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--vera-mei-wine)",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    borderColor: "var(--vera-mei-blush)",
                  }}
                >
                  {cat.category}
                </h2>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "white",
                    border: "1px solid var(--vera-mei-border)",
                  }}
                >
                  <div className="px-6">
                    {cat.questions.map((item, qi) => {
                      const key = `${ci}-${qi}`;
                      return (
                        <FAQItem
                          key={key}
                          q={item.q}
                          a={item.a}
                          isOpen={!!openItems[key]}
                          onToggle={() => toggle(key)}
                        />
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ── */}
      <section
        className="py-20"
        style={{ background: "var(--vera-mei-light)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "var(--vera-mei-blush)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--vera-mei-wine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-dark)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
              }}
            >
              Ainda tem dúvidas?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm mb-8"
              style={{ color: "var(--vera-mei-muted)", lineHeight: 1.8 }}
            >
              Nossa equipe está pronta para responder qualquer pergunta. Entre em contato e responderemos em até 24 horas.
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
                WhatsApp <ArrowRight size={16} />
              </a>
              <Link
                to="/contato"
                className="px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all hover:opacity-80"
                style={{
                  border: "1.5px solid var(--vera-mei-wine)",
                  color: "var(--vera-mei-wine)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                }}
              >
                Formulário de Contato
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
