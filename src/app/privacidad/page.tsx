import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Jovir.cloud",
  description: "Política de privacidad y tratamiento de datos personales conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador.",
};

export default function Privacidad() {
  return (
    <div style={{ background: "#030712", minHeight: "100vh", color: "#f1f5f9" }}>
      {/* Header simple */}
      <header style={{ borderBottom: "1px solid rgba(14,165,233,0.08)", padding: "16px 24px" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Jovir.cloud" style={{ height: "52px", width: "auto", mixBlendMode: "screen" }} />
          </Link>
          <Link
            href="/"
            style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", color: "#64748b", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: "52rem", margin: "0 auto", padding: "64px 24px 96px" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ width: "48px", height: "4px", borderRadius: "2px", background: "linear-gradient(90deg,#38bdf8,#818cf8)", marginBottom: "24px" }} />
          <h1 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "clamp(1.75rem,3vw,2.5rem)", color: "#f8fafc", marginBottom: "12px", lineHeight: 1.2 }}>
            Política de Privacidad
          </h1>
          <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.875rem", color: "#475569" }}>
            Última actualización: 29 de marzo de 2026
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px", fontFamily: "var(--font-open-sans)", lineHeight: 1.8 }}>

          <section>
            <h2 style={h2}>1. Responsable del Tratamiento</h2>
            <p style={p}>
              El responsable del tratamiento de los datos personales recabados a través del sitio web <strong style={{ color: "#f1f5f9" }}>jovir.cloud</strong> es:
            </p>
            <ul style={ul}>
              <li><strong style={{ color: "#94a3b8" }}>Nombre:</strong> Jovir Alexander Alvarez Delgado</li>
              <li><strong style={{ color: "#94a3b8" }}>Domicilio:</strong> Quito, Ecuador</li>
              <li><strong style={{ color: "#94a3b8" }}>Correo de contacto:</strong> a través del formulario de contacto disponible en el sitio</li>
              <li><strong style={{ color: "#94a3b8" }}>Sitio web:</strong> https://jovir.cloud</li>
            </ul>
          </section>

          <section>
            <h2 style={h2}>2. Marco Legal Aplicable</h2>
            <p style={p}>
              Esta política se rige por la <strong style={{ color: "#f1f5f9" }}>Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP)</strong>, publicada en el Registro Oficial Suplemento N.° 459 del 26 de mayo de 2021, y su reglamento de aplicación, así como por las demás normas complementarias vigentes en la República del Ecuador.
            </p>
          </section>

          <section>
            <h2 style={h2}>3. Datos que se Recopilan</h2>
            <p style={p}>Este sitio web puede recopilar los siguientes datos personales:</p>
            <ul style={ul}>
              <li><strong style={{ color: "#94a3b8" }}>Datos de contacto:</strong> nombre y número de teléfono o perfil de LinkedIn, cuando el usuario decide contactar voluntariamente a través de WhatsApp o LinkedIn.</li>
              <li><strong style={{ color: "#94a3b8" }}>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y duración de la sesión, recopilados de forma anónima y agregada con fines estadísticos.</li>
              <li><strong style={{ color: "#94a3b8" }}>Comunicaciones:</strong> cualquier información que el usuario proporcione voluntariamente al iniciar una conversación por los canales de contacto habilitados.</li>
            </ul>
            <p style={p}>
              Este sitio no utiliza formularios de registro ni almacena datos en bases de datos propias. El contacto se realiza a través de plataformas de terceros (LinkedIn y WhatsApp), sujetas a sus propias políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 style={h2}>4. Finalidad del Tratamiento</h2>
            <p style={p}>Los datos personales recopilados se utilizan exclusivamente para:</p>
            <ul style={ul}>
              <li>Responder consultas y solicitudes de información sobre servicios profesionales.</li>
              <li>Gestionar relaciones comerciales y propuestas de colaboración.</li>
              <li>Mejorar la experiencia de navegación y el contenido del sitio web.</li>
            </ul>
          </section>

          <section>
            <h2 style={h2}>5. Base de Legitimación</h2>
            <p style={p}>
              El tratamiento de datos se basa en el <strong style={{ color: "#f1f5f9" }}>consentimiento libre, específico, informado e inequívoco</strong> del titular, conforme al artículo 7 de la LOPDP, prestado al momento en que el usuario inicia voluntariamente el contacto a través de los medios disponibles en el sitio.
            </p>
          </section>

          <section>
            <h2 style={h2}>6. Plazo de Conservación</h2>
            <p style={p}>
              Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados, o hasta que el titular solicite su supresión. Una vez concluida la relación, los datos serán eliminados de forma segura, salvo que exista obligación legal de conservarlos.
            </p>
          </section>

          <section>
            <h2 style={h2}>7. Transferencia a Terceros</h2>
            <p style={p}>
              Los datos personales <strong style={{ color: "#f1f5f9" }}>no serán cedidos, vendidos ni transferidos</strong> a terceros sin el consentimiento expreso del titular, salvo requerimiento de autoridad competente conforme a la legislación ecuatoriana vigente.
            </p>
            <p style={p}>
              El sitio enlaza a plataformas de terceros (LinkedIn, WhatsApp). El responsable no tiene control sobre el tratamiento que dichas plataformas realicen de los datos del usuario, por lo que se recomienda revisar sus respectivas políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 style={h2}>8. Derechos del Titular</h2>
            <p style={p}>
              De conformidad con los artículos 49 al 65 de la LOPDP, el titular de los datos tiene derecho a:
            </p>
            <ul style={ul}>
              <li><strong style={{ color: "#94a3b8" }}>Acceso:</strong> conocer qué datos personales están siendo tratados.</li>
              <li><strong style={{ color: "#94a3b8" }}>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong style={{ color: "#94a3b8" }}>Eliminación:</strong> solicitar la supresión de sus datos cuando ya no sean necesarios.</li>
              <li><strong style={{ color: "#94a3b8" }}>Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
              <li><strong style={{ color: "#94a3b8" }}>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
              <li><strong style={{ color: "#94a3b8" }}>Limitación:</strong> solicitar la restricción del tratamiento en los casos previstos por la ley.</li>
            </ul>
            <p style={p}>
              Para ejercer cualquiera de estos derechos, el titular puede contactar directamente al responsable a través de los canales indicados en el apartado 1. Se dará respuesta en un plazo máximo de <strong style={{ color: "#f1f5f9" }}>15 días hábiles</strong> contados desde la recepción de la solicitud, conforme a la LOPDP.
            </p>
          </section>

          <section>
            <h2 style={h2}>9. Seguridad de los Datos</h2>
            <p style={p}>
              Se adoptan medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida, alteración o divulgación indebida, en línea con el principio de seguridad establecido en el artículo 26 de la LOPDP.
            </p>
          </section>

          <section>
            <h2 style={h2}>10. Cookies y Tecnologías de Seguimiento</h2>
            <p style={p}>
              Este sitio web es de carácter estático y <strong style={{ color: "#f1f5f9" }}>no utiliza cookies propias de seguimiento ni sistemas de analítica que identifiquen individualmente a los usuarios</strong>. El servidor puede registrar datos de acceso de forma anónima para fines operativos.
            </p>
          </section>

          <section>
            <h2 style={h2}>11. Modificaciones a esta Política</h2>
            <p style={p}>
              El responsable se reserva el derecho de actualizar esta política de privacidad en cualquier momento para adaptarla a cambios normativos o de práctica. La versión vigente estará siempre disponible en esta página con indicación de la fecha de última actualización.
            </p>
          </section>

          <section>
            <h2 style={h2}>12. Autoridad de Control</h2>
            <p style={p}>
              En caso de considerar que el tratamiento de sus datos no se ajusta a la normativa vigente, el titular tiene derecho a presentar una reclamación ante la <strong style={{ color: "#f1f5f9" }}>Autoridad de Protección de Datos Personales del Ecuador</strong>, conforme a lo establecido en el Título VIII de la LOPDP.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(14,165,233,0.08)", padding: "24px", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.75rem", color: "#334155" }}>
          © {new Date().getFullYear()} &nbsp; Jovir Alvarez &nbsp;·&nbsp; Quito, Ecuador
        </p>
      </footer>
    </div>
  );
}

const h2: React.CSSProperties = {
  fontFamily: "var(--font-poppins)",
  fontSize: "1rem",
  fontWeight: 700,
  color: "#e2e8f0",
  marginBottom: "12px",
};

const p: React.CSSProperties = {
  fontSize: "0.9375rem",
  color: "#64748b",
  marginBottom: "12px",
};

const ul: React.CSSProperties = {
  fontSize: "0.9375rem",
  color: "#64748b",
  paddingLeft: "20px",
  marginBottom: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};
