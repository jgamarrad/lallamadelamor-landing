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

// ID del Píxel de Meta ("Píxel de La llama del amor"), conectado al catálogo de Meta
const META_PIXEL_ID = "282420846070621"

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
  priceRange: "S/50 – S/330",
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

            // Rastrea cualquier clic en un enlace de WhatsApp como evento "whatsapp_click"
            document.addEventListener('click', function (e) {
              var link = e.target.closest('a[href*="api.whatsapp.com"], a[href*="wa.me"]');
              if (link) {
                gtag('event', 'whatsapp_click', {
                  link_url: link.href,
                  page_path: window.location.pathname,
                });
              }
            });
          `}
        </Script>
        {/* Píxel de Meta (Píxel de La llama del amor) */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');

            // Clic en WhatsApp = evento "Contact". Si el botón es de un producto,
            // se envía su código (LLA-xxx), que coincide con el id del catálogo de Meta.
            document.addEventListener('click', function (e) {
              var link = e.target.closest('a[href*="api.whatsapp.com"], a[href*="wa.me"]');
              if (!link || !window.fbq) return;
              var ids = (link.dataset.product || '').split(/,\\s*/).filter(function (x) {
                return /^LLA-\\d+$/.test(x);
              });
              if (ids.length) {
                fbq('track', 'Contact', { content_ids: ids, content_type: 'product' });
              } else {
                fbq('track', 'Contact');
              }
            });
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} />
        </noscript>
      </body>
    </html>
  )
}
