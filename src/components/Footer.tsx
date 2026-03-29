"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#020810", borderTop: "1px solid rgba(14,165,233,0.08)", padding: "32px 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Jovir.cloud" style={{ height: "70px", width: "auto", mixBlendMode: "screen" }} />
        <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.75rem", color: "#334155" }} suppressHydrationWarning>
          © {new Date().getFullYear()} Jovir Alvarez · Analytics &amp; IA Aplicada al Negocio · Quito, Ecuador
        </p>
      </div>
    </footer>
  );
}
