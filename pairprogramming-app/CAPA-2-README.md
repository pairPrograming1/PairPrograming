# Capa 2 SEO - Datos Reales

> El archivo `data/datos-reales.json` contiene la **capa 2 del SEO programatico**: un dato real verificable por cada dimension (locaciones, industrias, servicios). Es lo que separa una pagina "template" de una pagina "indexable" segun el skill.

## Por que existe esta capa

Las paginas generadas por LLM (capa 1) tienen parrafos y FAQs, pero Google las descarta si no encuentra **al menos un dato unico verificable** por pagina. Esta capa resuelve eso.

Cada pagina muestra ahora:
- Una metrica concreta del sector
- La fuente oficial
- El periodo del dato
- Cuando se actualizo por ultima vez

Eso le dice a Google "esto no es contenido generico, es contenido informado".

## Estructura del archivo

```json
{
  "locaciones": {
    "slug-de-locacion": {
      "metrica_principal": "...",
      "metrica_secundaria": "...",       // opcional
      "fuente": "...",
      "fuente_url": "...",
      "periodo": "...",
      "actualizado": "YYYY-MM",
      "contexto_corto": "...",
      "verificar": "alta|media|baja_confianza",
      "nota_verificacion": "..."
    }
  },
  "industrias": { ... },
  "servicios": { ... }
}
```

## CHECKLIST de verificacion antes de publicar

Las cifras del JSON son **puntos de partida razonables**, no datos auditados. Antes de hacer deploy en produccion, verificar al menos las marcadas como prioridad alta abajo.

### Locaciones - prioridad de verificacion

| Slug | Prioridad | Que verificar | Fuente |
|---|---|---|---|
| `caba` | ALTA | % empleo SSI nacional y numero absoluto | OPSSI semestral (cessi.org.ar/opssi/) |
| `cordoba` | ALTA | Empleos del cluster y empresas asociadas | Cordoba Technology Cluster memoria anual |
| `mexico` | CRITICA | Tamano del mercado IT (reemplazar el "USD 25B" del LLM) | CANIETI Annual Report o IDC LATAM |
| `colombia` | CRITICA | Ranking en LATAM (corregir "tercer mercado" del LLM) | FEDESOFT o MinTIC |
| `mendoza` | ALTA | Numero real de empresas (reemplazar el "100" sospechoso) | TIC Mendoza / Direccion Provincial |
| `mar-del-plata` | ALTA | Numero real de empresas del cluster | Cluster TIC MdP |
| `tucuman` | MEDIA | Buscar datos del gobierno provincial NOA | Camara Tucumana de Software / FACET-UNT |
| `rosario` | MEDIA | Empresas asociadas al Polo y empleos | Polo Tecnologico Rosario memoria |
| `buenos-aires` | MEDIA | % del empleo SSI en provincia | OPSSI |
| `la-plata` | MEDIA | Egresados UNLP Informatica | Facultad de Informatica UNLP |
| `chile` | MEDIA | Numero de startups Startup Chile y empresas tech | CORFO / ACTI |
| `uruguay` | MEDIA | Exportaciones SSI y % penetracion internet | CUTI informe anual |

### Industrias - prioridad de verificacion

| Slug | Prioridad | Que verificar | Fuente |
|---|---|---|---|
| `seguros` | ALTA | # aseguradoras + brecha en motos | SSN Sintesis Estadistica + DNRPA |
| `automotriz` | ALTA | Patentamientos 2024 actualizados | ACARA datos mensuales |
| `fintech` | ALTA | # de fintechs y usuarios billeteras | Camara Argentina Fintech |
| `retail` | ALTA | Facturacion e-commerce y % pymes online | CACE Estudio Anual |
| `salud` | MEDIA | # establecimientos SISA | Ministerio de Salud + SISA |
| `real-estate` | MEDIA | Escrituras mensuales CABA | Colegio de Escribanos CABA |
| `eventos` | BAJA | Tamano del mercado y % digitalizacion | AOCA reportes |

### Servicios - prioridad de verificacion

Los datos de servicios son globales (Gartner, IDC, McKinsey, etc) y se actualizan menos frecuentemente. Prioridad media a baja en general.

| Slug | Prioridad | Que verificar |
|---|---|---|
| `productos-digitales` | ALTA | Exportaciones SSI AR y empleos sector | CESSI |
| `saas-b2b` | MEDIA | Tamano mercado global y crecimiento | Gartner |
| `cloud-devops` | MEDIA | Gasto cloud LATAM y market share | IDC LATAM |
| Resto | BAJA | Datos clasicos, verificar 1 vez al ano |

## Como usar en una pagina

### En `/desarrollo-software/[locacion]/page.jsx`

```jsx
import DataReal from '@/components/DataReal';
import { getDatoRealLocacion } from '@/lib/datos-reales';

export default async function LocacionPage({ params }) {
  const { locacion } = await params;
  const datoReal = getDatoRealLocacion(locacion);
  
  return (
    <article>
      <h1>...</h1>
      <p>{parrafoLLM}</p>
      
      {/* Capa 2: dato real */}
      {datoReal && <DataReal data={datoReal} />}
      
      <FAQs faqs={faqs} />
    </article>
  );
}
```

### En `/sectores/[industria]/page.jsx`

```jsx
import { getDatoRealIndustria } from '@/lib/datos-reales';

const dato = getDatoRealIndustria(industria);
{dato && <DataReal data={dato} />}
```

### En `/desarrollo-software/[locacion]/[servicio]/page.jsx`

```jsx
import { getDatoRealCombinacion } from '@/lib/datos-reales';

// Devuelve el dato de locacion (mas especifico) o de servicio si la locacion no tiene
const dato = getDatoRealCombinacion(locacion, servicio);
{dato && <DataReal data={dato} />}
```

## Schema.org structured data

Si querés enriquecer con JSON-LD `Dataset` schema:

```jsx
import { datoRealToJsonLd } from '@/lib/datos-reales';

const datasetJsonLd = datoRealToJsonLd(datoReal);

{datasetJsonLd && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
  />
)}
```

## Actualizacion trimestral

**Cada 3-6 meses** correr este flujo para mantener el freshness signal:

1. Revisar las 4-5 dimensiones de prioridad ALTA en este README.
2. Visitar cada fuente oficial y comparar contra el JSON.
3. Actualizar el campo `actualizado` con el mes/ano nuevo.
4. Si la metrica cambio significativamente, actualizar el numero.
5. Commitear y redeploy. Eso le manda a Google senal de "contenido fresco".

## Que pasa si Claude Code agrega una dimension nueva

Si en el futuro sumas una locacion (ej: `salta`) o industria (ej: `gastronomia`), el componente `<DataReal>` no se renderiza hasta que cargues el dato en `datos-reales.json`. La pagina no se rompe - simplemente no muestra el bloque.

Para detectar dimensiones nuevas sin dato cargado:

```js
import { getDimensionesSinDato } from '@/lib/datos-reales';
import { LOCACIONES, INDUSTRIAS, SERVICIOS } from '@/data/seo-dimensions';

const faltantes = getDimensionesSinDato({
  locaciones: Object.keys(LOCACIONES),
  industrias: Object.keys(INDUSTRIAS),
  servicios: Object.keys(SERVICIOS),
});

console.log('Dimensiones sin dato:', faltantes);
```

Se puede agregar como step de CI/CD para que falle el build si hay dimensiones nuevas sin dato.

## Mapeo de servicios

Los slugs en `datos-reales.json` siguen lo que parece estar en `seo-dimensions.js`:

- `saas-b2b` -> Arquitectura B2B SaaS
- `productos-digitales` -> Productos Digitales
- `crm-automatizacion` -> CRM & Automatizacion
- `automatizacion-n8n` -> Automatizacion & n8n
- `cloud-devops` -> Cloud & DevOps
- `seo-contenido` -> SEO & Contenido
- `modernizacion-legacy` -> Modernizacion de Legacy
- `qa-performance` -> QA & Performance
- `branding-identidad` -> Branding & Identidad

Si los slugs en tu `seo-dimensions.js` difieren, ajustar las keys del JSON.

## Mapeo de industrias

- `seguros`, `salud`, `real-estate`, `eventos`, `automotriz`, `fintech`, `retail`

## Mapeo de locaciones

Argentina: `caba`, `buenos-aires`, `cordoba`, `rosario`, `mendoza`, `mar-del-plata`, `la-plata`, `tucuman`.
LATAM: `mexico`, `chile`, `colombia`, `uruguay`.

---

Mantenido por Esteban Aleart - Pair Programming.
