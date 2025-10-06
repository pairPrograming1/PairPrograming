export const getIntelligentResponse = (userMessage) => {
  const message = userMessage.toLowerCase().trim();

  const responsePatterns = {
    isGreeting:
      /^(hola|holi|holis|buenos|buenas|hey|hi|hello|saludos|que tal|qué tal)/i,
    isServicesQuestion: /servicio|qué hacen|que ofrecen|servicios|qué ofrecen/i,
    isPriceQuestion: /cuesta|precio|presupuesto|costo|valor|cuánto/i,
    isPortfolioQuestion:
      /portafolio|proyecto|trabajo anterior|experiencia|casos de éxito/i,
    isStartQuestion:
      /empezar|comenzar|iniciar|comienzo|como empiezo|qué necesito/i,
    isTechQuestion:
      /tecnolog|stack|herramienta|lenguaje|framework|react|angular|vue|node|python/i,
    isIndustryQuestion: /industria|sector|rama|rubro|empresa|negocio/i,
  };

  const {
    isGreeting,
    isServicesQuestion,
    isPriceQuestion,
    isPortfolioQuestion,
    isStartQuestion,
    isTechQuestion,
    isIndustryQuestion,
  } = Object.fromEntries(
    Object.entries(responsePatterns).map(([key, pattern]) => [
      key,
      pattern.test(message),
    ])
  );

  if (isGreeting) {
    return "¡Hola! 👋 Soy **Botie**, tu asistente virtual de **PairProgramming**. Me da mucho gusto saludarte. ¿En qué puedo ayudarte hoy? Aquí tienes algunas opciones comunes:";
  }

  if (isServicesQuestion) {
    return `En **PairProgramming** ofrecemos:\n\n🚀 **Productos Digitales**: Apps móviles, plataformas SaaS, CRM, ERP\n🛠️ **Servicios Personalizados**: Desarrollo a medida, consultoría tech\n💼 **Soluciones Integrales**: Dashboards, portales cliente, modernización\n\nPuedes ver todos nuestros servicios detallados en la página de **Servicios**.`;
  }

  if (isPriceQuestion) {
    return `El costo de un proyecto varía según:\n\n• Complejidad y funcionalidades\n• Tecnologías requeridas\n• Timeline del proyecto\n• Equipo involucrado\n\n💰 Ofrecemos **presupuestos personalizados** después de entender tus necesidades. Te recomiendo agendar una **consulta gratuita** para evaluar tu proyecto.`;
  }

  if (isPortfolioQuestion) {
    return `¡Claro! Tenemos un **portafolio diverso** con proyectos demostrativos:\n\n📁 **E-commerce platforms**\n📊 **SaaS dashboards**\n📱 **Mobile applications**\n🔧 **CRM personalizados**\n\nVisita nuestra página de **Portafolio** para ver demos en video y casos de éxito reales.`;
  }

  if (isStartQuestion) {
    return `¡Excelente! Para comenzar tu proyecto:\n\n1️⃣ **Contáctanos** por WhatsApp o formulario\n2️⃣ **Agendamos una reunión** virtual gratuita\n3️⃣ **Analizamos** tus necesidades y objetivos\n4️⃣ **Te presentamos** una propuesta personalizada\n5️⃣ **Comenzamos** el desarrollo\n\n🎯 Estamos para guiarte en cada paso del proceso.`;
  }

  if (isTechQuestion) {
    return `🛠️ **Stack tecnológico principal:**\n\n• **Frontend**: React, Next.js, TypeScript, Tailwind\n• **Backend**: Node.js, Python, Express, FastAPI\n• **Mobile**: React Native, Flutter\n• **Bases de datos**: PostgreSQL, MongoDB, Redis\n• **Cloud**: AWS, Vercel, Docker\n\n¿Te interesa alguna tecnología en particular?`;
  }

  if (isIndustryQuestion) {
    return `Hemos trabajado en diversos sectores:\n\n🏪 **Retail & E-commerce**\n🏥 **Salud & Telemedicina**\n🎓 **Educación & EdTech**\n💼 **Finanzas & FinTech**\n🏢 **Real Estate & PropTech**\n\nCada industria tiene necesidades específicas que entendemos y adaptamos.`;
  }

  return `🤔 **Botie** aquí! Entiendo que quieres saber sobre: *"${userMessage}"*\n\nTe recomiendo:\n\n• Visitar la sección correspondiente en nuestro sitio web\n• Contactarnos directamente para una respuesta específica\n• Explorar nuestras preguntas frecuentes\n\n¿Te gustaría que te conecte con un **especialista humano**?`;
};

export const commonQuestions = [
  "¿Qué servicios ofrecen?",
  "¿Cuánto cuesta un proyecto?",
  "¿Tienen portafolio?",
  "¿Cómo empiezo mi proyecto?",
  "¿Qué tecnologías usan?",
  "¿Tienen experiencia en mi industria?",
];
