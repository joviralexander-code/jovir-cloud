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
    <section id="servicios" className="py-24 bg-white relative" aria-labelledby="serv-h">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle,rgba(3,105,161,0.12) 1px,transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block w-12 h-1 rounded-full mb-5" style={{ background: "linear-gradient(90deg,#0369a1,#38bdf8)" }} aria-hidden="true" />
          <h2 id="serv-h" className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Servicios que{" "}
            <span style={{ background: "linear-gradient(90deg,#0369a1,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              generan valor
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed" style={{ fontFamily: "var(--font-open-sans)" }}>
            Soluciones de datos e IA diseñadas para generar impacto real en los resultados de tu organización.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                href="#contacto"
                onClick={go}
                className="group relative p-7 rounded-2xl border border-slate-200 bg-white no-underline cursor-pointer transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                aria-label={s.title}
              >
                {/* Colored top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: `linear-gradient(90deg,${s.accent},transparent)` }} aria-hidden="true" />

                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${s.accent}15` }} aria-hidden="true">
                  <Icon size={20} style={{ color: s.accent }} />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug" style={{ fontFamily: "var(--font-poppins)" }}>{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5" style={{ fontFamily: "var(--font-open-sans)" }}>{s.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {s.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium text-slate-600 bg-slate-100"
                      style={{ fontFamily: "var(--font-open-sans)" }}>{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 group-hover:text-sky-600 transition-colors"
                  style={{ fontFamily: "var(--font-open-sans)" }}>
                  <span>Conversemos</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
