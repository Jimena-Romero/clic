import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "CLIC",
  description: "Procesos claros, soluciones inteligentes",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-clic-amarillo text-clic-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
