

const CATEGORIES = [
  "greeting",
  "services",
  "pricing",
  "portfolio",
  "start",
  "tech",
  "industry",
  "support",
];

const PATTERNS = {
  greeting: /\b(hola|holi|holis|buenos|buenas|hey|hi|hello|saludos|que tal|qué tal)\b/i,
  services: /\b(servicio|servicios|qué hacen|que ofrecen|ofrecen)\b/i,
  pricing: /\b(cuesta|precio|presupuesto|costo|valor|cuánto|cuanto)\b/i,
  portfolio: /\b(portafolio|portfolio|proyecto|trabajo anterior|casos de éxito|casos de exito|experiencia)\b/i,
  start: /\b(empezar|comenzar|iniciar|como empiezo|qué necesito|como empezar)\b/i,
  tech: /\b(tecnolog|stack|herramienta|lenguaje|framework|react|angular|vue|node|python|typescript)\b/i,
  industry: /\b(industria|sector|rubro|empresa|negocio|vertical)\b/i,
  support: /\b(ayuda|soporte|contacto|hablar con|vendedor|comercial|soporte técnico|soporte tecnico)\b/i,
};

const RESPONSES = {
  greeting:
    "¡Hola! 👋 Soy Botie, tu asistente virtual de PairProgramming. ¿En qué puedo ayudarte hoy? Puedes elegir una de las opciones rápidas o escribir tu consulta.",
  services:
    "En PairProgramming ofrecemos: Productos digitales, desarrollo a medida, consultoría tech y modernización. Visita la sección 'Servicios' para más detalle.",
  pricing:
    "El precio depende de la complejidad, tecnologías y plazo. Ofrecemos presupuestos personalizados: contáctanos para una consulta gratuita.",
  portfolio:
    "Tenemos un portafolio con proyectos en e‑commerce, SaaS, mobile y soluciones empresariales. Mira la página de Portafolio para demos y casos.",
  start:
    "Para comenzar: 1) Contáctanos, 2) Agendamos una reunión, 3) Analizamos requisitos, 4) Te proponemos un plan y presupuesto, 5) Iniciamos el desarrollo.",
  tech:
    "Stack principal: Frontend con React/Next.js (TS), Backend en Node.js/Python, Mobile con React Native/Flutter; bases: PostgreSQL/MongoDB. ¿Qué tecnología te interesa?",
  industry:
    "Trabajamos en Retail, Salud, Educación, Finanzas y Real Estate. Adaptamos la solución al sector y regulaciones necesarias.",
  support:
    "Puedo conectarte con nuestro equipo o darte enlaces útiles: Contacto, WhatsApp, FAQ y Formulario. ¿Cómo prefieres continuar?",
  platformFallback:
    "Si tu consulta es general o no quedó clara, puedes usar estas rutas del sitio para orientarte: 1) Servicios, 2) Portafolio, 3) FAQ, 4) Contacto (formulario o WhatsApp). ¿Te abro alguna de estas opciones?",
};

const detectCategory = (text) => {
  if (!text || typeof text !== "string") return null;
  const normalized = text.toLowerCase();
  for (const cat of CATEGORIES) {
    const pat = PATTERNS[cat];
    if (pat && pat.test(normalized)) return cat;
  }
  if (/^\s*(ok|okay|menu|opciones|ayuda)\s*$/i.test(text)) return "greeting";
  return null;
};

export const getIntelligentResponse = (userMessage) => {
  const category = detectCategory(userMessage);
  if (category && RESPONSES[category]) return RESPONSES[category];

  // Platform-focused fallback to keep the flow continuous.
  return (
    RESPONSES.platformFallback +
    `\n\nTexto recibido: "${userMessage}"` +
    `\n\nSi quieres, puedo: 1) mostrar las opciones rápidas; 2) abrir el formulario de contacto; 3) conectarte por WhatsApp.`
  );
};

export const commonQuestions = [
  "¿Qué servicios ofrecen?",
  "¿Cómo empiezo mi proyecto?",

  "¿Qué tecnologías usan?",
  "¿Cómo contacto con soporte?",
];
