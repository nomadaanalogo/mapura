import Header from "@/components/header"
import InsolvencyHeroSection from "@/components/insolvency-hero-section"
import InsolvencyIntroSection from "@/components/insolvency-intro-section"
import HowItWorksSection from "@/components/how-it-works-section"
import InsolvencyBrandSection from "@/components/insolvency-brand-section"
import VideoSection from "@/components/video-section"
import CongressGallerySection from "@/components/congress-gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationSection from "@/components/location-section"
import InsolvencyFaqSection from "@/components/insolvency-faq-section"
import FinalCtaInsolvencySection from "@/components/final-cta-insolvency-section"
import ContactSectionInsolvency from "@/components/contact-section-insolvency"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insolvencia Económica en Colombia | Detén embargos y renegocia deudas – Mapura",
  description:
    "Firma de consultoria legal centrados en el cliente, Abogados en Ley de Insolvencia en Palmira, Valle del Cauca, con servicio a nivel nacional. Detén embargos y renegocia tus deudas. Agenda tu consulta.",
  keywords: [
    "ley de insolvencia económica",
    "insolvencia económica Colombia",
    "abogados insolvencia en Palmira",
    "abogados insolvencia Palmira Valle del Cauca",
    "asesoría jurídica para insolvencia en Palmira",
    "como detener un embargo",
    "puedo negociar mis deudas con los bancos",
    "quiero acogerme a la ley de insolvencia",
    "como puedo iniciar un proceso de insolvencia",
    "donde puedo empezar un proceso de insolvencia",
    "negociación de deudas",
    "eliminar deudas Colombia",
    "abogados de insolvencia Colombia",
    "Dra Claudia Mapura",
    "Mapura grupo consultor",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://grupomapura.co",
    siteName: "Mapura Grupo Consultor",
    title: "Insolvencia Económica en Colombia | Detén embargos y renegocia deudas – Mapura",
    description:
      "Firma de consultoria legal centrados en el cliente, Abogados en Ley de Insolvencia en Palmira, Valle del Cauca, con servicio a nivel nacional. Detén embargos y renegocia tus deudas.",
    images: [
      {
        url: "https://grupomapura.co/images/mapura-logo-new.webp",
        width: 1200,
        height: 630,
        alt: "Mapura - Ley de Insolvencia Económica en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insolvencia Económica en Colombia | Mapura",
    description: "Detén embargos y renegocia tus deudas con la Ley de Insolvencia Económica. Atención nacional.",
    images: ["https://grupomapura.co/images/mapura-logo-new.webp"],
  },
  alternates: {
    canonical: "https://grupomapura.co",
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Mapura Grupo Consultor - Ley de Insolvencia Económica",
    image: "https://grupomapura.co/images/mapura-logo-new.webp",
    description:
      "Firma de consultoría legal centrados en el cliente. Abogados en Ley de Insolvencia en Palmira, Valle del Cauca, con servicio a nivel nacional.",
    url: "https://grupomapura.co",
    telephone: "+573106537502",
    priceRange: "Consulta gratuita",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 62 # 25A-28, Las Mercedes",
      addressLocality: "Palmira",
      addressRegion: "Valle del Cauca",
      addressCountry: "CO",
    },
    areaServed: [
      { "@type": "City", name: "Palmira" },
      { "@type": "City", name: "Cali" },
      { "@type": "City", name: "Pereira" },
      { "@type": "City", name: "Medellín" },
      { "@type": "City", name: "Bogotá" },
      { "@type": "Country", name: "Colombia" },
    ],
    founder: {
      "@type": "Person",
      name: "Dra. Claudia Mapura",
    },
    offers: {
      "@type": "Offer",
      name: "Evaluación gratuita de tu situación de insolvencia",
      price: "0",
      priceCurrency: "COP",
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Voy a perder mi casa o mi carro si entro en insolvencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. El objetivo del proceso es protegerte, no despojarte de tus bienes. En la consulta inicial evaluaremos tu caso específico.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo toma el proceso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del caso. Nuestros procesos de insolvencia de persona natural han tomado en promedio 3 meses.",
        },
      },
      {
        "@type": "Question",
        name: "¿Aplica si soy independiente o no tengo empresa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La ley cubre tanto a personas naturales no comerciantes como a empresas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa con los embargos mientras dure el proceso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Una vez admitido el proceso, la ley ordena la suspensión de embargos y del cobro por parte de bancos o terceros.",
        },
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />
      <InsolvencyHeroSection />
      <InsolvencyIntroSection />
      <HowItWorksSection />
      <InsolvencyBrandSection />
      <VideoSection />
      <CongressGallerySection />
      <TestimonialsSection />
      <LocationSection />
      <InsolvencyFaqSection />
      <FinalCtaInsolvencySection />
      <ContactSectionInsolvency />
      <Footer />
    </main>
  )
}
