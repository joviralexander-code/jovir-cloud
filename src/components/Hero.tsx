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
      g.addColorStop(0, "rgba(3,105,161,0)");
      g.addColorStop(0.3, "rgba(3,105,161,0.25)");
      g.addColorStop(1, "rgba(14,165,233,0.5)");
      ctx.strokeStyle = g; ctx.lineWidth = 1.5; ctx.stroke();

      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
      const gFill = ctx.createLinearGradient(0, 0, 0, H);
      gFill.addColorStop(0, "rgba(3,105,161,0.1)");
      gFill.addColorStop(1, "rgba(3,105,161,0)");
      ctx.fillStyle = gFill; ctx.fill();

      const progress = ((frame * 0.3) % 100) / 100;
      const idx = Math.floor(progress * (pts.length - 1));
      const frac = (progress * (pts.length - 1)) % 1;
      const dotX = progress * W;
      const dotY = H * (pts[idx] + ((pts[idx + 1] ?? pts[idx] - 0.05) - pts[idx]) * frac);

      ctx.beginPath(); ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(56,189,248,0.95)"; ctx.fill();
      ctx.beginPath(); ctx.arc(dotX, dotY, 9, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(56,189,248,0.15)"; ctx.fill();

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
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(160deg,#0f172a 0%,#1e293b 60%,#0c2340 100%)",
      }}
    >
      {/* Grid background */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: "linear-gradient(rgba(3,105,161,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(3,105,161,0.07) 1px,transparent 1px)", backgroundSize: "44px 44px" }} aria-hidden="true" />

      {/* Canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: "280px", opacity: 0.6 }} aria-hidden="true" />

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top,#0f172a,transparent)", pointerEvents: "none" }} aria-hidden="true" />

      {/* Floating icons — desktop only */}
      {[
        { Icon: BarChart3, top: "22%", right: "10%", color: "#38bdf8", bg: "rgba(56,189,248,0.1)" },
        { Icon: Brain,     top: "55%", left:  "6%",  color: "#60a5fa", bg: "rgba(96,165,250,0.1)" },
        { Icon: TrendingUp,top: "34%", right:  "4%", color: "#818cf8", bg: "rgba(129,140,248,0.1)" },
      ].map(({ Icon, top, right, left, color, bg }) => (
        <div
          key={`${top}${right ?? left}`}
          style={{ position: "absolute", top, right, left, display: "flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", borderRadius: "12px", border: `1px solid ${color}30`, background: bg }}
          className="hidden lg:flex"
          aria-hidden="true"
        >
          <Icon size={20} style={{ color }} />
        </div>
      ))}

      {/* Content — guaranteed centered */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "56rem",
          margin: "0 auto",
          padding: "7rem 1.5rem 6rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "999px", border: "1px solid rgba(14,165,233,0.3)", background: "rgba(14,165,233,0.08)", marginBottom: "2rem" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8", display: "inline-block" }} className="animate-pulse" aria-hidden="true" />
          <span style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.7rem", fontWeight: 600, color: "#7dd3fc", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Quito, Ecuador · Disponible globalmente
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-poppins)",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: "1.5rem",
            textWrap: "balance",
          }}
        >
          Transformo datos en{" "}
          <span style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            decisiones
          </span>{" "}
          estratégicas con Analytics e IA
        </h1>

        {/* Subtitle */}
        <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.125rem", color: "#94a3b8", lineHeight: 1.7, maxWidth: "38rem", marginBottom: "2.5rem" }}>
          Especialista en inteligencia de negocio, automatización inteligente y soluciones data-driven para cualquier industria.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "center", marginBottom: "4rem" }}>
          <a
            href="https://www.linkedin.com/in/jovir-alexander-alvarez-delgado-695a61159/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-open-sans)", fontSize: "1rem", fontWeight: 600, color: "#fff", background: "linear-gradient(135deg,#0369a1,#0ea5e9)", padding: "14px 32px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", transition: "opacity 0.2s, transform 0.2s", boxShadow: "0 4px 24px rgba(3,105,161,0.4)" }}
            aria-label="Conectar en LinkedIn"
            className="hover:opacity-90 hover:-translate-y-0.5 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
            Conectemos en LinkedIn
          </a>
          <button
            onClick={() => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })}
            style={{ fontFamily: "var(--font-open-sans)", fontSize: "1rem", fontWeight: 600, color: "#94a3b8", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(148,163,184,0.25)", padding: "14px 32px", borderRadius: "12px", cursor: "pointer", transition: "color 0.2s, border-color 0.2s, background 0.2s" }}
            className="hover:!text-white hover:!border-slate-400 hover:!bg-white/10 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Ver servicios
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem", justifyContent: "center", paddingTop: "2rem", borderTop: "1px solid rgba(148,163,184,0.1)", width: "100%" }}>
          {[{ v: "8+", l: "años de experiencia" }, { v: "50+", l: "proyectos entregados" }, { v: "100%", l: "enfoque en resultados" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-poppins)", fontSize: "2rem", fontWeight: 700, color: "#fff", lineHeight: 1, marginBottom: "4px", fontVariantNumeric: "tabular-nums" }}>{s.v}</p>
              <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", color: "#64748b" }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", color: "#475569", background: "none", border: "none", cursor: "pointer", minHeight: "44px", minWidth: "44px", justifyContent: "flex-end", transition: "color 0.2s" }}
        aria-label="Siguiente sección"
        className="hover:!text-slate-300 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
      >
        <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "var(--font-open-sans)" }}>scroll</span>
        <ArrowDown size={14} />
      </button>
    </section>
  );
}
