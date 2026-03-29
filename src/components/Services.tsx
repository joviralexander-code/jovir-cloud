"use client";
import { BarChart3, TrendingUp, Bot, Code2, Server, ArrowRight } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Business Intelligence & Analytics",
    desc: "Modelado de datos, métricas avanzadas, dashboards ejecutivos y reportes estratégicos. Datos que cuentan historias y guían decisiones.",
    tags: ["Power BI", "BigQuery", "SQL", "Looker"], accent: "#0369a1" },
  { icon: TrendingUp, title: "Inteligencia de Mercado & Estrategia Comercial",
    desc: "Análisis de participación de mercado, segmentación de clientes, tracking competitivo y diagnósticos comerciales.",
    tags: ["Market Intelligence", "Segmentación", "KPIs"], accent: "#7c3aed" },
  { icon: Bot, title: "Automatización & Inteligencia Artificial",
    desc: "Flujos inteligentes con herramientas low-code, agentes de IA y modelos de ML aplicados. Automatizo lo repetitivo.",
    tags: ["Python", "LangChain", "n8n", "MLOps"], accent: "#0e9f6e" },
  { icon: Code2, title: "Desarrollo de Aplicaciones Data-Driven",
    desc: "Aplicaciones web completas con tecnologías modernas, APIs propias y bases de datos cloud.",
    tags: ["Next.js", "PostgreSQL", "FastAPI", "Docker"], accent: "#d97706" },
  { icon: Server, title: "Infraestructura Cloud & Self-Hosted",
    desc: "Despliegue y administración de servidores, plataformas PaaS, DNS/CDN y reverse proxies. Control total del stack.",
    tags: ["Coolify", "Nginx", "VPS", "CI/CD"], accent: "#dc2626" },
];

export default function Services() {
  const go = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="servicios"
      aria-labelledby="serv-h"
      style={{ background: "linear-gradient(180deg,#030712 0%,#060d1f 100%)", padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Aurora orb */}
      <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(14,165,233,0.07) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} aria-hidden="true" />
      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(14,165,233,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.03) 1px,transparent 1px)", backgroundSize: "48px 48px" }} aria-hidden="true" />

      <div style={{ position: "relative", maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "40rem", margin: "0 auto 64px" }}>
          <div style={{ width: "48px", height: "4px", borderRadius: "2px", background: "linear-gradient(90deg,#0369a1,#38bdf8)", margin: "0 auto 20px" }} aria-hidden="true" />
          <h2
            id="serv-h"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "clamp(1.75rem,3vw,2.5rem)", color: "#f8fafc", marginBottom: "16px", lineHeight: 1.2 }}
          >
            Servicios que{" "}
            <span style={{ background: "linear-gradient(90deg,#0369a1,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              generan valor
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.125rem", color: "#64748b", lineHeight: 1.7 }}>
            Soluciones de datos e IA diseñadas para generar impacto real en los resultados de tu organización.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "24px" }}>
          {services.map(s => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                href="#contacto"
                onClick={go}
                aria-label={s.title}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  padding: "28px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(15,23,42,0.6)",
                  backdropFilter: "blur(12px)",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                  overflow: "hidden",
                }}
                className="group hover:-translate-y-1 hover:!border-sky-500/30 hover:shadow-[0_8px_32px_rgba(14,165,233,0.12)] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {/* Top accent on hover */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", borderRadius: "16px 16px 0 0", background: `linear-gradient(90deg,${s.accent},transparent)`, opacity: 0, transition: "opacity 0.2s" }} className="group-hover:!opacity-100" aria-hidden="true" />

                {/* Icon */}
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", background: `${s.accent}15`, marginBottom: "20px", transition: "transform 0.2s" }} className="group-hover:scale-110" aria-hidden="true">
                  <Icon size={20} style={{ color: s.accent }} />
                </div>

                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "0.9375rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "10px", lineHeight: 1.4 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", color: "#64748b", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>{s.desc}</p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.75rem", fontWeight: 500, color: "#94a3b8", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: "999px" }}>{t}</span>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", fontWeight: 600, color: "#94a3b8", transition: "color 0.2s" }} className="group-hover:!text-sky-400">
                  <span>Conversemos</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
