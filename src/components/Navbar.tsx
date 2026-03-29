"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Sobre mí",  href: "#sobre-mi" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "12px 16px 0" }}>
      {/* Pill nav */}
      <nav
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
          padding: "0 20px",
          borderRadius: "16px",
          border: "1px solid rgba(14,165,233,0.12)",
          background: "rgba(3,7,18,0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "1px", padding: "4px" }}
          aria-label="Inicio"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
        >
          <span style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1.125rem", color: "#fff" }}>Jovir</span>
          <span style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1.125rem", background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>.cloud</span>
        </button>

        {/* Desktop links */}
        <ul style={{ display: "flex", alignItems: "center", gap: "4px", listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
          {links.map(l => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", fontWeight: 500, color: "#94a3b8", background: "none", border: "none", cursor: "pointer", padding: "8px 16px", borderRadius: "10px", minHeight: "44px", transition: "color 0.2s, background 0.2s" }}
                className="hover:!text-white hover:!bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 touch-manipulation"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => go("#contacto")}
          style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", fontWeight: 600, color: "#fff", background: "linear-gradient(135deg,#0369a1,#0ea5e9)", border: "none", cursor: "pointer", padding: "8px 20px", borderRadius: "10px", minHeight: "44px", transition: "opacity 0.2s" }}
          className="hidden md:block hover:opacity-90 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          Hablemos
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "44px", minWidth: "44px", borderRadius: "10px" }}
          className="md:hidden hover:!text-white touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{ maxWidth: "72rem", margin: "8px auto 0", borderRadius: "16px", border: "1px solid rgba(14,165,233,0.12)", background: "rgba(3,7,18,0.97)", backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)", overflow: "hidden" }}
          className="md:hidden"
        >
          <ul style={{ listStyle: "none", margin: 0, padding: "12px" }}>
            {links.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", fontWeight: 500, color: "#94a3b8", background: "none", border: "none", cursor: "pointer", padding: "12px 16px", borderRadius: "10px", minHeight: "44px", width: "100%", textAlign: "left", transition: "color 0.2s, background 0.2s" }}
                  className="hover:!text-white hover:!bg-white/5 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li style={{ paddingTop: "8px" }}>
              <button
                onClick={() => go("#contacto")}
                style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", fontWeight: 600, color: "#fff", background: "linear-gradient(135deg,#0369a1,#0ea5e9)", border: "none", cursor: "pointer", padding: "12px 16px", borderRadius: "10px", minHeight: "44px", width: "100%" }}
                className="touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
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
