import { Link } from "react-router";
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logoImg from "../../imports/image.png";

const footerLinks = {
  institucional: [
    { label: "Sobre a Vera MEI", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contato", href: "/contato" },
  ],
  servicos: [
    { label: "Mentorias", href: "/servicos" },
    { label: "Capacitações", href: "/servicos" },
    { label: "Consultorias", href: "/servicos" },
    { label: "Networking", href: "/servicos" },
    { label: "Eventos", href: "/servicos" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--vera-mei-dark)", color: "var(--vera-mei-cream)" }}>
      {/* CTA Strip */}
      <div
        className="py-12 px-6"
        style={{
          background:
            "linear-gradient(135deg, var(--vera-mei-wine) 0%, #441328 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl mb-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--vera-mei-cream)",
              }}
            >
              Pronta para transformar sua trajetória?
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(253,248,243,0.75)", fontSize: "0.9rem" }}>
              Junte-se a centenas de mulheres que já fazem parte da comunidade Vera MEI.
            </p>
          </div>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full whitespace-nowrap transition-all hover:opacity-90 hover:scale-105 active:scale-95"
            style={{
              background: "var(--vera-mei-cream)",
              color: "var(--vera-mei-wine)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Entrar na Comunidade
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoImg}
                alt="Vera MEI"
                className="w-10 h-10 object-contain"
                style={{ mixBlendMode: "screen", filter: "brightness(1.1)" }}
              />
              <span
                className="text-xl tracking-widest"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--vera-mei-cream)",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                }}
              >
                Vera MEI
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(253,248,243,0.6)",
              }}
            >
              Empoderando mulheres empreendedoras a alcançarem seu máximo potencial através de comunidade, mentoria e conhecimento.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "rgba(253,248,243,0.1)",
                    color: "rgba(253,248,243,0.7)",
                    border: "1px solid rgba(253,248,243,0.1)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h4
              className="text-sm mb-5 tracking-wider uppercase"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "var(--vera-mei-gold)",
                fontWeight: 600,
              }}
            >
              Institucional
            </h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors hover:opacity-100"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(253,248,243,0.6)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4
              className="text-sm mb-5 tracking-wider uppercase"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "var(--vera-mei-gold)",
                fontWeight: 600,
              }}
            >
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors hover:opacity-100"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(253,248,243,0.6)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4
              className="text-sm mb-5 tracking-wider uppercase"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "var(--vera-mei-gold)",
                fontWeight: 600,
              }}
            >
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} style={{ color: "var(--vera-mei-rose)", marginTop: 2 }} />
                <a
                  href="mailto:contato@ella.com.br"
                  className="text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(253,248,243,0.6)" }}
                >
                  contato@ella.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} style={{ color: "var(--vera-mei-rose)", marginTop: 2 }} />
                <a
                  href="https://wa.me/5500000000000"
                  className="text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(253,248,243,0.6)" }}
                >
                  +55 (00) 00000-0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} style={{ color: "var(--vera-mei-rose)", marginTop: 2 }} />
                <span
                  className="text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(253,248,243,0.6)" }}
                >
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "rgba(253,248,243,0.08)" }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(253,248,243,0.35)",
            }}
          >
            © {new Date().getFullYear()} Vera MEI — Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {["Privacidade", "Termos de Uso"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(253,248,243,0.35)",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
