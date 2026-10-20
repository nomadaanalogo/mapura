// Contenido de las landing pages de insolvencia por ciudad. Cada ciudad necesita texto propio:
// Google penaliza las páginas casi idénticas que solo cambian el nombre de la ciudad.
// La ruta de cada página es app/<slug>/page.tsx; el footer y el sitemap leen esta lista.

export type CityAttentionIcon = "map" | "office" | "video" | "hearing"

export type CityLanding = {
  slug: string
  city: string
  title: string
  description: string
  keywords: string[]
  /** Intro paragraph under the hero headline */
  intro: string
  /** Paragraphs for the "how the process works in <city>" section */
  processParagraphs: string[]
  /** How clients in this city are attended */
  attention: { title: string; description: string; icon: CityAttentionIcon }[]
  faqs: { question: string; answer: string }[]
}

const TIEMPO_PROCESO =
  "Conforme a la Ley, en la etapa de negociación se establece un tiempo de hasta 6 meses para lograr un acuerdo de pago; en caso de terminar en una liquidación patrimonial, el término es variable y depende del tiempo de los despachos judiciales."

export const CITY_LANDINGS: CityLanding[] = [
  {
    slug: "insolvencia-economica-cali",
    city: "Cali",
    title: "Abogados de Insolvencia Económica en Cali | Mapura",
    description:
      "Abogados en Ley de Insolvencia Económica en Cali. Detén embargos y negocia tus deudas. Atención presencial en Cali, en Palmira o virtual. Evaluación gratuita.",
    keywords: [
      "insolvencia económica Cali",
      "abogado insolvencia Cali",
      "abogados ley de insolvencia Cali",
      "ley de insolvencia persona natural Cali",
      "detener embargo Cali",
      "negociación de deudas Cali",
      "insolvencia Valle del Cauca",
    ],
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
        icon: "map",
        description: "Agendamos una reunión contigo en Cali para revisar tus deudas y explicarte cada paso del proceso.",
      },
      {
        title: "En nuestra oficina de Palmira",
        icon: "office",
        description:
          "Si prefieres, visítanos en Calle 62 # 25A-28, Las Mercedes, Palmira, a menos de una hora de Cali.",
      },
      {
        title: "100% virtual",
        icon: "video",
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
      { question: "¿Cuánto tiempo toma el proceso?", answer: TIEMPO_PROCESO },
      {
        question: "¿La primera consulta tiene costo?",
        answer:
          "No. La evaluación inicial de tu caso es gratuita: revisamos tus deudas y te decimos si cumples los requisitos para acogerte a la Ley de Insolvencia.",
      },
    ],
  },
  {
    slug: "insolvencia-economica-pereira",
    city: "Pereira",
    title: "Abogados de Insolvencia Económica en Pereira | Mapura",
    description:
      "Abogados en Ley de Insolvencia Económica para Pereira y Risaralda. Frena embargos y descuentos de nómina. Atención 100% virtual. Evaluación gratuita.",
    keywords: [
      "insolvencia económica Pereira",
      "abogado insolvencia Pereira",
      "ley de insolvencia Pereira",
      "insolvencia persona natural Risaralda",
      "embargo de nómina Pereira",
      "negociación de deudas Pereira",
      "insolvencia Eje Cafetero",
    ],
    intro:
      "Si estás en Pereira y entre créditos, tarjetas y descuentos por libranza ya no te alcanza el sueldo, la Ley de Insolvencia Económica te da una salida legal: detener los cobros y renegociar todas tus deudas en un solo proceso. Te acompañamos de forma virtual, sin que tengas que salir de Risaralda.",
    processParagraphs: [
      "Muchas personas en Pereira llegan a la insolvencia por la misma ruta: un crédito de libranza, luego una tarjeta para cubrir el mes, después otro préstamo para pagar el anterior. Cuando las cuotas superan lo que entra, los acreedores empiezan a llamar, a reportar y a embargar. La Ley de Insolvencia Económica existe precisamente para cortar ese ciclo de forma ordenada.",
      "El proceso se inicia ante un centro de conciliación autorizado o una notaría. Con la admisión de tu solicitud, la ley suspende los procesos de cobro y los embargos, y todos tus acreedores tienen que sentarse a negociar un mismo acuerdo de pago, ajustado a lo que realmente puedes pagar. Si no se llega a un acuerdo, el caso pasa a un juez civil municipal.",
      "Desde Mapura llevamos tu caso de principio a fin: reunimos la información de tus deudas, preparamos la solicitud, elegimos contigo el centro más conveniente y te representamos ante los acreedores. Toda la asesoría puede hacerse por videollamada y WhatsApp, con el respaldo de más de 13 años de experiencia en insolvencia.",
    ],
    attention: [
      {
        title: "100% virtual desde Pereira",
        icon: "video",
        description:
          "Revisamos tus deudas, firmamos documentos y resolvemos tus dudas por videollamada y WhatsApp, sin desplazamientos.",
      },
      {
        title: "Acompañamiento en audiencias",
        icon: "hearing",
        description:
          "Te representamos frente a tus acreedores en cada audiencia de negociación, presencial o virtual, para que no enfrentes el proceso solo.",
      },
      {
        title: "Visítanos en Palmira",
        icon: "office",
        description:
          "Si prefieres una reunión cara a cara, te recibimos en nuestra oficina: Calle 62 # 25A-28, Las Mercedes, Palmira, Valle del Cauca.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo hacer todo el proceso de insolvencia desde Pereira sin viajar?",
        answer:
          "Sí. La asesoría, la preparación de documentos y el seguimiento los hacemos de forma virtual. Te acompañamos en las audiencias, presenciales o virtuales, según cómo las programe el centro de conciliación.",
      },
      {
        question: "¿Qué pasa con los descuentos por libranza de mi salario?",
        answer:
          "Una vez admitido el proceso, la ley ordena la suspensión de los embargos y del cobro por parte de bancos o terceros mientras dura la negociación. En la evaluación revisamos cómo aplica a tus créditos de libranza.",
      },
      {
        question: "¿Dónde se tramita la insolvencia si vivo en Pereira?",
        answer:
          "La negociación de deudas se adelanta ante un centro de conciliación autorizado o una notaría, y si no hay acuerdo, ante un juez civil municipal. Te orientamos sobre cuál es la opción más conveniente para tu caso.",
      },
      { question: "¿Cuánto tiempo toma el proceso?", answer: TIEMPO_PROCESO },
      {
        question: "¿Cuánto cuesta la primera asesoría?",
        answer:
          "La evaluación inicial es gratuita. Revisamos tus deudas y te decimos con claridad si puedes acogerte a la Ley de Insolvencia antes de que tomes cualquier decisión.",
      },
    ],
  },
  {
    slug: "insolvencia-economica-armenia",
    city: "Armenia",
    title: "Abogados de Insolvencia Económica en Armenia | Mapura",
    description:
      "Abogados en Ley de Insolvencia Económica para Armenia y el Quindío. Detén embargos y renegocia tus deudas con respaldo legal. Asesoría virtual y gratuita.",
    keywords: [
      "insolvencia económica Armenia",
      "abogado insolvencia Armenia Quindío",
      "ley de insolvencia Armenia",
      "insolvencia persona natural Quindío",
      "insolvencia pequeños comerciantes Armenia",
      "detener embargo Armenia",
      "renegociar deudas Armenia",
    ],
    intro:
      "En Armenia y en todo el Quindío, cada vez más personas e independientes recurren a la Ley de Insolvencia Económica para detener embargos y reorganizar sus deudas. Si los cobros ya no te dejan trabajar tranquilo, te ayudamos a encontrar una salida legal, con asesoría virtual desde el primer día.",
    processParagraphs: [
      "La Ley de Insolvencia Económica no es solo para empleados. También aplica a independientes y, con las reformas recientes, a pequeños comerciantes. Si tienes un negocio en Armenia y las deudas del local, los proveedores o los créditos personales se volvieron imposibles de cubrir, este proceso te permite negociar con todos tus acreedores a la vez.",
      "El trámite arranca con una solicitud ante un centro de conciliación autorizado o una notaría. Cuando la solicitud es admitida, se suspenden los embargos y los procesos de cobro en tu contra, y comienza una negociación para llegar a un acuerdo de pago realista. Si no hay acuerdo, el proceso continúa ante un juez civil municipal.",
      "En Mapura estudiamos tu situación completa, organizamos la relación de todas tus deudas y bienes, y te representamos en la negociación. Trabajamos de forma virtual con clientes del Quindío, y si quieres conocernos en persona, nuestra oficina está en Palmira, Valle del Cauca.",
    ],
    attention: [
      {
        title: "Asesoría virtual en el Quindío",
        icon: "video",
        description:
          "Te atendemos por videollamada y WhatsApp, a la hora que te quede mejor, sin que tengas que cerrar tu negocio o pedir permiso en el trabajo.",
      },
      {
        title: "Representación en la negociación",
        icon: "hearing",
        description:
          "Hablamos por ti con bancos, cooperativas y demás acreedores durante las audiencias, presenciales o virtuales.",
      },
      {
        title: "Oficina en Palmira",
        icon: "office",
        description:
          "Puedes visitarnos en Calle 62 # 25A-28, Las Mercedes, Palmira, Valle del Cauca, si prefieres una reunión presencial.",
      },
    ],
    faqs: [
      {
        question: "¿La Ley de Insolvencia aplica si tengo un negocio en Armenia?",
        answer:
          "Puede aplicar. La ley cubre a personas naturales no comerciantes y también contempla a pequeños comerciantes. En la evaluación gratuita revisamos tu caso y te decimos qué proceso te corresponde.",
      },
      {
        question: "¿Necesito ir a una oficina para empezar?",
        answer:
          "No. Puedes empezar con una evaluación virtual. Te pedimos la información de tus deudas y nosotros nos encargamos de preparar la solicitud.",
      },
      {
        question: "¿Qué pasa con los embargos mientras dura el proceso?",
        answer:
          "Una vez admitido el proceso, la ley ordena la suspensión de los embargos y del cobro por parte de bancos o terceros mientras dura la negociación.",
      },
      { question: "¿Cuánto tiempo toma el proceso?", answer: TIEMPO_PROCESO },
      {
        question: "¿Voy a perder mis bienes si entro en insolvencia?",
        answer:
          "No necesariamente. El objetivo del proceso es llegar a un acuerdo de pago que puedas cumplir. En la consulta inicial evaluamos tu caso específico.",
      },
    ],
  },
  {
    slug: "insolvencia-economica-popayan",
    city: "Popayán",
    title: "Abogados de Insolvencia Económica en Popayán | Mapura",
    description:
      "Abogados en Ley de Insolvencia Económica para Popayán y el Cauca. Frena el cobro de bancos y tarjetas y negocia tus deudas. Asesoría virtual gratuita.",
    keywords: [
      "insolvencia económica Popayán",
      "abogado insolvencia Popayán",
      "ley de insolvencia Popayán",
      "insolvencia persona natural Cauca",
      "deudas tarjeta de crédito Popayán",
      "detener cobro bancos Popayán",
      "negociación de deudas Popayán",
    ],
    intro:
      "Si estás en Popayán y las llamadas de cobranza, los reportes y las amenazas de embargo se volvieron parte de tu día a día, no estás solo. La Ley de Insolvencia Económica te permite poner orden: frenar los cobros y negociar todas tus deudas con respaldo legal. Te asesoramos de forma virtual desde cualquier lugar del Cauca.",
    processParagraphs: [
      "Las deudas de tarjetas de crédito y créditos de consumo crecen rápido: los intereses de mora se acumulan, el saldo no baja y cada mes la presión es mayor. Cuando ya tienes varias obligaciones atrasadas con distintos bancos, la Ley de Insolvencia Económica te permite dejar de pelear con cada uno por separado y negociar con todos en un solo proceso.",
      "El primer paso es presentar la solicitud ante un centro de conciliación autorizado o una notaría. Al ser admitida, la ley ordena suspender los embargos y los cobros, y tus acreedores deben negociar contigo un acuerdo de pago. Si la negociación no prospera, el caso continúa ante un juez civil municipal.",
      "Nuestro equipo te acompaña en cada etapa: revisamos tus deudas, preparamos la solicitud con toda la documentación y te representamos frente a los bancos. Atendemos a clientes de Popayán de forma virtual, con más de 13 años de experiencia ayudando a personas a recuperar su tranquilidad financiera.",
    ],
    attention: [
      {
        title: "Atención virtual en Popayán",
        icon: "video",
        description:
          "Toda la asesoría por videollamada y WhatsApp: desde la evaluación de tus deudas hasta el seguimiento del proceso.",
      },
      {
        title: "Te representamos ante los bancos",
        icon: "hearing",
        description:
          "Negociamos por ti en las audiencias, presenciales o virtuales, para buscar un acuerdo que puedas cumplir.",
      },
      {
        title: "Nuestra oficina en Palmira",
        icon: "office",
        description:
          "Si quieres conocernos en persona, te esperamos en Calle 62 # 25A-28, Las Mercedes, Palmira, Valle del Cauca.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo acogerme a la insolvencia si debo varias tarjetas de crédito?",
        answer:
          "Sí, si cumples los requisitos: tener dos o más deudas con dos o más acreedores en mora de más de 90 días, que representen al menos la mitad de lo que debes. En la evaluación gratuita lo revisamos contigo.",
      },
      {
        question: "¿Se detienen las llamadas de cobranza?",
        answer:
          "Una vez admitido el proceso, la ley ordena la suspensión de los embargos y del cobro por parte de bancos o terceros mientras dura la negociación.",
      },
      {
        question: "¿Tengo que viajar para hacer el proceso?",
        answer:
          "No. Te asesoramos de forma virtual desde Popayán. Las audiencias pueden ser presenciales o virtuales según el centro de conciliación, y te acompañamos en ambos casos.",
      },
      { question: "¿Cuánto tiempo toma el proceso?", answer: TIEMPO_PROCESO },
      {
        question: "¿La primera consulta tiene costo?",
        answer:
          "No. La evaluación inicial es gratuita y sin compromiso: revisamos tus deudas y te explicamos tus opciones.",
      },
    ],
  },
]

export function getCityLanding(slug: string): CityLanding {
  const data = CITY_LANDINGS.find((c) => c.slug === slug)
  if (!data) throw new Error(`City landing not found: ${slug}`)
  return data
}
