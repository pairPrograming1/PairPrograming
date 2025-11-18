import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const body = await req.json();
    const { message, history = [] } = body || {};

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Missing message" }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server AI key not configured" }, { status: 503 });
    }

    // Build system prompt similar to previous client-side code
    const systemPrompt = `Eres Botie, un asistente virtual especializado en desarrollo de software para la empresa PairProgramming. Responde en español, sé técnico y amable.`;

    const recent = history
      .slice(-4)
      .map((m) => `${m.sender === "user" ? "Usuario" : "Asistente"}: ${m.text}`)
      .join("\n");

    const fullPrompt = `${systemPrompt}\n\nHistorial reciente:\n${recent}\nUsuario: ${message}\nAsistente:`;

    try {
     
      const { GoogleGenerativeAI } = await import("@google/generative-ai");
      const client = new GoogleGenerativeAI({ apiKey });
      const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateText({
        temperature: 0.2,
        maxOutputTokens: 512,
        prompt: fullPrompt,
      });

      const text = result?.candidates?.[0]?.content?.[0]?.text || result?.text || "";
      return NextResponse.json({ text });
    } catch (err) {
      // Fallback: call REST endpoint using apiKey (works if client library not installed)
      try {
        // Prefer service-account OAuth bearer token if provided in env.
        const saJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
        const useServiceAccount = !!saJson;

        const candidateModels = [
          { name: "gemini-2.0-flash", mode: "content" },
          { name: "gemini-1.5-flash", mode: "content" },
          { name: "text-bison-001", mode: "text" },
        ];

        const payloadFor = (mode) => {
          if (mode === "content") {
            // generateContent expects the `contents` structure; avoid extra top-level fields
            // (some models reject unknown top-level params like temperature/candidateCount)
            return {
              contents: [
                {
                  parts: [{ text: fullPrompt }],
                },
              ],
            };
          }

          // text mode (generateText) accepts temperature and maxOutputTokens
          return {
            prompt: { text: fullPrompt },
            temperature: 0.2,
            maxOutputTokens: 512,
          };
        };

        let lastError = null;

        // If we have a service account, obtain an access token and use it.
        if (useServiceAccount) {
          try {
            const { GoogleAuth } = await import("google-auth-library");
            const credentials = JSON.parse(saJson);
            const auth = new GoogleAuth({
              credentials,
              scopes: ["https://www.googleapis.com/auth/cloud-platform"],
            });
            const client = await auth.getClient();
            const accessTokenResp = await client.getAccessToken();
            const accessToken = accessTokenResp?.token || accessTokenResp;

            for (const m of candidateModels) {
              const verb = m.mode === "content" ? "generateContent" : "generateText";
              const url = `https://generativelanguage.googleapis.com/v1beta/models/${m.name}:${verb}`;
              try {
                const r = await fetch(url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                  },
                  body: JSON.stringify(payloadFor(m.mode)),
                });

                if (!r.ok) {
                  const txt = await r.text().catch(() => "");
                  const shortTxt = (txt || "").slice(0, 1000);
                  console.warn(`Model ${m.name} returned ${r.status} ${r.statusText}`);
                  console.warn(shortTxt);
                  lastError = { model: m.name, status: r.status, statusText: r.statusText, body: shortTxt };
                  continue;
                }

                const j = await r.json();
                // extract text from either content or text response
                const text =
                  j?.candidates?.[0]?.content?.[0]?.text ||
                  j?.output?.[0]?.content?.[0]?.text ||
                  j?.response?.outputs?.[0]?.content?.[0]?.text ||
                  j?.text || "";
                return NextResponse.json({ text });
              } catch (innerErr) {
                console.warn(`Request to model ${m.name} failed:`, innerErr?.message || innerErr);
                lastError = { model: m.name, error: innerErr?.message || String(innerErr) };
                continue;
              }
            }
          } catch (saErr) {
            console.error("Service account flow failed:", saErr);
            // fall through to API key approach below
            lastError = { error: `service_account_error: ${saErr?.message || saErr}` };
          }
        }

        // If service account not used or failed, try API key approach with v1beta endpoints
        if (apiKey) {
          for (const m of candidateModels) {
            const verb = m.mode === "content" ? "generateContent" : "generateText";
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${m.name}:${verb}`;
            try {
              const r = await fetch(url + `?key=${apiKey}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "X-goog-api-key": apiKey },
                body: JSON.stringify(payloadFor(m.mode)),
              });

              if (!r.ok) {
                const txt = await r.text().catch(() => "");
                const shortTxt = (txt || "").slice(0, 1000);
                console.warn(`Model ${m.name} returned ${r.status} ${r.statusText}`);
                console.warn(shortTxt);
                lastError = { model: m.name, status: r.status, statusText: r.statusText, body: shortTxt };
                continue;
              }

              const j = await r.json();
              const text =
                j?.candidates?.[0]?.content?.[0]?.text ||
                j?.output?.[0]?.content?.[0]?.text ||
                j?.response?.outputs?.[0]?.content?.[0]?.text ||
                j?.text || "";
              return NextResponse.json({ text });
            } catch (innerErr) {
              console.warn(`Request to model ${m.name} failed:`, innerErr?.message || innerErr);
              lastError = { model: m.name, error: innerErr?.message || String(innerErr) };
              continue;
            }
          }
        }

        console.error("All REST model attempts failed:", lastError);
        return NextResponse.json(
          { error: `AI provider error: no usable model (last: ${JSON.stringify(lastError)})` },
          { status: 502 }
        );
      } catch (restErr) {
        console.error("Gemini fallback failed:", restErr);
        return NextResponse.json({ error: "AI provider unavailable" }, { status: 502 });
      }
    }
  } catch (error) {
    console.error("/api/gemini error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Lightweight GET to check server-side availability of the AI key.
export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ available: false, reason: 'no_key' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // If a key exists, report available. We avoid doing a live call here to keep this fast.
    return new Response(JSON.stringify({ available: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('/api/gemini GET error', err);
    return new Response(JSON.stringify({ available: false, reason: 'error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
