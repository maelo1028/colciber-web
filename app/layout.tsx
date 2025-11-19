import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ColCiber | Servicio, Soporte y Seguridad",
  description:
    "Consultoría y soluciones corporativas en ciberseguridad para empresas que buscan soporte confiable, licenciamiento y coadministración.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}