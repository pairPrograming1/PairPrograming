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
    <div style="font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111827; line-height:1.4">
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone || '-'}</p>
      <p><strong>Empresa:</strong> ${company || '-'}</p>
      <hr/>
      <p>${message.replace(/\n/g, '<br/>')}</p>
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

  const autoSubject = `Recibimos tu mensaje / We received your message`;
  const now = new Date().toLocaleString();
  const autoText = `Hola ${name},\n\nHemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.\n\nResumen:\n${message}\n\nGracias,\nEl equipo de Pair Programming\n\n---\n\nHello ${name},\n\nWe have received your message and will get back to you as soon as possible.\n\nSummary:\n${message}\n\nThanks,\nThe Pair Programming team`;

  const autoHtml = `
    <div style="font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111827; line-height:1.4">
      <h2 style="color:#0f172a">Hemos recibido tu mensaje</h2>
      <p>Hola ${name},</p>
      <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
      <h3>Resumen / Summary</h3>
      <blockquote style="background:#f8fafc;border-left:4px solid #e2e8f0;padding:10px">${message.replace(/\n/g, '<br/>')}</blockquote>
      <p>Gracias,<br/><strong>Equipo Pair Programming</strong></p>
      <hr/>
      <h2 style="color:#0f172a">We received your message</h2>
      <p>Hello ${name},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <h3>Summary / Resumen</h3>
      <blockquote style="background:#f8fafc;border-left:4px solid #e2e8f0;padding:10px">${message.replace(/\n/g, '<br/>')}</blockquote>
      <p>Thanks,<br/><strong>Pair Programming team</strong></p>
      <p style="font-size:12px;color:#6b7280">Sent: ${now}</p>
    </div>
  `;

  return transporter.sendMail({
    from: `Pair Programming <${user}>`,
    to: email,
    subject: autoSubject,
    text: autoText,
    html: autoHtml,
    replyTo: to,
  });
}
