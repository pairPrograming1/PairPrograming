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
    i18n: {
      en: {
        name: "B2B SaaS Architecture",
        desc: "Multi-tenant platforms from scratch. Pricing plans, feature flags, onboarding, billing, and scale. Our core expertise and where we deliver the most value.",
        longDesc: "We design and implement complete multi-tenant SaaS architectures, from data modeling to deployment infrastructure. Includes plan and billing systems, feature flags, automated onboarding, and per-tenant usage metrics. We use the shared-database pattern with Row Level Security in PostgreSQL to isolate tenant data without sacrificing operational efficiency. The result is a platform ready to scale from 10 to 10,000 customers without rewriting code.",
        entregables: [
          "Multi-tenant architecture (shared DB / schema isolation)",
          "Plans, billing & feature flags system",
          "Automated onboarding for new tenants",
          "Per-tenant metrics dashboard",
          "Documented REST / GraphQL API",
          "CI/CD pipeline for zero-downtime deploys",
        ],
        proceso: [
          { paso: "Discovery", desc: "We define the business model, pricing tiers, and the limits of each plan." },
          { paso: "Architecture", desc: "We design the multi-tenant schema, APIs, and authentication flow." },
          { paso: "MVP", desc: "We build the core: auth, tenant management, billing, and dashboard." },
          { paso: "Iteration", desc: "Feature flags, per-tenant analytics, and onboarding optimization." },
        ],
        faq: [
          {
            question: "What is a multi-tenant architecture?",
            answer: "It's a model where a single application instance serves multiple customers (tenants), each with their own isolated data. It's the SaaS industry standard because it reduces operational costs and simplifies updates.",
          },
          {
            question: "How long does it take to develop a B2B SaaS?",
            answer: "A functional MVP with authentication, tenant management, plan system, and a core module is typically ready in 8-12 weeks. The complexity of your business domain may affect this timeline.",
          },
          {
            question: "Can you integrate payment gateways for Latin America?",
            answer: "Yes. We work with Stripe for international markets and Mercado Pago for Argentina and Latin America. We implement webhooks to synchronize payment states in real time.",
          },
          {
            question: "How do you handle updates without affecting tenants?",
            answer: "We use zero-downtime deploys with blue-green deployment or rolling updates. Feature flags allow enabling features per tenant without needing to deploy.",
          },
        ],
      },
    },
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
    i18n: {
      en: {
        name: "Digital Products",
        desc: "Web apps, mobile apps, CRM, ERP, and intranets. Scalable systems that grow with your business from the first commit.",
        longDesc: "We build complete digital products: from MVP to scalable production version. Responsive web apps, mobile applications, enterprise dashboards, and internal systems. Our approach is iterative — we start with the minimum feature set that delivers value, validate with real users, and scale from there. Every product includes automated testing, CI/CD, and documentation from day one.",
        entregables: [
          "Functional MVP with modern stack",
          "Responsive & accessible UI/UX",
          "Scalable backend with documented API",
          "Automated testing (unit + E2E)",
          "Production deploy with monitoring",
          "Complete technical documentation",
        ],
        proceso: [
          { paso: "Definition", desc: "We map the problem, users, and product success metrics." },
          { paso: "Prototyping", desc: "Wireframes and interactive prototype to validate the flow before coding." },
          { paso: "Development", desc: "2-week sprints with incremental deliverables and demos." },
          { paso: "Launch", desc: "Deploy, monitoring, post-launch support, and iteration plan." },
        ],
        faq: [
          {
            question: "What technologies do you use for digital products?",
            answer: "Our main stack is Next.js with React for the frontend, Node.js for the backend, and PostgreSQL as the database. For mobile, we use React Native or PWA depending on the case. Everything is deployed on Vercel or AWS.",
          },
          {
            question: "What's the difference between an MVP and a full product?",
            answer: "An MVP (Minimum Viable Product) includes only the essential features to validate the idea with real users. A full product adds secondary features, integrations, performance optimization, and multi-language support.",
          },
          {
            question: "Do you offer maintenance after launch?",
            answer: "Yes. We offer maintenance plans that include security updates, bug fixes, uptime monitoring, and technical support. We can also iterate with new features.",
          },
          {
            question: "Can you work with an existing in-house team?",
            answer: "Yes, we adapt. We can be the full team or work integrated with your existing development team, contributing expertise in architecture, frontend, or backend as needed.",
          },
        ],
      },
    },
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
    i18n: {
      en: {
        name: "CRM & Automation",
        desc: "CRM implementation and integration, automated workflows, sales pipelines, and tracking dashboards.",
        longDesc: "We implement custom CRMs or integrate existing solutions with automated workflows. Visual sales pipelines, client tracking, and dashboards with real-time metrics. We specialize in CRM for B2B sales teams: automatic lead scoring, follow-up sequences, WhatsApp Business and calendar integration, and reports that show exactly where each opportunity stands.",
        entregables: [
          "Custom CRM or existing platform integration",
          "Visual sales pipeline with drag-and-drop",
          "Automated follow-ups and notifications",
          "Sales metrics dashboard",
          "Email, WhatsApp & calendar integration",
          "Exportable reports (PDF, Excel)",
        ],
        proceso: [
          { paso: "Audit", desc: "We analyze your current sales process and identify bottlenecks." },
          { paso: "Design", desc: "We define the pipeline, fields, automations, and integrations." },
          { paso: "Implementation", desc: "We configure or develop the CRM with automated workflows." },
          { paso: "Adoption", desc: "Team training, data migration, and transition support." },
        ],
        faq: [
          {
            question: "Do you build custom CRMs or integrate existing solutions?",
            answer: "Both. If your operation needs a highly customized CRM, we build it from scratch. If an existing solution covers 80% of your needs, we integrate and extend it with custom automations.",
          },
          {
            question: "Can you integrate WhatsApp Business with the CRM?",
            answer: "Yes. We integrate the WhatsApp Business API for automatic notifications, scheduled follow-ups, and tracking messages directly from the CRM pipeline.",
          },
          {
            question: "What kind of automations do you implement?",
            answer: "We automate lead assignment, email sequences, follow-up reminders, pipeline status updates, report generation, and alerts when an opportunity has been stagnant for too long.",
          },
          {
            question: "Can you migrate data from an existing CRM?",
            answer: "Yes. We migrate data from spreadsheets, HubSpot, Salesforce, Pipedrive, or any system that exports CSV/API. We include data cleaning and deduplication.",
          },
        ],
      },
    },
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
    i18n: {
      en: {
        name: "Automation & n8n",
        desc: "Visual workflows with n8n to integrate tools, orchestrate pipelines, and eliminate repetitive manual work.",
        longDesc: "We design and implement automation workflows using n8n as the central orchestrator. We connect your existing tools, eliminate manual tasks, and create pipelines that scale without human intervention. n8n is open-source, self-hosted, and gives you full control over your data — no third-party dependency. Ideal for companies that want to automate without vendor lock-in.",
        entregables: [
          "Automatable process audit",
          "n8n workflow design",
          "External API integration",
          "Error handling and retries",
          "Workflow monitoring and alerts",
          "Workflow documentation",
        ],
        proceso: [
          { paso: "Mapping", desc: "We identify repetitive tasks and processes that consume manual time." },
          { paso: "Design", desc: "We build workflows in n8n with triggers, conditionals, and error handling." },
          { paso: "Integration", desc: "We connect APIs, webhooks, databases, and external tools." },
          { paso: "Monitoring", desc: "We set up alerts and dashboards to monitor workflows in production." },
        ],
        faq: [
          {
            question: "What is n8n and why choose it over Zapier or Make?",
            answer: "n8n is an open-source, self-hosted automation platform. Unlike Zapier or Make, your data doesn't pass through third-party servers, there's no execution limit, and workflows can be versioned with Git. For B2B companies with sensitive data, it's the most robust option.",
          },
          {
            question: "What types of processes can be automated?",
            answer: "Any process that involves moving data between systems: inventory sync, report generation, conditional notifications, client onboarding, invoice processing, data scraping, and ML pipeline orchestration.",
          },
          {
            question: "Where is n8n hosted?",
            answer: "We deploy it on your infrastructure (AWS, DigitalOcean, or your own VPS) using Docker. You maintain full control over the instance and data. We can also use n8n Cloud if you prefer not to manage infrastructure.",
          },
          {
            question: "What happens if a workflow fails?",
            answer: "Every workflow includes error handling with automatic retries, detailed logs, and email or Slack alerts when something fails. Additionally, n8n stores execution history for diagnosing issues.",
          },
        ],
      },
    },
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
    i18n: {
      en: {
        name: "Cloud & DevOps",
        desc: "Cloud infrastructure, CI/CD, IaC, and observability. Secure and scalable deployments without the drama.",
        longDesc: "We configure and manage cloud infrastructure with DevOps best practices. Automated CI/CD, Infrastructure as Code, monitoring, and observability so your team can focus on the product. We primarily work with AWS and Vercel, and use Terraform so all infrastructure is reproducible, versioned, and auditable. The goal is that every push to main reaches production safely and automatically.",
        entregables: [
          "Infrastructure as Code (Terraform / Pulumi)",
          "CI/CD pipeline (GitHub Actions / GitLab CI)",
          "Docker containerization + orchestration",
          "Monitoring and alerts (uptime, performance)",
          "Automated backups and disaster recovery",
          "Infrastructure documentation",
        ],
        proceso: [
          { paso: "Assessment", desc: "We evaluate the current infrastructure and identify risks and opportunities." },
          { paso: "Design", desc: "We define the target architecture with diagrams and cost estimates." },
          { paso: "Implementation", desc: "We provision infrastructure with IaC and configure CI/CD pipelines." },
          { paso: "Operations", desc: "Continuous monitoring, alerts, and runbooks for incident response." },
        ],
        faq: [
          {
            question: "Do you work with AWS, Google Cloud, or Azure?",
            answer: "Our main expertise is in AWS and Vercel. For simpler projects, we use Vercel + PlanetScale/Supabase. For complex infrastructure, AWS with services like ECS, RDS, S3, CloudFront, and Lambda.",
          },
          {
            question: "What is Infrastructure as Code (IaC)?",
            answer: "It's the practice of defining all infrastructure (servers, networks, databases) in versioned code files. We use Terraform for this. The advantage is that infrastructure can be reproduced, audited, and recovered automatically.",
          },
          {
            question: "How much does typical cloud infrastructure cost?",
            answer: "It depends on traffic and complexity. A typical B2B SaaS with fewer than 1,000 active users can run on $50-200 USD/month on AWS. Vercel has a free tier that covers many cases. We actively optimize costs.",
          },
          {
            question: "Can you migrate from traditional hosting to cloud?",
            answer: "Yes. We do gradual migrations to avoid disrupting operations. We set up the new infrastructure in parallel, migrate data, and do the cutover in a coordinated maintenance window.",
          },
        ],
      },
    },
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
    i18n: {
      en: {
        name: "SEO & Content",
        desc: "Technical audits, on-page optimization, content strategy, and programmatic SEO to grow organic traffic.",
        longDesc: "Technical and content SEO for sites built with modern frameworks like Next.js and React. Complete audits, programmatic SEO to scale landing pages, advanced schema markup, and content strategy aligned with the conversion funnel. We specialize in SEO for JavaScript-heavy sites where traditional techniques don't apply — SSR, ISR, dynamic meta tags, programmatic sitemaps, and Core Web Vitals.",
        entregables: [
          "Complete technical SEO audit",
          "On-page optimization and meta tags",
          "Schema markup (JSON-LD)",
          "Content strategy and editorial calendar",
          "Programmatic SEO for dynamic sites",
          "Monthly reports with key metrics",
        ],
        proceso: [
          { paso: "Audit", desc: "Technical, on-page, content, and backlink analysis of the current site." },
          { paso: "Strategy", desc: "Keyword research, content architecture, and programmatic page plan." },
          { paso: "Implementation", desc: "Technical optimization, schema markup, meta tags, and content." },
          { paso: "Measurement", desc: "Rankings tracking, organic traffic, and conversions with monthly reports." },
        ],
        faq: [
          {
            question: "How long does it take to see SEO results?",
            answer: "Technical SEO (speed, indexing, schema) has impact in weeks. Organic rankings for competitive keywords take 3-6 months. Programmatic SEO can generate long-tail traffic from the first month.",
          },
          {
            question: "What is programmatic SEO?",
            answer: "It's the automated creation of landing pages optimized for specific searches. For example, generating pages like 'software development in [city]' for each city, with unique content and schema markup. It allows scaling from 10 to 500+ indexed pages.",
          },
          {
            question: "Do you work with sites built in Next.js and React?",
            answer: "It's our specialty. We understand how Google renders JavaScript, when to use SSR vs SSG, how to handle dynamic meta tags, and how to optimize Core Web Vitals in React applications.",
          },
          {
            question: "Do you include content creation?",
            answer: "We can define the strategy, editorial calendar, and content briefs. Writing can be done by us, your team, or AI-assisted and human-reviewed. We always prioritize E-E-A-T content (Experience, Expertise, Authority, Trust).",
          },
        ],
      },
    },
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
    i18n: {
      en: {
        name: "Legacy Modernization",
        desc: "We migrate old systems to modern architectures: microservices, containers, REST/GraphQL APIs.",
        longDesc: "We migrate legacy systems to modern stack without disrupting operations. We use the strangler fig pattern: instead of rewriting everything at once, we gradually extract features into modern services while the old system keeps running. APIs as an intermediary layer, containers for portability, and regression tests to ensure nothing breaks.",
        entregables: [
          "Current system audit",
          "Gradual migration plan",
          "REST / GraphQL APIs as intermediary layer",
          "Service containerization",
          "Automated regression tests",
          "Zero-downtime data migration",
        ],
        proceso: [
          { paso: "Audit", desc: "We evaluate the current system, identify technical debt and dependencies." },
          { paso: "Plan", desc: "We define the migration sequence and intermediary APIs." },
          { paso: "Extraction", desc: "We migrate modules one by one using the strangler fig pattern." },
          { paso: "Cutover", desc: "Regression tests, data migration, and legacy decommissioning." },
        ],
        faq: [
          {
            question: "What is the strangler fig pattern?",
            answer: "It's a migration strategy where the new system grows around the old one, gradually replacing features. This avoids the risk of a total rewrite and keeps operations running while you migrate.",
          },
          {
            question: "Can you migrate systems built in PHP, .NET, or Java?",
            answer: "Yes. The source system's language doesn't matter — what we do is expose its features as APIs and gradually replace them with modern services in Node.js / Next.js.",
          },
          {
            question: "How do you guarantee no data is lost during migration?",
            answer: "We use data migration with cross-validation: data is copied to the new system and records are compared. The cutover is done in a coordinated window with a backup and rollback plan.",
          },
          {
            question: "Can you do a partial migration and keep part of the old system?",
            answer: "Yes, that's the most common approach. We migrate the modules with the most technical debt or business value first, and leave the rest running until it makes sense to migrate them.",
          },
        ],
      },
    },
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
    i18n: {
      en: {
        name: "QA & Performance",
        desc: "E2E, unit, and integration tests. Performance audits and continuous monitoring for bug-free products.",
        longDesc: "We implement complete testing strategies and performance optimization. Automated tests, Core Web Vitals audits, and continuous monitoring to guarantee product quality. We use Playwright for E2E tests, Jest for unit tests, and Lighthouse CI for performance. The goal is that every deploy has confidence that nothing broke and load times stay within Google's standards.",
        entregables: [
          "Unit and integration test suite",
          "E2E tests with Playwright / Cypress",
          "Core Web Vitals audit",
          "LCP, INP & CLS optimization",
          "Continuous performance monitoring",
          "Automated QA pipeline in CI",
        ],
        proceso: [
          { paso: "Diagnosis", desc: "We identify product areas without test coverage and performance bottlenecks." },
          { paso: "Strategy", desc: "We define what to test, with which tools, and performance thresholds." },
          { paso: "Implementation", desc: "We write tests, configure Lighthouse CI and Sentry." },
          { paso: "Automation", desc: "We integrate everything into the CI pipeline to run on every PR." },
        ],
        faq: [
          {
            question: "What are Core Web Vitals?",
            answer: "They're Google's metrics that measure user experience: LCP (Largest Contentful Paint — load speed), INP (Interaction to Next Paint — responsiveness), and CLS (Cumulative Layout Shift — visual stability). They directly affect SEO.",
          },
          {
            question: "Can you do QA on a product you didn't develop?",
            answer: "Yes. We do quality and performance audits on any web product, regardless of who built it. We deliver a report with prioritized findings and recommendations.",
          },
          {
            question: "What test coverage do you recommend?",
            answer: "We don't chase arbitrary percentages. We prioritize tests on critical business paths (checkout, auth, payments) and code that changes frequently. 70-80% coverage on the core is usually a good target.",
          },
          {
            question: "Do you use Playwright or Cypress for E2E?",
            answer: "We prefer Playwright for its native multi-browser support, better performance, and more modern API. But if the project already uses Cypress, we work with what's there without forcing an unnecessary migration.",
          },
        ],
      },
    },
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
    i18n: {
      en: {
        name: "Branding & Identity",
        desc: "Naming, logo, visual system, and brand manual. The identity that communicates your value proposition.",
        longDesc: "We create visual identities that communicate professionalism and trust. From naming to the complete brand manual, including color system, typography, and applications in digital and print. Our approach is functional: the brand has to work in a 16px favicon just as well as in an event banner. We prioritize legibility, consistency, and screen adaptability.",
        entregables: [
          "Market and competitor research",
          "Naming and tagline",
          "Logo and visual identity system",
          "Color palette and typography",
          "Digital brand manual",
          "Brand templates and applications",
        ],
        proceso: [
          { paso: "Research", desc: "We analyze competitors, positioning, and target audience." },
          { paso: "Concept", desc: "We propose 2-3 creative directions with moodboards." },
          { paso: "Design", desc: "We develop the logo, color palette, typography, and visual system." },
          { paso: "Delivery", desc: "Brand manual, source files, and ready-to-use templates." },
        ],
        faq: [
          {
            question: "Does the branding service include web design?",
            answer: "Branding is the base visual system. Web design is a subsequent step that builds on the brand manual. We can do both, but they're separate services so each gets the focus it deserves.",
          },
          {
            question: "How many logo proposals do you present?",
            answer: "We present 2-3 different conceptual directions. Once a direction is chosen, we include 2 rounds of refinement in the budget.",
          },
          {
            question: "Do you deliver the source files?",
            answer: "Yes. We deliver the logo in SVG, PNG, PDF, and editable Figma/Illustrator formats. We also include versions for light backgrounds, dark backgrounds, monochrome, and favicon.",
          },
          {
            question: "Can you rebrand an existing brand?",
            answer: "Yes. We do brand evolutions that maintain existing equity while updating the visual system. We also do complete rebrands when positioning has changed and the current brand no longer communicates effectively.",
          },
        ],
      },
    },
  },
];

export default SERVICES;
