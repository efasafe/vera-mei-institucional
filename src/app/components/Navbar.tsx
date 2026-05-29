import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../../imports/image.png";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(253, 248, 243, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(107,48,80,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Vera MEI"
              className="w-10 h-10 object-contain"
              style={{
                mixBlendMode: scrolled ? "normal" : "screen",
                filter: scrolled ? "none" : "brightness(1.15)",
              }}
            />
            <span
              className="text-xl tracking-widest"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: scrolled ? "var(--vera-mei-wine)" : "var(--vera-mei-cream)",
                fontWeight: 600,
                letterSpacing: "0.25em",
              }}
            >
              Vera MEI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm transition-all duration-200 relative group"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: scrolled
                    ? location.pathname === link.href
                      ? "var(--vera-mei-wine)"
                      : "var(--vera-mei-dark)"
                    : location.pathname === link.href
                      ? "var(--vera-mei-gold)"
                      : "rgba(253,248,243,0.9)",
                  fontWeight: location.pathname === link.href ? 600 : 400,
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                  style={{
                    background: "var(--vera-mei-gold)",
                    width: location.pathname === link.href ? "100%" : "0%",
                  }}
                />
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{
                    background: "var(--vera-mei-gold)",
                    width: "0%",
                  }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                background: "var(--vera-mei-wine)",
                color: "var(--vera-mei-cream)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: scrolled ? "var(--vera-mei-wine)" : "var(--vera-mei-cream)" }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t"
            style={{
              background: "var(--vera-mei-cream)",
              borderColor: "var(--vera-mei-border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="py-2 text-sm border-b last:border-0"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color:
                      location.pathname === link.href
                        ? "var(--vera-mei-wine)"
                        : "var(--vera-mei-dark)",
                    fontWeight: location.pathname === link.href ? 600 : 400,
                    borderColor: "var(--vera-mei-border)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-full text-sm text-center mt-2"
                style={{
                  background: "var(--vera-mei-wine)",
                  color: "var(--vera-mei-cream)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                }}
              >
                Fale Conosco via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
