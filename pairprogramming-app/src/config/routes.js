// src/config/routes.js

// Mapeo de rutas para el menú
export const routes = {
  home: "/",
  servicios: "/servicios",
  portafolio: "/portafolio",
  calendario: "/calendario",
  nosotros: "/nosotros",
  soporte: "/soporte",
  contacto: "/contacto",
  faq: "/faq",
  privacidad: "/privacidad",
  terminos: "/terminos-condiciones",
  admin: {
    dashboard: "/admin/dashboard",
    login: "/login",
  },
};

// Función auxiliar para construir rutas completas
export const getRoute = (path) => {
  return path;
};
