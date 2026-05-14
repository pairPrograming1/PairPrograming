export const SERVICES = [
  {
    n: "01",
    slug: "saas-b2b",
    name: "Arquitectura B2B SaaS",
    desc: "Plataformas multi-tenant desde cero. Modelo de planes, feature flags, onboarding, billing y escala. Lo que más hacemos y donde más valor generamos.",
    longDesc: "Diseñamos e implementamos arquitecturas SaaS multi-tenant completas, desde el modelo de datos hasta la infraestructura de deployment. Incluye sistema de planes y billing, feature flags, onboarding automatizado, y métricas de uso por tenant. Trabajamos con el patrón shared-database con Row Level Security en PostgreSQL para aislar datos entre tenants sin sacrificar eficiencia operativa. El resultado es una plataforma lista para escalar de 10 a 10.000 clientes sin reescribir código.",
    entregables: [
      "Arquitectura multi-tenant (shared DB / schema isolation)",
      "Sistema de planes, billing y feature flags",
      "Onboarding automatizado para nuevos tenants",
      "Dashboard de métricas por tenant",
      "API REST / GraphQL documentada",
      "Pipeline CI/CD para deploys zero-downtime",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Stripe", "Redis"],
    casosRelacionados: ["mi-seguro-auto", "doctorcar"],
    proceso: [
      { paso: "Discovery", desc: "Definimos modelo de negocio, pricing tiers, y los límites de cada plan." },
      { paso: "Arquitectura", desc: "Diseñamos el esquema multi-tenant, APIs y flujo de autenticación." },
      { paso: "MVP", desc: "Construimos el core: auth, tenant management, billing y dashboard." },
      { paso: "Iteración", desc: "Feature flags, analytics por tenant y optimización de onboarding." },
    ],
    faq: [
      {
        question: "¿Qué es una arquitectura multi-tenant?",
        answer: "Es un modelo donde una sola instancia de la aplicación sirve a múltiples clientes (tenants), cada uno con sus datos aislados. Es el estándar de la industria SaaS porque reduce costos operativos y simplifica las actualizaciones.",
      },
      {
        question: "¿Cuánto tarda el desarrollo de un SaaS B2B?",
        answer: "Un MVP funcional con autenticación, gestión de tenants, sistema de planes y un módulo core suele estar listo en 8-12 semanas. La complejidad del dominio de negocio puede variar este plazo.",
      },
      {
        question: "¿Pueden integrar pasarelas de pago para Latinoamérica?",
        answer: "Sí. Trabajamos con Stripe para mercados internacionales y con Mercado Pago para Argentina y Latinoamérica. Implementamos webhooks para sincronizar estados de pago en tiempo real.",
      },
      {
        question: "¿Cómo se manejan las actualizaciones sin afectar a los tenants?",
        answer: "Usamos deploys zero-downtime con blue-green deployment o rolling updates. Los feature flags permiten activar funcionalidades por tenant sin necesidad de hacer deploy.",
      },
    ],
  },
  {
    n: "02",
    slug: "productos-digitales",
    name: "Productos Digitales",
    desc: "Apps web, móviles, CRM, ERP e intranets. Sistemas escalables que crecen con tu negocio desde el primer commit.",
    longDesc: "Construimos productos digitales completos: desde el MVP hasta la versión de producción escalable. Apps web responsivas, aplicaciones móviles, dashboards empresariales y sistemas internos. Nuestro enfoque es iterativo — empezamos con el feature set mínimo que genera valor, validamos con usuarios reales, y escalamos desde ahí. Cada producto incluye testing automatizado, CI/CD y documentación desde el día uno.",
    entregables: [
      "MVP funcional con stack moderno",
      "UI/UX responsive y accesible",
      "Backend escalable con API documentada",
      "Testing automatizado (unit + E2E)",
      "Deploy a producción con monitoreo",
      "Documentación técnica completa",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Vercel", "Docker"],
    casosRelacionados: ["ticketxevent", "taskmanager"],
    proceso: [
      { paso: "Definición", desc: "Mapeamos el problema, los usuarios y las métricas de éxito del producto." },
      { paso: "Prototipado", desc: "Wireframes y prototipo interactivo para validar el flujo antes de codear." },
      { paso: "Desarrollo", desc: "Sprints de 2 semanas con entregables incrementales y demos." },
      { paso: "Lanzamiento", desc: "Deploy, monitoreo, soporte post-launch y plan de iteración." },
    ],
    faq: [
      {
        question: "¿Qué tecnologías usan para productos digitales?",
        answer: "Nuestro stack principal es Next.js con React para el frontend, Node.js para el backend, y PostgreSQL como base de datos. Para mobile usamos React Native o PWA dependiendo del caso. Todo se despliega en Vercel o AWS.",
      },
      {
        question: "¿Cuál es la diferencia entre un MVP y un producto completo?",
        answer: "Un MVP (Producto Mínimo Viable) incluye solo las funcionalidades esenciales para validar la idea con usuarios reales. Un producto completo agrega features secundarios, integraciones, optimización de performance y soporte multi-idioma.",
      },
      {
        question: "¿Ofrecen mantenimiento después del lanzamiento?",
        answer: "Sí. Ofrecemos planes de mantenimiento que incluyen actualizaciones de seguridad, corrección de bugs, monitoreo de uptime y soporte técnico. También podemos iterar con nuevas funcionalidades.",
      },
      {
        question: "¿Pueden trabajar con un equipo interno existente?",
        answer: "Sí, nos adaptamos. Podemos ser el equipo completo o trabajar integrados con tu equipo de desarrollo existente, aportando expertise en arquitectura, frontend o backend según la necesidad.",
      },
    ],
  },
  {
    n: "03",
    slug: "crm-automatizacion",
    name: "CRM & Automatización",
    desc: "Implementación e integración de CRM, workflows automáticos, pipelines de ventas y dashboards de seguimiento.",
    longDesc: "Implementamos CRMs a medida o integramos soluciones existentes con flujos de trabajo automatizados. Pipelines de ventas visuales, seguimiento de clientes, y dashboards con métricas en tiempo real. Nos especializamos en CRM para equipos de ventas B2B: lead scoring automático, secuencias de follow-up, integración con WhatsApp Business y calendarios, y reportes que muestran exactamente dónde está cada oportunidad.",
    entregables: [
      "CRM personalizado o integración de existente",
      "Pipeline de ventas visual con drag-and-drop",
      "Automatización de follow-ups y notificaciones",
      "Dashboard de métricas comerciales",
      "Integración con email, WhatsApp y calendarios",
      "Reportes exportables (PDF, Excel)",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js", "n8n", "API REST"],
    casosRelacionados: ["lyons-crm", "carolinaos"],
    proceso: [
      { paso: "Auditoría", desc: "Analizamos tu proceso comercial actual y detectamos cuellos de botella." },
      { paso: "Diseño", desc: "Definimos el pipeline, los campos, las automatizaciones y las integraciones." },
      { paso: "Implementación", desc: "Configuramos o desarrollamos el CRM con flujos automatizados." },
      { paso: "Adopción", desc: "Capacitación del equipo, migración de datos y soporte en la transición." },
    ],
    faq: [
      {
        question: "¿Desarrollan CRM a medida o integran soluciones existentes?",
        answer: "Ambas opciones. Si tu operación necesita un CRM altamente personalizado, lo construimos desde cero. Si una solución existente cubre el 80% de tus necesidades, la integramos y extendemos con automatizaciones a medida.",
      },
      {
        question: "¿Pueden integrar WhatsApp Business al CRM?",
        answer: "Sí. Integramos WhatsApp Business API para enviar notificaciones automáticas, follow-ups programados y mensajes de seguimiento directamente desde el pipeline del CRM.",
      },
      {
        question: "¿Qué tipo de automatizaciones implementan?",
        answer: "Automatizamos asignación de leads, secuencias de email, recordatorios de follow-up, actualización de estados en el pipeline, generación de reportes, y alertas cuando una oportunidad lleva demasiado tiempo sin avanzar.",
      },
      {
        question: "¿Se puede migrar data desde un CRM existente?",
        answer: "Sí. Hacemos migración de datos desde spreadsheets, HubSpot, Salesforce, Pipedrive o cualquier sistema que exporte CSV/API. Incluimos limpieza y deduplicación de datos.",
      },
    ],
  },
  {
    n: "04",
    slug: "automatizacion-n8n",
    name: "Automatización & n8n",
    desc: "Flujos visuales con n8n para integrar herramientas, orquestar pipelines y eliminar trabajo manual repetitivo.",
    longDesc: "Diseñamos e implementamos flujos de automatización usando n8n como orquestador central. Conectamos tus herramientas existentes, eliminamos tareas manuales y creamos pipelines que escalan sin intervención humana. n8n es open-source, self-hosted, y da control total sobre tus datos — no dependés de terceros. Ideal para empresas que quieren automatizar sin vendor lock-in.",
    entregables: [
      "Auditoría de procesos automatizables",
      "Diseño de flujos en n8n",
      "Integración con APIs externas",
      "Manejo de errores y reintentos",
      "Monitoreo y alertas de flujos",
      "Documentación de workflows",
    ],
    stack: ["n8n", "Node.js", "API REST", "Webhooks", "Docker", "PostgreSQL"],
    casosRelacionados: [],
    proceso: [
      { paso: "Mapeo", desc: "Identificamos tareas repetitivas y procesos que consumen tiempo manual." },
      { paso: "Diseño", desc: "Armamos los flujos en n8n con triggers, condicionales y manejo de errores." },
      { paso: "Integración", desc: "Conectamos APIs, webhooks, bases de datos y herramientas externas." },
      { paso: "Monitoreo", desc: "Configuramos alertas y dashboards para supervisar los flujos en producción." },
    ],
    faq: [
      {
        question: "¿Qué es n8n y por qué lo eligen sobre Zapier o Make?",
        answer: "n8n es una plataforma de automatización open-source y self-hosted. A diferencia de Zapier o Make, tus datos no pasan por servidores de terceros, no hay límite de ejecuciones, y los flujos se pueden versionar con Git. Para empresas B2B con datos sensibles, es la opción más robusta.",
      },
      {
        question: "¿Qué tipo de procesos se pueden automatizar?",
        answer: "Cualquier proceso que involucre mover datos entre sistemas: sincronización de inventario, generación de reportes, notificaciones condicionales, onboarding de clientes, procesamiento de facturas, scraping de datos, y orquestación de pipelines de ML.",
      },
      {
        question: "¿Dónde se hostea n8n?",
        answer: "Lo desplegamos en tu infraestructura (AWS, DigitalOcean, o VPS propio) usando Docker. Vos mantenés el control total de la instancia y los datos. También podemos usar n8n Cloud si preferís no gestionar infraestructura.",
      },
      {
        question: "¿Qué pasa si un flujo falla?",
        answer: "Cada flujo incluye manejo de errores con reintentos automáticos, logs detallados y alertas por email o Slack cuando algo falla. Además, n8n guarda el historial de ejecuciones para diagnosticar problemas.",
      },
    ],
  },
  {
    n: "05",
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    desc: "Infraestructura en la nube, CI/CD, IaC y observabilidad. Despliegues seguros y escalables sin drama.",
    longDesc: "Configuramos y gestionamos infraestructura cloud con best practices de DevOps. CI/CD automatizado, Infrastructure as Code, monitoreo y observabilidad para que tu equipo se enfoque en el producto. Trabajamos principalmente con AWS y Vercel, y usamos Terraform para que toda la infraestructura sea reproducible, versionada y auditable. El objetivo es que cada push a main llegue a producción de forma segura y automática.",
    entregables: [
      "Infraestructura como código (Terraform / Pulumi)",
      "Pipeline CI/CD (GitHub Actions / GitLab CI)",
      "Containerización con Docker + orquestación",
      "Monitoreo y alertas (uptime, performance)",
      "Backups automatizados y disaster recovery",
      "Documentación de infraestructura",
    ],
    stack: ["AWS", "Docker", "GitHub Actions", "Terraform", "Vercel", "Cloudflare"],
    casosRelacionados: [],
    proceso: [
      { paso: "Assessment", desc: "Evaluamos la infraestructura actual e identificamos riesgos y oportunidades." },
      { paso: "Diseño", desc: "Definimos la arquitectura target con diagramas y estimación de costos." },
      { paso: "Implementación", desc: "Provisionamos infraestructura con IaC y configuramos pipelines CI/CD." },
      { paso: "Operación", desc: "Monitoreo continuo, alertas y runbooks para respuesta a incidentes." },
    ],
    faq: [
      {
        question: "¿Trabajan con AWS, Google Cloud o Azure?",
        answer: "Nuestro expertise principal es en AWS y Vercel. Para proyectos más simples usamos Vercel + PlanetScale/Supabase. Para infraestructura compleja, AWS con servicios como ECS, RDS, S3, CloudFront y Lambda.",
      },
      {
        question: "¿Qué es Infrastructure as Code (IaC)?",
        answer: "Es la práctica de definir toda la infraestructura (servidores, redes, bases de datos) en archivos de código versionados. Usamos Terraform para esto. La ventaja es que la infraestructura se puede reproducir, auditar y recuperar automáticamente.",
      },
      {
        question: "¿Cuánto cuesta la infraestructura cloud típica?",
        answer: "Depende del tráfico y la complejidad. Un SaaS B2B típico con menos de 1.000 usuarios activos puede funcionar con $50-200 USD/mes en AWS. Vercel tiene un tier gratuito que cubre muchos casos. Optimizamos costos activamente.",
      },
      {
        question: "¿Pueden migrar de un hosting tradicional a cloud?",
        answer: "Sí. Hacemos migraciones graduales para no interrumpir la operación. Configuramos la nueva infraestructura en paralelo, migramos datos, y hacemos el cutover en un window de mantenimiento coordinado.",
      },
    ],
  },
  {
    n: "06",
    slug: "seo-contenido",
    name: "SEO & Contenido",
    desc: "Auditorías técnicas, optimización on-page, estrategia de contenidos y SEO programático para crecer en orgánico.",
    longDesc: "SEO técnico y de contenido para sitios construidos con frameworks modernos como Next.js y React. Auditorías completas, SEO programático para escalar páginas de aterrizaje, schema markup avanzado, y estrategia de contenido alineada con el funnel de conversión. Nos especializamos en SEO para sitios JavaScript-heavy donde las técnicas tradicionales no aplican — SSR, ISR, meta tags dinámicos, sitemap programático, y Core Web Vitals.",
    entregables: [
      "Auditoría SEO técnica completa",
      "Optimización on-page y meta tags",
      "Schema markup (JSON-LD)",
      "Estrategia de contenido y calendario editorial",
      "SEO programático para sitios dinámicos",
      "Reportes mensuales con métricas clave",
    ],
    stack: ["Next.js", "Google Search Console", "PageSpeed Insights", "Schema.org", "Ahrefs"],
    casosRelacionados: ["mi-seguro-auto"],
    proceso: [
      { paso: "Auditoría", desc: "Análisis técnico, on-page, contenido y backlinks del sitio actual." },
      { paso: "Estrategia", desc: "Keyword research, arquitectura de contenido y plan de páginas programáticas." },
      { paso: "Implementación", desc: "Optimización técnica, schema markup, meta tags y contenido." },
      { paso: "Medición", desc: "Tracking de rankings, tráfico orgánico y conversiones con reportes mensuales." },
    ],
    faq: [
      {
        question: "¿Cuánto tarda en verse resultados de SEO?",
        answer: "El SEO técnico (velocidad, indexación, schema) tiene impacto en semanas. El posicionamiento orgánico por keywords competitivas tarda entre 3-6 meses. El SEO programático puede generar tráfico de long-tail desde el primer mes.",
      },
      {
        question: "¿Qué es SEO programático?",
        answer: "Es la creación automatizada de páginas de aterrizaje optimizadas para búsquedas específicas. Por ejemplo, generar páginas como 'desarrollo de software en [ciudad]' para cada ciudad, con contenido único y schema markup. Permite escalar de 10 a 500+ páginas indexadas.",
      },
      {
        question: "¿Trabajan con sitios hechos en Next.js y React?",
        answer: "Es nuestra especialidad. Entendemos cómo Google renderiza JavaScript, cuándo usar SSR vs SSG, cómo manejar meta tags dinámicos, y cómo optimizar Core Web Vitals en aplicaciones React.",
      },
      {
        question: "¿Incluyen creación de contenido?",
        answer: "Podemos definir la estrategia, el calendario editorial y los briefs de contenido. La redacción puede ser nuestra, de tu equipo, o asistida con IA y revisada por humanos. Siempre priorizamos contenido E-E-A-T (Experience, Expertise, Authority, Trust).",
      },
    ],
  },
  {
    n: "07",
    slug: "modernizacion-legacy",
    name: "Modernización de Legacy",
    desc: "Migramos sistemas viejos a arquitecturas modernas: microservicios, contenedores, APIs REST/GraphQL.",
    longDesc: "Migramos sistemas legados a stack moderno sin interrumpir la operación. Usamos el patrón strangler fig: en lugar de reescribir todo de golpe, extraemos funcionalidades gradualmente hacia servicios modernos mientras el sistema viejo sigue funcionando. APIs como capa intermedia, contenedores para portabilidad, y tests de regresión para garantizar que nada se rompe.",
    entregables: [
      "Auditoría del sistema actual",
      "Plan de migración gradual",
      "APIs REST / GraphQL como capa intermedia",
      "Containerización de servicios",
      "Tests de regresión automatizados",
      "Migración de datos con zero-downtime",
    ],
    stack: ["Node.js", "Docker", "PostgreSQL", "API REST", "GraphQL", "Redis"],
    casosRelacionados: [],
    proceso: [
      { paso: "Auditoría", desc: "Evaluamos el sistema actual, identificamos deuda técnica y dependencias." },
      { paso: "Plan", desc: "Definimos la secuencia de migración y las APIs intermedias." },
      { paso: "Extracción", desc: "Migramos módulos uno a uno con el patrón strangler fig." },
      { paso: "Cutover", desc: "Tests de regresión, migración de datos y descomisionamiento del legacy." },
    ],
    faq: [
      {
        question: "¿Qué es el patrón strangler fig?",
        answer: "Es una estrategia de migración donde el sistema nuevo crece alrededor del viejo, reemplazando funcionalidades gradualmente. Así evitás el riesgo de una reescritura total y mantenés la operación mientras migrás.",
      },
      {
        question: "¿Pueden migrar sistemas hechos en PHP, .NET o Java?",
        answer: "Sí. El lenguaje del sistema origen no importa — lo que hacemos es exponer sus funcionalidades como APIs y reemplazarlas gradualmente con servicios modernos en Node.js / Next.js.",
      },
      {
        question: "¿Cómo garantizan que no se pierden datos en la migración?",
        answer: "Usamos migración de datos con validación cruzada: los datos se copian al nuevo sistema y se comparan registros. El cutover se hace en un window coordinado con backup y rollback plan.",
      },
      {
        question: "¿Se puede migrar parcialmente y dejar parte del sistema viejo?",
        answer: "Sí, es lo más común. Migramos primero los módulos con más deuda técnica o más valor de negocio, y dejamos el resto funcionando hasta que convenga migrarlo.",
      },
    ],
  },
  {
    n: "08",
    slug: "qa-performance",
    name: "QA & Performance",
    desc: "Tests E2E, unitarios e integración. Auditorías de performance y monitoreo continuo para productos sin bugs.",
    longDesc: "Implementamos estrategias de testing completas y optimización de performance. Tests automatizados, auditorías de Core Web Vitals, y monitoreo continuo para garantizar la calidad del producto. Usamos Playwright para tests E2E, Jest para unitarios, y Lighthouse CI para performance. El objetivo es que cada deploy tenga confianza de que nada se rompió y que los tiempos de carga se mantienen dentro de los estándares de Google.",
    entregables: [
      "Suite de tests unitarios y de integración",
      "Tests E2E con Playwright / Cypress",
      "Auditoría de Core Web Vitals",
      "Optimización de LCP, INP y CLS",
      "Monitoreo continuo de performance",
      "Pipeline de QA automatizado en CI",
    ],
    stack: ["Playwright", "Jest", "Lighthouse", "Sentry", "GitHub Actions"],
    casosRelacionados: [],
    proceso: [
      { paso: "Diagnóstico", desc: "Identificamos las áreas del producto sin cobertura de tests y los cuellos de performance." },
      { paso: "Estrategia", desc: "Definimos qué testear, con qué herramientas, y los umbrales de performance." },
      { paso: "Implementación", desc: "Escribimos tests, configuramos Lighthouse CI y Sentry." },
      { paso: "Automatización", desc: "Integramos todo en el pipeline de CI para que corra en cada PR." },
    ],
    faq: [
      {
        question: "¿Qué son los Core Web Vitals?",
        answer: "Son las métricas de Google que miden la experiencia del usuario: LCP (Largest Contentful Paint — velocidad de carga), INP (Interaction to Next Paint — responsividad), y CLS (Cumulative Layout Shift — estabilidad visual). Afectan directamente al SEO.",
      },
      {
        question: "¿Pueden hacer QA sobre un producto que no desarrollaron ustedes?",
        answer: "Sí. Hacemos auditorías de calidad y performance sobre cualquier producto web, independientemente de quién lo haya construido. Entregamos un reporte con hallazgos priorizados y recomendaciones.",
      },
      {
        question: "¿Cuánta cobertura de tests recomiendan?",
        answer: "No perseguimos porcentajes arbitrarios. Priorizamos tests en las rutas críticas de negocio (checkout, auth, pagos) y en las partes del código que cambian frecuentemente. Un 70-80% de cobertura en el core suele ser un buen target.",
      },
      {
        question: "¿Usan Playwright o Cypress para E2E?",
        answer: "Preferimos Playwright por su soporte multi-browser nativo, mejor performance y API más moderna. Pero si el proyecto ya usa Cypress, trabajamos con lo que hay sin forzar una migración innecesaria.",
      },
    ],
  },
  {
    n: "09",
    slug: "branding-identidad",
    name: "Branding & Identidad",
    desc: "Naming, logotipo, sistema visual y manual de marca. La identidad que comunica tu propuesta de valor.",
    longDesc: "Creamos identidades visuales que comunican profesionalismo y confianza. Desde el naming hasta el manual de marca completo, incluyendo sistema de colores, tipografía, y aplicaciones en digital y print. Nuestro enfoque es funcional: la marca tiene que funcionar en un favicon de 16px igual que en un banner de evento. Priorizamos legibilidad, consistencia y adaptabilidad a pantallas.",
    entregables: [
      "Research de mercado y competencia",
      "Naming y tagline",
      "Logotipo y sistema de identidad visual",
      "Paleta cromática y tipografía",
      "Manual de marca digital",
      "Templates y aplicaciones de marca",
    ],
    stack: ["Figma", "Adobe Illustrator", "Design Systems"],
    casosRelacionados: [],
    proceso: [
      { paso: "Research", desc: "Analizamos la competencia, el posicionamiento y el público objetivo." },
      { paso: "Concepto", desc: "Proponemos 2-3 direcciones creativas con moodboards." },
      { paso: "Diseño", desc: "Desarrollamos el logotipo, la paleta, la tipografía y el sistema visual." },
      { paso: "Entrega", desc: "Manual de marca, archivos fuente y templates listos para usar." },
    ],
    faq: [
      {
        question: "¿Incluyen diseño web en el servicio de branding?",
        answer: "El branding es el sistema visual base. El diseño web es un paso posterior que parte del manual de marca. Podemos hacer ambos, pero son servicios separados para que cada uno tenga el foco que merece.",
      },
      {
        question: "¿Cuántas propuestas de logo presentan?",
        answer: "Presentamos 2-3 direcciones conceptuales diferentes. Una vez elegida la dirección, hacemos 2 rondas de refinamiento incluidas en el presupuesto.",
      },
      {
        question: "¿Entregan los archivos fuente?",
        answer: "Sí. Entregamos el logo en SVG, PNG, PDF y formatos editables de Figma/Illustrator. Además, incluimos versiones para fondos claros, oscuros, monocromo y favicon.",
      },
      {
        question: "¿Pueden hacer un rebrand de una marca existente?",
        answer: "Sí. Hacemos evoluciones de marca que mantienen el equity existente pero actualizan el sistema visual. También hacemos rebrands completos cuando el posicionamiento cambió y la marca actual ya no comunica.",
      },
    ],
  },
];

export default SERVICES;
