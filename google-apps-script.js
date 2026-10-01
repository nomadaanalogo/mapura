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
      data.tipoDeudaOtro || "",
      data.montoDeuda || "",
      data.ingresoMensual || "",
      data.moraSuperior90 || "",
      data.bienes || "",
      data.bienesOtro || "",
      data.valorActivos || "",
      data.afectacionesInmuebles || "",
      data.procesosCobro || "",
      data.tiposProcesoCobro || "",
      data.mensaje || "",
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
  const tipoDeuda = data.tipoDeudaOtro ? `${data.tiposDeuda} (${data.tipoDeudaOtro})` : data.tiposDeuda
  const bienes = data.bienesOtro ? `${data.bienes} (${data.bienesOtro})` : data.bienes
  const procesosCobro =
    data.procesosCobro === "Sí" && data.tiposProcesoCobro
      ? `${data.procesosCobro} - ${data.tiposProcesoCobro}`
      : data.procesosCobro

  return `
    <p><strong>Tipo de deuda:</strong> ${tipoDeuda || "N/A"}</p>
    <p><strong>Monto de la deuda:</strong> ${data.montoDeuda || "N/A"}</p>
    <p><strong>Ingreso mensual:</strong> ${data.ingresoMensual || "N/A"}</p>
    <p><strong>Mora superior a 90 días:</strong> ${data.moraSuperior90 || "N/A"}</p>
    <p><strong>Bienes:</strong> ${bienes || "N/A"}</p>
    <p><strong>Valor aproximado de activos en Colombia:</strong> ${data.valorActivos || "No especifica"}</p>
    <p><strong>Afectaciones sobre inmuebles:</strong> ${data.afectacionesInmuebles || "N/A"}</p>
    <p><strong>Procesos de cobro iniciados:</strong> ${procesosCobro || "N/A"}</p>
    <p><strong>Descripción del caso:</strong> ${data.mensaje || "N/A"}</p>
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
    tiposDeuda: "Tarjeta de crédito",
    montoDeuda: "$50,000,000",
    ingresoMensual: "$3,000,000",
    moraSuperior90: "Sí",
    bienes: "Vivienda, Vehículo",
    valorActivos: "$200,000,000",
    afectacionesInmuebles: "No tiene medidas cautelares",
    procesosCobro: "No",
    mensaje: "Tengo varias deudas atrasadas y me están llamando a cobrar.",
  }

  enviarEmailCliente(dataPrueba)
  enviarNotificacionMapura(dataPrueba)
}
