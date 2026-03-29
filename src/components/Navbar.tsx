"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios",  href: "#servicios" },
  { label: "Sobre mí",  href: "#sobre-mi" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Navegación principal">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer bg-transparent border-none flex items-center gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
          aria-label="Inicio"
        >
          <span className="font-bold text-xl text-white" style={{ fontFamily: "var(--font-poppins)" }}>Jovir</span>
          <span className="font-bold text-xl text-sky-400" style={{ fontFamily: "var(--font-poppins)" }}>.cloud</span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("#contacto")}
          className="hidden md:block px-5 py-2 min-h-[44px] rounded-lg text-sm font-semibold text-white cursor-pointer border-none transition-opacity duration-200 hover:opacity-90 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          style={{ background: "linear-gradient(135deg,#0369a1,#0ea5e9)", fontFamily: "var(--font-open-sans)" }}
        >
          Hablemos
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg cursor-pointer bg-transparent border-none touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          aria-label={open ? "Cerrar" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800">
          <ul className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-1">
            {links.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  className="w-full text-left px-4 py-3 min-h-[44px] text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer bg-transparent border-none text-sm font-medium touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-inset"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="pt-1">
              <button
                onClick={() => go("#contacto")}
                className="w-full py-3 min-h-[44px] rounded-xl text-sm font-semibold text-white cursor-pointer border-none touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                style={{ background: "linear-gradient(135deg,#0369a1,#0ea5e9)" }}
              >
                Hablemos
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
