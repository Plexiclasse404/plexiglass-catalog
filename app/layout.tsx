import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Produits en Plexiglass de Haute Qualité | Catalogue Professionnel",
  description:
    "Découvrez notre catalogue de produits en plexiglass sur mesure : présentoirs, boîtes, chariots, plateaux, urnes et bien plus. Solutions pour professionnels et particuliers.",
  keywords: [
    "plexiglass",
    "acrylique",
    "présentoirs",
    "boîtes plexiglass",
    "chariots acrylique",
    "plateaux transparents",
    "urne plexiglass",
    "fabrication sur mesure",
  ],
  openGraph: {
    title: "Produits en Plexiglass de Haute Qualité",
    description:
      "Solutions sur mesure pour professionnels et particuliers. Découvrez notre catalogue complet.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-foreground`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
