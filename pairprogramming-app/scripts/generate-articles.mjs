#!/usr/bin/env node
/**
 * generate-articles.mjs
 * Generates blog articles using Groq (primary) + Gemini Flash (fallback).
 * Output: src/app/data/articles.js
 *
 * Usage: node scripts/generate-articles.mjs
 *
 * IMPORTANT: Articles are educational/marketing only.
 * NEVER expose internal architecture, endpoints, keys, or sensitive data.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Load .env.local
const envPath = path.join(ROOT, ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
}

// Multiple keys for rotation when rate-limited
const GROQ_KEYS = () =>
  [process.env.GROQ_KEY_4, process.env.GROQ_KEY_1].filter(Boolean);
const GEMINI_KEYS = () =>
  [process.env.GEMINI_KEY_4, process.env.GEMINI_KEY_1].filter(Boolean);

// ─── Article definitions ───────────────────────────────────────────

const ARTICLE_TOPICS = [
  {
    slug: "agentes-ia-automatizacion-empresarial",
    category: "Inteligencia Artificial",
    tags: ["IA", "Agentes", "Automatización", "n8n"],
    prompt: `Escribe un artículo sobre agentes de inteligencia artificial aplicados a la automatización empresarial. Cubre:
- Qué son los agentes de IA y cómo se diferencian de chatbots simples
- Casos de uso reales: atención al cliente, procesamiento de documentos, flujos de aprobación
- Cómo se integran con herramientas como n8n para orquestar procesos
- Beneficios concretos: reducción de tiempos, menor error humano, escalabilidad
- Cuándo conviene implementar agentes vs. automatización tradicional
Enfoque práctico y orientado a decisores de negocio.`,
  },
  {
    slug: "rag-embeddings-conocimiento-empresarial",
    category: "Inteligencia Artificial",
    tags: ["RAG", "Embeddings", "LLM", "Base de conocimiento"],
    prompt: `Escribe un artículo sobre RAG (Retrieval Augmented Generation) y embeddings para bases de conocimiento empresarial. Cubre:
- Qué es RAG y por qué es superior a fine-tuning para datos privados
- Cómo funcionan los embeddings vectoriales de forma simple
- Casos de uso: manuales internos, soporte técnico, documentación legal
- Ventajas: datos actualizados sin reentrenar, control de fuentes, menor costo
- Consideraciones de privacidad y seguridad de datos corporativos
No mencionar arquitectura interna ni herramientas específicas de implementación.`,
  },
  {
    slug: "fine-tuning-modelos-lenguaje-casos-especificos",
    category: "Inteligencia Artificial",
    tags: ["Fine-tuning", "Mistral", "LLM", "ML"],
    prompt: `Escribe un artículo sobre fine-tuning de modelos de lenguaje para casos de uso específicos empresariales. Cubre:
- Qué es el fine-tuning y cuándo tiene sentido vs. prompting vs. RAG
- Modelos open-source como Mistral que permiten personalización
- Casos donde el fine-tuning brilla: clasificación de tickets, extracción de datos, lenguaje de dominio
- El proceso general: preparación de datos, entrenamiento, evaluación
- Costos y consideraciones prácticas para empresas
Enfoque en el valor de negocio, no en detalles técnicos de implementación.`,
  },
  {
    slug: "seo-programatico-escalar-posicionamiento",
    category: "SEO & Marketing",
    tags: ["SEO", "Programático", "Next.js", "Contenido"],
    prompt: `Escribe un artículo sobre SEO programático como estrategia para escalar el posicionamiento orgánico. Cubre:
- Qué es el SEO programático y en qué se diferencia del SEO tradicional
- Cómo generar cientos de páginas únicas de calidad sin penalización de Google
- La importancia del contenido único por página y el interlinking
- Ejemplos de industrias donde funciona: real estate, seguros, e-commerce, servicios locales
- Métricas clave: páginas indexadas, impresiones, CTR orgánico
- Cómo combinar generación automática con curación humana
No mencionar herramientas internas ni scripts específicos.`,
  },
  {
    slug: "desarrollo-crm-medida-vs-saas",
    category: "Desarrollo de Software",
    tags: ["CRM", "SaaS", "MVP", "Negocio"],
    prompt: `Escribe un artículo comparando el desarrollo de un CRM a medida versus usar un SaaS existente (Salesforce, HubSpot, etc.). Cubre:
- Cuándo conviene cada opción según tamaño de empresa y complejidad del proceso
- Ventajas del CRM a medida: integración total, sin licencias mensuales, propiedad del dato
- Ventajas del SaaS: velocidad de implementación, ecosistema, soporte
- El enfoque MVP: lanzar con lo mínimo y iterar basado en uso real
- Cómo evaluar el ROI de cada alternativa
- Errores comunes en la elección
Orientado a fundadores y gerentes de operaciones.`,
  },
  {
    slug: "plataformas-reutilizables-lms-crm-eventos",
    category: "Desarrollo de Software",
    tags: ["LMS", "CRM", "Plataformas", "Arquitectura"],
    prompt: `Escribe un artículo sobre cómo diseñar plataformas de software reutilizables entre industrias. Cubre:
- El concepto de construir una vez y adaptar a múltiples verticales
- Ejemplo: un sistema de gestión que sirve para catering, eventos e inmobiliarias reutilizando la misma base
- Beneficios: menor costo por vertical, actualizaciones compartidas, time-to-market más rápido
- El balance entre generalización y especialización
- Cuándo conviene una plataforma multi-tenant vs. instancias separadas
- El rol de las APIs y módulos configurables
No exponer arquitectura interna ni endpoints. Mantener a nivel conceptual y de negocio.`,
  },
  {
    slug: "nextjs-stack-ideal-aplicaciones-empresariales",
    category: "Tecnología",
    tags: ["Next.js", "React", "Full-stack", "Enterprise"],
    prompt: `Escribe un artículo sobre por qué Next.js se consolidó como stack ideal para aplicaciones empresariales. Cubre:
- Evolución de Next.js: de framework de SSR a plataforma full-stack
- Ventajas para empresas: SEO nativo, rendimiento, deployment simplificado
- Server Components y cómo mejoran la experiencia del usuario
- Integración con bases de datos, autenticación y APIs
- Comparación práctica con alternativas (Nuxt, Remix, SvelteKit)
- Casos de uso empresariales: dashboards, portales de cliente, e-commerce
Enfocado en decisores técnicos que evalúan stacks.`,
  },
  {
    slug: "automatizacion-procesos-n8n-empresa",
    category: "Automatización",
    tags: ["n8n", "Automatización", "Workflows", "Integración"],
    prompt: `Escribe un artículo sobre automatización de procesos empresariales con plataformas low-code como n8n. Cubre:
- Qué tipos de procesos se pueden automatizar sin desarrollo custom
- Ejemplos concretos: onboarding de clientes, facturación, reportes, notificaciones
- n8n vs. Zapier vs. Make: cuándo usar cada uno
- El concepto de workflow como código: versionable, testeable, reproducible
- Integración con sistemas existentes (CRM, ERP, email, Slack)
- ROI de la automatización: horas ahorradas, errores reducidos
Práctico y orientado a operaciones.`,
  },
  {
    slug: "mvp-producto-digital-lanzar-rapido",
    category: "Producto",
    tags: ["MVP", "Startup", "Producto Digital", "Lean"],
    prompt: `Escribe un artículo sobre cómo construir y lanzar un MVP de producto digital de forma efectiva. Cubre:
- Qué es realmente un MVP y qué NO es (no es un prototipo a medias)
- El framework: identificar hipótesis → construir lo mínimo → medir → iterar
- Cómo priorizar features para el primer lanzamiento
- Stack recomendado para velocidad sin sacrificar calidad
- Errores comunes: over-engineering, feature creep, no medir
- Casos reales de productos que arrancaron como MVP simples
Orientado a fundadores y product managers.`,
  },
  {
    slug: "seguridad-aplicaciones-web-owasp-buenas-practicas",
    category: "Tecnología",
    tags: ["Seguridad", "OWASP", "Web", "DevSecOps"],
    prompt: `Escribe un artículo sobre seguridad en aplicaciones web modernas y buenas prácticas. Cubre:
- Las vulnerabilidades más comunes de OWASP Top 10 explicadas de forma simple
- Autenticación y autorización: JWT, sessions, OAuth — cuándo usar cada uno
- Validación de inputs: por qué es la primera línea de defensa
- HTTPS, CORS, CSP y headers de seguridad esenciales
- El enfoque DevSecOps: seguridad integrada en el ciclo de desarrollo
- Checklist práctico para auditar tu aplicación
No exponer configuraciones internas ni herramientas específicas de pentesting.`,
  },
  {
    slug: "cloud-devops-infraestructura-escalable",
    category: "Tecnología",
    tags: ["Cloud", "DevOps", "AWS", "CI/CD"],
    prompt: `Escribe un artículo sobre cómo montar infraestructura cloud escalable para productos digitales. Cubre:
- Cloud como ventaja competitiva: pay-as-you-go, escalado automático, globalización
- Los pilares: compute, storage, networking, monitoring
- CI/CD: por qué cada push debería pasar por un pipeline automatizado
- Containerización: qué es y cuándo tiene sentido
- Monitoreo y alertas: detectar problemas antes que los usuarios
- Costos: cómo evitar sorpresas en la factura de cloud
Enfocado en CTOs y líderes técnicos. Sin exponer configuraciones específicas.`,
  },
  {
    slug: "transformacion-digital-pymes-latinoamerica",
    category: "Negocio",
    tags: ["Transformación Digital", "PyMEs", "LATAM", "Estrategia"],
    prompt: `Escribe un artículo sobre transformación digital para PyMEs en Latinoamérica. Cubre:
- El estado actual de la digitalización en PyMEs de Argentina, México, Colombia y Chile
- Barreras comunes: presupuesto, resistencia al cambio, falta de talento técnico
- Por dónde empezar: las 3 áreas de mayor impacto inmediato
- El rol del software a medida vs. soluciones genéricas para PyMEs
- Casos de éxito: empresas que duplicaron eficiencia con tecnología
- Incentivos y programas de gobierno disponibles en la región
Orientado a dueños de PyMEs y directivos.`,
  },
];

// ─── AI API calls ──────────────────────────────────────────────────

const SYSTEM_PROMPT = `Eres un redactor técnico experto en desarrollo de software y tecnología empresarial. Escribes para el blog de PairProgramming, una agencia de desarrollo de software fundada en 2022 por Esteban Aleart, con sede en Buenos Aires y Madrid.

REGLAS ESTRICTAS:
- NUNCA expongas arquitectura interna, endpoints, API keys, ni detalles de implementación de proyectos
- NUNCA menciones herramientas internas específicas ni repositorios
- El tono es profesional pero accesible, como un senior developer explicando a un colega
- Usa español rioplatense natural (sin "vosotros", sí "ustedes")
- Incluye datos reales verificables cuando sea posible (estadísticas de mercado, tendencias)
- Cada artículo debe aportar valor genuino, no ser relleno SEO genérico
- Evita clichés de marketing ("revolucionario", "disruptivo", "game-changer")
- Los artículos son educativos: explican conceptos, dan contexto y ayudan a tomar decisiones`;

const ARTICLE_FORMAT = `Responde EXCLUSIVAMENTE con un JSON válido (sin markdown, sin backticks) con esta estructura:
{
  "title": "Título del artículo (50-70 caracteres, incluir keyword principal)",
  "description": "Meta description para SEO (150-160 caracteres)",
  "readTime": 8,
  "content": "Contenido HTML del artículo (1500-2500 palabras). Usa <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <blockquote>, <code>. NO uses <h1>. Estructura: introducción → secciones con h2 → conclusión con CTA hacia /contacto.",
  "faq": [
    { "question": "Pregunta frecuente relevante", "answer": "Respuesta concisa de 40-80 palabras" },
    { "question": "Segunda pregunta", "answer": "Segunda respuesta" },
    { "question": "Tercera pregunta", "answer": "Tercera respuesta" }
  ]
}`;

async function callGroqWithKey(prompt, key) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `${prompt}\n\n${ARTICLE_FORMAT}` },
      ],
      temperature: 0.4,
      max_tokens: 4096,
      response_format: { type: "json_object" },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Groq ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.choices[0].message.content;
}

async function callGroq(prompt) {
  const keys = GROQ_KEYS();
  if (!keys.length) throw new Error("No Groq keys");
  for (let i = 0; i < keys.length; i++) {
    try {
      return await callGroqWithKey(prompt, keys[i]);
    } catch (err) {
      console.log(`    Groq key ${i + 1}/${keys.length} failed: ${err.message.slice(0, 80)}`);
      if (i === keys.length - 1) throw err;
    }
  }
}

async function callGeminiWithKey(prompt, key) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${SYSTEM_PROMPT}\n\n${prompt}\n\n${ARTICLE_FORMAT}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 4096,
          responseMimeType: "application/json",
        },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.candidates[0].content.parts[0].text;
}

async function callGemini(prompt) {
  const keys = GEMINI_KEYS();
  if (!keys.length) throw new Error("No Gemini keys");
  for (let i = 0; i < keys.length; i++) {
    try {
      return await callGeminiWithKey(prompt, keys[i]);
    } catch (err) {
      console.log(`    Gemini key ${i + 1}/${keys.length} failed: ${err.message.slice(0, 80)}`);
      if (i === keys.length - 1) throw err;
    }
  }
}

async function generateArticle(topic) {
  let raw;

  // Try all Groq keys first, then all Gemini keys
  try {
    raw = await callGroq(topic.prompt);
  } catch (err) {
    console.log(`  All Groq keys failed, trying Gemini...`);
    raw = await callGemini(topic.prompt);
  }

  // Parse JSON
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    // Try to extract JSON from response
    const match = raw.match(/\{[\s\S]*\}/);
    if (match) {
      parsed = JSON.parse(match[0]);
    } else {
      throw new Error("Could not parse JSON from response");
    }
  }

  return {
    slug: topic.slug,
    title: parsed.title,
    description: parsed.description,
    category: topic.category,
    tags: topic.tags,
    date: new Date().toISOString().split("T")[0],
    readTime: parsed.readTime || 8,
    author: { name: "Esteban Aleart", role: "Founder & Lead Engineer" },
    content: parsed.content,
    faq: parsed.faq || [],
  };
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  console.log("=== Blog Article Generator ===\n");

  const outputPath = path.join(ROOT, "src/app/data/articles.js");

  // Check for existing articles (resumable)
  let existing = [];
  try {
    const mod = await import(`file://${outputPath.replace(/\\/g, "/")}`);
    existing = mod.ARTICLES || [];
  } catch {
    // No existing file or empty
  }

  const existingSlugs = new Set(existing.map((a) => a.slug));
  const toGenerate = ARTICLE_TOPICS.filter((t) => !existingSlugs.has(t.slug));

  if (toGenerate.length === 0) {
    console.log("All articles already generated. Nothing to do.");
    return;
  }

  console.log(
    `Found ${existing.length} existing articles, ${toGenerate.length} to generate.\n`
  );

  const articles = [...existing];
  let successes = 0;
  let failures = 0;

  for (let i = 0; i < toGenerate.length; i++) {
    const topic = toGenerate[i];
    console.log(
      `[${i + 1}/${toGenerate.length}] Generating: ${topic.slug}...`
    );

    try {
      const article = await generateArticle(topic);
      articles.push(article);
      successes++;
      console.log(`  OK: "${article.title}"`);

      // Save after each article (resumable)
      writeArticlesFile(outputPath, articles);
    } catch (err) {
      failures++;
      console.error(`  FAILED: ${err.message}`);
    }

    // Rate limit: 3s between requests
    if (i < toGenerate.length - 1) {
      await new Promise((r) => setTimeout(r, 3000));
    }
  }

  console.log(`\nDone! ${successes} generated, ${failures} failed.`);
  console.log(`Total articles: ${articles.length}`);
}

function writeArticlesFile(outputPath, articles) {
  const content = `// Auto-generated blog articles — DO NOT EDIT MANUALLY
// Generated by scripts/generate-articles.mjs
// Last updated: ${new Date().toISOString()}

export const ARTICLES = ${JSON.stringify(articles, null, 2)};
`;
  fs.writeFileSync(outputPath, content, "utf-8");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
