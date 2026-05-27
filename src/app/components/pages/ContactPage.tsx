import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Send, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const contactMethods = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 (00) 00000-0000",
    action: "https://wa.me/5500000000000",
    isWhatsApp: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@ella.com.br",
    action: "mailto:contato@ella.com.br",
    isWhatsApp: false,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Brasil — Online e Presencial",
    action: "#",
    isWhatsApp: false,
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "@ella.empreende" },
  { icon: Linkedin, href: "#", label: "Vera MEI Empreendedorismo" },
  { icon: Youtube, href: "#", label: "Canal Vera MEI" },
];

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.875rem",
    color: "var(--vera-mei-dark)",
    background: "var(--vera-mei-light)",
    border: "1px solid var(--vera-mei-border)",
    borderRadius: "0.75rem",
    padding: "0.875rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
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
                Contato
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
              Vamos{" "}
              <em style={{ color: "rgba(253,248,243,0.9)", fontStyle: "italic" }}>
                conversar
              </em>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base"
              style={{ color: "rgba(253,248,243,0.65)", lineHeight: 1.7 }}
            >
              Estamos aqui para tirar suas dúvidas, apresentar nossos serviços e te ajudar a dar o próximo passo.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20" style={{ background: "var(--vera-mei-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Methods */}
              <div>
                <motion.h2
                  variants={fadeUp}
                  className="mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--vera-mei-dark)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  Canais de Atendimento
                </motion.h2>
                <div className="space-y-4">
                  {contactMethods.map((method, i) => (
                    <motion.a
                      key={i}
                      variants={fadeUp}
                      href={method.action}
                      target={method.action.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.01]"
                      style={{
                        background: "white",
                        border: "1px solid var(--vera-mei-border)",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: method.isWhatsApp ? "#E8F8EE" : "var(--vera-mei-blush)",
                        }}
                      >
                        {method.isWhatsApp ? (
                          <span style={{ color: "#25D366" }}>
                            <WhatsAppIcon />
                          </span>
                        ) : (
                          <method.icon
                            size={18}
                            style={{ color: "var(--vera-mei-wine)" }}
                          />
                        )}
                      </div>
                      <div>
                        <div
                          className="text-xs mb-0.5"
                          style={{ color: "var(--vera-mei-muted)", fontWeight: 500 }}
                        >
                          {method.label}
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "var(--vera-mei-dark)", fontWeight: 500 }}
                        >
                          {method.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                variants={fadeUp}
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-2xl transition-all hover:scale-[1.01]"
                style={{
                  background: "#25D366",
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <span style={{ color: "white" }}>
                    <WhatsAppIcon />
                  </span>
                </div>
                <div>
                  <div
                    className="text-sm mb-0.5"
                    style={{
                      color: "white",
                      fontWeight: 700,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Atendimento Rápido
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.85)" }}>
                    Resposta em até 2 horas nos dias úteis
                  </div>
                </div>
              </motion.a>

              {/* Social Links */}
              <motion.div variants={fadeUp}>
                <h3
                  className="mb-4 text-sm uppercase tracking-wider"
                  style={{
                    color: "var(--vera-mei-muted)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                  }}
                >
                  Redes Sociais
                </h3>
                <div className="space-y-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-3 text-sm transition-all hover:opacity-70"
                      style={{ color: "var(--vera-mei-dark)", textDecoration: "none" }}
                    >
                      <Icon size={18} style={{ color: "var(--vera-mei-wine)" }} />
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "white",
                  border: "1px solid var(--vera-mei-border)",
                  boxShadow: "0 4px 30px rgba(107,48,80,0.08)",
                }}
              >
                {submitted ? (
                  <div className="py-12 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: "var(--vera-mei-blush)" }}
                    >
                      <CheckCircle2 size={32} style={{ color: "var(--vera-mei-wine)" }} />
                    </div>
                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "var(--vera-mei-dark)",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                      }}
                    >
                      Mensagem enviada!
                    </h3>
                    <p className="text-sm" style={{ color: "var(--vera-mei-muted)", lineHeight: 1.8 }}>
                      Obrigada pelo contato. Nossa equipe retornará em até 24 horas nos dias úteis.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", whatsapp: "", subject: "", message: "", interest: "" }); }}
                      className="mt-6 text-sm"
                      style={{ color: "var(--vera-mei-wine)", fontWeight: 500 }}
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <>
                    <h2
                      className="mb-6"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "var(--vera-mei-dark)",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                      }}
                    >
                      Envie sua mensagem
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs mb-1.5" style={{ color: "var(--vera-mei-muted)", fontWeight: 500 }}>
                            Nome completo *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Seu nome"
                            value={formState.name}
                            onChange={handleChange}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label className="block text-xs mb-1.5" style={{ color: "var(--vera-mei-muted)", fontWeight: 500 }}>
                            E-mail *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="seu@email.com"
                            value={formState.email}
                            onChange={handleChange}
                            style={inputStyle}
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs mb-1.5" style={{ color: "var(--vera-mei-muted)", fontWeight: 500 }}>
                            WhatsApp
                          </label>
                          <input
                            type="tel"
                            name="whatsapp"
                            placeholder="(00) 00000-0000"
                            value={formState.whatsapp}
                            onChange={handleChange}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label className="block text-xs mb-1.5" style={{ color: "var(--vera-mei-muted)", fontWeight: 500 }}>
                            Interesse
                          </label>
                          <select
                            name="interest"
                            value={formState.interest}
                            onChange={handleChange}
                            style={inputStyle}
                          >
                            <option value="">Selecione...</option>
                            <option value="mentoria">Mentoria</option>
                            <option value="capacitacao">Capacitação</option>
                            <option value="consultoria">Consultoria</option>
                            <option value="comunidade">Comunidade</option>
                            <option value="evento">Evento</option>
                            <option value="outro">Outro</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs mb-1.5" style={{ color: "var(--vera-mei-muted)", fontWeight: 500 }}>
                          Assunto *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          placeholder="Sobre o que deseja falar?"
                          value={formState.subject}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label className="block text-xs mb-1.5" style={{ color: "var(--vera-mei-muted)", fontWeight: 500 }}>
                          Mensagem *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          placeholder="Conte mais sobre você e como podemos ajudá-la..."
                          value={formState.message}
                          onChange={handleChange}
                          style={{ ...inputStyle, resize: "vertical" }}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 rounded-full flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-70"
                        style={{
                          background: "var(--vera-mei-wine)",
                          color: "var(--vera-mei-cream)",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          <>
                            <Send size={16} />
                            Enviar Mensagem
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
