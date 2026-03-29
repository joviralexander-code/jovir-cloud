export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base dark */}
      <div className="absolute inset-0" style={{ background: "#060510" }} />

      {/* Blue bloom — top left */}
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full opacity-80"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 60%)" }} />

      {/* Violet bloom — top right */}
      <div className="absolute -top-20 right-0 w-[700px] h-[700px] rounded-full opacity-70"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 60%)" }} />

      {/* Indigo center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 65%)" }} />

      {/* Violet bottom */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)" }} />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
}
