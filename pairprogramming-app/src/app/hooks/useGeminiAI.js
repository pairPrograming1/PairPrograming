export const useGeminiAI = () => {
  const generateResponse = async (userMessage, conversationHistory) => {
    try {
      const { GoogleGenerativeAI } = await import("@google/generative-ai");

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;

      if (!apiKey || apiKey === "tu_google_ai_api_key_gratuita_aqui") {
        throw new Error("Google AI API key no configurada");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const systemPrompt = `Eres Botie, un asistente virtual especializado en desarrollo de software para la empresa PairProgramming.

INFORMACIÓN SOBRE LA EMPRESA:
- Nombre: PairProgramming
- Servicios: Desarrollo web, aplicaciones móviles, SaaS, CRM, ERP, consultoría tecnológica
- Tecnologías: React, Next.js, Node.js, Python, MongoDB, PostgreSQL, AWS
- Metodología: Desarrollo ágil, sprints de 2 semanas, entregas continuas
- Enfoque: Soluciones escalables, código limpio, mejores prácticas

DIRECTIVAS:
1. Responde siempre en español
2. Sé específico y técnico en desarrollo
3. Mantén un tono profesional pero amigable
4. Para preguntas sobre precios, sugiere contactar al equipo
5. Sé honesto sobre capacidades y limitaciones
6. Usa emojis relevantes ocasionalmente
7. Mantén respuestas concisas pero informativas

Si no sabes algo, sugiere contactar al equipo especializado.`;

      const fullPrompt = `${systemPrompt}

Historial reciente:
${conversationHistory
  .slice(-4)
  .map(
    (msg) => `${msg.sender === "user" ? "Usuario" : "Asistente"}: ${msg.text}`
  )
  .join("\n")}

Usuario: ${userMessage}
Asistente:`;

      console.log("Enviando prompt a Gemini...");
      const result = await model.generateContent(fullPrompt);
      const response = await result.response;

      console.log("✅ Respuesta recibida de Gemini");
      return response.text();
    } catch (error) {
      console.error("Error con Google Gemini:", error);

      if (error.message.includes("model") || error.message.includes("404")) {
        throw new Error(
          "Modelo no disponible - usando respuestas inteligentes"
        );
      }

      throw error;
    }
  };

  return { generateResponse };
};
