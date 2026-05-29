import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../../imports/Problema.png";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #f0ece8",
      }}
    >
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logoImg}
              alt="Vera MEI"
              style={{ height: "50px", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.isRoute
                ? location.pathname === link.href
                : location.pathname === "/" && link.href !== "#inicio";

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-all duration-200 cursor-pointer hover:opacity-100"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#2C2C2A",
                    opacity: 0.7,
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:opacity-90"
              style={{
                background: "#D4537E",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "0.9rem",
              }}
            >
              Comece grátis →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: "#2C2C2A" }}
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
              background: "#fff",
              borderColor: "#f0ece8",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2 text-sm border-b last:border-0"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      setIsOpen(false);
                    }
                  }}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#2C2C2A",
                    fontWeight: 500,
                    borderColor: "#f0ece8",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/login"
                className="py-3 rounded-full text-sm text-center mt-2"
                style={{
                  background: "#D4537E",
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                }}
              >
                Comece grátis →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
