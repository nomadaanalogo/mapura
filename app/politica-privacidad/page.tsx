import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Contenido */}
      <div className="container mx-auto px-4 pt-24 pb-16 lg:pt-28 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-black text-[#2C3E50] mb-4">
          Política de Protección de Datos Personales
        </h1>
        <p className="text-[#2C3E50]/70 mb-10">
          MAPURA GRUPO CONSULTOR S.A.S. — NIT 901.683.280-4. Este documento incluye el{" "}
          <a href="#aviso" className="text-[#4EA5A7] font-semibold underline">
            Aviso de Privacidad y Tratamiento de Datos Personales
          </a>{" "}
          y el{" "}
          <a href="#manual" className="text-[#4EA5A7] font-semibold underline">
            Manual Integral de Políticas y Procedimientos para el Tratamiento y Protección de Datos Personales
          </a>
          .
        </p>

        <div className="prose prose-lg max-w-none space-y-6 text-[#2C3E50]">
          {/* ==================== AVISO DE PRIVACIDAD ==================== */}
          <section id="aviso" className="scroll-mt-24">
            <div className="bg-blue-50 rounded-2xl p-6 lg:p-8 mb-8">
              <p className="text-xs font-bold text-[#4EA5A7] uppercase tracking-wide mb-2">
                Anexos protección de datos – Mapura Grupo Consultor S.A.S.
              </p>
              <h2 className="text-2xl lg:text-3xl font-black text-[#2C3E50] mt-0 mb-0">
                Aviso de Privacidad y Tratamiento de Datos Personales
              </h2>
            </div>

            <p>
              MAPURA GRUPO CONSULTOR S.A.S., identificada con NIT. 901.683.280-4, con domicilio en Palmira, Valle del
              Cauca Colombia, en calidad de Responsable del Tratamiento de Datos Personales, informa a sus clientes,
              potenciales clientes, proveedores, contratistas, colaboradores, usuarios de sus canales digitales y
              demás Titulares de información que los Datos Personales recolectados a través de sus canales físicos,
              electrónicos y digitales serán tratados de conformidad con la Constitución Política, la Ley 1581 de
              2012, el Decreto 1074 de 2015, las demás normas que los modifiquen, adicionen o complementen y la
              Política de Tratamiento y Protección de Datos Personales de MAPURA GRUPO CONSULTOR S.A.S.
            </p>

            <h3 className="text-xl font-bold text-[#4EA5A7]">¿Quién es el responsable del tratamiento?</h3>
            <p>
              <strong>Responsable:</strong> MAPURA GRUPO CONSULTOR S.A.S., (en adelante, MAPURA).
              <br />
              <strong>NIT:</strong> 901.683.280-4
              <br />
              <strong>Domicilio:</strong> Palmira, Valle del Cauca, Colombia
              <br />
              <strong>Dirección:</strong> Calle 62 No. 25ª-28
              <br />
              <strong>Celular:</strong> (+57) – 310 653 7502
              <br />
              <strong>Plataforma electrónica:</strong> https://www.grupomapura.co
              <br />
              <strong>Correo electrónico para asuntos de protección de datos:</strong> info@grupomapura.co
            </p>

            <h3 className="text-xl font-bold text-[#4EA5A7]">¿Qué información podemos tratar?</h3>
            <p>
              Dependiendo de la relación que el Titular mantenga con MAPURA y de los servicios requeridos, podrán
              tratarse, entre otros, datos de identificación, contacto, ubicación, información profesional,
              académica, laboral, contractual, societaria, comercial, financiera, patrimonial, tributaria, judicial o
              administrativa y demás información necesaria para la adecuada prestación de nuestros servicios.
            </p>
            <p>
              Debido a la naturaleza de los servicios jurídicos y de consultoría prestados por MAPURA,
              excepcionalmente podrá ser necesario tratar Datos Personales sensibles, información sometida a
              reserva, información de niños, niñas o adolescentes o información de terceros contenida en
              expedientes, documentos y material probatorio. El Tratamiento de estas categorías especiales se
              realizará con observancia de las condiciones y garantías establecidas en el ordenamiento jurídico
              colombiano.
            </p>

            <h3 className="text-xl font-bold text-[#4EA5A7]">¿Para qué utilizamos los Datos Personales?</h3>
            <p>
              Los Datos Personales podrán ser recolectados, almacenados, organizados, consultados, utilizados,
              actualizados, circulados, transmitidos, transferidos, conservados y, cuando corresponda, suprimidos
              para las siguientes finalidades:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Atender solicitudes de información, consultas y requerimientos.</li>
              <li>Evaluar y gestionar la vinculación de clientes.</li>
              <li>Elaborar y presentar propuestas de servicios legales.</li>
              <li>Gestionar relaciones precontractuales, contractuales y poscontractuales.</li>
              <li>Prestar servicios jurídicos, empresariales y de consultoría.</li>
              <li>
                Analizar antecedentes, documentos e información necesaria para la prestación de los servicios
                contratados.
              </li>
              <li>
                Elaborar conceptos, contratos, memoriales, demandas, recursos, solicitudes y demás documentos
                requeridos en desarrollo de los servicios.
              </li>
              <li>Ejercer representación judicial, administrativa, arbitral, conciliatoria y extrajudicial.</li>
              <li>Gestionar expedientes y material probatorio.</li>
              <li>Realizar actividades de facturación, recaudo, cartera y administración.</li>
              <li>Gestionar relaciones con proveedores, contratistas y colaboradores.</li>
              <li>Cumplir obligaciones legales, contractuales, contables, tributarias y profesionales.</li>
              <li>Atender requerimientos de autoridades judiciales y administrativas.</li>
              <li>Gestionar riesgos legales, operativos, de seguridad y de cumplimiento.</li>
              <li>Atender consultas, peticiones y reclamos relacionados con protección de Datos Personales.</li>
              <li>Gestionar la seguridad de la información y prevenir accesos o usos no autorizados.</li>
              <li>
                Remitir información institucional, jurídica, académica o comercial relacionada con los servicios de
                MAPURA, cuando exista habilitación para ello.
              </li>
              <li>
                Cumplir las demás finalidades previstas en la Política de Tratamiento y Protección de Datos
                Personales de MAPURA.
              </li>
            </ol>

            <h3 className="text-xl font-bold text-[#4EA5A7]">Datos sensibles</h3>
            <p>
              Cuando MAPURA solicite directamente Datos Personales sensibles, informará al Titular sobre su carácter
              sensible y sobre la finalidad correspondiente. El Titular no estará obligado a autorizar el
              Tratamiento de Datos Sensibles, salvo los eventos expresamente previstos por la ley.
            </p>

            <h3 className="text-xl font-bold text-[#4EA5A7]">Derechos del Titular</h3>
            <p>El Titular podrá:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Conocer, actualizar y rectificar sus Datos Personales.</li>
              <li>
                Solicitar prueba de la autorización otorgada, salvo los eventos en que legalmente no sea requerida.
              </li>
              <li>Solicitar información sobre el uso dado a sus Datos Personales.</li>
              <li>Acceder gratuitamente a sus Datos Personales objeto de Tratamiento.</li>
              <li>Solicitar la supresión de sus datos y/o revocar la autorización cuando resulte jurídicamente procedente.</li>
              <li>Presentar consultas y reclamos.</li>
              <li>
                Presentar quejas ante la Superintendencia de Industria y Comercio, previo cumplimiento del requisito
                de procedibilidad cuando corresponda.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#4EA5A7]">¿Cómo ejercer sus derechos?</h3>
            <p>
              Las consultas, solicitudes y reclamos relacionados con Datos Personales podrán presentarse ante la
              Dirección de Asuntos Legales de MAPURA GRUPO CONSULTOR S.A.S., a través del correo electrónico:{" "}
              <strong>info@grupomapura.co</strong>
            </p>
            <p>
              La Política de Tratamiento y Protección de Datos Personales de MAPURA GRUPO CONSULTOR S.A.S. puede ser
              consultada en: https://www.grupomapura.co
            </p>
            <p>
              Al suministrar sus Datos Personales mediante los mecanismos habilitados por MAPURA, el Titular podrá
              otorgar la correspondiente autorización mediante los mecanismos físicos o electrónicos dispuestos para
              tal efecto, cuando esta resulte legalmente exigible.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#4EA5A7] mt-0">Autorización para el tratamiento de datos personales</h3>
              <p className="mb-0">
                Declaro que he leído y acepto la Política de Tratamiento y Protección de Datos Personales de MAPURA
                GRUPO CONSULTOR S.A.S., y autorizo de manera previa, expresa e informada el tratamiento de mis datos
                personales para las finalidades allí establecidas.
              </p>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              <strong>Última actualización:</strong> 01 de agosto de 2026
            </p>
          </section>

          {/* ==================== MANUAL INTEGRAL ==================== */}
          <section id="manual" className="scroll-mt-24 mt-16 pt-16 border-t border-gray-200">
            <div className="bg-blue-50 rounded-2xl p-6 lg:p-8 mb-8">
              <p className="text-xs font-bold text-[#4EA5A7] uppercase tracking-wide mb-2">
                Manual integral de políticas y procedimientos para el tratamiento y protección de datos – Mapura
                Grupo Consultor S.A.S.
              </p>
              <h2 className="text-2xl lg:text-3xl font-black text-[#2C3E50] mt-0 mb-2">
                Manual Integral de Políticas y Procedimientos para el Tratamiento y Protección de Datos Personales
              </h2>
              <p className="text-sm text-[#2C3E50]/70 mb-0">
                Versión: No. 001 · Fecha de publicación: 01 de julio de 2026 · Área responsable: Dirección de Asuntos
                Legales · Órgano de aprobación: Dirección General
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#4EA5A7]">Introducción</h3>
            <p>
              MAPURA GRUPO CONSULTOR S.A.S., en adelante "MAPURA", reconoce la protección de los datos personales
              como una manifestación del derecho fundamental al hábeas data, a la intimidad, al buen nombre y a la
              autodeterminación informativa.
            </p>
            <p>
              En desarrollo de sus actividades profesionales, jurídicas, empresariales y de consultoría, MAPURA puede
              recolectar, almacenar, organizar, consultar, utilizar, circular, transmitir, transferir, actualizar,
              conservar, archivar y, cuando corresponda, suprimir información relacionada con personas naturales.
            </p>
            <p>
              Por la naturaleza de sus servicios, MAPURA puede acceder adicionalmente a información sometida a
              especiales deberes de reserva, confidencialidad o secreto profesional, incluyendo información
              incorporada en expedientes judiciales, administrativos, arbitrales, conciliatorios y de insolvencia;
              documentos contractuales y societarios; información financiera, patrimonial, laboral y comercial;
              información relativa a litigios, controversias y negociaciones; documentos de identificación; datos de
              terceros relacionados con los asuntos confiados por los clientes; y, excepcionalmente, datos sensibles
              y datos de niños, niñas y adolescentes.
            </p>
            <p>
              En consecuencia, MAPURA adopta el presente Manual Integral de Políticas y Procedimientos para el
              Tratamiento y Protección de Datos Personales, como instrumento de obligatorio cumplimiento para sus
              administradores, abogados, trabajadores, contratistas, consultores, practicantes y demás personas que
              intervengan en el Tratamiento de Datos Personales bajo su responsabilidad o por su cuenta.
            </p>
            <p>
              Este Manual incorpora criterios de privacidad desde el diseño y por defecto, responsabilidad
              demostrada, gestión de riesgos, minimización de datos y seguridad de la información, procurando que la
              protección de los Datos Personales sea transversal a las actividades desarrolladas por MAPURA.
            </p>

            {/* CAPÍTULO I */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO I — Disposiciones Generales</h3>
            <p>
              <strong>ARTÍCULO 1. IDENTIFICACIÓN DEL RESPONSABLE:</strong> Para efectos del Régimen General de
              Protección de Datos Personales, cuando MAPURA determine las finalidades y los medios esenciales del
              Tratamiento tendrá la calidad de Responsable del Tratamiento.
            </p>
            <p>
              Razón social: MAPURA GRUPO CONSULTOR S.A.S.
              <br />
              NIT: 901.683.280-4
              <br />
              Domicilio: Palmira, Valle del Cauca, Colombia
              <br />
              Dirección: Calle 62 No. 25ª-28
              <br />
              Celular: (+57) – 310 653 7502
              <br />
              Plataforma electrónica: https://www.grupomapura.co
              <br />
              Correo electrónico para asuntos de protección de datos: info@grupomapura.co
            </p>
            <p>
              Sin perjuicio de lo anterior, MAPURA podrá actuar como Encargado del Tratamiento cuando realice
              operaciones sobre Datos Personales por cuenta de un tercero que determine las finalidades esenciales
              del Tratamiento.
            </p>
            <p>
              <strong>ARTÍCULO 2. OBJETO:</strong> El presente Manual tiene por objeto establecer las políticas,
              principios, responsabilidades, procedimientos y controles que deberán observarse en MAPURA para
              garantizar el adecuado Tratamiento y protección de los Datos Personales. Particularmente, busca:
            </p>
            <ol className="list-[lower-alpha] pl-6 space-y-1">
              <li>Garantizar el ejercicio efectivo del derecho fundamental al hábeas data.</li>
              <li>
                Establecer reglas para la recolección, almacenamiento, uso, circulación, actualización, transmisión,
                transferencia, conservación y supresión de Datos Personales.
              </li>
              <li>Definir los procedimientos para atender consultas, reclamos y solicitudes de los Titulares.</li>
              <li>Establecer responsabilidades internas relacionadas con la protección de Datos Personales.</li>
              <li>Incorporar mecanismos de responsabilidad demostrada.</li>
              <li>Gestionar los riesgos asociados al Tratamiento de Datos Personales.</li>
              <li>
                Establecer medidas especiales frente a información confidencial, sensible o sometida a reserva.
              </li>
              <li>
                Regular el Tratamiento realizado mediante proveedores, plataformas tecnológicas, servicios en la nube
                y herramientas de inteligencia artificial.
              </li>
              <li>
                Establecer mecanismos para prevenir, identificar, gestionar, documentar y reportar incidentes de
                seguridad.
              </li>
              <li>
                Garantizar que la información confiada a MAPURA con ocasión de sus servicios profesionales sea
                tratada respetando simultáneamente el régimen de protección de Datos Personales y los deberes de
                secreto profesional, confidencialidad y reserva que resulten aplicables.
              </li>
            </ol>
            <p>
              <strong>ARTÍCULO 3. ÁMBITO DE APLICACIÓN:</strong> Este Manual será aplicable a las Bases de Datos,
              archivos, repositorios, sistemas de información, expedientes físicos o electrónicos y demás conjuntos
              organizados de Datos Personales cuyo Tratamiento sea realizado por MAPURA en calidad de Responsable o,
              en lo pertinente, de Encargado.
            </p>
            <p>Será obligatorio para:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Administradores y representantes legales.</li>
              <li>Trabajadores.</li>
              <li>Abogados.</li>
              <li>Consultores.</li>
              <li>Contratistas.</li>
              <li>Practicantes.</li>
              <li>Proveedores que tengan acceso a Datos Personales.</li>
              <li>Personal temporal.</li>
              <li>Terceros que actúen por cuenta de MAPURA.</li>
            </ul>
            <p>
              Sus disposiciones serán aplicables independientemente del soporte físico, digital, audiovisual,
              electrónico, magnético o tecnológico en el cual se encuentre la información.
            </p>
            <p>
              <strong>ARTÍCULO 4. MARCO NORMATIVO:</strong> El presente Manual se interpretará de conformidad, entre
              otras, con las siguientes disposiciones y aquellas que las modifiquen, adicionen, sustituyan o
              reglamenten:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Artículos 15 y 20 de la Constitución Política de Colombia.</li>
              <li>Ley Estatutaria 1581 de 2012.</li>
              <li>
                Decreto 1074 de 2015, especialmente las disposiciones reglamentarias del Régimen General de
                Protección de Datos Personales.
              </li>
              <li>
                Ley 1266 de 2008, cuando resulte aplicable al Tratamiento de información financiera, crediticia,
                comercial y de servicios.
              </li>
              <li>Ley 2157 de 2021, en lo pertinente.</li>
              <li>Decreto 255 de 2022, en cuanto resulte aplicable.</li>
              <li>
                Instrucciones, circulares, guías y demás disposiciones impartidas por la Superintendencia de
                Industria y Comercio en ejercicio de sus competencias.
              </li>
              <li>
                Las demás normas especiales que regulen información sometida a reserva, secreto profesional,
                conservación documental o confidencialidad y que sean aplicables a las actividades desarrolladas por
                MAPURA.
              </li>
            </ol>

            {/* CAPÍTULO II */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO II — Definiciones</h3>
            <p>
              <strong>ARTÍCULO 5. DEFINICIONES:</strong> Para efectos del presente Manual se adoptarán, entre otras,
              las siguientes definiciones:
            </p>
            <p>
              <strong>Autorización:</strong> consentimiento previo, expreso e informado del Titular para llevar a
              cabo el Tratamiento de sus Datos Personales, salvo las excepciones legales.
              <br />
              <strong>Aviso de Privacidad:</strong> comunicación mediante la cual se informa al Titular acerca de la
              existencia de las políticas de Tratamiento, la forma de acceder a ellas y las finalidades
              correspondientes.
              <br />
              <strong>Base de Datos:</strong> conjunto organizado de Datos Personales objeto de Tratamiento.
              <br />
              <strong>Dato Personal:</strong> cualquier información vinculada o que pueda asociarse a una o varias
              personas naturales determinadas o determinables.
              <br />
              <strong>Dato Público:</strong> aquel que por su naturaleza o por disposición legal tiene dicha
              condición.
              <br />
              <strong>Dato Semiprivado:</strong> aquel que no tiene naturaleza íntima, reservada ni pública y cuyo
              conocimiento o divulgación puede interesar no solo a su Titular sino a determinado sector o grupo de
              personas.
              <br />
              <strong>Dato Privado:</strong> aquel que por su naturaleza íntima o reservada solo es relevante para su
              Titular.
              <br />
              <strong>Dato Sensible:</strong> información que afecta la intimidad del Titular o cuyo uso indebido
              puede generar discriminación, incluyendo, entre otros, datos relativos a salud, vida sexual, origen
              racial o étnico, orientación política, convicciones religiosas o filosóficas, pertenencia sindical y
              datos biométricos.
              <br />
              <strong>Dato Biométrico:</strong> dato derivado de características físicas, fisiológicas o
              conductuales que permita o contribuya a identificar de manera única a una persona.
              <br />
              <strong>Encargado del Tratamiento:</strong> persona natural o jurídica que realiza el Tratamiento de
              Datos Personales por cuenta del Responsable.
              <br />
              <strong>Responsable del Tratamiento:</strong> persona natural o jurídica que decide sobre la Base de
              Datos y/o el Tratamiento.
              <br />
              <strong>Titular:</strong> persona natural cuyos Datos Personales sean objeto de Tratamiento.
              <br />
              <strong>Tratamiento:</strong> cualquier operación o conjunto de operaciones sobre Datos Personales,
              incluyendo recolección, almacenamiento, organización, consulta, utilización, circulación,
              actualización, transmisión, transferencia, conservación o supresión.
              <br />
              <strong>Transferencia:</strong> envío de Datos Personales a un receptor que adquiere la condición de
              Responsable respecto de dicha información, ubicado en Colombia o en otro país.
              <br />
              <strong>Transmisión:</strong> comunicación de Datos Personales a un Encargado para que realice
              Tratamiento por cuenta del Responsable, dentro o fuera de Colombia.
              <br />
              <strong>Incidente de Seguridad:</strong> evento que comprometa o pueda comprometer la confidencialidad,
              integridad o disponibilidad de Datos Personales, incluyendo pérdida, destrucción, alteración,
              divulgación, consulta, utilización o acceso no autorizado.
              <br />
              <strong>Responsabilidad Demostrada:</strong> capacidad de MAPURA para adoptar medidas apropiadas,
              efectivas y verificables que permitan evidenciar el cumplimiento de sus obligaciones en materia de
              protección de Datos Personales.
            </p>

            {/* CAPÍTULO III */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO III — Principios Rectores</h3>
            <p>
              <strong>ARTÍCULO 6. PRINCIPIOS:</strong> MAPURA aplicará los siguientes principios en todas las
              actividades de Tratamiento:
            </p>
            <p>
              <strong>Legalidad:</strong> el Tratamiento se realizará con sujeción a la Constitución, la ley y demás
              disposiciones aplicables.
              <br />
              <strong>Finalidad:</strong> todo Tratamiento deberá obedecer a una finalidad legítima, específica e
              informada al Titular cuando corresponda.
              <br />
              <strong>Libertad:</strong> salvo excepción legal, el Tratamiento requerirá autorización previa, expresa
              e informada del Titular.
              <br />
              <strong>Veracidad o calidad:</strong> los Datos Personales deberán ser veraces, completos, exactos,
              actualizados, comprobables y comprensibles.
              <br />
              <strong>Transparencia:</strong> MAPURA garantizará al Titular la posibilidad de conocer la existencia y
              características esenciales del Tratamiento de sus Datos Personales.
              <br />
              <strong>Acceso y circulación restringida:</strong> los Datos Personales solo podrán ser accedidos por
              personas autorizadas y para las finalidades correspondientes.
              <br />
              <strong>Seguridad:</strong> MAPURA implementará medidas técnicas, humanas, contractuales y
              administrativas razonables para proteger la información.
              <br />
              <strong>Confidencialidad:</strong> quienes intervengan en el Tratamiento deberán preservar la reserva
              de la información incluso después de finalizada su relación con MAPURA.
              <br />
              <strong>Necesidad:</strong> solo deberán recolectarse y tratarse los Datos Personales razonablemente
              adecuados, pertinentes y necesarios para las finalidades correspondientes.
              <br />
              <strong>Temporalidad:</strong> la información será conservada durante el tiempo razonablemente
              necesario para cumplir las finalidades del Tratamiento y las obligaciones legales, contractuales,
              profesionales, probatorias y documentales aplicables.
              <br />
              <strong>Responsabilidad demostrada:</strong> MAPURA implementará medidas efectivas y verificables para
              acreditar el cumplimiento del régimen de protección de Datos Personales.
              <br />
              <strong>Privacidad desde el diseño y por defecto:</strong> los nuevos proyectos, procesos, servicios,
              herramientas y tecnologías que impliquen Tratamiento deberán considerar la protección de Datos
              Personales desde su diseño y durante su operación.
            </p>

            {/* CAPÍTULO IV */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO IV — Titulares, Información y Bases de Datos</h3>
            <p>
              <strong>ARTÍCULO 7. CATEGORÍAS DE TITULARES:</strong> MAPURA podrá tratar información correspondiente,
              entre otros, a:
            </p>
            <ol className="list-[lower-alpha] pl-6 space-y-1">
              <li>Clientes actuales y anteriores.</li>
              <li>Clientes potenciales y prospectos.</li>
              <li>
                Representantes legales, administradores, accionistas, beneficiarios finales, trabajadores y demás
                personas vinculadas con clientes personas jurídicas.
              </li>
              <li>Contrapartes y sus representantes.</li>
              <li>Apoderados, abogados y asesores externos.</li>
              <li>
                Partes e intervinientes en procedimientos judiciales, arbitrales, administrativos, conciliatorios o
                de insolvencia.
              </li>
              <li>Acreedores y deudores.</li>
              <li>Testigos.</li>
              <li>Peritos y auxiliares de la justicia.</li>
              <li>Funcionarios públicos y servidores judiciales.</li>
              <li>Proveedores.</li>
              <li>Contratistas y consultores.</li>
              <li>Trabajadores y extrabajadores.</li>
              <li>Aspirantes a cargos.</li>
              <li>Practicantes.</li>
              <li>Accionistas, administradores y miembros de órganos societarios.</li>
              <li>Visitantes.</li>
              <li>Usuarios de la página web.</li>
              <li>Participantes en eventos, capacitaciones o actividades académicas.</li>
              <li>Contactos profesionales y comerciales.</li>
              <li>
                Personas cuyos datos se encuentren legítimamente contenidos en documentos o información entregada a
                MAPURA para la prestación de sus servicios.
              </li>
            </ol>
            <p>
              <strong>ARTÍCULO 8. CATEGORÍAS DE INFORMACIÓN:</strong> según la naturaleza de cada relación, MAPURA
              podrá tratar:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Datos de identificación.</li>
              <li>Datos de contacto.</li>
              <li>Datos profesionales.</li>
              <li>Información académica.</li>
              <li>Información laboral.</li>
              <li>Información contractual.</li>
              <li>Información societaria.</li>
              <li>Información comercial.</li>
              <li>Información financiera y patrimonial.</li>
              <li>Información tributaria.</li>
              <li>Información judicial y administrativa.</li>
              <li>Información relacionada con controversias.</li>
              <li>Información contenida en expedientes.</li>
              <li>Datos de navegación y utilización de canales digitales.</li>
              <li>Imagen, voz y grabaciones cuando resulte procedente.</li>
              <li>Datos sensibles cuando sean necesarios y jurídicamente procedentes.</li>
              <li>
                Información de niños, niñas y adolescentes cuando sea indispensable y jurídicamente procedente.
              </li>
              <li>
                Cualquier otra información necesaria para la adecuada prestación de los servicios o cumplimiento de
                obligaciones legales.
              </li>
            </ul>

            {/* CAPÍTULO V */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO V — Finalidades del Tratamiento</h3>
            <p>
              <strong>ARTÍCULO 9. FINALIDADES GENERALES:</strong> MAPURA podrá tratar Datos Personales para:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Desarrollar su objeto social.</li>
              <li>Prestar servicios jurídicos, empresariales, estratégicos, administrativos y de consultoría.</li>
              <li>Gestionar relaciones precontractuales, contractuales y poscontractuales.</li>
              <li>Elaborar propuestas y cotizaciones.</li>
              <li>Realizar procedimientos de conocimiento y vinculación de clientes.</li>
              <li>Verificar identidad, representación, capacidad y legitimación.</li>
              <li>Administrar relaciones con clientes.</li>
              <li>Facturar, recaudar y gestionar cartera.</li>
              <li>Cumplir obligaciones legales, tributarias, contables y contractuales.</li>
              <li>Gestionar proveedores y contratistas.</li>
              <li>Administrar relaciones laborales.</li>
              <li>Gestionar seguridad física y digital.</li>
              <li>Atender solicitudes de autoridades.</li>
              <li>Gestionar riesgos legales, operativos, reputacionales y de seguridad.</li>
              <li>Atender consultas y reclamos de protección de datos.</li>
              <li>
                Elaborar análisis, indicadores y estadísticas internas, preferiblemente mediante información
                agregada o anonimizada cuando resulte viable.
              </li>
              <li>Realizar auditorías y controles internos.</li>
              <li>
                Defender los derechos e intereses legítimos de MAPURA, sus clientes o terceros cuando jurídicamente
                corresponda.
              </li>
              <li>
                Cumplir obligaciones de prevención de fraude, corrupción, lavado de activos, financiación del
                terrorismo u otros controles aplicables.
              </li>
              <li>Mantener registros históricos, contractuales, probatorios y documentales.</li>
            </ol>
            <p>
              <strong>ARTÍCULO 10. FINALIDADES PROPIAS DE LA PRESTACIÓN DE SERVICIOS JURÍDICOS:</strong> Considerando
              la naturaleza de MAPURA como firma prestadora de servicios jurídicos y de consultoría, los Datos
              Personales podrán tratarse para:
            </p>
            <ol className="list-[lower-alpha] pl-6 space-y-1">
              <li>Analizar consultas y antecedentes jurídicos.</li>
              <li>Determinar estrategias jurídicas y procesales.</li>
              <li>
                Elaborar conceptos, contratos, memoriales, demandas, contestaciones, recursos, solicitudes, derechos
                de petición y demás documentos.
              </li>
              <li>Representar judicial, administrativa, arbitral y extrajudicialmente a los clientes.</li>
              <li>
                Gestionar procesos judiciales, administrativos, arbitrales, conciliatorios y de insolvencia.
              </li>
              <li>
                Consultar expedientes, bases públicas, registros oficiales y fuentes legítimamente accesibles.
              </li>
              <li>
                Presentar información ante jueces, tribunales, centros de arbitraje y conciliación, autoridades
                administrativas, notarías, cámaras de comercio y demás entidades competentes.
              </li>
              <li>Comunicarse con partes, contrapartes, abogados, testigos, peritos, autoridades y demás intervinientes.</li>
              <li>Recolectar, organizar, analizar, custodiar y presentar material probatorio.</li>
              <li>Realizar investigaciones jurídicas y análisis de antecedentes.</li>
              <li>Gestionar negociaciones, transacciones y mecanismos alternativos de solución de conflictos.</li>
              <li>Cumplir deberes profesionales y éticos.</li>
              <li>Administrar expedientes físicos y electrónicos.</li>
              <li>Realizar controles de conflictos de interés.</li>
              <li>Preservar evidencia necesaria para la defensa de derechos.</li>
              <li>Cumplir obligaciones derivadas de encargos profesionales.</li>
            </ol>
            <p>
              <strong>ARTÍCULO 11. DATOS DE TERCEROS CONTENIDOS EN EXPEDIENTES:</strong> MAPURA podrá recibir de sus
              clientes documentación que contenga Datos Personales de terceros. El acceso a dicha información no
              implica autorización para utilizarla con finalidades incompatibles con el asunto jurídico que justificó
              su recepción.
            </p>
            <p>Los abogados y colaboradores deberán:</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Limitar su utilización al asunto correspondiente.</li>
              <li>Abstenerse de divulgarla injustificadamente.</li>
              <li>Respetar las reservas legales aplicables.</li>
              <li>Implementar controles razonables de acceso.</li>
              <li>Abstenerse de utilizarla para fines personales o comerciales no autorizados.</li>
              <li>Aplicar criterios de minimización al compartir documentos con terceros.</li>
            </ol>

            {/* CAPÍTULO VI */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO VI — Autorización y Legitimación del Tratamiento</h3>
            <p>
              <strong>ARTÍCULO 12. AUTORIZACIÓN:</strong> Cuando legalmente corresponda, MAPURA obtendrá autorización
              previa, expresa e informada del Titular mediante mecanismos que permitan su posterior consulta.
            </p>
            <p>Podrá obtenerse mediante:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Documento físico.</li>
              <li>Documento electrónico.</li>
              <li>Formularios digitales.</li>
              <li>Correo electrónico.</li>
              <li>Grabación.</li>
              <li>Mecanismos electrónicos de aceptación.</li>
              <li>
                Conductas inequívocas que permitan concluir razonablemente que se otorgó autorización, siempre que
                no se atribuya tal efecto al silencio.
              </li>
              <li>Cualquier mecanismo jurídicamente admisible que permita conservar prueba.</li>
            </ul>
            <p>
              <strong>ARTÍCULO 13. CONTENIDO DE LA AUTORIZACIÓN:</strong> Al solicitar autorización se informará,
              como mínimo:
            </p>
            <ol className="list-[lower-alpha] pl-6 space-y-1">
              <li>Identidad del Responsable.</li>
              <li>Datos objeto de Tratamiento o categorías correspondientes.</li>
              <li>Finalidades del Tratamiento.</li>
              <li>Derechos del Titular.</li>
              <li>Canales para ejercerlos.</li>
              <li>
                Cuando se soliciten datos sensibles, el carácter facultativo de suministrarlos, salvo disposición
                legal que establezca otra cosa.
              </li>
              <li>
                Cuando corresponda, el carácter facultativo de responder preguntas relativas a datos de niños, niñas
                y adolescentes.
              </li>
            </ol>
            <p>
              <strong>PARÁGRAFO:</strong> MAPURA podrá obtener la autorización mediante mecanismos físicos,
              electrónicos o digitales que permitan acreditar de manera razonable su otorgamiento, incluyendo
              formularios web, casillas de aceptación, correo electrónico, mensajes de datos, comunicaciones a
              través de aplicaciones de mensajería instantánea y demás mecanismos jurídicamente admisibles. Cuando
              la autorización sea obtenida mediante medios electrónicos, MAPURA procurará conservar evidencia de la
              identidad o datos de contacto del Titular, la fecha y mecanismo de aceptación y, cuando resulte
              técnicamente posible, la versión de la Política de Tratamiento de Datos Personales que se encontraba
              vigente al momento de su otorgamiento. En ningún caso el silencio del Titular será entendido como
              autorización.
            </p>
            <p>
              <strong>ARTÍCULO 14. EVENTOS EN QUE NO SE REQUIERE AUTORIZACIÓN:</strong> No será necesaria
              autorización cuando concurra alguna de las excepciones previstas legalmente, incluyendo:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>
                Información requerida por una entidad pública o administrativa en ejercicio de sus funciones legales
                o por orden judicial.
              </li>
              <li>Datos de naturaleza pública.</li>
              <li>Casos de urgencia médica o sanitaria.</li>
              <li>Tratamiento autorizado por ley para fines históricos, estadísticos o científicos.</li>
              <li>Datos relacionados con el Registro Civil de las Personas.</li>
              <li>Los demás eventos expresamente establecidos por el ordenamiento jurídico.</li>
            </ol>
            <p>
              La inexistencia de obligación de obtener autorización no exime a MAPURA del cumplimiento de los
              restantes principios y deberes aplicables al Tratamiento.
            </p>
            <p>
              <strong>ARTÍCULO 15. PRUEBA DE LA AUTORIZACIÓN:</strong> MAPURA conservará evidencia razonable del
              otorgamiento de las autorizaciones que resulten exigibles y de la información suministrada al Titular.
            </p>

            {/* CAPÍTULO VII */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">
              CAPÍTULO VII — Datos Sensibles y Datos de Niños, Niñas y Adolescentes
            </h3>
            <p>
              <strong>ARTÍCULO 16. DATOS SENSIBLES:</strong> El Tratamiento de Datos Sensibles se encuentra sujeto a
              la prohibición general establecida en el artículo 6 de la Ley 1581 de 2012 y solo podrá realizarse
              cuando concurra alguna de las excepciones legalmente previstas.
            </p>
            <p>
              Cuando el Tratamiento se fundamente en la autorización del Titular, MAPURA deberá informarle de manera
              previa y explícita: a. cuáles de los datos objeto de Tratamiento tienen naturaleza sensible; b. la
              finalidad específica para la cual serán tratados; y c. que, por tratarse de Datos Sensibles, no se
              encuentra obligado a autorizar su Tratamiento.
            </p>
            <p>
              La autorización para el Tratamiento de Datos Sensibles deberá ser explícita cuando sea legalmente
              exigible.
            </p>
            <p>
              En atención a la naturaleza de los servicios jurídicos y de consultoría prestados por MAPURA, podrá
              resultar necesario acceder a información sensible contenida en expedientes, documentos, material
              probatorio o información suministrada por clientes, autoridades o terceros. En estos eventos, MAPURA
              limitará el Tratamiento a las finalidades jurídicamente procedentes y aplicará medidas reforzadas de
              confidencialidad, acceso restringido y seguridad de la información.
            </p>
            <p>
              La ausencia de autorización no impedirá el Tratamiento cuando concurra alguna de las excepciones
              previstas expresamente por el ordenamiento jurídico.
            </p>
            <p>
              <strong>ARTÍCULO 17. NIÑOS, NIÑAS Y ADOLESCENTES:</strong> El Tratamiento de Datos Personales de
              niños, niñas y adolescentes tendrá carácter excepcional y se realizará observando su interés superior
              y asegurando el respeto de sus derechos fundamentales y prevalentes.
            </p>
            <p>
              Cuando resulte legalmente exigible autorización, esta será otorgada por quien se encuentre facultado
              para representar al niño, niña o adolescente, previa garantía de su derecho a ser escuchado, valorando
              su opinión de acuerdo con su madurez, autonomía y capacidad para comprender el Tratamiento
              correspondiente.
            </p>
            <p>
              MAPURA únicamente tratará esta información cuando resulte necesaria, pertinente y jurídicamente
              procedente para la finalidad correspondiente, particularmente cuando se encuentre relacionada con la
              prestación de servicios jurídicos, el cumplimiento de obligaciones legales o la defensa de sus derechos
              e intereses.
            </p>
            <p>
              El acceso a esta información estará restringido a las personas que deban conocerla en razón de sus
              funciones o del asunto profesional correspondiente y estará sometido a medidas reforzadas de
              confidencialidad y seguridad.
            </p>

            {/* CAPÍTULO VIII */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO VIII — Derechos de los Titulares</h3>
            <p>
              <strong>ARTÍCULO 18. DERECHOS:</strong> El Titular tendrá derecho a:
            </p>
            <ol className="list-[lower-alpha] pl-6 space-y-1">
              <li>Conocer, actualizar y rectificar sus Datos Personales.</li>
              <li>Solicitar prueba de la autorización cuando esta sea exigible.</li>
              <li>Ser informado sobre el uso dado a sus Datos Personales.</li>
              <li>
                Presentar quejas ante la Superintendencia de Industria y Comercio una vez agotado, cuando
                corresponda, el requisito de procedibilidad.
              </li>
              <li>Revocar la autorización y/o solicitar la supresión cuando resulte jurídicamente procedente.</li>
              <li>Acceder gratuitamente a sus Datos Personales objeto de Tratamiento.</li>
              <li>Ejercer los demás derechos reconocidos por la Constitución y la ley.</li>
            </ol>

            {/* CAPÍTULO IX */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO IX — Deberes de MAPURA</h3>
            <p>
              <strong>ARTÍCULO 19. DEBERES COMO RESPONSABLE:</strong> MAPURA deberá, entre otros:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Garantizar el ejercicio del hábeas data.</li>
              <li>Obtener y conservar las autorizaciones exigibles.</li>
              <li>Informar las finalidades.</li>
              <li>Proteger la información mediante medidas adecuadas de seguridad.</li>
              <li>Procurar la calidad de la información.</li>
              <li>Actualizar y rectificar la información cuando corresponda.</li>
              <li>Exigir a los Encargados condiciones apropiadas de seguridad y privacidad.</li>
              <li>Tramitar consultas y reclamos.</li>
              <li>Adoptar y mantener actualizado este Manual.</li>
              <li>Informar al Encargado cuando una información se encuentre en discusión.</li>
              <li>Informar al Titular sobre el uso de sus datos cuando corresponda.</li>
              <li>Gestionar y reportar incidentes de seguridad en los eventos legalmente exigibles.</li>
              <li>Cumplir las instrucciones de la Superintendencia de Industria y Comercio.</li>
              <li>Mantener evidencias del cumplimiento.</li>
              <li>Capacitar a quienes intervengan en el Tratamiento.</li>
            </ol>

            {/* CAPÍTULO X */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO X — Gobierno Corporativo y Responsabilidad Demostrada</h3>
            <p>
              <strong>ARTÍCULO 20. RESPONSABILIDAD INSTITUCIONAL:</strong> La protección de Datos Personales
              constituye una responsabilidad transversal.
            </p>
            <p>
              <strong>Gerencia General:</strong> deberá promover la disponibilidad razonable de recursos y respaldar
              la implementación del programa.
            </p>
            <p>
              <strong>Dirección de Asuntos Legales:</strong> salvo determinación corporativa diferente, será el área
              responsable de coordinar el Programa de Protección de Datos Personales. Tendrá, entre otras, las
              funciones de:
            </p>
            <ol className="list-[lower-alpha] pl-6 space-y-1">
              <li>Coordinar la actualización del Manual.</li>
              <li>Orientar a las áreas sobre protección de datos.</li>
              <li>Coordinar consultas y reclamos.</li>
              <li>Apoyar la gestión de incidentes.</li>
              <li>Promover inventarios de Bases de Datos.</li>
              <li>Coordinar programas de capacitación.</li>
              <li>Verificar las obligaciones relativas al RNBD.</li>
              <li>Promover evaluaciones periódicas de cumplimiento.</li>
              <li>Coordinar la revisión de contratos con Encargados.</li>
              <li>Documentar evidencias del Programa.</li>
            </ol>
            <p>
              <strong>Líderes de área:</strong> deberán identificar los Tratamientos realizados en sus procesos y
              comunicar cambios relevantes a la Dirección de Asuntos Legales.
            </p>
            <p>
              <strong>Usuarios autorizados:</strong> serán responsables del uso adecuado de las credenciales,
              dispositivos y sistemas puestos a su disposición y deberán reportar incidentes inmediatamente.
            </p>
            <p>
              <strong>ARTÍCULO 21. PROGRAMA INTEGRAL DE GESTIÓN DE DATOS PERSONALES:</strong> MAPURA mantendrá, de
              acuerdo con su tamaño, estructura, actividades y nivel de riesgo, un programa que podrá comprender:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Inventario de Bases de Datos y actividades de Tratamiento.</li>
              <li>Identificación de Responsables y Encargados.</li>
              <li>Matriz de riesgos.</li>
              <li>Inventario de proveedores con acceso a información.</li>
              <li>Procedimientos de autorización.</li>
              <li>Procedimientos de consultas y reclamos.</li>
              <li>Gestión de incidentes.</li>
              <li>Capacitación.</li>
              <li>Auditorías o revisiones periódicas.</li>
              <li>Gestión documental.</li>
              <li>Controles de acceso.</li>
              <li>Evaluación de nuevos proyectos.</li>
              <li>Conservación de evidencias de cumplimiento.</li>
            </ol>

            {/* CAPÍTULO XI */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XI — Consultas, Reclamos y Peticiones</h3>
            <p>
              <strong>ARTÍCULO 22. ÁREA RESPONSABLE:</strong> la Dirección de Asuntos Legales de MAPURA será el área
              encargada de recibir, canalizar y coordinar la atención de las solicitudes de los Titulares.
              <br />
              Dirección física: Calle 62 No. 25ª-28 – Palmira, Valle del Cauca, Colombia.
              <br />
              Correo electrónico: info@grupomapura.co
              <br />
              MAPURA podrá habilitar canales adicionales.
            </p>
            <p>
              <strong>ARTÍCULO 23. VERIFICACIÓN DE IDENTIDAD:</strong> Antes de entregar información, MAPURA podrá
              adoptar medidas razonables para verificar la identidad y legitimación del solicitante. No deberán
              exigirse datos o documentos innecesarios. Cuando actúe un representante deberá acreditar su calidad
              mediante mecanismo jurídicamente suficiente.
            </p>
            <p>
              <strong>ARTÍCULO 24. CONSULTAS:</strong> Las consultas serán atendidas dentro de un término máximo de
              diez (10) días hábiles, contados desde su recepción. Cuando no sea posible atenderlas dentro de dicho
              término, se informará al interesado la razón y la fecha de respuesta, que no podrá superar cinco (5)
              días hábiles adicionales.
            </p>
            <p>
              <strong>ARTÍCULO 25. RECLAMOS:</strong> Los reclamos deberán contener:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Identificación del Titular.</li>
              <li>Descripción de los hechos.</li>
              <li>Datos de contacto.</li>
              <li>Documentos que pretenda hacer valer, cuando corresponda.</li>
            </ul>
            <p>
              Si está incompleto, se requerirá al interesado dentro de los cinco (5) días siguientes para
              subsanarlo. Transcurridos dos (2) meses desde el requerimiento sin subsanación, se entenderá desistido.
            </p>
            <p>
              Si quien recibe el reclamo no es competente, deberá trasladarlo a quien corresponda dentro de los dos
              (2) días hábiles siguientes e informar al interesado.
            </p>
            <p>
              Recibido el reclamo completo se incorporará, cuando corresponda, la leyenda "reclamo en trámite"
              dentro de los dos (2) días hábiles siguientes.
            </p>
            <p>
              El reclamo se resolverá dentro de los quince (15) días hábiles siguientes al día de su recepción
              completa. Cuando no sea posible, se informarán las razones y la fecha de respuesta, que no podrá
              superar ocho (8) días hábiles adicionales.
            </p>
            <p>
              <strong>ARTÍCULO 26. RECTIFICACIÓN Y ACTUALIZACIÓN:</strong> el Titular podrá solicitar la rectificación
              o actualización de información inexacta, incompleta o desactualizada, indicando la modificación
              solicitada y aportando los soportes correspondientes cuando resulten necesarios.
            </p>
            <p>
              <strong>ARTÍCULO 27. SUPRESIÓN Y REVOCATORIA:</strong> el Titular podrá solicitar la supresión de sus
              Datos Personales y/o revocar su autorización cuando resulte jurídicamente procedente.
            </p>
            <p>La solicitud podrá negarse, entre otros eventos, cuando:</p>
            <ol className="list-[lower-alpha] pl-6 space-y-1">
              <li>exista obligación legal o contractual de conservar la información;</li>
              <li>sea necesaria para el reconocimiento, ejercicio o defensa de derechos;</li>
              <li>
                se requiera para atender obligaciones profesionales, judiciales, administrativas, fiscales,
                contables o documentales;
              </li>
              <li>exista otra causa jurídica que legitime su conservación.</li>
            </ol>
            <p>La revocatoria no tendrá efectos retroactivos respecto del Tratamiento legítimamente realizado.</p>

            {/* CAPÍTULO XII */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XII — Transmisión, Transferencia y Terceros</h3>
            <p>
              <strong>ARTÍCULO 28. ENCARGADOS DEL TRATAMIENTO:</strong> cuando MAPURA contrate terceros para realizar
              Tratamiento por su cuenta procurará establecer contractualmente obligaciones relacionadas con:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Tratamiento conforme a instrucciones.</li>
              <li>Confidencialidad.</li>
              <li>Seguridad.</li>
              <li>Acceso restringido.</li>
              <li>Gestión de incidentes.</li>
              <li>Atención de derechos de Titulares.</li>
              <li>Subcontratación cuando corresponda.</li>
              <li>Devolución, conservación o eliminación de información al terminar el servicio.</li>
              <li>Cooperación para demostrar cumplimiento.</li>
            </ol>
            <p>
              <strong>ARTÍCULO 29. PROVEEDORES TECNOLÓGICOS:</strong> podrán actuar como Encargados, según
              corresponda: proveedores de correo electrónico; almacenamiento en la nube; gestores documentales;
              software jurídico; herramientas contables; plataformas de videoconferencia; sistemas de CRM;
              herramientas de firma electrónica; servicios de hosting; plataformas de gestión empresarial;
              proveedores de ciberseguridad; herramientas de inteligencia artificial autorizadas.
            </p>
            <p>
              Su contratación deberá considerar razonablemente el nivel de riesgo asociado a la información tratada.
            </p>
            <p>
              <strong>ARTÍCULO 30. TRANSFERENCIAS INTERNACIONALES:</strong> las Transferencias internacionales se
              realizarán observando las condiciones previstas por la legislación colombiana, incluyendo las reglas
              sobre países con nivel adecuado de protección, autorizaciones, declaraciones de conformidad o
              excepciones legalmente aplicables.
            </p>
            <p>
              <strong>ARTÍCULO 31. TRANSMISIONES INTERNACIONALES:</strong> cuando un proveedor ubicado fuera de
              Colombia realice Tratamiento por cuenta de MAPURA, la relación deberá estructurarse de manera que las
              obligaciones de protección, confidencialidad y seguridad resulten exigibles conforme al régimen
              aplicable.
            </p>

            {/* CAPÍTULO XIII */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XIII — Seguridad de la Información</h3>
            <p>
              <strong>ARTÍCULO 32. MEDIDAS DE SEGURIDAD:</strong> MAPURA adoptará medidas razonables y proporcionales
              al riesgo para proteger la confidencialidad, integridad y disponibilidad de los Datos Personales.
              Estas podrán incluir:
            </p>
            <p>
              <strong>Medidas organizacionales:</strong> políticas internas; acuerdos de confidencialidad;
              capacitación; gestión de permisos; segregación de funciones; procedimientos de ingreso y retiro de
              personal; gestión de proveedores; clasificación de información.
            </p>
            <p>
              <strong>Medidas técnicas:</strong> contraseñas seguras; autenticación multifactor cuando resulte
              disponible y apropiada; actualizaciones de seguridad; antivirus y herramientas de protección; copias de
              respaldo; restricciones de acceso; cifrado cuando resulte apropiado; gestión segura de dispositivos;
              registro de eventos cuando resulte técnicamente viable.
            </p>
            <p>
              <strong>Medidas físicas:</strong> control de acceso a instalaciones; custodia de expedientes;
              restricción de archivos físicos; destrucción segura de documentos; protección de equipos.
            </p>
            <p>
              <strong>ARTÍCULO 33. CONTROL DE ACCESO:</strong> el acceso deberá otorgarse conforme a las funciones y
              al principio de necesidad de conocimiento. Está prohibido:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Compartir credenciales.</li>
              <li>Acceder a expedientes sin necesidad profesional.</li>
              <li>Copiar información para fines personales.</li>
              <li>Remitir documentación a cuentas personales sin autorización.</li>
              <li>Utilizar dispositivos o servicios no autorizados cuando ello genere riesgos injustificados.</li>
              <li>Divulgar información confidencial fuera del marco del asunto correspondiente.</li>
            </ol>
            <p>
              <strong>ARTÍCULO 34. TRABAJO REMOTO:</strong> Cuando se acceda remotamente a información de MAPURA
              deberán mantenerse condiciones adecuadas de confidencialidad y seguridad. Los colaboradores deberán
              evitar, especialmente: dejar equipos desbloqueados; conectarse mediante redes manifiestamente
              inseguras para acceder a información crítica; exponer documentos ante terceros; almacenar expedientes
              indefinidamente en dispositivos personales; imprimir información confidencial sin necesidad.
            </p>

            {/* CAPÍTULO XIV */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XIV — Incidentes de Seguridad</h3>
            <p>
              <strong>ARTÍCULO 35. DEBER DE REPORTE INTERNO:</strong> Toda persona vinculada a MAPURA deberá informar
              inmediatamente cualquier incidente o sospecha de incidente. Constituyen ejemplos: envío de información
              al destinatario equivocado; pérdida de computador o teléfono; acceso no autorizado; phishing; malware;
              pérdida de expedientes; divulgación accidental; hurto de credenciales; eliminación no autorizada;
              exposición pública de archivos; uso indebido de información; carga no autorizada de documentos
              confidenciales en plataformas tecnológicas.
            </p>
            <p>
              <strong>ARTÍCULO 36. PROCEDIMIENTO DE RESPUESTA:</strong> MAPURA procurará ejecutar las siguientes
              etapas:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Detección y reporte.</li>
              <li>Registro del incidente.</li>
              <li>Contención.</li>
              <li>Identificación de información afectada.</li>
              <li>Determinación de Titulares potencialmente afectados.</li>
              <li>Evaluación del impacto y riesgo.</li>
              <li>Preservación de evidencias.</li>
              <li>Recuperación y corrección.</li>
              <li>Determinación de obligaciones de reporte.</li>
              <li>Implementación de acciones preventivas.</li>
              <li>Cierre documentado del incidente.</li>
            </ol>
            <p>
              <strong>ARTÍCULO 37. REPORTE A LA AUTORIDAD:</strong> Cuando exista obligación legal, MAPURA reportará
              los incidentes de seguridad a la Superintendencia de Industria y Comercio mediante los mecanismos y
              dentro de los términos establecidos por la autoridad. La Dirección de Asuntos Legales coordinará el
              análisis jurídico del incidente y la determinación del mecanismo de reporte correspondiente.
            </p>

            {/* CAPÍTULO XV */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">
              CAPÍTULO XV — Inteligencia Artificial, Automatización y Nuevas Tecnologías
            </h3>
            <p>
              <strong>ARTÍCULO 38. PRINCIPIOS PARA EL USO DE INTELIGENCIA ARTIFICIAL:</strong> El uso de sistemas de
              inteligencia artificial deberá observar los principios de protección de Datos Personales, especialmente
              legalidad, finalidad, libertad, seguridad, confidencialidad, necesidad, proporcionalidad, transparencia
              y responsabilidad demostrada. MAPURA promoverá la privacidad desde el diseño en la incorporación de
              herramientas de IA.
            </p>
            <p>
              <strong>ARTÍCULO 39. INFORMACIÓN QUE NO DEBE INCORPORARSE INDISCRIMINADAMENTE A HERRAMIENTAS DE IA:</strong>{" "}
              Los abogados, trabajadores, contratistas y demás colaboradores no podrán cargar indiscriminadamente en
              herramientas públicas o no autorizadas: expedientes completos; bases de datos de clientes; documentos
              sometidos a secreto profesional; historias clínicas; información financiera privada; documentos de
              identidad; información de menores; datos sensibles; secretos empresariales; estrategias procesales;
              contratos confidenciales; claves o credenciales; información cuya divulgación pueda perjudicar al
              cliente o a MAPURA.
            </p>
            <p>
              <strong>ARTÍCULO 40. USO AUTORIZADO DE IA:</strong> Cuando se utilicen herramientas autorizadas deberán
              aplicarse, según el riesgo:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Minimización.</li>
              <li>Anonimización o pseudonimización cuando resulte viable.</li>
              <li>Eliminación de datos innecesarios.</li>
              <li>Control de acceso.</li>
              <li>Revisión de las condiciones del proveedor.</li>
              <li>Verificación humana del resultado.</li>
              <li>Prohibición de asumir automáticamente como correcta una respuesta generada por IA.</li>
              <li>Protección del secreto profesional.</li>
              <li>Evaluación de riesgos cuando la herramienta implique Tratamiento significativo de Datos Personales.</li>
            </ol>
            <p>
              La utilización de inteligencia artificial no traslada al proveedor la responsabilidad profesional del
              abogado ni elimina los deberes de confidencialidad y diligencia de MAPURA.
            </p>
            <p>
              <strong>ARTÍCULO 41. DECISIONES AUTOMATIZADAS:</strong> MAPURA procurará que las decisiones con efectos
              jurídicos o significativamente adversos para una persona no sean adoptadas exclusivamente sobre
              resultados automatizados sin los controles jurídicos y humanos que correspondan.
            </p>

            {/* CAPÍTULO XVI */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XVI — Conservación y Eliminación de Información</h3>
            <p>
              <strong>ARTÍCULO 42. PRINCIPIO DE CONSERVACIÓN LIMITADA:</strong> Los Datos Personales no deberán
              conservarse indefinidamente por mera conveniencia. El término dependerá de: finalidad del Tratamiento;
              duración de la relación contractual; obligaciones legales; prescripción de acciones; deberes contables
              y tributarios; obligaciones profesionales; necesidad probatoria; procesos judiciales o administrativos
              en curso; políticas documentales; ejercicio o defensa de derechos.
            </p>
            <p>
              <strong>ARTÍCULO 43. EXPEDIENTES JURÍDICOS:</strong> Finalizado un asunto, MAPURA podrá conservar el
              expediente durante el término necesario para cumplir obligaciones legales, contractuales y
              profesionales, atender eventuales reclamaciones, acreditar la gestión realizada y ejercer o defender
              derechos. La terminación del contrato con un cliente no genera automáticamente la obligación de
              destruir toda la información relacionada con el asunto.
            </p>
            <p>
              <strong>ARTÍCULO 44. ELIMINACIÓN SEGURA:</strong> Cuando proceda la eliminación se utilizarán
              mecanismos razonables para impedir la recuperación o reconstrucción no autorizada. En documentos
              físicos podrá utilizarse destrucción segura; en soportes digitales, eliminación o mecanismos técnicos
              equivalentes según las características del sistema.
            </p>

            {/* CAPÍTULO XVII */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XVII — Página Web, Cookies y Canales Digitales</h3>
            <p>
              <strong>ARTÍCULO 45. PÁGINA WEB:</strong> MAPURA podrá recolectar Datos Personales mediante:
              formularios de contacto; formularios de vinculación; solicitudes de información; suscripciones;
              registros a eventos; herramientas analíticas; cookies u otras tecnologías similares. Cuando
              corresponda, se informará al usuario acerca del Tratamiento y se habilitarán mecanismos para consultar
              esta Política.
            </p>
            <p>
              <strong>ARTÍCULO 46. COOKIES:</strong> La página web podrá utilizar cookies técnicas necesarias para su
              funcionamiento y, cuando se implementen, cookies analíticas, funcionales o de otras categorías. Cuando
              resulte jurídicamente procedente, MAPURA implementará mecanismos para informar al usuario y gestionar
              sus preferencias.
            </p>
            <p>
              <strong>ARTÍCULO 47. COMUNICACIONES ELECTRÓNICAS:</strong> Los datos de contacto podrán utilizarse
              para comunicaciones relacionadas con: servicios contratados; asuntos jurídicos; novedades
              contractuales; eventos; contenidos jurídicos; actividades académicas; servicios ofrecidos por MAPURA,
              siempre dentro de los límites de las autorizaciones y demás bases jurídicas aplicables. Los Titulares
              podrán solicitar el cese de comunicaciones comerciales cuando resulte procedente.
            </p>

            {/* CAPÍTULO XVIII */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XVIII — Gestión de Talento Humano</h3>
            <p>
              <strong>ARTÍCULO 48. DATOS DE ASPIRANTES:</strong> Los datos suministrados durante procesos de
              selección podrán utilizarse para: evaluar perfiles; verificar referencias; realizar entrevistas;
              efectuar verificaciones permitidas; y gestionar procesos de contratación. Si MAPURA desea conservar
              hojas de vida para futuros procesos, deberá informar dicha finalidad.
            </p>
            <p>
              <strong>ARTÍCULO 49. TRABAJADORES Y CONTRATISTAS:</strong> La información podrá tratarse para:
              vinculación; administración contractual; nómina y pagos; seguridad social; seguridad y salud en el
              trabajo; formación; evaluación; control de acceso; gestión de activos; cumplimiento legal;
              investigaciones internas cuando procedan; y terminación y liquidación de la relación.
            </p>

            {/* CAPÍTULO XIX */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XIX — Proveedores y Clientes Personas Jurídicas</h3>
            <p>
              <strong>ARTÍCULO 50. PERSONAS DE CONTACTO:</strong> Los datos de representantes, trabajadores y
              personas de contacto de clientes y proveedores se tratarán exclusivamente para finalidades relacionadas
              con la correspondiente relación profesional, contractual o comercial y las demás finalidades
              legítimamente informadas.
            </p>

            {/* CAPÍTULO XX */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XX — Registro Nacional de Bases de Datos</h3>
            <p>
              <strong>ARTÍCULO 51. VERIFICACIÓN DE OBLIGACIÓN:</strong> La Dirección de Asuntos Legales verificará
              periódicamente si MAPURA se encuentra dentro de los sujetos obligados a registrar sus Bases de Datos
              en el Registro Nacional de Bases de Datos – RNBD. La ausencia de obligación de inscripción en el RNBD
              no exonera a MAPURA del cumplimiento de las demás obligaciones establecidas en el régimen de protección
              de Datos Personales.
            </p>
            <p>
              <strong>ARTÍCULO 52. ACTUALIZACIONES:</strong> Si MAPURA se encuentra obligada al RNBD, deberá
              implementar un calendario de cumplimiento para: inscripción de nuevas Bases de Datos; actualización de
              información; reporte de reclamos; reporte de incidentes; y actualización de Encargados, canales,
              finalidades y demás información exigible.
            </p>

            {/* CAPÍTULO XXI */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XXI — Formación, Auditoría y Mejora Continua</h3>
            <p>
              <strong>ARTÍCULO 53. CAPACITACIÓN:</strong> MAPURA realizará actividades periódicas de formación en
              protección de Datos Personales. Deberán abordarse especialmente: secreto profesional; seguridad
              digital; phishing; manejo de expedientes; correos electrónicos; datos sensibles; trabajo remoto;
              incidentes; y utilización de inteligencia artificial.
            </p>
            <p>
              <strong>ARTÍCULO 54. INDUCCIÓN:</strong> Las personas que por sus funciones tengan acceso habitual a
              Datos Personales deberán recibir información sobre sus obligaciones de confidencialidad y seguridad
              desde el inicio de su vinculación.
            </p>
            <p>
              <strong>ARTÍCULO 55. AUDITORÍA:</strong> MAPURA podrá efectuar revisiones periódicas para verificar:
              vigencia de autorizaciones y avisos; inventario de Bases de Datos; accesos, proveedores; incidentes y
              reclamos; cumplimiento de políticas; riesgos; herramientas tecnológicas utilizadas; necesidad de
              actualizar el Manual.
            </p>

            {/* CAPÍTULO XXII */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XXII — Evaluación de Impacto y Nuevos Proyectos</h3>
            <p>
              <strong>ARTÍCULO 56. ANÁLISIS PREVIO:</strong> Antes de implementar proyectos que impliquen Tratamiento
              intensivo, masivo, sistemático o particularmente riesgoso de Datos Personales, MAPURA podrá efectuar
              una evaluación previa que considere: finalidad; categorías de datos; Titulares; necesidad;
              proporcionalidad; terceros involucrados; ubicación de los datos; tecnología utilizada; riesgos;
              controles.
            </p>
            <p>
              Deberá prestarse especial atención a proyectos que involucren: datos sensibles; menores; biometría;
              inteligencia artificial; monitoreo sistemático; grandes volúmenes de información; transferencias
              internacionales; elaboración de perfiles.
            </p>

            {/* CAPÍTULO XXIII */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XXIII — Confidencialidad y Secreto Profesional</h3>
            <p>
              <strong>ARTÍCULO 57. INDEPENDENCIA DE OBLIGACIONES:</strong> La existencia de una autorización para el
              Tratamiento de Datos Personales no elimina ni disminuye los deberes de secreto profesional,
              confidencialidad, reserva contractual o reserva legal.
            </p>
            <p>
              <strong>ARTÍCULO 58. INFORMACIÓN DE CLIENTES:</strong> La información conocida por los abogados con
              ocasión de la relación profesional será utilizada exclusivamente dentro de los límites jurídicamente
              permitidos y de acuerdo con las obligaciones profesionales aplicables.
            </p>
            <p>
              <strong>ARTÍCULO 59. TERMINACIÓN DE LA VINCULACIÓN:</strong> La obligación de confidencialidad
              subsistirá después de terminada la relación laboral, contractual, profesional o comercial. Las
              personas que se desvinculen deberán: devolver información y activos; abstenerse de conservar copias
              no autorizadas; eliminar información de dispositivos personales cuando corresponda; mantener la
              reserva de la información conocida.
            </p>

            {/* CAPÍTULO XXIV */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XXIV — Incumplimientos</h3>
            <p>
              <strong>ARTÍCULO 60. INCUMPLIMIENTO INTERNO:</strong> El incumplimiento del presente Manual podrá
              generar las consecuencias laborales, contractuales, disciplinarias o legales correspondientes,
              respetando el debido proceso y la naturaleza de cada relación. La vulneración deliberada de controles
              de seguridad, la consulta injustificada de expedientes, la divulgación no autorizada de información o
              la utilización de Datos Personales para fines personales podrán constituir incumplimientos graves.
            </p>

            {/* CAPÍTULO XXV */}
            <h3 className="text-xl font-black text-[#2C3E50] mt-10">CAPÍTULO XXV — Vigencia y Actualización</h3>
            <p>
              <strong>ARTÍCULO 61. VIGENCIA:</strong> El presente Manual entrará en vigencia a partir del 01 de
              agosto de 2026.
            </p>
            <p>
              <strong>ARTÍCULO 62. ACTUALIZACIÓN:</strong> MAPURA podrá modificar el Manual cuando: cambie la
              legislación; se impartan nuevas instrucciones regulatorias; cambien las actividades de Tratamiento; se
              incorporen nuevas tecnologías; cambien las finalidades; se identifiquen nuevos riesgos; resulte
              necesario fortalecer los controles. Las modificaciones sustanciales a la Política de Tratamiento que
              deban ser conocidas por los Titulares serán comunicadas mediante mecanismos razonables.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-10">
              <h3 className="text-xl font-bold text-[#4EA5A7] mt-0">Contacto</h3>
              <p className="mb-0">
                <strong>Email:</strong> info@grupomapura.co
                <br />
                <strong>Teléfono / WhatsApp:</strong> +57 310 653 7502
                <br />
                <strong>Dirección:</strong> Calle 62 # 25A-28, Las Mercedes, Palmira, Valle del Cauca
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-[#4EA5A7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2C3E50] transition-colors duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
