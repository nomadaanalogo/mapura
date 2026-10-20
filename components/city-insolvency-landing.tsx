import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { FaCheckCircle, FaMapMarkerAlt, FaBuilding, FaVideo, FaHandshake } from "react-icons/fa"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/header"
import HowItWorksSection from "@/components/how-it-works-section"
import VideoSection from "@/components/video-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSectionInsolvency from "@/components/contact-section-insolvency"
import Footer from "@/components/footer"
import SectionDotsNav from "@/components/section-dots-nav"
import type { CityLanding } from "@/lib/city-landings"

const ATTENTION_ICONS = { map: FaMapMarkerAlt, office: FaBuilding, video: FaVideo, hearing: FaHandshake }

const REQUISITOS = [
  "Ser persona natural no comerciante (empleado, pensionado o independiente) o pequeño comerciante.",
  "Tener dos o más deudas con dos o más acreedores, con mora de más de 90 días, o procesos de cobro en tu contra.",
  "Que esas deudas en mora representen al menos la mitad del total de lo que debes.",
]

// Landing de insolvencia por ciudad: hero + contenido local + requisitos + secciones compartidas
// del inicio (pasos, video, testimonios, formulario). El contenido de cada ciudad vive en lib/city-landings.ts.
export function CityHero({ data }: { data: CityLanding }) {
  return (
    <section className="pt-6 pb-12 lg:pt-10 lg:pb-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/fondo-textura-mapura.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6">
            <h1 className="text-[#2C3E50]/80 font-bold uppercase tracking-wider text-xs lg:text-sm">
              Abogados de Insolvencia Económica en {data.city}
            </h1>
            <p className="text-4xl lg:text-5xl font-black leading-tight text-balance">
              <span className="text-[#2C3E50]">Detén los embargos y </span>
              <span className="text-[#4EA5A7]">negocia tus deudas en {data.city}</span>
            </p>
            <p className="text-lg text-[#2C3E50]/80 leading-relaxed">{data.intro}</p>
            <a
              href="#contact-form"
              className="inline-flex w-fit bg-green-500 hover:bg-green-600 text-white px-7 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400"
              style={{ boxShadow: "0 0 30px rgba(34, 197, 94, 0.3), 0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              Evalúa tu caso gratis
            </a>
          </div>

          <div className="relative aspect-square w-full max-w-[520px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/dr-mapura-office.webp"
              alt={`Dra. Claudia Zapata Mapura, abogada de insolvencia económica para clientes de ${data.city}`}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function CityProcessSection({ data }: { data: CityLanding }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16 max-w-4xl">
        <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50] mb-8">
          Ley de Insolvencia Económica en {data.city}: cómo funciona
        </h2>
        <div className="space-y-5 text-lg text-[#2C3E50]/80 leading-relaxed">
          {data.processParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <h3 className="text-2xl lg:text-3xl font-black text-[#2C3E50] mt-14 mb-6">
          ¿Quién puede acogerse a la Ley de Insolvencia?
        </h3>
        <ul className="space-y-4">
          {REQUISITOS.map((r) => (
            <li key={r} className="flex items-start gap-3 text-lg text-[#2C3E50]/85">
              <FaCheckCircle className="text-[#4EA5A7] mt-1 flex-shrink-0" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[#2C3E50]/70">
          En la evaluación gratuita revisamos tus deudas y te decimos con claridad si tu caso cumple los requisitos.
        </p>
      </div>
    </section>
  )
}

export function CityAttentionSection({ data }: { data: CityLanding }) {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50] text-center mb-12">
          Cómo te atendemos si estás en {data.city}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {data.attention.map((a) => {
            const Icon = ATTENTION_ICONS[a.icon]
            return (
              <div key={a.title} className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <Icon className="text-3xl text-[#4EA5A7] mb-4" />
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{a.title}</h3>
                <p className="text-[#2C3E50]/75 leading-relaxed">{a.description}</p>
              </div>
            )
          })}
        </div>
        <p className="text-center mt-10 text-[#2C3E50]/70">
          ¿Buscas otro servicio legal?{" "}
          <Link href="/servicios" className="font-semibold text-[#4EA5A7] underline underline-offset-4">
            Conoce nuestros servicios jurídicos
          </Link>
        </p>
      </div>
    </section>
  )
}

export function CityFaqSection({ data }: { data: CityLanding }) {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50] text-center mb-12">
          Preguntas frecuentes sobre insolvencia en {data.city}
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {data.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-none px-4 lg:px-8"
              >
                <AccordionTrigger className="py-4 hover:no-underline text-left">
                  <span className="font-bold text-[#2C3E50] text-base lg:text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#2C3E50]/80 leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

/** JSON-LD for a city landing: LegalService serving the city + FAQPage + breadcrumb */
function cityJsonLd(data: CityLanding, url: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: `Mapura Grupo Consultor - Abogados de Insolvencia Económica en ${data.city}`,
      image: "https://grupomapura.co/images/mapura-logo-new.webp",
      url,
      telephone: "+573106537502",
      priceRange: "Consulta gratuita",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle 62 # 25A-28, Las Mercedes",
        addressLocality: "Palmira",
        addressRegion: "Valle del Cauca",
        addressCountry: "CO",
      },
      areaServed: { "@type": "City", name: data.city },
      serviceType: "Ley de Insolvencia Económica",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://grupomapura.co" },
        { "@type": "ListItem", position: 2, name: `Insolvencia Económica en ${data.city}`, item: url },
      ],
    },
  ]
}

const cityUrl = (data: CityLanding) => `https://grupomapura.co/${data.slug}`

export function cityMetadata(data: CityLanding): Metadata {
  const url = cityUrl(data)
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      type: "website",
      locale: "es_CO",
      url,
      siteName: "Mapura Grupo Consultor",
      title: data.title,
      description: data.description,
      images: [
        {
          url: "https://grupomapura.co/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Mapura - Abogados de Insolvencia Económica en ${data.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["https://grupomapura.co/images/og-image.jpg"],
    },
    alternates: { canonical: url },
  }
}

export default function CityLandingPage({ data }: { data: CityLanding }) {
  return (
    <main className="min-h-screen">
      {cityJsonLd(data, cityUrl(data)).map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}

      <Header />
      <CityHero data={data} />
      <CityProcessSection data={data} />
      <CityAttentionSection data={data} />
      <HowItWorksSection />
      <VideoSection />
      <TestimonialsSection />
      <CityFaqSection data={data} />
      <ContactSectionInsolvency />
      <Footer />
      <SectionDotsNav />
    </main>
  )
}
