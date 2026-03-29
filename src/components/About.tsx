"use client";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Líder de inteligencia de negocios en empresa multinacional",
  "Soluciones end-to-end: desde modelos de datos hasta infraestructura cloud",
  "Experiencia en retail, fintech, salud y manufactura",
  "IA aplicada donde realmente genera valor: resultados medibles",
];

const skills = [
  { name: "Business Intelligence & Analytics", level: 95 },
  { name: "Machine Learning / MLOps",          level: 88 },
  { name: "Automatización & Agentes de IA",    level: 85 },
  { name: "Desarrollo Full-Stack Data-Driven", level: 82 },
  { name: "Cloud & Infraestructura",           level: 80 },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-h"
      style={{ background: "linear-gradient(160deg,#060d1f 0%,#0a1628 100%)", padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.3, backgroundImage: "linear-gradient(rgba(3,105,161,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(3,105,161,0.07) 1px,transparent 1px)", backgroundSize: "44px 44px" }} aria-hidden="true" />

      <div style={{ position: "relative", maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "64px", alignItems: "center" }} className="lg:!grid-cols-2">

          {/* Avatar column */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: "-12px", borderRadius: "50%", border: "1px solid rgba(14,165,233,0.2)" }} aria-hidden="true" />
              <div style={{ position: "absolute", inset: "-24px", borderRadius: "50%", border: "1px solid rgba(14,165,233,0.1)" }} aria-hidden="true" />
              <div
                style={{ width: "256px", height: "256px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: "1px solid rgba(14,165,233,0.3)", background: "linear-gradient(135deg,rgba(3,105,161,0.2),rgba(14,165,233,0.15))", boxShadow: "0 0 60px rgba(3,105,161,0.25)", position: "relative" }}
                aria-hidden="true"
              >
                <span style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "4.5rem", color: "rgba(255,255,255,0.8)", userSelect: "none" }}>JA</span>
              </div>
              {/* Badge */}
              <div style={{ position: "absolute", bottom: "-12px", right: "-16px", background: "#1e293b", border: "1px solid #334155", borderRadius: "12px", padding: "8px 12px", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }} aria-hidden="true">
                <p style={{ fontSize: "0.7rem", color: "#64748b", lineHeight: 1.2, marginBottom: "2px", fontFamily: "var(--font-open-sans)" }}>Rol actual</p>
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", lineHeight: 1.2, fontFamily: "var(--font-poppins)" }}>Líder BI &amp; Analytics</p>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div>
            <div style={{ width: "48px", height: "4px", borderRadius: "2px", background: "linear-gradient(90deg,#0369a1,#38bdf8)", marginBottom: "20px" }} aria-hidden="true" />
            <h2
              id="about-h"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "clamp(1.75rem,3vw,2.5rem)", color: "#fff", marginBottom: "24px", lineHeight: 1.2 }}
            >
              Datos que hablan{" "}
              <span style={{ background: "linear-gradient(90deg,#38bdf8,#0369a1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                tu idioma
              </span>
            </h2>

            <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.0625rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "32px" }}>
              Soy Jovir Alvarez, especialista en Analytics e IA con base en Quito, Ecuador. Mi trabajo vive en la intersección entre los datos, la tecnología y la estrategia.
            </p>

            {/* Highlights */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {highlights.map(h => (
                <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <CheckCircle2 size={17} style={{ color: "#38bdf8", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                  <span style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.9375rem", color: "#94a3b8", lineHeight: 1.6 }}>{h}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {skills.map(s => (
                <div key={s.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", fontWeight: 500, color: "#94a3b8" }}>{s.name}</span>
                    <span style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.75rem", fontWeight: 600, color: "#38bdf8", fontVariantNumeric: "tabular-nums" }}>{s.level}%</span>
                  </div>
                  <div
                    style={{ height: "6px", borderRadius: "3px", background: "#1e293b", overflow: "hidden" }}
                    role="progressbar" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={s.name}
                  >
                    <div style={{ height: "100%", width: `${s.level}%`, borderRadius: "3px", background: "linear-gradient(90deg,#0369a1,#38bdf8)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
