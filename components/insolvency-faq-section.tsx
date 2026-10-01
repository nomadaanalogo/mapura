import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Voy a perder mi casa o mi carro si entro en insolvencia?",
    answer:
      "No necesariamente. El objetivo del proceso es protegerte, no despojarte de tus bienes. En la consulta inicial evaluaremos tu caso específico.",
  },
  {
    question: "¿Cuánto tiempo toma el proceso?",
    answer:
      "Depende del caso. Nuestros procesos de insolvencia de persona natural han tomado en promedio 3 meses.",
  },
  {
    question: "¿Aplica si soy independiente o no tengo empresa?",
    answer: "Sí. La ley cubre tanto a personas naturales no comerciantes como a empresas.",
  },
  {
    question: "¿Qué pasa con los embargos mientras dure el proceso?",
    answer:
      "Una vez admitido el proceso, la ley ordena la suspensión de embargos y del cobro por parte de bancos o terceros.",
  },
]

export default function InsolvencyFaqSection() {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50]">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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
