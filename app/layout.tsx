import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { OrganizationSchema, ProfessionalServiceSchema } from "../components/JsonLd";
import { ChatbotWidget } from "../components/ChatbotWidget";
import { SITE_URL } from "../lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Innovad Perú | Desarrollo de software, páginas web, chatbots y automatización",
    template: "%s | Innovad Perú",
  },
  description:
    "Innovad es una empresa de tecnología en Perú especializada en desarrollo de software a medida, páginas web, chatbots y automatización de procesos para empresas e instituciones.",
  keywords: [
    "desarrollo de software peru",
    "empresa de software peru",
    "desarrollo de paginas web peru",
    "chatbot para empresas peru",
    "automatizacion de procesos peru",
    "sistemas web a medida peru",
    "desarrollo de sistemas peru",
    "software para empresas peru",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Innovad Perú | Desarrollo de software, páginas web, chatbots y automatización",
    description:
      "Innovad es una empresa de tecnología en Perú especializada en desarrollo de software a medida, páginas web, chatbots y automatización de procesos para empresas e instituciones del sector público y privado.",
    url: SITE_URL,
    siteName: "INNOVAD",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Innovad Perú | Desarrollo de software, páginas web, chatbots y automatización",
    description:
      "Innovad es una empresa de tecnología en Perú especializada en desarrollo de software a medida, páginas web, chatbots y automatización de procesos para empresas e instituciones.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <OrganizationSchema />
        <ProfessionalServiceSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}


