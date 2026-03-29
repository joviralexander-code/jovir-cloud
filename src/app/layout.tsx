import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jovir Alvarez | Analytics & IA Aplicada al Negocio",
  description:
    "Especialista en inteligencia de negocio, automatización inteligente y soluciones data-driven para cualquier industria. Quito, Ecuador.",
  authors: [{ name: "Jovir Alexander Alvarez Delgado" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Jovir Alvarez | Analytics & IA Aplicada al Negocio",
    description: "Transformo datos en decisiones estratégicas con Analytics e IA.",
    url: "https://jovir.cloud",
    siteName: "jovir.cloud",
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
