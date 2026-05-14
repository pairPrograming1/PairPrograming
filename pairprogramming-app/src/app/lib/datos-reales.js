// lib/datos-reales.js
// ============================================================================
// Helpers para acceder a la capa 2 del SEO programatico.
// 
// Importa el JSON con datos reales por dimension y expone funciones
// que devuelven el objeto del dato o null si la dimension no tiene
// dato cargado.
//
// Esto permite que las paginas usen el componente <DataReal> sin
// romper si una dimension nueva todavia no tiene dato.
// ============================================================================

import datosReales from '@/app/data/datos-reales.json';

/**
 * Devuelve el dato real para una locacion dada.
 * @param {string} slug - El slug de la locacion (ej: 'caba', 'cordoba')
 * @returns {object|null} El objeto de dato real o null si no existe
 */
export function getDatoRealLocacion(slug) {
  if (!slug) return null;
  return datosReales?.locaciones?.[slug] ?? null;
}

/**
 * Devuelve el dato real para una industria dada.
 * @param {string} slug - El slug de la industria (ej: 'seguros', 'fintech')
 * @returns {object|null} El objeto de dato real o null si no existe
 */
export function getDatoRealIndustria(slug) {
  if (!slug) return null;
  return datosReales?.industrias?.[slug] ?? null;
}

/**
 * Devuelve el dato real para un servicio dado.
 * @param {string} slug - El slug del servicio (ej: 'saas-b2b', 'crm-automatizacion')
 * @returns {object|null} El objeto de dato real o null si no existe
 */
export function getDatoRealServicio(slug) {
  if (!slug) return null;
  return datosReales?.servicios?.[slug] ?? null;
}

/**
 * Devuelve un dato combinado para paginas N×M de locacion × servicio.
 * Si solo uno de los dos tiene dato, devuelve ese. Si ambos lo tienen,
 * devuelve el de la locacion (mas especifico geograficamente).
 * @param {string} locacionSlug
 * @param {string} servicioSlug
 * @returns {object|null}
 */
export function getDatoRealCombinacion(locacionSlug, servicioSlug) {
  const datoLocacion = getDatoRealLocacion(locacionSlug);
  if (datoLocacion) return datoLocacion;
  return getDatoRealServicio(servicioSlug);
}

/**
 * Devuelve la lista de dimensiones que TODAVIA NO tienen dato cargado.
 * Util para que CI/CD avise si una dimension nueva quedo sin dato.
 * @param {Array} todasLasLocaciones - lista de slugs de locaciones definidas
 * @param {Array} todasLasIndustrias - lista de slugs de industrias definidas
 * @param {Array} todasLosServicios - lista de slugs de servicios definidos
 * @returns {object} { locaciones: [], industrias: [], servicios: [] }
 */
export function getDimensionesSinDato({ locaciones = [], industrias = [], servicios = [] }) {
  return {
    locaciones: locaciones.filter((slug) => !getDatoRealLocacion(slug)),
    industrias: industrias.filter((slug) => !getDatoRealIndustria(slug)),
    servicios: servicios.filter((slug) => !getDatoRealServicio(slug)),
  };
}

/**
 * Devuelve las dimensiones cuyo dato tiene 'baja_confianza' o requiere verificacion.
 * Util para una pagina de admin/dashboard interno.
 * @returns {Array} lista de objetos { tipo, slug, dato }
 */
export function getDimensionesQueRequierenVerificacion() {
  const resultado = [];

  for (const tipo of ['locaciones', 'industrias', 'servicios']) {
    const items = datosReales?.[tipo] ?? {};
    for (const [slug, dato] of Object.entries(items)) {
      if (dato.verificar === 'baja_confianza' || dato.verificar === 'media_confianza') {
        resultado.push({ tipo, slug, dato });
      }
    }
  }

  return resultado;
}

/**
 * Estructura un objeto de dato real como Schema.org Dataset para JSON-LD.
 * Util para enriquecer las paginas con structured data.
 * @param {object} dato
 * @returns {object|null}
 */
export function datoRealToJsonLd(dato) {
  if (!dato || !dato.metrica_principal) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: dato.metrica_principal,
    description: dato.contexto_corto || dato.metrica_principal,
    creator: {
      '@type': 'Organization',
      name: dato.fuente,
      url: dato.fuente_url,
    },
    temporalCoverage: dato.periodo,
    dateModified: dato.actualizado,
  };
}
