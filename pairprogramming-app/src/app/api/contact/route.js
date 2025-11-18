import { sendTeamMail, sendAutoResponder } from './mail';


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

    // Enviar el correo al equipo
    await sendTeamMail({ name, email, phone, company, message });

    // Enviar el correo de respuesta automática
    try {
      await sendAutoResponder({ name, email, message });
    } catch (autoErr) {
      console.error('Autoresponder error:', autoErr);
    }

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
