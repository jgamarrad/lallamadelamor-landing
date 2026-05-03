import type { Metadata } from "next"
import "./globals.css"

const siteUrl = "https://lallamadelamor.pe"
const siteName = "La Llama del Amor"
const title = "La Llama del Amor – Regalos Personalizados en Lima"
const description =
  "Regalos únicos y personalizados en Lima: chocolates, brownies, rosas y detalles especiales para cumpleaños, enamorados, graduaciones y más. Cotiza por WhatsApp. Envío a domicilio."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // ── Título ──
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },

  // ── Descripción ──
  description,

  // ── Keywords (ayudan poco en Google pero sí en Bing/Yahoo) ──
  keywords: [
    "regalos personalizados lima",
    "chocolates personalizados lima",
    "brownies personalizados lima",
    "detalles para cumpleaños lima",
    "cajas de chocolate lima",
    "regalos san valentin lima",
    "regalos dia de la madre lima",
    "correo postal chocolate",
    "caja miski",
    "la llama del amor",
    "regalos miraflores",
    "regalos san isidro",
    "detalles personalizados peru",
  ],

  // ── Canónica ──
  alternates: {
    canonical: siteUrl,
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  // ── Favicon ──
  icons: [
    { rel: "icon",             url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],

  // ── Open Graph (Facebook, WhatsApp, LinkedIn) ──
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/images/og-image.jpg", // crea imagen 1200×630 con tus productos
        width: 1200,
        height: 630,
        alt: "La Llama del Amor – Regalos personalizados en Lima",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  // ── Twitter / X ──
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpg"],
  },
}

// ── Schema.org (JSON-LD) ──
// Esto hace que Google muestre info rica: nombre, teléfono, área de servicio, reseñas
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  description,
  url: siteUrl,
  telephone: "+51984096041",
  image: `${siteUrl}/images/og-image.jpg`,
  priceRange: "S/.65 – S/.200",
  servesCuisine: "Chocolates y repostería personalizada",
  areaServed: {
    "@type": "City",
    name: "Lima",
    addressCountry: "PE",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  sameAs: [
    "https://instagram.com/lallamadelamor.pe",
    // agrega tu Facebook si tienes
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Preload imagen crítica del hero */}
        <link rel="preload" as="image" href="/images/hero-producto.jpg" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
