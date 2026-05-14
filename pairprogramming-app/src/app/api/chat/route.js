import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `Sos el asistente virtual de PairProgramming, un estudio de desarrollo web full-stack fundado por Esteban Aleart en 2022, ubicado en Argentina.

REGLAS ESTRICTAS:
- Solo responde sobre los servicios, tecnologias y el trabajo de PairProgramming.
- No respondas preguntas que no tengan relacion con PairProgramming o desarrollo de software en general.
- Si preguntan algo fuera de tema, decí: "Eso esta fuera de mi area. Puedo ayudarte con nuestros servicios de desarrollo. Si necesitas otra cosa, contactanos en /contacto."
- Respuestas CORTAS: maximo 2-3 oraciones. Sin listas largas.
- No inventes datos, precios exactos ni plazos. Si piden precio o plazo, decí: "Depende del proyecto. Contactanos en /contacto para una cotizacion personalizada."
- No hables de competidores ni recomiendes otras empresas.
- Podes responder en español o ingles segun el idioma del usuario.
- Tono profesional pero cercano. Sin emojis excesivos.
- Si piden hablar con alguien, decí: "Podes contactarnos por /contacto o por WhatsApp."

SERVICIOS QUE OFRECEMOS:
1. Arquitectura B2B SaaS — plataformas multi-tenant, billing, feature flags
2. Productos Digitales — apps web, moviles, dashboards, MVPs
3. CRM y Automatizacion — Salesforce, HubSpot, integraciones custom
4. Automatizacion con n8n — workflows, integraciones, scraping
5. Cloud y DevOps — AWS, Vercel, CI/CD, Docker, monitoreo
6. SEO y Contenido — posicionamiento, schema markup, contenido programatico
7. Modernizacion Legacy — migracion a stack moderno, refactoring
8. QA y Performance — testing, Lighthouse, optimizacion
9. Branding e Identidad — diseño de marca, UI/UX, sistemas de diseño

STACK PRINCIPAL: Next.js, React, TypeScript, Node.js, PostgreSQL, Tailwind CSS, AWS, Vercel

PROYECTOS DESTACADOS (solo mencionar si preguntan):
- Mi Seguro — portal de seguros online (cotizador multi-aseguradora)
- Tontin — extension de navegador con IA (open source)
- Segimed — plataforma de telemedicina
- TicketXEvent — venta de entradas con QR
- TaskManager — gestion de proyectos con Kanban
- DoctorCar — gestion para brokers de seguros

EQUIPO: Esteban Aleart (Founder & Lead Engineer) + Mauricio Bou (Operations & Sales)
WEB: https://www.pairprogramming.com.ar`;

async function callGroq(messages) {
  const key = process.env.GROQ_KEY_4;
  if (!key) return null;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.3,
      max_tokens: 256,
      stream: false,
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    console.warn(`Groq ${res.status}: ${err.slice(0, 200)}`);
    return null;
  }

  const data = await res.json();
  return data?.choices?.[0]?.message?.content || null;
}

async function callGemini(messages) {
  const key = process.env.GEMINI_KEY_4 || process.env.GOOGLE_AI_API_KEY;
  if (!key) return null;

  // Convert chat messages to Gemini contents format
  const contents = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

  const systemInstruction = messages.find((m) => m.role === "system");

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents,
        systemInstruction: systemInstruction
          ? { parts: [{ text: systemInstruction.content }] }
          : undefined,
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 256,
        },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    console.warn(`Gemini ${res.status}: ${err.slice(0, 200)}`);
    return null;
  }

  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
}

export async function POST(req) {
  try {
    const { message, history = [] } = await req.json();

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Missing message" }, { status: 400 });
    }

    // Build messages array
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.slice(-6).map((m) => ({
        role: m.role === "bot" ? "assistant" : "user",
        content: m.text,
      })),
      { role: "user", content: message.trim() },
    ];

    // Try Groq first (faster), then Gemini Flash fallback
    let text = await callGroq(messages);

    if (!text) {
      console.log("Groq unavailable, falling back to Gemini Flash");
      text = await callGemini(messages);
    }

    if (!text) {
      return NextResponse.json({
        text: "Estoy teniendo problemas tecnicos. Por favor, contactanos directamente en /contacto.",
      });
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error("/api/chat error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
