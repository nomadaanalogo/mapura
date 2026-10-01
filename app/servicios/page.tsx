import Header from "@/components/header"
import ServicesHeroSection from "@/components/services-hero-section"
import ServicesInsolvencyHighlightSection from "@/components/services-insolvency-highlight-section"
import ServicesSection from "@/components/services-section"
import WhyMapuraSection from "@/components/why-mapura-section"
import LocationSection from "@/components/location-section"
import ServicesFaqSection from "@/components/services-faq-section"
import FinalCtaServicesSection from "@/components/final-cta-services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Abogados en Palmira | Servicios Jurídicos | Mapura",
  description:
    "Abogados en Palmira, Valle del Cauca, para insolvencia, derecho civil, familia, laboral y comercial. Asesoría jurídica presencial y virtual. Agenda tu consulta.",
  keywords: [
    "abogados en Palmira",
    "abogados Palmira Valle del Cauca",
    "asesoría jurídica en Palmira",
    "abogados en Palmira Valle",
    "servicios jurídicos Palmira",
    "abogado civil Palmira",
    "abogado de familia Palmira",
    "abogado laboral Palmira",
    "abogado comercial Palmira",
    "insolvencia económica Palmira",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://grupomapura.co/servicios",
    siteName: "Mapura Grupo Consultor",
    title: "Abogados en Palmira | Servicios Jurídicos | Mapura",
    description:
      "Abogados en Palmira, Valle del Cauca, para insolvencia, derecho civil, familia, laboral y comercial. Asesoría jurídica presencial y virtual.",
    images: [
      {
        url: "https://grupomapura.co/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mapura - Servicios Jurídicos en Palmira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogados en Palmira | Servicios Jurídicos | Mapura",
    description: "Insolvencia, derecho civil, familia, laboral y comercial. Asesoría presencial y virtual.",
    images: ["https://grupomapura.co/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://grupomapura.co/servicios",
  },
}

export default function ServiciosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Mapura Grupo Consultor",
    image: "https://grupomapura.co/images/mapura-logo-new.webp",
    description:
      "Abogados en Palmira y Cali expertos en Ley de Insolvencia, Derecho Civil, Familia, Laboral y Comercial.",
    url: "https://grupomapura.co/servicios",
    telephone: "+573106537502",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 62 # 25A-28, Las Mercedes",
      addressLocality: "Palmira",
      addressRegion: "Valle del Cauca",
      addressCountry: "CO",
    },
    areaServed: ["Palmira", "Cali", "Valle del Cauca", "Colombia"],
    serviceType: [
      "Ley de Insolvencia Económica",
      "Derecho Civil",
      "Derecho de Familia",
      "Derecho Laboral",
      "Derecho Comercial",
      "Mecanismos de Resolución de Conflictos",
    ],
    founder: {
      "@type": "Person",
      name: "Dra. Claudia Mapura",
    },
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />
      <ServicesHeroSection />
      <ServicesInsolvencyHighlightSection />
      <ServicesSection />
      <WhyMapuraSection />
      <LocationSection />
      <ServicesFaqSection />
      <FinalCtaServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
