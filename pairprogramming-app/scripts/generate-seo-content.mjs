/**
 * Script de generación de contenido SEO programático
 * Genera contenido único para cada combinación ciudad×servicio
 *
 * Uso: node scripts/generate-seo-content.mjs
 *
 * - Groq (LLaMA 3.3 70B) como primario (rápido)
 * - Gemini 2.0 Flash como fallback
 * - Resumible: si se corta, continúa desde donde quedó
 * - Rate limiting: 1.5s entre requests para no pegarle al límite
 * - Output: src/app/data/generated/seo-content.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "src", "app", "data", "generated");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "seo-content.json");

// Keys — se leen después de cargar .env.local en main()
function getGroqKey() { return process.env.GROQ_KEY_4 || ""; }
function getGeminiKey() { return process.env.GEMINI_KEY_4 || process.env.GOOGLE_AI_API_KEY || ""; }

// Rate limiting
const DELAY_MS = 2000; // 2s entre requests (seguro para Groq free tier 30 RPM)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ─── Dimensions ───────────────────────────────────────────────

const LOCATIONS = [
  { slug: "buenos-aires", name: "Buenos Aires", country: "Argentina", context: "capital federal, polo tecnológico más grande de Latinoamérica, sede de MercadoLibre, Globant y Auth0" },
  { slug: "caba", name: "CABA", country: "Argentina", context: "Ciudad Autónoma de Buenos Aires, distrito tecnológico en Parque Patricios, hub de startups fintech" },
  { slug: "cordoba", name: "Córdoba", country: "Argentina", context: "segundo polo tech de Argentina, Córdoba Technology Cluster, fuerte en desarrollo de software y videojuegos" },
  { slug: "rosario", name: "Rosario", country: "Argentina", context: "tercer centro económico de Argentina, polo agroindustrial con creciente sector tech, hub logístico" },
  { slug: "mendoza", name: "Mendoza", country: "Argentina", context: "provincia vitivinícola con sector tech emergente, economía del conocimiento en crecimiento" },
  { slug: "mar-del-plata", name: "Mar del Plata", country: "Argentina", context: "ciudad costera con polo de desarrollo de software, clúster tecnológico activo" },
  { slug: "la-plata", name: "La Plata", country: "Argentina", context: "capital de provincia de Buenos Aires, universidad nacional fuerte en informática" },
  { slug: "tucuman", name: "Tucumán", country: "Argentina", context: "principal centro económico del NOA, industria azucarera y citrícola digitalizándose" },
  { slug: "mexico", name: "México", country: "México", context: "segunda economía de Latinoamérica, mercado tech de USD 25B, nearshoring desde EEUU en auge" },
  { slug: "chile", name: "Chile", country: "Chile", context: "economía más estable de la región, Startup Chile referente, fuerte adopción digital en banca y retail" },
  { slug: "colombia", name: "Colombia", country: "Colombia", context: "tercer mercado tech de LATAM, Medellín como hub de innovación, Ley de Emprendimiento activa" },
  { slug: "uruguay", name: "Uruguay", country: "Uruguay", context: "mayor penetración de internet de LATAM, zona franca tech, sede regional de empresas globales" },
];

const SERVICES = [
  { slug: "saas-b2b", name: "Arquitectura B2B SaaS", context: "plataformas multi-tenant, billing, feature flags, Row Level Security" },
  { slug: "productos-digitales", name: "Productos Digitales", context: "apps web, móviles, dashboards, MVPs, sistemas escalables" },
  { slug: "crm-automatizacion", name: "CRM y Automatización", context: "Salesforce, HubSpot, integraciones custom, pipelines de venta" },
  { slug: "automatizacion-n8n", name: "Automatización con n8n", context: "workflows, integraciones, scraping, ETL, automatización de procesos" },
  { slug: "cloud-devops", name: "Cloud y DevOps", context: "AWS, Vercel, CI/CD, Docker, Kubernetes, monitoreo, infraestructura" },
  { slug: "seo-contenido", name: "SEO y Contenido", context: "posicionamiento, schema markup, contenido programático, analytics" },
  { slug: "modernizacion-legacy", name: "Modernización Legacy", context: "migración a stack moderno, refactoring, reescritura incremental" },
  { slug: "qa-performance", name: "QA y Performance", context: "testing automatizado, Lighthouse, Core Web Vitals, optimización" },
  { slug: "branding-identidad", name: "Branding e Identidad", context: "diseño de marca, UI/UX, sistemas de diseño, identidad visual" },
];

const INDUSTRIES = [
  { slug: "seguros", name: "Seguros", context: "insurtech, cotizadores multi-compañía, gestión de pólizas, siniestros digitales" },
  { slug: "salud", name: "Salud Digital", context: "telemedicina, historias clínicas electrónicas, turnos online, HIS" },
  { slug: "real-estate", name: "Real Estate", context: "proptech, portales inmobiliarios, CRM inmobiliario, tours virtuales" },
  { slug: "eventos", name: "Eventos", context: "eventtech, ticketing, validación QR, gestión de asistentes" },
  { slug: "automotriz", name: "Automotriz", context: "concesionarias digitales, cotizadores de vehículos, gestión de flota" },
  { slug: "fintech", name: "Fintech", context: "plataformas de inversión, billing, pasarelas de pago, compliance" },
  { slug: "retail", name: "Retail y E-commerce", context: "comercio electrónico B2B y B2C, marketplaces, gestión de inventario" },
];

// ─── AI Calls ─────────────────────────────────────────────────

async function callGroq(prompt) {
  if (!getGroqKey()) return null;
  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getGroqKey()}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: "Sos un redactor SEO experto en tecnología y desarrollo de software para Latinoamérica. Respondé SOLO con el JSON solicitado, sin markdown, sin explicaciones." },
          { role: "user", content: prompt },
        ],
        temperature: 0.4,
        max_tokens: 800,
        response_format: { type: "json_object" },
      }),
    });
    if (!res.ok) {
      console.warn(`  Groq ${res.status}`);
      return null;
    }
    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content;
    return text ? JSON.parse(text) : null;
  } catch (e) {
    console.warn(`  Groq error: ${e.message}`);
    return null;
  }
}

async function callGemini(prompt) {
  if (!getGeminiKey()) return null;
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${getGeminiKey()}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: {
            parts: [{ text: "Sos un redactor SEO experto en tecnología y desarrollo de software para Latinoamérica. Respondé SOLO con el JSON solicitado, sin markdown, sin explicaciones, sin bloques de código." }],
          },
          generationConfig: { temperature: 0.4, maxOutputTokens: 800, responseMimeType: "application/json" },
        }),
      }
    );
    if (!res.ok) {
      console.warn(`  Gemini ${res.status}`);
      return null;
    }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return text ? JSON.parse(text) : null;
  } catch (e) {
    console.warn(`  Gemini error: ${e.message}`);
    return null;
  }
}

async function generate(prompt) {
  let result = await callGroq(prompt);
  if (!result) {
    console.log("  → Fallback a Gemini");
    result = await callGemini(prompt);
  }
  return result;
}

// ─── Prompts ──────────────────────────────────────────────────

function locationPrompt(loc) {
  return `Generá contenido SEO para la página de desarrollo de software en ${loc.name}, ${loc.country}.
Contexto: ${loc.context}.
La empresa es PairProgramming, fundada en 2022 por Esteban Aleart. Stack: Next.js, React, TypeScript, Node.js, PostgreSQL.

Respondé en JSON con esta estructura exacta:
{
  "title": "título SEO de máximo 60 caracteres, incluir '${loc.name}' y 'desarrollo de software'",
  "description": "meta description de 140-160 caracteres, incluir la ciudad y servicios principales",
  "h1": "encabezado principal de la página, máximo 80 caracteres",
  "intro": "párrafo introductorio de 80-120 palabras sobre el ecosistema tech de ${loc.name} y por qué PairProgramming es la opción ideal para empresas de la zona. Debe ser ÚNICO y específico de la ciudad, mencionando datos reales del ecosistema local.",
  "faq": [
    { "question": "pregunta frecuente sobre desarrollo de software en ${loc.name}", "answer": "respuesta de 40-60 palabras" },
    { "question": "segunda pregunta", "answer": "respuesta de 40-60 palabras" },
    { "question": "tercera pregunta", "answer": "respuesta de 40-60 palabras" }
  ]
}`;
}

function locationServicePrompt(loc, svc) {
  return `Generá contenido SEO para la página de ${svc.name} en ${loc.name}, ${loc.country}.
Servicio: ${svc.context}.
Ciudad: ${loc.context}.
La empresa es PairProgramming, fundada en 2022. Stack: Next.js, React, TypeScript, Node.js, PostgreSQL.

Respondé en JSON con esta estructura exacta:
{
  "title": "título SEO de máximo 60 caracteres, incluir '${svc.name}' y '${loc.name}'",
  "description": "meta description de 140-160 caracteres sobre ${svc.name} en ${loc.name}",
  "h1": "encabezado principal, máximo 80 caracteres",
  "intro": "párrafo de 80-120 palabras sobre por qué las empresas de ${loc.name} necesitan ${svc.name} y cómo PairProgramming lo resuelve. Debe ser ESPECÍFICO de la ciudad y el servicio, mencionando contexto local real. No genérico.",
  "faq": [
    { "question": "pregunta sobre ${svc.name} para empresas de ${loc.name}", "answer": "respuesta de 40-60 palabras" },
    { "question": "segunda pregunta", "answer": "respuesta de 40-60 palabras" }
  ]
}`;
}

function industryPrompt(ind) {
  return `Generá contenido SEO para la página del sector ${ind.name} en desarrollo de software.
Contexto del sector: ${ind.context}.
La empresa es PairProgramming, fundada en 2022 por Esteban Aleart. Stack: Next.js, React, TypeScript, Node.js, PostgreSQL.

Respondé en JSON con esta estructura exacta:
{
  "title": "título SEO de máximo 60 caracteres sobre desarrollo de software para ${ind.name}",
  "description": "meta description de 140-160 caracteres",
  "h1": "encabezado principal, máximo 80 caracteres",
  "intro": "párrafo de 80-120 palabras sobre los desafíos tecnológicos del sector ${ind.name} y cómo PairProgramming los resuelve con soluciones a medida. Específico del sector.",
  "challenges": ["desafío 1 del sector", "desafío 2", "desafío 3", "desafío 4"],
  "faq": [
    { "question": "pregunta sobre desarrollo de software para ${ind.name}", "answer": "respuesta de 40-60 palabras" },
    { "question": "segunda pregunta", "answer": "respuesta de 40-60 palabras" },
    { "question": "tercera pregunta", "answer": "respuesta de 40-60 palabras" }
  ]
}`;
}

// ─── Main ─────────────────────────────────────────────────────

async function main() {
  // Load .env.local
  const envPath = path.join(__dirname, "..", ".env.local");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    for (const line of envContent.split("\n")) {
      const match = line.match(/^([A-Z_0-9]+)=(.+)$/);
      if (match && !process.env[match[1]]) {
        process.env[match[1]] = match[2].trim();
      }
    }
  }

  console.log(`\n🔧 SEO Content Generator`);
  console.log(`   Groq: ${getGroqKey() ? "✓" : "✗"}`);
  console.log(`   Gemini: ${getGeminiKey() ? "✓" : "✗"}`);

  if (!getGroqKey() && !getGeminiKey()) {
    console.error("❌ No API keys found. Set GROQ_KEY_4 or GEMINI_KEY_4 in .env.local");
    process.exit(1);
  }

  // Ensure output dir
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Load existing data (resumable)
  let data = { locations: {}, locationServices: {}, industries: {} };
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      data = JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf-8"));
      console.log(`   📂 Resuming from existing file`);
    } catch {
      console.log(`   ⚠️ Could not parse existing file, starting fresh`);
    }
  }

  let generated = 0;
  let skipped = 0;
  const total = LOCATIONS.length + LOCATIONS.length * SERVICES.length + INDUSTRIES.length;

  // 1. Location pages (12)
  console.log(`\n📍 Generating location pages (${LOCATIONS.length})...`);
  for (const loc of LOCATIONS) {
    if (data.locations[loc.slug]) {
      skipped++;
      console.log(`   ⏭ ${loc.name} (exists)`);
      continue;
    }
    console.log(`   🔄 ${loc.name}...`);
    const result = await generate(locationPrompt(loc));
    if (result) {
      data.locations[loc.slug] = result;
      generated++;
      // Save after each to be resumable
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));
      console.log(`   ✅ ${loc.name}`);
    } else {
      console.warn(`   ❌ ${loc.name} — failed, will retry next run`);
    }
    await sleep(DELAY_MS);
  }

  // 2. Location × Service pages (108)
  console.log(`\n🔗 Generating location×service pages (${LOCATIONS.length * SERVICES.length})...`);
  for (const loc of LOCATIONS) {
    for (const svc of SERVICES) {
      const key = `${loc.slug}/${svc.slug}`;
      if (data.locationServices[key]) {
        skipped++;
        continue;
      }
      console.log(`   🔄 ${loc.name} × ${svc.name}...`);
      const result = await generate(locationServicePrompt(loc, svc));
      if (result) {
        data.locationServices[key] = result;
        generated++;
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));
        console.log(`   ✅ ${key}`);
      } else {
        console.warn(`   ❌ ${key} — failed`);
      }
      await sleep(DELAY_MS);
    }
  }

  // 3. Industry pages (7)
  console.log(`\n🏭 Generating industry pages (${INDUSTRIES.length})...`);
  for (const ind of INDUSTRIES) {
    if (data.industries[ind.slug]) {
      skipped++;
      console.log(`   ⏭ ${ind.name} (exists)`);
      continue;
    }
    console.log(`   🔄 ${ind.name}...`);
    const result = await generate(industryPrompt(ind));
    if (result) {
      data.industries[ind.slug] = result;
      generated++;
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));
      console.log(`   ✅ ${ind.name}`);
    } else {
      console.warn(`   ❌ ${ind.name} — failed`);
    }
    await sleep(DELAY_MS);
  }

  console.log(`\n📊 Done!`);
  console.log(`   Generated: ${generated}`);
  console.log(`   Skipped (existing): ${skipped}`);
  console.log(`   Failed: ${total - generated - skipped}`);
  console.log(`   Output: ${OUTPUT_FILE}\n`);
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
