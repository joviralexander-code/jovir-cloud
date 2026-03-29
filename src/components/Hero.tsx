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
    const resize = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W; canvas.height = H;
    };
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
      g.addColorStop(0, "rgba(14,165,233,0)");
      g.addColorStop(0.4, "rgba(14,165,233,0.4)");
      g.addColorStop(1, "rgba(99,102,241,0.6)");
      ctx.strokeStyle = g; ctx.lineWidth = 2; ctx.stroke();

      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
      const gFill = ctx.createLinearGradient(0, 0, 0, H);
      gFill.addColorStop(0, "rgba(14,165,233,0.06)");
      gFill.addColorStop(1, "rgba(14,165,233,0)");
      ctx.fillStyle = gFill; ctx.fill();

      const progress = ((frame * 0.3) % 100) / 100;
      const idx = Math.floor(progress * (pts.length - 1));
      const frac = (progress * (pts.length - 1)) % 1;
      const dotX = progress * W;
      const dotY = H * (pts[idx] + ((pts[idx + 1] ?? pts[idx] - 0.05) - pts[idx]) * frac);

      ctx.beginPath(); ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#38bdf8"; ctx.fill();
      ctx.beginPath(); ctx.arc(dotX, dotY, 10, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(56,189,248,0.2)"; ctx.fill();

      frame++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="inicio"
      aria-label="Inicio"
      style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#030712" }}
    >
      {/* Aurora orbs */}
      <div style={{ position: "absolute", top: "-10%", right: "5%", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.13) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} aria-hidden="true" />
      <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} aria-hidden="true" />
      <div style={{ position: "absolute", top: "40%", right: "20%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} aria-hidden="true" />

      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(14,165,233,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px" }} aria-hidden="true" />

      {/* Canvas chart */}
      <canvas ref={canvasRef} style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: "260px", opacity: 0.7 }} aria-hidden="true" />

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "140px", background: "linear-gradient(to top,#030712,transparent)", pointerEvents: "none" }} aria-hidden="true" />

      {/* Floating icons */}
      {([
        { Icon: BarChart3, top: "22%", right: "10%", left: undefined, color: "#38bdf8", border: "rgba(56,189,248,0.2)", bg: "rgba(56,189,248,0.06)" },
        { Icon: Brain,     top: "58%", right: undefined, left: "7%",  color: "#818cf8", border: "rgba(129,140,248,0.2)", bg: "rgba(129,140,248,0.06)" },
        { Icon: TrendingUp,top: "35%", right: "4%",  left: undefined, color: "#a78bfa", border: "rgba(167,139,250,0.2)", bg: "rgba(167,139,250,0.06)" },
      ]).map(({ Icon, top, right, left, color, border, bg }) => (
        <div
          key={`${top}-${right ?? left}`}
          style={{ position: "absolute", top, right, left, width: "50px", height: "50px", borderRadius: "14px", border: `1px solid ${border}`, background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}
          className="hidden lg:flex"
          aria-hidden="true"
        >
          <Icon size={20} style={{ color }} />
        </div>
      ))}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "60rem", margin: "0 auto", padding: "8rem 1.5rem 6rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 18px", borderRadius: "999px", border: "1px solid rgba(14,165,233,0.25)", background: "rgba(14,165,233,0.07)", marginBottom: "2rem", backdropFilter: "blur(8px)" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8", flexShrink: 0 }} className="animate-pulse" aria-hidden="true" />
          <span style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.7rem", fontWeight: 600, color: "#7dd3fc", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Quito, Ecuador · Disponible globalmente
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "var(--font-poppins)", fontWeight: 800, fontSize: "clamp(1.85rem,4vw,3rem)", lineHeight: 1.1, color: "#f8fafc", marginBottom: "1.5rem", maxWidth: "52rem" }}>
          Transformo datos en{" "}
          <span style={{ background: "linear-gradient(90deg,#38bdf8,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            decisiones
          </span>{" "}
          estratégicas con Analytics e IA
        </h1>

        {/* Subtitle */}
        <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.9375rem", color: "#64748b", lineHeight: 1.75, maxWidth: "38rem", marginBottom: "2.5rem" }}>
          Especialista en inteligencia de negocio, automatización inteligente y soluciones data-driven para cualquier industria.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", marginBottom: "4rem" }}>
          <a
            href="https://www.linkedin.com/in/jovir-alexander-alvarez-delgado-695a61159/"
            target="_blank" rel="noopener noreferrer"
            aria-label="Conectar en LinkedIn"
            style={{ fontFamily: "var(--font-open-sans)", fontSize: "1rem", fontWeight: 600, color: "#fff", background: "linear-gradient(135deg,#0369a1,#6366f1)", padding: "14px 32px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", boxShadow: "0 4px 30px rgba(14,165,233,0.3)", transition: "opacity 0.2s, transform 0.2s" }}
            className="hover:opacity-90 hover:-translate-y-0.5 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
            Conectemos en LinkedIn
          </a>
          <button
            onClick={() => document.querySelector("#soluciones")?.scrollIntoView({ behavior: "smooth" })}
            style={{ fontFamily: "var(--font-open-sans)", fontSize: "1rem", fontWeight: 600, color: "#94a3b8", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(148,163,184,0.15)", padding: "14px 32px", borderRadius: "12px", cursor: "pointer", transition: "color 0.2s, border-color 0.2s, background 0.2s", backdropFilter: "blur(8px)" }}
            className="hover:!text-white hover:!border-slate-500 hover:!bg-white/8 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Ver soluciones
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem", justifyContent: "center", paddingTop: "2rem", borderTop: "1px solid rgba(148,163,184,0.08)", width: "100%" }}>
          {[
            { v: "8+", l: "años de experiencia" },
            { v: "50+", l: "proyectos entregados" },
            { v: "100%", l: "enfoque en resultados" },
          ].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-poppins)", fontSize: "1.75rem", fontWeight: 700, lineHeight: 1, marginBottom: "4px", background: "linear-gradient(90deg,#f8fafc,#94a3b8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontVariantNumeric: "tabular-nums" }}>{s.v}</p>
              <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.8rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <button
        onClick={() => document.querySelector("#soluciones")?.scrollIntoView({ behavior: "smooth" })}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", color: "#334155", background: "none", border: "none", cursor: "pointer", minHeight: "44px", minWidth: "44px", justifyContent: "flex-end", transition: "color 0.2s" }}
        aria-label="Siguiente sección"
        className="hover:!text-slate-400 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
      >
        <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "var(--font-open-sans)" }}>scroll</span>
        <ArrowDown size={14} />
      </button>
    </section>
  );
}
