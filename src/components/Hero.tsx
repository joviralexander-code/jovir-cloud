"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, BarChart3, Brain, TrendingUp } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, frame = 0, raf: number;
    const resize = () => { W = canvas.offsetWidth; H = canvas.offsetHeight; canvas.width = W; canvas.height = H; };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const pts = [0.72, 0.58, 0.68, 0.42, 0.52, 0.32, 0.46, 0.22, 0.36, 0.16];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const segW = W / (pts.length - 1);

      ctx.beginPath();
      ctx.moveTo(0, H * pts[0]);
      pts.forEach((p, i) => {
        if (i === 0) return;
        const cpx = (i - 0.5) * segW;
        ctx.bezierCurveTo(cpx, H * pts[i - 1], cpx, H * p, i * segW, H * p);
      });
      const g = ctx.createLinearGradient(0, 0, W, 0);
      g.addColorStop(0, "rgba(3,105,161,0)");
      g.addColorStop(0.3, "rgba(3,105,161,0.25)");
      g.addColorStop(1, "rgba(14,165,233,0.45)");
      ctx.strokeStyle = g;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Area fill
      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
      const gFill = ctx.createLinearGradient(0, 0, 0, H);
      gFill.addColorStop(0, "rgba(3,105,161,0.08)");
      gFill.addColorStop(1, "rgba(3,105,161,0)");
      ctx.fillStyle = gFill;
      ctx.fill();

      // Moving dot
      const progress = ((frame * 0.35) % 100) / 100;
      const idx = Math.floor(progress * (pts.length - 1));
      const frac = (progress * (pts.length - 1)) % 1;
      const dotX = progress * W;
      const dotY = H * (pts[idx] + ((pts[idx + 1] ?? pts[idx] - 0.05) - pts[idx]) * frac);

      ctx.beginPath(); ctx.arc(dotX, dotY, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(56,189,248,0.95)"; ctx.fill();
      ctx.beginPath(); ctx.arc(dotX, dotY, 10, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(56,189,248,0.18)"; ctx.fill();

      frame++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg,#0f172a 0%,#1e293b 60%,#0c2340 100%)" }}
      aria-label="Inicio"
    >
      {/* Grid */}
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(3,105,161,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(3,105,161,0.07) 1px,transparent 1px)", backgroundSize: "44px 44px" }} aria-hidden="true" />

      {/* Canvas chart */}
      <canvas ref={canvasRef} className="absolute bottom-0 left-0 right-0 w-full h-72 opacity-60" aria-hidden="true" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top,rgba(15,23,42,0.8),transparent)" }} aria-hidden="true" />

      {/* Floating icons */}
      {[
        { Icon: BarChart3, pos: "top-[24%] right-[12%]", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
        { Icon: Brain,     pos: "top-[58%] left-[7%]",  color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
        { Icon: TrendingUp,pos: "top-[36%] right-[5%]", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
      ].map(({ Icon, pos, color, bg }) => (
        <div key={pos} className={`absolute ${pos} hidden lg:flex items-center justify-center w-12 h-12 rounded-xl border ${bg}`} aria-hidden="true">
          <Icon size={20} className={color} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" aria-hidden="true" />
            <span className="text-sky-300 text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-open-sans)" }}>
              Quito, Ecuador · Disponible globalmente
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-bold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: 1.1 }}>
            Transformo datos en{" "}
            <span style={{ background: "linear-gradient(90deg,#38bdf8,#0369a1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              decisiones
            </span>
            <br />estratégicas con Analytics e IA
          </h1>

          {/* Sub */}
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-open-sans)" }}>
            Especialista en inteligencia de negocio, automatización inteligente y soluciones data-driven para cualquier industria.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/jovir-alexander-alvarez-delgado-695a61159/"
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center justify-center gap-2.5 no-underline transition-[opacity,transform] duration-200 hover:opacity-90 hover:-translate-y-0.5 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              style={{ background: "linear-gradient(135deg,#0369a1,#0ea5e9)", fontFamily: "var(--font-open-sans)", boxShadow: "0 0 0 0 rgba(3,105,161,0)" }}
              aria-label="Conectar en LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
              Conectemos en LinkedIn
            </a>
            <button
              onClick={() => go("#servicios")}
              className="px-8 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white cursor-pointer border border-slate-700 hover:border-slate-500 bg-white/5 hover:bg-white/10 transition-[color,border-color,background-color] duration-200 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Ver servicios
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-14 pt-8 border-t border-slate-800 justify-center">
            {[{ v: "8+", l: "años de experiencia" }, { v: "50+", l: "proyectos entregados" }, { v: "100%", l: "enfoque en resultados" }].map(s => (
              <div key={s.l}>
                <p className="text-3xl font-bold text-white leading-none mb-1" style={{ fontFamily: "var(--font-poppins)", fontVariantNumeric: "tabular-nums" }}>{s.v}</p>
                <p className="text-sm text-slate-400" style={{ fontFamily: "var(--font-open-sans)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll */}
      <button
        onClick={() => go("#servicios")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 min-h-[44px] min-w-[44px] justify-end text-slate-500 hover:text-slate-300 transition-colors cursor-pointer bg-transparent border-none touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
        aria-label="Siguiente sección"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-open-sans)", fontSize: ".6rem" }}>scroll</span>
        <ArrowDown size={14} />
      </button>
    </section>
  );
}
