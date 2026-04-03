import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Horizons Communs | Consultant en transformation des organisations engagées",
  description:
    "Formation, management de transition, conférences et structuration pour associations, tiers-lieux, collectivités et entreprises. Transformez vos organisations sans perdre leur âme.",
  keywords: [
    "consultant",
    "conférencier",
    "management de transition",
    "associations",
    "tiers-lieux",
    "collectivités",
    "entreprises",
    "insertion",
    "structuration",
    "formation",
  ],
  openGraph: {
    title: "Horizons Communs | Consultant en transformation",
    description:
      "Accompagnement pragmatique des structures engagées : associations, tiers-lieux, collectivités.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
