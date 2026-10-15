const BIENVENIDA_URL = "https://grupomapura.co/bienvenida"

const SHEET_INSOLVENCIA = "Insolvencia"
const SHEET_SERVICIOS = "Otros Servicios"

const HEADERS_INSOLVENCIA = [
  "Fecha",
  "Nombre",
  "Teléfono",
  "Email",
  "Tipo(s) de deuda",
  "2+ deudas con mora > 90 días",
  "Valor total de las deudas",
  "Procesos de cobro iniciados",
  "Tipos de proceso de cobro",
]

const HEADERS_SERVICIOS = ["Fecha", "Nombre", "Teléfono", "Email", "Servicio de interés", "Mensaje"]

function doPost(e) {
  try {
    // Los formularios envían x-www-form-urlencoded: Apps Script lo parsea
    // automáticamente en e.parameter (NO es JSON, por eso no usamos JSON.parse).
    const data = e.parameter

    if (esInsolvencia(data)) {
      const sheet = getOrCreateSheet(SHEET_INSOLVENCIA, HEADERS_INSOLVENCIA)
      sheet.appendRow([
        new Date(),
        data.nombre || "",
        data.telefono || "",
        data.email || "",
        data.tiposDeuda || "",
        data.mora2Deudas90 || "",
        data.valorTotalDeudas || "",
        data.procesosCobro || "",
        data.tiposProcesoCobro || "",
      ])
    } else {
      const sheet = getOrCreateSheet(SHEET_SERVICIOS, HEADERS_SERVICIOS)
      sheet.appendRow([new Date(), data.nombre || "", data.telefono || "", data.email || "", data.servicio || "", data.mensaje || ""])
    }

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

function getOrCreateSheet(name, headers) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = spreadsheet.getSheetByName(name)

  if (!sheet) {
    sheet = spreadsheet.insertSheet(name)
    sheet.appendRow(headers)
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold")
    sheet.setFrozenRows(1)
  }

  return sheet
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

const WHATSAPP_URL = "https://wa.me/573106537502"

// Escapa los datos que escribe el usuario antes de meterlos en el HTML del correo.
function esc(valor) {
  return String(valor == null ? "" : valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function filasResumenCliente(data) {
  const filas = [["Teléfono", data.telefono]]

  if (esInsolvencia(data)) {
    const procesosCobro =
      data.procesosCobro === "Sí" && data.tiposProcesoCobro
        ? `${data.procesosCobro} - ${data.tiposProcesoCobro}`
        : data.procesosCobro
    filas.push(
      ["Tipo(s) de deuda", data.tiposDeuda],
      ["2 o más deudas con mora mayor a 90 días", data.mora2Deudas90],
      ["Valor total de las deudas", data.valorTotalDeudas],
      ["Procesos de cobro iniciados", procesosCobro],
    )
  } else {
    filas.push(["Servicio de interés", data.servicio], ["Mensaje", data.mensaje])
  }

  return filas
    .map(
      ([label, valor], i) => `
        <tr>
          <td style="padding: 14px 0; ${i > 0 ? "border-top: 1px solid #DCEBED;" : ""}">
            <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; color: #3B8F99;">${label}</p>
            <p style="margin: 0; font-size: 17px; line-height: 1.5; color: #1B2A3A;">${esc(valor) || "N/A"}</p>
          </td>
        </tr>`,
    )
    .join("")
}

// Botón "a prueba de balas": se ve bien aunque el cliente de correo bloquee imágenes.
function botonEmail(url, texto, fondo) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td align="center" bgcolor="${fondo}" style="background-color: ${fondo}; border-radius: 14px;">
          <a href="${url}" target="_blank" style="display: block; padding: 20px 24px; font-family: Arial, sans-serif; font-size: 20px; font-weight: bold; color: #ffffff; text-decoration: none;">
            ${texto}
          </a>
        </td>
      </tr>
    </table>`
}

function enviarEmailCliente(data) {
  const asunto = "Hemos recibido tu solicitud - Mapura"
  const nombre = esc((data.nombre || "").trim().split(" ")[0])

  // Bloque de video de bienvenida (solo insolvencia). Todo es HTML/CSS, sin imágenes,
  // para que se vea bien aunque el correo bloquee las imágenes.
  const videoHtml = esInsolvencia(data)
    ? `
      <tr>
        <td style="padding: 8px 32px 8px 32px;">
          <p style="margin: 0 0 14px 0; font-size: 13px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; color: #3B8F99;">
            Video de bienvenida &nbsp;&mdash;&mdash;&mdash;
          </p>
          <h1 style="margin: 0 0 16px 0; font-size: 34px; line-height: 1.15; font-weight: 900; color: #1B2A3A;">
            Conoce más
            <span style="color: #3B8F99;">sobre nuestro equipo y cómo te acompañamos</span>
          </h1>
          <p style="margin: 0 0 24px 0; font-size: 18px; line-height: 1.6; color: #4A5A6A;">
            La Dra. Claudia Zapata Mapura te da la bienvenida y te cuenta cómo trabajamos para ayudarte a recuperar tu
            tranquilidad financiera.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 32px;">
          <a href="${BIENVENIDA_URL}" target="_blank" style="text-decoration: none; display: block;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#1F5F6E"
              style="background-color: #1F5F6E; background-image: linear-gradient(135deg, #2C3E50 0%, #1F5F6E 55%, #4EA5A7 100%); border-radius: 18px;">
              <tr>
                <td align="center" style="padding: 48px 24px 18px 24px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center" valign="middle" width="88" height="88" bgcolor="#ffffff"
                        style="width: 88px; height: 88px; background-color: #ffffff; border-radius: 44px; font-size: 32px; line-height: 88px; color: #1B2A3A; text-align: center;">
                        &#9654;
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding: 0 24px 36px 24px; font-size: 16px; font-weight: bold; color: #ffffff; letter-spacing: 0.5px;">
                  Un mensaje de la Dra. Claudia Zapata Mapura para ti
                </td>
              </tr>
              <tr>
                <td align="right" style="padding: 0 16px 16px 16px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="background-color: #ffffff; border-radius: 12px;">
                    <tr>
                      <td style="padding: 12px 18px; text-align: left;">
                        <p style="margin: 0; font-size: 15px; font-weight: bold; color: #1B2A3A;">Dra. Claudia Zapata Mapura</p>
                        <p style="margin: 2px 0 0 0; font-size: 13px; color: #3B8F99;">Experta en Ley de Insolvencia</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding: 24px 32px 0 32px;">
          ${botonEmail(BIENVENIDA_URL, "&#9654;&nbsp;&nbsp;Reproducir video&nbsp;&nbsp;&rsaquo;", "#0F6577")}
          <p style="margin: 10px 0 0 0; text-align: center; font-size: 14px; color: #6B7A88;">Haz clic para ver el video completo</p>
        </td>
      </tr>
    `
    : ""

  const mensaje = `
    <html>
      <body style="margin: 0; padding: 0; background-color: #EEF6F7;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#EEF6F7" style="background-color: #EEF6F7;">
          <tr>
            <td align="center" style="padding: 28px 12px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ffffff"
                style="max-width: 600px; background-color: #ffffff; border-radius: 22px; font-family: Arial, Helvetica, sans-serif; color: #2C3E50;">

                <!-- Marca (en texto, no imagen) -->
                <tr>
                  <td style="padding: 32px 32px 0 32px;">
                    <p style="margin: 0; font-size: 30px; font-weight: bold; line-height: 1.1; color: #1B2A3A; letter-spacing: -0.5px;">
                      <span style="color: #4EA5A7;">&#9670;</span> Mapura
                    </p>
                    <p style="margin: 2px 0 0 30px; font-size: 13px; color: #4EA5A7;">grupo consultor</p>
                  </td>
                </tr>

                <!-- Saludo -->
                <tr>
                  <td style="padding: 24px 32px 28px 32px;">
                    <p style="margin: 0 0 10px 0; font-size: 26px; font-weight: bold; line-height: 1.25; color: #1B2A3A;">
                      ¡Gracias por contactarnos, ${nombre}!
                    </p>
                    <p style="margin: 0; font-size: 18px; line-height: 1.6; color: #4A5A6A;">
                      Recibimos tu solicitud. Nuestro equipo revisará tu caso y te contactará lo más pronto posible.
                    </p>
                  </td>
                </tr>

                ${videoHtml}

                <!-- Lo que llenó en el formulario -->
                <tr>
                  <td style="padding: 36px 32px 0 32px;">
                    <p style="margin: 0 0 12px 0; font-size: 13px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; color: #3B8F99;">
                      Resumen de tu solicitud
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#F4FAFA"
                      style="background-color: #F4FAFA; border-radius: 16px;">
                      <tr>
                        <td style="padding: 6px 24px;">
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                            ${filasResumenCliente(data)}
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Llamado a la acción -->
                <tr>
                  <td style="padding: 36px 32px 0 32px;">
                    <p style="margin: 0 0 6px 0; font-size: 24px; font-weight: bold; line-height: 1.3; color: #1B2A3A;">
                      ¿No quieres esperar?
                    </p>
                    <p style="margin: 0 0 20px 0; font-size: 17px; line-height: 1.6; color: #4A5A6A;">
                      Escríbenos ahora mismo por WhatsApp y empezamos a revisar tu caso.
                    </p>
                    ${botonEmail(WHATSAPP_URL, "Hablar por WhatsApp&nbsp;&nbsp;&rsaquo;", "#22C55E")}
                    <p style="margin: 14px 0 0 0; text-align: center; font-size: 15px; color: #6B7A88;">
                      +57 310 653 7502 &nbsp;&middot;&nbsp; Info@grupomapura.co
                    </p>
                  </td>
                </tr>

                <!-- Cierre -->
                <tr>
                  <td style="padding: 32px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#2C3E50"
                      style="background-color: #2C3E50; border-radius: 16px;">
                      <tr>
                        <td style="padding: 24px;">
                          <p style="margin: 0 0 10px 0; font-size: 17px; line-height: 1.6; color: #ffffff;">
                            Con más de <strong style="color: #7FD3D5;">13 años de experiencia</strong> y
                            <strong style="color: #7FD3D5;">500+ casos resueltos</strong>, estamos aquí para ayudarte a
                            recuperar tu tranquilidad financiera.
                          </p>
                          <p style="margin: 0; font-size: 16px; font-weight: bold; color: #7FD3D5;">Equipo Mapura Grupo Consultor</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="max-width: 600px; margin: 16px auto 0 auto; font-family: Arial, sans-serif; font-size: 12px; color: #8A9AA8; text-align: center;">
                Este es un mensaje automático. Por favor no respondas a este correo.
              </p>
            </td>
          </tr>
        </table>
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

// Función de prueba (opcional) — crea una fila de ejemplo en cada hoja.
function testEmail() {
  const dataInsolvencia = {
    tipo: "Insolvencia",
    nombre: "Juan Pérez",
    telefono: "3001234567",
    email: "juan@example.com",
    tiposDeuda: "Tarjeta de crédito, Hipotecario",
    mora2Deudas90: "Sí",
    valorTotalDeudas: "$50,000,000",
    procesosCobro: "No",
  }

  const dataServicios = {
    tipo: "General",
    nombre: "María Gómez",
    telefono: "3009876543",
    email: "maria@example.com",
    servicio: "Derecho de Familia",
    mensaje: "Necesito asesoría sobre un proceso de divorcio.",
  }

  enviarEmailCliente(dataInsolvencia)
  enviarNotificacionMapura(dataInsolvencia)
  enviarEmailCliente(dataServicios)
  enviarNotificacionMapura(dataServicios)
}

// Prueba del diseño del correo al cliente: envía las dos versiones (insolvencia y otros
// servicios) a comercialmapuragc@gmail.com. No escribe nada en la hoja de cálculo.
// En el editor de Apps Script: elige "testEmailDisenoCliente" en el menú de funciones y dale Ejecutar.
function testEmailDisenoCliente() {
  const correoPrueba = "comercialmapuragc@gmail.com"

  enviarEmailCliente({
    tipo: "Insolvencia",
    nombre: "Juan Pérez (PRUEBA)",
    telefono: "3001234567",
    email: correoPrueba,
    tiposDeuda: "Tarjeta de crédito, Crédito de libre inversión",
    mora2Deudas90: "Sí",
    valorTotalDeudas: "Entre $50 y $100 millones",
    procesosCobro: "Sí",
    tiposProcesoCobro: "Embargo",
  })

  enviarEmailCliente({
    tipo: "General",
    nombre: "María Gómez (PRUEBA)",
    telefono: "3009876543",
    email: correoPrueba,
    servicio: "Derecho de Familia",
    mensaje: "Necesito asesoría sobre un proceso de divorcio.",
  })
}
