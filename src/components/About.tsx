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
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg,#0f172a 0%,#1e293b 100%)" }}
      aria-labelledby="about-h"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(3,105,161,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(3,105,161,0.07) 1px,transparent 1px)", backgroundSize: "44px 44px" }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: avatar */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Rings */}
              <div className="absolute -inset-3 rounded-full border border-sky-500/20" aria-hidden="true" />
              <div className="absolute -inset-6 rounded-full border border-sky-500/10" aria-hidden="true" />

              {/* Circle */}
              <div
                className="relative w-64 h-64 rounded-full flex items-center justify-center overflow-hidden border border-sky-500/30"
                style={{ background: "linear-gradient(135deg,rgba(3,105,161,0.2),rgba(14,165,233,0.15))", boxShadow: "0 0 60px rgba(3,105,161,0.25)" }}
                aria-hidden="true"
              >
                <span className="font-bold text-white/80 select-none" style={{ fontFamily: "var(--font-poppins)", fontSize: "4.5rem" }} aria-hidden="true">JA</span>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-3 -right-4 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 shadow-xl" aria-hidden="true">
                <p className="text-xs text-slate-500 leading-tight">Rol actual</p>
                <p className="text-sm font-bold text-white leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>Líder BI & Analytics</p>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="inline-block w-12 h-1 rounded-full mb-5" style={{ background: "linear-gradient(90deg,#0369a1,#38bdf8)" }} aria-hidden="true" />
            <h2 id="about-h" className="text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
              Datos que hablan{" "}
              <span style={{ background: "linear-gradient(90deg,#38bdf8,#0369a1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                tu idioma
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-open-sans)" }}>
              Soy Jovir Alvarez, especialista en Analytics e IA con base en Quito, Ecuador. Mi trabajo vive en la intersección entre los datos, la tecnología y la estrategia.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map(h => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-300 text-sm leading-relaxed" style={{ fontFamily: "var(--font-open-sans)" }}>{h}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map(s => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium text-slate-300" style={{ fontFamily: "var(--font-open-sans)" }}>{s.name}</span>
                    <span className="text-xs font-semibold text-sky-400" style={{ fontFamily: "var(--font-open-sans)", fontVariantNumeric: "tabular-nums" }}>{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-700 overflow-hidden"
                    role="progressbar" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={s.name}>
                    <div className="h-full rounded-full" style={{ width: `${s.level}%`, background: "linear-gradient(90deg,#0369a1,#38bdf8)" }} />
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
