"use client";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-0.5">
          <span className="font-bold text-slate-900 text-sm" style={{ fontFamily: "var(--font-poppins)" }}>Jovir</span>
          <span className="font-bold text-sky-500 text-sm" style={{ fontFamily: "var(--font-poppins)" }}>.cloud</span>
        </div>
        <p className="text-xs text-slate-400" style={{ fontFamily: "var(--font-open-sans)" }} suppressHydrationWarning>
          © {new Date().getFullYear()} Jovir Alvarez · Analytics &amp; IA Aplicada al Negocio · Quito, Ecuador
        </p>
      </div>
    </footer>
  );
}
