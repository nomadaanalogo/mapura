const YOUTUBE_URL = "https://youtube.com/@ccmgrupoconsultor?si=n10-x9GuDYLEEVj4"

function doPost(e) {
  try {
    // Los formularios envían x-www-form-urlencoded: Apps Script lo parsea
    // automáticamente en e.parameter (NO es JSON, por eso no usamos JSON.parse).
    const data = e.parameter

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

    sheet.appendRow([
      new Date(), // Fecha y hora
      data.tipo || "",
      data.nombre || "",
      data.telefono || "",
      data.email || "",
      data.servicio || "", // Solo formulario General
      data.tiposDeuda || "",
      data.mora2Deudas90 || "",
      data.valorTotalDeudas || "",
      data.procesosCobro || "",
      data.tiposProcesoCobro || "",
      data.mensaje || "", // Solo formulario General
    ])

    enviarEmailCliente(data)
    enviarNotificacionMapura(data)

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Datos guardados correctamente",
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

function esInsolvencia(data) {
  return data.tipo === "Insolvencia"
}

function resumenInsolvenciaHtml(data) {
  const procesosCobro =
    data.procesosCobro === "Sí" && data.tiposProcesoCobro
      ? `${data.procesosCobro} - ${data.tiposProcesoCobro}`
      : data.procesosCobro

  return `
    <p><strong>Tipo(s) de deuda:</strong> ${data.tiposDeuda || "N/A"}</p>
    <p><strong>Dos o más deudas con mora superior a 90 días:</strong> ${data.mora2Deudas90 || "N/A"}</p>
    <p><strong>Valor total de las deudas:</strong> ${data.valorTotalDeudas || "N/A"}</p>
    <p><strong>Procesos de cobro iniciados:</strong> ${procesosCobro || "N/A"}</p>
  `
}

function enviarEmailCliente(data) {
  const asunto = "Hemos recibido tu solicitud - Mapura"

  const resumen = esInsolvencia(data)
    ? resumenInsolvenciaHtml(data)
    : `
      <p><strong>Servicio de interés:</strong> ${data.servicio || "N/A"}</p>
      <p><strong>Mensaje:</strong> ${data.mensaje || "N/A"}</p>
    `

  // Video de bienvenida: por ahora enlaza al canal de YouTube de Mapura.
  // Reemplazar YOUTUBE_URL arriba por el link del video de contacto
  // "titulado email" cuando el equipo lo entregue.
  const videoHtml = esInsolvencia(data)
    ? `
      <div style="text-align: center; margin: 24px 0;">
        <a href="${YOUTUBE_URL}" style="text-decoration: none;">
          <img
            src="https://grupomapura.co/images/dr-mapura-office.webp"
            alt="Video de bienvenida de Mapura"
            style="max-width: 100%; border-radius: 10px; display: block; margin: 0 auto;"
          />
          <p style="color: #4EA5A7; font-weight: bold; margin-top: 10px;">▶ Mira el video de bienvenida de la Dra. Claudia Mapura</p>
        </a>
      </div>
    `
    : ""

  const mensaje = `
    <html>
      <body style="font-family: Arial, sans-serif; color: #2C3E50;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4EA5A7;">¡Gracias por contactarnos, ${data.nombre}!</h2>

          <p>Hemos recibido tu solicitud y nos alegra que hayas confiado en nosotros.</p>

          <p>Nuestro equipo de profesionales revisará tu caso y se pondrá en contacto contigo lo más pronto posible.</p>

          <div style="background-color: #f0f9f9; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #4EA5A7; margin-top: 0;">Resumen de tu solicitud:</h3>
            <p><strong>Teléfono:</strong> ${data.telefono}</p>
            ${resumen}
          </div>

          ${videoHtml}

          <p>Mientras tanto, si tienes alguna pregunta urgente, puedes contactarnos:</p>
          <ul>
            <li>📞 WhatsApp: +57 3106537502</li>
            <li>📧 Email: Info@grupomapura.co</li>
          </ul>

          <p style="margin-top: 30px;">Con más de 13 años de experiencia y 500+ casos resueltos, estamos aquí para ayudarte a recuperar tu tranquilidad financiera.</p>

          <p style="color: #4EA5A7; font-weight: bold;">Atentamente,<br>Equipo Mapura Grupo Consultor</p>

          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">

          <p style="font-size: 12px; color: #888;">
            Este es un mensaje automático. Por favor no respondas a este correo.
          </p>
        </div>
      </body>
    </html>
  `

  MailApp.sendEmail({
    to: data.email,
    subject: asunto,
    htmlBody: mensaje,
  })
}

function enviarNotificacionMapura(data) {
  const asunto = esInsolvencia(data)
    ? "Nueva solicitud de Insolvencia - Mapura"
    : "Nueva solicitud de cliente - Mapura"

  const resumen = esInsolvencia(data)
    ? resumenInsolvenciaHtml(data)
    : `
      <p><strong>Servicio de interés:</strong> ${data.servicio || "N/A"}</p>
      <p><strong>Mensaje:</strong> ${data.mensaje || "N/A"}</p>
    `

  const mensaje = `
    <html>
      <body style="font-family: Arial, sans-serif; color: #2C3E50;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4EA5A7;">Nueva Solicitud Recibida</h2>

          <div style="background-color: #f0f9f9; padding: 20px; border-radius: 10px;">
            <h3 style="color: #2C3E50; margin-top: 0;">Información del Cliente:</h3>

            <p><strong>Nombre:</strong> ${data.nombre}</p>
            <p><strong>Teléfono:</strong> ${data.telefono}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${resumen}
            <p><strong>Fecha de solicitud:</strong> ${new Date().toLocaleString("es-CO")}</p>
          </div>

          <p style="margin-top: 20px; color: #4EA5A7; font-weight: bold;">
            Por favor, contacta al cliente lo antes posible.
          </p>
        </div>
      </body>
    </html>
  `

  MailApp.sendEmail({
    to: "comercialmapuragc@gmail.com",
    subject: asunto,
    htmlBody: mensaje,
  })
}

// Función de prueba (opcional)
function testEmail() {
  const dataPrueba = {
    tipo: "Insolvencia",
    nombre: "Juan Pérez",
    telefono: "3001234567",
    email: "juan@example.com",
    tiposDeuda: "Tarjeta de crédito, Hipotecario",
    mora2Deudas90: "Sí",
    valorTotalDeudas: "$50,000,000",
    procesosCobro: "No",
  }

  enviarEmailCliente(dataPrueba)
  enviarNotificacionMapura(dataPrueba)
}
