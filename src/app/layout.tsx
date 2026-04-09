import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BackgroundEffects from "@/components/BackgroundEffects/BackgroundEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduardo Silva | Portfólio de Estudante",
  description: "Portfólio de desenvolvimento web e estudos de engenharia de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <BackgroundEffects />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
