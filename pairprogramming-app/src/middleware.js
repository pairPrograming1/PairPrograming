// src/middleware.js
import { NextResponse } from "next/server";

// Mapeo de rutas antiguas a nuevas
const routeMappings = {
  "/servicios": "/page/servicios",
  "/portafolio": "/page/portafolio",
  "/calendario": "/page/calendario",
  "/nosotros": "/page/nosotros",
  "/soporte": "/page/soporte",
  "/contacto": "/page/contacto",
  "/faq": "/page/faq",
  "/privacidad": "/page/privacidad",
  "/terminos-condiciones": "/page/terminos-condiciones",
  "/admin/dashboard": "/page/admin/dashboard",
  "/login": "/page/login",
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Verificar si la ruta necesita redirección
  if (routeMappings[pathname]) {
    const newUrl = new URL(routeMappings[pathname], request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

// Configuración de las rutas que activan el middleware
export const config = {
  matcher: [
    "/servicios",
    "/portafolio",
    "/calendario",
    "/nosotros",
    "/soporte",
    "/contacto",
    "/faq",
    "/privacidad",
    "/terminos-condiciones",
    "/admin/dashboard",
    "/login",
  ],
};
