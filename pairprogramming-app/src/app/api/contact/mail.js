import nodemailer from 'nodemailer';

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error('SMTP not configured. Missing SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS');
  }

  const secure = port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function sendTeamMail({ name, email, phone, company, message }) {
  const transporter = createTransporter();
  const user = process.env.SMTP_USER;
  const to = process.env.TO_EMAIL;

  const subject = `Nuevo mensaje de contacto desde la web: ${name}`;
  const text = `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || '-'}\nEmpresa: ${company || '-'}\n\nMensaje:\n${message}`;
  const html = `
    <div style="background-color:#010102;padding:0;margin:0;width:100%">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#010102;font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif">
        <tr><td align="center" style="padding:40px 20px">
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">
            <!-- Header -->
            <tr><td style="padding:0 0 32px 0">
              <table cellpadding="0" cellspacing="0"><tr>
                <td style="width:24px;height:24px"><img src="https://www.pairprogramming.com.ar/favicon.ico" width="24" height="24" alt="PP" style="display:block;border:0;border-radius:4px" /></td>
                <td style="padding-left:10px;font-size:15px;font-weight:600;color:#f7f8f8;letter-spacing:-0.3px">PairProgramming</td>
              </tr></table>
            </td></tr>
            <!-- Card -->
            <tr><td style="background-color:#0f1011;border:1px solid #23252a;border-radius:12px;padding:32px">
              <p style="font-size:11px;font-weight:500;text-transform:uppercase;letter-spacing:1.5px;color:#5e6ad2;margin:0 0 8px 0">Nuevo contacto</p>
              <h2 style="font-size:22px;font-weight:600;color:#f7f8f8;margin:0 0 24px 0;letter-spacing:-0.5px">${name}</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #23252a">
                    <span style="font-size:12px;color:#62666d;text-transform:uppercase;letter-spacing:0.5px">Email</span><br/>
                    <a href="mailto:${email}" style="font-size:14px;color:#828fff;text-decoration:none">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #23252a">
                    <span style="font-size:12px;color:#62666d;text-transform:uppercase;letter-spacing:0.5px">Teléfono</span><br/>
                    <span style="font-size:14px;color:#d0d6e0">${phone || '-'}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #23252a">
                    <span style="font-size:12px;color:#62666d;text-transform:uppercase;letter-spacing:0.5px">Empresa</span><br/>
                    <span style="font-size:14px;color:#d0d6e0">${company || '-'}</span>
                  </td>
                </tr>
              </table>
              <div style="margin-top:20px;padding:16px;background-color:#141516;border:1px solid #23252a;border-radius:8px">
                <p style="font-size:12px;color:#62666d;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 8px 0">Mensaje</p>
                <p style="font-size:14px;color:#d0d6e0;line-height:1.6;margin:0;white-space:pre-wrap">${message.replace(/\n/g, '<br/>')}</p>
              </div>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </div>
  `;

  return transporter.sendMail({
    from: `${name} <${user}>`,
    to,
    subject,
    text,
    html,
  });
}

export async function sendAutoResponder({ name, email, message }) {
  const transporter = createTransporter();
  const user = process.env.SMTP_USER;
  const to = process.env.TO_EMAIL; // reply-to

  const autoSubject = `Gracias por contactarte, ${name} — PairProgramming`;
  const now = new Date().toLocaleString();
  const autoText = `Hola ${name},\n\nGracias por contactarte con nosotros. Recibimos tu mensaje y te vamos a responder lo antes posible.\n\nResumen de tu mensaje:\n${message}\n\nMientras tanto, podes ver nuestro portafolio en https://www.pairprogramming.com.ar/portafolio\n\nSaludos,\nEsteban Aleart\nFounder & Lead Engineer — PairProgramming\n\n---\n\nHi ${name},\n\nThank you for reaching out. We received your message and will get back to you shortly.\n\nYour message:\n${message}\n\nIn the meantime, check out our portfolio at https://www.pairprogramming.com.ar/portafolio\n\nBest,\nEsteban Aleart\nFounder & Lead Engineer — PairProgramming`;

  const autoHtml = `
    <div style="background-color:#010102;padding:0;margin:0;width:100%">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#010102;font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif">
        <tr><td align="center" style="padding:40px 20px">
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

            <!-- Header -->
            <tr><td style="padding:0 0 32px 0">
              <table cellpadding="0" cellspacing="0"><tr>
                <td style="width:24px;height:24px"><img src="https://www.pairprogramming.com.ar/favicon.ico" width="24" height="24" alt="PP" style="display:block;border:0;border-radius:4px" /></td>
                <td style="padding-left:10px;font-size:15px;font-weight:600;color:#f7f8f8;letter-spacing:-0.3px">PairProgramming</td>
              </tr></table>
            </td></tr>

            <!-- Main Card -->
            <tr><td style="background-color:#0f1011;border:1px solid #23252a;border-radius:12px;padding:32px">

              <!-- Greeting ES -->
              <p style="font-size:11px;font-weight:500;text-transform:uppercase;letter-spacing:1.5px;color:#5e6ad2;margin:0 0 16px 0">Gracias por contactarte</p>
              <h2 style="font-size:24px;font-weight:600;color:#f7f8f8;margin:0 0 8px 0;letter-spacing:-0.5px">Hola ${name},</h2>
              <p style="font-size:15px;color:#d0d6e0;line-height:1.6;margin:0 0 24px 0">
                Recibimos tu mensaje y te vamos a responder lo antes posible. Nuestro equipo ya fue notificado.
              </p>

              <!-- Message summary -->
              <div style="margin:0 0 24px 0;padding:16px;background-color:#141516;border:1px solid #23252a;border-radius:8px">
                <p style="font-size:11px;color:#62666d;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0">Tu mensaje</p>
                <p style="font-size:14px;color:#8a8f98;line-height:1.6;margin:0;font-style:italic">${message.replace(/\n/g, '<br/>')}</p>
              </div>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" style="margin:0 0 24px 0"><tr>
                <td style="background-color:#5e6ad2;border-radius:8px;padding:12px 24px">
                  <a href="https://www.pairprogramming.com.ar/portafolio" style="font-size:14px;font-weight:500;color:#ffffff;text-decoration:none">Ver nuestro portafolio</a>
                </td>
              </tr></table>

              <!-- Divider -->
              <div style="border-top:1px solid #23252a;margin:0 0 24px 0"></div>

              <!-- Greeting EN -->
              <p style="font-size:11px;font-weight:500;text-transform:uppercase;letter-spacing:1.5px;color:#5e6ad2;margin:0 0 16px 0">Thank you for reaching out</p>
              <h2 style="font-size:24px;font-weight:600;color:#f7f8f8;margin:0 0 8px 0;letter-spacing:-0.5px">Hi ${name},</h2>
              <p style="font-size:15px;color:#d0d6e0;line-height:1.6;margin:0 0 24px 0">
                We received your message and will get back to you shortly. Our team has been notified.
              </p>

              <!-- Signature -->
              <div style="border-top:1px solid #23252a;padding-top:24px">
                <table cellpadding="0" cellspacing="0"><tr>
                  <td style="width:40px;height:40px;background-color:#5e6ad2;border-radius:8px;text-align:center;vertical-align:middle">
                    <span style="font-size:16px;font-weight:600;color:#ffffff">EA</span>
                  </td>
                  <td style="padding-left:12px">
                    <p style="font-size:14px;font-weight:600;color:#f7f8f8;margin:0">Esteban Aleart</p>
                    <p style="font-size:12px;color:#62666d;margin:2px 0 0 0">Founder & Lead Engineer — PairProgramming</p>
                  </td>
                </tr></table>
              </div>

            </td></tr>

            <!-- Footer -->
            <tr><td style="padding:24px 0 0 0;text-align:center">
              <p style="font-size:12px;color:#62666d;margin:0 0 4px 0">
                <a href="https://www.pairprogramming.com.ar" style="color:#5e6ad2;text-decoration:none">pairprogramming.com.ar</a>
              </p>
              <p style="font-size:11px;color:#62666d;margin:0">${now}</p>
            </td></tr>

          </table>
        </td></tr>
      </table>
    </div>
  `;

  return transporter.sendMail({
    from: `PairProgramming <${user}>`,
    to: email,
    subject: autoSubject,
    text: autoText,
    html: autoHtml,
    replyTo: to,
  });
}
