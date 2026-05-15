/**
 * Returns a localized version of a data object.
 * If locale is "en" and the object has i18n.en, merges English fields over the default (Spanish).
 * Otherwise returns the original object.
 */
export function getLocalizedItem(item, locale) {
  if (locale === "en" && item.i18n?.en) {
    return { ...item, ...item.i18n.en };
  }
  return item;
}

/**
 * Returns a single localized field from a data object.
 */
export function getLocalizedField(item, field, locale) {
  if (locale === "en" && item.i18n?.en?.[field] !== undefined) {
    return item.i18n.en[field];
  }
  return item[field];
}

/**
 * Returns a full localized service object, including nested arrays (entregables, proceso, faq).
 */
export function getLocalizedService(service, locale) {
  if (locale !== "en" || !service.i18n?.en) return service;

  const en = service.i18n.en;
  return {
    ...service,
    name: en.name ?? service.name,
    desc: en.desc ?? service.desc,
    longDesc: en.longDesc ?? service.longDesc,
    entregables: en.entregables ?? service.entregables,
    proceso: en.proceso ?? service.proceso,
    faq: en.faq ?? service.faq,
  };
}
