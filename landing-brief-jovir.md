# Brief — Landing Page Personal: Jovir Alvarez

## Objetivo
Página profesional de marca personal. **NO es una página de búsqueda de empleo.** Es una vitrina de expertise y posicionamiento como especialista en Analytics e IA aplicada al negocio.

---

## 1. Datos Generales

- **Nombre completo:** Jovir Alexander Alvarez Delgado
- **Título profesional:** Especialista en Analytics e Inteligencia Artificial Aplicada al Negocio
- **Ubicación:** Quito, Ecuador
- **Idioma:** Español

---

## 2. Estilo Visual

- **Paleta:** Gradientes modernos azul → violeta (dark-leaning, tech aesthetic)
- **Tono:** Personal brand moderno — profesional pero cercano, sin rigidez corporativa
- **Tipografía sugerida:** Inter, Satoshi, o similar sans-serif moderna
- **Estilo UI:** Glassmorphism sutil, cards con blur, gradientes en textos hero, íconos línea, animaciones scroll suaves (fade-in, slide-up)
- **Inspiración:** Páginas de devs/data engineers modernos — limpio, bold, con personalidad

---

## 3. Secciones y Contenido

### 3.1 Hero Section

**Tagline principal:**
> Transformo datos en decisiones estratégicas con Analytics e IA

**Subtítulo:**
> Especialista en inteligencia de negocio, automatización inteligente y soluciones data-driven para cualquier industria.

**CTA principal:**
- Texto: "Conectemos" o "Hablemos"
- Link: https://www.linkedin.com/in/jovir-alexander-alvarez-delgado-695a61159/
- Estilo: Botón con gradiente azul-violeta, hover con glow

**Elemento visual:** Puede ser un patrón geométrico abstracto de datos/nodos/red neuronal como background sutil, o partículas animadas tipo constelación.

---

### 3.2 Sobre Mí / Bio Profesional

**Texto:**

Soy Jovir Alvarez, un profesional de inteligencia de negocio y analítica con base en Quito, Ecuador. Mi trabajo vive en la intersección entre los datos, la tecnología y la estrategia.

Actualmente lidero el área de inteligencia de negocios en una empresa multinacional, donde transformo datos de mercado, indicadores de gestión y métricas de negocio en insights accionables que impulsan la toma de decisiones a nivel directivo y operativo.

Pero mi curiosidad no se queda ahí. Construyo soluciones end-to-end: desde modelos de datos y dashboards ejecutivos, pasando por pipelines de automatización con código y herramientas low-code, hasta aplicaciones web completas desplegadas en infraestructura cloud que yo mismo administro.

Creo firmemente que la inteligencia artificial no reemplaza el criterio humano — lo amplifica. Mi enfoque es aplicar IA y automatización donde realmente generan valor: menos tareas manuales, mejores análisis, decisiones más rápidas.

---

### 3.3 Servicios / Áreas de Expertise

Presentar como cards o bloques con ícono + título + descripción breve:

**1. Business Intelligence & Analytics**
- Ícono sugerido: BarChart / ChartBar
- Descripción: Modelado de datos, desarrollo de métricas avanzadas, dashboards ejecutivos y reportes estratégicos. Datos que cuentan historias y guían decisiones.

**2. Inteligencia de Mercado & Estrategia Comercial**
- Ícono sugerido: TrendingUp / Target
- Descripción: Análisis de participación de mercado, segmentación de clientes, tracking competitivo y diagnósticos comerciales. Inteligencia que convierte datos de mercado en ventaja competitiva.

**3. Automatización & Inteligencia Artificial**
- Ícono sugerido: Bot / Workflow
- Descripción: Flujos inteligentes con herramientas low-code, scripts en Python, agentes de IA y modelos de Machine Learning aplicados. Automatizo lo repetitivo para que el equipo se enfoque en lo estratégico.

**4. Desarrollo de Aplicaciones Data-Driven**
- Ícono sugerido: Code / AppWindow
- Descripción: Aplicaciones web completas con tecnologías modernas de frontend, backend y bases de datos cloud. Desde herramientas internas hasta plataformas con scoring predictivo y APIs propias.

**5. Infraestructura Cloud & Self-Hosted**
- Ícono sugerido: Server / Cloud
- Descripción: Despliegue y administración de servidores propios, plataformas PaaS, gestión de DNS/CDN/almacenamiento y reverse proxies. Control total del stack tecnológico.

---

### 3.4 Contacto / Redes

**Encabezado:** ¿Tienes un proyecto en mente? Conversemos.

**Subtexto:** Estoy abierto a colaboraciones, proyectos freelance y conversaciones interesantes sobre datos, IA y tecnología.

**Canales (mostrar como íconos + link):**

| Canal | URL / Dato |
|-------|------------|
| LinkedIn | https://www.linkedin.com/in/jovir-alexander-alvarez-delgado-695a61159/ |
| WhatsApp | https://wa.me/593979229856 |

---

## 4. Especificaciones Técnicas para Claude Code

- **Stack obligatorio:** React + Vite + Tailwind CSS
- **Librería de animaciones:** Framer Motion (obligatorio) — la página NO debe sentirse estática
- **Responsive:** Mobile-first obligatorio
- **Animaciones y transiciones requeridas:**
  - Hero: texto con animación de entrada escalonada (stagger), background con partículas o gradiente animado en movimiento
  - Cards de servicios: fade-in + slide-up al hacer scroll (viewport trigger), hover con scale + glow sutil
  - Sección Bio: aparición progresiva de párrafos al scroll
  - CTA buttons: hover con transición de gradiente, glow pulse sutil
  - Transiciones suaves entre secciones (smooth scroll)
  - Cursor o elementos decorativos con parallax sutil
- **Íconos:** Lucide React
- **Fuentes:** Google Fonts (Inter o similar)
- **Deploy target:** Coolify (self-hosted PaaS) — incluir Dockerfile o nixpacks-compatible
- **Performance:** Lighthouse 90+ en todas las métricas
- **Tailwind CSS** para estilos, sin frameworks CSS adicionales
- **Dark mode por defecto** (acorde al gradiente azul/violeta)
- **Favicon:** Iniciales "JA" estilizadas o un ícono de data/nodo

---

## 5. Lo que NO es esta página

- NO es un CV online ni una página de "busco empleo"
- NO menciona empresas ni herramientas por nombre comercial
- NO se limita a una sola industria — el expertise es transversal
- NO tiene blog, portfolio de proyectos, ni testimonios (por ahora)
- El tono es de profesional independiente que tiene expertise sólido y está abierto a oportunidades de colaboración

---

## 6. Resumen para el Prompt de Claude Code

"Crea una landing page single-page profesional en español para Jovir Alvarez, Especialista en Analytics e IA Aplicada al Negocio. Estilo: dark mode con gradientes azul→violeta, diseño moderno personal brand. Secciones: Hero con tagline + CTA a LinkedIn, Bio profesional, 5 cards de servicios/expertise, y sección de contacto con LinkedIn y WhatsApp. Mobile-first, animaciones ricas con Framer Motion (stagger, fade-in, parallax, hover glow), íconos Lucide React. Stack: React + Vite + Tailwind CSS. Deploy en Coolify. La página NO debe sentirse estática — cada sección debe tener transiciones y animaciones fluidas. El contenido completo está en este brief."
