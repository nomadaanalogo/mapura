import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mapura | Abogados en Palmira, Valle del Cauca | Asesoría Jurídica Integral",
  description:
    "Abogados especializados en Palmira, Valle del Cauca. Expertos en Insolvencia, Derecho Civil, Familia, Laboral y Comercial. Más de 13 años de experiencia. Consulta gratis. Cobertura en Cali, Pereira, Medellín y Bogotá.",
  keywords: [
    "abogados en Palmira",
    "abogados Palmira Valle del Cauca",
    "asesoría jurídica Palmira",
    "abogados en Cali",
    "derecho civil Palmira",
    "derecho de familia Palmira",
    "derecho laboral Palmira",
    "insolvencia Palmira",
    "ley de insolvencia Valle del Cauca",
    "abogados Valle del Cauca",
    "consultoría legal Palmira",
    "servicios legales Palmira",
    "divorcio Palmira",
    "accidentes de tránsito Palmira",
    "tutelas Palmira",
    "abogados laborales Cali",
    "mapura grupo consultor",
    "Dra Claudia Mapura",
  ],
  authors: [{ name: "Mapura Grupo Consultor" }],
  creator: "Mapura Grupo Consultor",
  publisher: "Mapura Grupo Consultor",
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
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://grupomapura.co",
    siteName: "Mapura Grupo Consultor",
    title: "Mapura | Abogados en Palmira, Valle del Cauca | Asesoría Jurídica Integral",
    description:
      "Abogados especializados en Palmira, Valle del Cauca. Más de 13 años de experiencia en Insolvencia, Derecho Civil, Familia, Laboral y Comercial. Consulta gratuita.",
    images: [
      {
        url: "https://grupomapura.co/images/mapura-logo-new.webp",
        width: 1200,
        height: 630,
        alt: "Mapura - Abogados en Palmira, Valle del Cauca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mapura | Abogados en Palmira, Valle del Cauca",
    description: "Expertos en asesoría jurídica integral. Más de 13 años de experiencia en Palmira y Valle del Cauca.",
    images: ["https://grupomapura.co/images/mapura-logo-new.webp"],
    creator: "@mapura",
    site: "@mapura",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://grupomapura.co",
  },
  category: "Legal Services",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CO">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap" rel="stylesheet" />
        <meta name="geo.region" content="CO-VAC" />
        <meta name="geo.placename" content="Palmira" />
        <meta name="geo.position" content="3.5394;-76.3036" />
        <meta name="ICBM" content="3.5394, -76.3036" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Mapura Grupo Consultor",
              image: "https://grupomapura.co/images/mapura-logo-new.webp",
              description: "Abogados especializados en Palmira, Valle del Cauca con más de 13 años de experiencia en asesoría jurídica integral",
              url: "https://grupomapura.co",
              logo: "https://grupomapura.co/images/mapura-logo-new.webp",
              telephone: "+57-310-653-7502",
              email: "Info@grupomapura.co",
              priceRange: "Consulta gratuita",
              hasMap:
                "https://www.google.com/maps/place/Mapura+Grupo+Consultor+%7C+Abogados/@3.5506895,-76.2924628,1086m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e3a050051720b25:0x596f567203f7b177!8m2!3d3.5506895!4d-76.2898879!16s%2Fg%2F11xt0yny0s!5m1!1e1",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle 62 # 25A-28, Las Mercedes",
                addressLocality: "Palmira",
                addressRegion: "Valle del Cauca",
                postalCode: "763533",
                addressCountry: "CO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 3.5394,
                longitude: -76.3036,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Palmira",
                  containedIn: {
                    "@type": "State",
                    name: "Valle del Cauca",
                  },
                },
                {
                  "@type": "City",
                  name: "Cali",
                },
                {
                  "@type": "City",
                  name: "Pereira",
                },
                {
                  "@type": "City",
                  name: "Medellín",
                },
                {
                  "@type": "City",
                  name: "Bogotá",
                },
                {
                  "@type": "Country",
                  name: "Colombia",
                },
              ],
              serviceType: [
                "Ley de Insolvencia",
                "Derecho Civil",
                "Derecho de Familia",
                "Derecho Laboral",
                "Derecho Comercial",
                "Accidentes de Tránsito",
                "Tutelas",
              ],
              founder: {
                "@type": "Person",
                name: "Dra. Claudia Mapura",
                jobTitle: "Directora",
              },
              sameAs: [
                "https://www.facebook.com/mapura",
                "https://www.instagram.com/mapuragrupoconsultor",
                "https://www.linkedin.com/company/mapuragrupoconsultor",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "150",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://grupomapura.co",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Abogados en Palmira",
                  item: "https://grupomapura.co",
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
