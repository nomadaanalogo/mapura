import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Atienden únicamente en Palmira?",
    answer: "No. Tenemos atención presencial en Palmira y atención virtual para clientes de otras ciudades de Colombia.",
  },
  {
    question: "¿Puedo consultar cualquier problema jurídico?",
    answer: "Puedes contarnos brevemente tu situación y determinaremos qué área jurídica puede ayudarte.",
  },
  {
    question: "¿Atienden personas y empresas?",
    answer: "Sí. Acompañamos tanto a personas naturales como a comerciantes y empresas.",
  },
  {
    question: "¿La primera consulta es sobre mi caso específico?",
    answer:
      "Sí. La consulta permite conocer tu situación, identificar el problema jurídico y orientarte sobre las alternativas disponibles.",
  },
  {
    question: "¿Puedo consultar por WhatsApp?",
    answer: "Sí. Puedes comunicarte directamente con nuestro equipo para solicitar orientación y agendar una consulta.",
  },
]

export default function ServicesFaqSection() {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50]">Preguntas Frecuentes</h2>
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
