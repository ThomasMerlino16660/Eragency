import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ER Agency | Marketing Inmobiliario",
  description:
    "Agencia de marketing digital especializada en el sector inmobiliario. Estrategias de Meta Ads, Google Ads, branding y social media para potenciar tu negocio.",
  keywords:
    "marketing inmobiliario, meta ads, google ads, real estate marketing, branding inmobiliario",
  openGraph: {
    title: "ER Agency | Marketing Inmobiliario",
    description:
      "Transformamos propiedades en oportunidades de negocio. Marketing digital de alto rendimiento para el sector inmobiliario.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
