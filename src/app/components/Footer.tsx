import { Link } from "react-router";
import logoImg from "../../imports/Problema.png";

const footerLinks = [
  { label: "Como funciona", href: "#como-funciona", scroll: true },
  { label: "Blog", href: "/blog", scroll: false },
  { label: "Política de privacidade", href: "#", scroll: false },
  { label: "Termos de uso", href: "#", scroll: false },
];

export function Footer() {
  return (
    <footer
      className="py-12 px-12 flex items-center justify-between flex-wrap gap-6"
      style={{ background: "#2C2C2A" }}
    >
      <Link to="/">
        <img
          src={logoImg}
          alt="Vera MEI"
          style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)" }}
        />
      </Link>

      <div className="flex gap-6 flex-wrap">
        {footerLinks.map((link) =>
          link.scroll ? (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-sm transition-colors hover:text-white cursor-pointer"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {link.label}
            </Link>
          )
        )}
      </div>

      <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
        © 2025 Vera MEI · CNPJ 00.000.000/0001-00
      </p>
    </footer>
  );
}
