"use client";
import { MessageCircle } from "lucide-react";

function LI({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WA({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const channels = [
  {
    label: "LinkedIn",
    sub: "Conéctate conmigo",
    detail: "/in/jovir-alexander-alvarez-delgado",
    href: "https://www.linkedin.com/in/jovir-alexander-alvarez-delgado-695a61159/",
    Icon: LI,
    accent: "#0369a1",
    bg: "rgba(3,105,161,0.08)",
    shadow: "rgba(3,105,161,0.2)",
  },
  {
    label: "WhatsApp",
    sub: "Escríbeme directo",
    detail: "+593 979 229 856",
    href: "https://wa.me/593979229856",
    Icon: WA,
    accent: "#16a34a",
    bg: "rgba(22,163,74,0.08)",
    shadow: "rgba(22,163,74,0.2)",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="con-h"
      style={{ background: "#f8fafc", padding: "96px 0", position: "relative" }}
    >
      {/* Dot pattern */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.4, backgroundImage: "radial-gradient(circle,rgba(3,105,161,0.12) 1px,transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true" />

      <div style={{ position: "relative", maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "40rem", margin: "0 auto 64px" }}>
          <div style={{ width: "48px", height: "4px", borderRadius: "2px", background: "linear-gradient(90deg,#0369a1,#38bdf8)", margin: "0 auto 20px" }} aria-hidden="true" />
          <h2
            id="con-h"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "clamp(1.75rem,3vw,2.5rem)", color: "#0f172a", marginBottom: "16px", lineHeight: 1.2 }}
          >
            ¿Tienes un proyecto{" "}
            <span style={{ background: "linear-gradient(90deg,#0369a1,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              en mente?
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.125rem", color: "#475569", lineHeight: 1.7 }}>
            Estoy abierto a colaboraciones, proyectos freelance y conversaciones sobre datos, IA y tecnología.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center", maxWidth: "640px", margin: "0 auto" }}>
          {channels.map(ch => {
            const Icon = ch.Icon;
            return (
              <a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ch.label} — ${ch.sub} (abre en nueva pestaña)`}
                style={{
                  flex: "1 1 240px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  padding: "36px 28px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  background: "#fff",
                  textDecoration: "none",
                  overflow: "hidden",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                }}
                className="group hover:-translate-y-1.5 hover:shadow-xl hover:!border-slate-300 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                {/* Top accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg,${ch.accent},transparent)`, opacity: 0, transition: "opacity 0.2s" }} className="group-hover:!opacity-100" aria-hidden="true" />

                {/* Icon */}
                <div style={{ width: "64px", height: "64px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", background: ch.bg, transition: "transform 0.2s" }} className="group-hover:scale-110" aria-hidden="true">
                  <span style={{ color: ch.accent }}><Icon size={28} /></span>
                </div>

                {/* Text */}
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-poppins)", fontSize: "1.125rem", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>{ch.label}</p>
                  <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", color: "#64748b", marginBottom: "8px" }}>{ch.sub}</p>
                  <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.8rem", fontWeight: 600, color: ch.accent }}>{ch.detail}</p>
                </div>

                {/* Arrow */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", fontWeight: 600, color: "#94a3b8", transition: "color 0.2s" }} className="group-hover:!text-sky-600">
                  <span>Contactar ahora</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Note */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "40px", fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", color: "#94a3b8" }}>
          <MessageCircle size={14} aria-hidden="true" />
          <span>Respondo en menos de 24 horas hábiles</span>
        </div>
      </div>
    </section>
  );
}
