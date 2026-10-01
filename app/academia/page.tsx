import Header from "@/components/header"
import AcademyHeroSection from "@/components/academy-hero-section"
import AcademyApproachSection from "@/components/academy-approach-section"
import AcademyJourneySection from "@/components/academy-journey-section"
import AcademyFormatsSection from "@/components/academy-formats-section"
import AcademyRoadmapSection from "@/components/academy-roadmap-section"
import AcademyFinalCtaSection from "@/components/academy-final-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Centro de Conocimiento Mapura | Aprende, actualízate y certifícate",
  description:
    "Formación práctica en derecho, insolvencia y áreas relacionadas, desarrollada por profesionales que llevan el conocimiento del aula a la práctica. Cursos, webinars, seminarios y certificaciones Mapura.",
  keywords: [
    "centro de conocimiento mapura",
    "formación jurídica Colombia",
    "cursos de insolvencia económica",
    "webinars derecho Colombia",
    "certificaciones jurídicas Mapura",
    "academia mapura",
    "formación en derecho concursal",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://grupomapura.co/academia",
    siteName: "Mapura Grupo Consultor",
    title: "Centro de Conocimiento Mapura | Aprende, actualízate y certifícate",
    description:
      "Formación práctica en derecho, insolvencia y áreas relacionadas, desarrollada por profesionales que llevan el conocimiento del aula a la práctica.",
    images: [
      {
        url: "https://grupomapura.co/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Centro de Conocimiento Mapura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro de Conocimiento Mapura",
    description: "Aprende. Actualízate. Certifícate. Formación práctica en derecho e insolvencia.",
    images: ["https://grupomapura.co/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://grupomapura.co/academia",
  },
}

export default function AcademiaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Centro de Conocimiento Mapura",
    description:
      "Ecosistema de aprendizaje, actualización y certificación profesional de Mapura Grupo Consultor, enfocado en derecho, insolvencia y áreas relacionadas.",
    url: "https://grupomapura.co/academia",
    parentOrganization: {
      "@type": "LegalService",
      name: "Mapura Grupo Consultor",
      url: "https://grupomapura.co",
    },
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />
      <AcademyHeroSection />
      <AcademyApproachSection />
      <AcademyJourneySection />
      <AcademyFormatsSection />
      <AcademyRoadmapSection />
      <AcademyFinalCtaSection />
      <Footer />
    </main>
  )
}
