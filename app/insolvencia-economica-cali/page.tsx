import Header from "@/components/header"
import HowItWorksSection from "@/components/how-it-works-section"
import VideoSection from "@/components/video-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSectionInsolvency from "@/components/contact-section-insolvency"
import Footer from "@/components/footer"
import SectionDotsNav from "@/components/section-dots-nav"
import {
  CityHero,
  CityProcessSection,
  CityAttentionSection,
  CityFaqSection,
  cityJsonLd,
  type CityLanding,
} from "@/components/city-insolvency-landing"
import type { Metadata } from "next"

const URL = "https://grupomapura.co/insolvencia-economica-cali"
const TITLE = "Abogados de Insolvencia Económica en Cali | Mapura"
const DESCRIPTION =
  "Abogados en Ley de Insolvencia Económica en Cali. Detén embargos y negocia tus deudas. Atención presencial en Cali, en Palmira o virtual. Evaluación gratuita."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "insolvencia económica Cali",
    "abogado insolvencia Cali",
    "abogados ley de insolvencia Cali",
    "ley de insolvencia persona natural Cali",
    "detener embargo Cali",
    "negociación de deudas Cali",
    "insolvencia Valle del Cauca",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: URL,
    siteName: "Mapura Grupo Consultor",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "https://grupomapura.co/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mapura - Abogados de Insolvencia Económica en Cali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://grupomapura.co/images/og-image.jpg"],
  },
  alternates: {
    canonical: URL,
  },
}

const cali: CityLanding = {
  city: "Cali",
  intro:
    "Si vives en Cali y las deudas ya no te dejan tranquilo, la Ley de Insolvencia Económica te permite frenar los embargos y negociar con todos tus acreedores al mismo tiempo, con respaldo legal. Te atendemos en Cali, en nuestra oficina de Palmira o de forma virtual.",
  processParagraphs: [
    "La insolvencia económica de persona natural es un trámite legal para quienes ya no pueden pagar sus deudas. En lugar de enfrentar a cada banco o acreedor por separado, el proceso los reúne a todos en una sola negociación, con el objetivo de llegar a un acuerdo de pago que sí puedas cumplir.",
    "Si vives en Cali, el trámite comienza ante un centro de conciliación autorizado o una notaría. Una vez se admite tu solicitud, la ley ordena suspender los procesos de cobro y los embargos en tu contra mientras dura la negociación. Si no se logra un acuerdo, el caso pasa a un juez civil municipal para la liquidación patrimonial.",
    "En Mapura preparamos tu solicitud con todas tus deudas (incluidas las que llevas al día, porque todas deben quedar reportadas), elegimos contigo el centro más conveniente y te representamos en cada audiencia. Nuestra sede está en Palmira, a menos de una hora de Cali, y llevamos más de 13 años acompañando a personas del Valle del Cauca a salir de sus deudas.",
  ],
  attention: [
    {
      title: "Presencial en Cali",
      description: "Agendamos una reunión contigo en Cali para revisar tus deudas y explicarte cada paso del proceso.",
    },
    {
      title: "En nuestra oficina de Palmira",
      description:
        "Si prefieres, visítanos en Calle 62 # 25A-28, Las Mercedes, Palmira, a menos de una hora de Cali.",
    },
    {
      title: "100% virtual",
      description:
        "Videollamada y WhatsApp para que no tengas que desplazarte. Te acompañamos en las audiencias, presenciales o virtuales.",
    },
  ],
  faqs: [
    {
      question: "¿Tengo que viajar a Palmira para hacer mi proceso de insolvencia?",
      answer:
        "No. Podemos reunirnos contigo en Cali o atenderte de forma virtual. Si lo prefieres, también puedes visitarnos en nuestra oficina de Palmira, a menos de una hora de Cali.",
    },
    {
      question: "¿Dónde se tramita la insolvencia si vivo en Cali?",
      answer:
        "La negociación de deudas se adelanta ante un centro de conciliación autorizado o una notaría. Si no hay acuerdo con los acreedores, el caso pasa a un juez civil municipal. Nosotros te orientamos y te representamos en todo el proceso.",
    },
    {
      question: "¿Qué pasa con los embargos y los descuentos de nómina?",
      answer:
        "Una vez admitido el proceso, la ley ordena la suspensión de los embargos y del cobro por parte de bancos o terceros mientras dura la negociación.",
    },
    {
      question: "¿Cuánto tiempo toma el proceso?",
      answer:
        "Conforme a la Ley, en la etapa de negociación se establece un tiempo de hasta 6 meses para lograr un acuerdo de pago; en caso de terminar en una liquidación patrimonial, el término es variable y depende del tiempo de los despachos judiciales.",
    },
    {
      question: "¿La primera consulta tiene costo?",
      answer:
        "No. La evaluación inicial de tu caso es gratuita: revisamos tus deudas y te decimos si cumples los requisitos para acogerte a la Ley de Insolvencia.",
    },
  ],
}

export default function InsolvenciaCaliPage() {
  return (
    <main className="min-h-screen">
      {cityJsonLd(cali, URL).map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}

      <Header />
      <CityHero data={cali} />
      <CityProcessSection data={cali} />
      <CityAttentionSection data={cali} />
      <HowItWorksSection />
      <VideoSection />
      <TestimonialsSection />
      <CityFaqSection data={cali} />
      <ContactSectionInsolvency />
      <Footer />
      <SectionDotsNav />
    </main>
  )
}
