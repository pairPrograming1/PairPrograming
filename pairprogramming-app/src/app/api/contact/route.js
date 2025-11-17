import nodemailer from 'nodemailer';

// POST /api/contact
export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, company, message } = data || {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.TO_EMAIL; // destination email

    if (!host || !port || !user || !pass || !to) {
      return new Response(JSON.stringify({ ok: false, error: 'SMTP not configured on server' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = `Nuevo mensaje de contacto desde la web: ${name}`;
    const text = `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || '-'}\nEmpresa: ${company || '-'}\n\nMensaje:\n${message}`;
    const html = `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Teléfono:</strong> ${phone || '-'}</p><p><strong>Empresa:</strong> ${company || '-'}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`;

    await transporter.sendMail({
      from: `${name} <${user}>`,
      to,
      subject,
      text,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error in /api/contact:', err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
