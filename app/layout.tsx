import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

const siteUrl = "https://lallamadelamor.pe"
const siteName = "La Llama del Amor"
const title = "La Llama del Amor – Regalos Personalizados en Lima"
const description =
  "Regalos únicos y personalizados en Lima: chocolates, brownies, rosas y detalles especiales para cumpleaños, enamorados, graduaciones y más. Cotiza por WhatsApp. Envío a domicilio."

// ID de medición de Google Analytics 4 (flujo "Sitio principal")
const GA_MEASUREMENT_ID = "G-EB7EGNB4GG"

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
  "@type": "Store",
  "@id": `${siteUrl}/#negocio`,
  name: siteName,
  description,
  url: siteUrl,
  telephone: "+51984096041",
  email: "ventas@lallamadelamor.pe",
  image: `${siteUrl}/images/og-image.jpg`,
  priceRange: "S/.60 – S/.200",
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
    "https://www.facebook.com/lallamadelamor.pe",
    // agrega tu Facebook si tienes uno distinto, o quita esta línea
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Valeria M." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Mi novio se quedó sin palabras. La caja estaba hermosa. Definitivamente lo pido de nuevo.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Carlos R." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Pedí el Correo Postal para mi mamá y lloró de la emoción. El detalle de la foto es increíble.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Luciana P." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Rapidísimos y atentos. El regalo llegó perfecto y fue todo un éxito.",
    },
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
      <body>
        {children}

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
