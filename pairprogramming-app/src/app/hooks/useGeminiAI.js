export const useGeminiAI = () => {
  
  const generateResponse = async (userMessage, conversationHistory) => {
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, history: conversationHistory }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        const errMsg = json?.error || `AI proxy error: ${res.status}`;
        throw new Error(errMsg);
      }

      const json = await res.json();
      return json.text || "";
    } catch (error) {
      console.error("useGeminiAI generateResponse error:", error);
      throw error;
    }
  };

  return { generateResponse };
};
