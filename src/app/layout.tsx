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

const siteUrl = "https://horicoms.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Horizons Communs | Consultant en transformation des organisations engagées",
    template: "%s | Horizons Communs",
  },
  description:
    "Régis Pio — Formation, management de transition, conférences et structuration pour associations, tiers-lieux, collectivités et entreprises. Transformez vos organisations sans perdre leur âme.",
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
    "Régis Pio",
    "Horizons Communs",
    "accompagnement",
    "transformation organisationnelle",
  ],
  authors: [
    {
      name: "Régis Pio",
      url: "https://www.linkedin.com/in/r%C3%A9gis-pio-240664400/",
    },
  ],
  creator: "Régis Pio",
  publisher: "Horizons Communs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "Horizons Communs | Consultant en transformation des organisations engagées",
    description:
      "Accompagnement pragmatique des structures engagées : associations, tiers-lieux, collectivités et entreprises.",
    url: siteUrl,
    siteName: "Horizons Communs",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Horizons Communs — Consultant en transformation des organisations engagées",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizons Communs | Consultant en transformation",
    description:
      "Accompagnement pragmatique des structures engagées : associations, tiers-lieux, collectivités.",
    images: ["/og-image.png"],
  },
  other: {
    "geo.region": "FR",
    "geo.placename": "France",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Horizons Communs",
    description:
      "Consultant en transformation des organisations engagées — Formation, management de transition, conférences et structuration.",
    url: siteUrl,
    founder: {
      "@type": "Person",
      name: "Régis Pio",
      jobTitle: "Consultant en transformation organisationnelle",
      sameAs: [
        "https://www.linkedin.com/in/r%C3%A9gis-pio-240664400/",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: [
      "Management de transition",
      "Formation professionnelle",
      "Conférences",
      "Structuration organisationnelle",
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "Associations, tiers-lieux, collectivités, entreprises",
    },
  };

  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#B8860B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
