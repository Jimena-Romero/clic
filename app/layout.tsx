import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Script from "next/script";

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DZHCR7KCC1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DZHCR7KCC1');
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
