Documentación del Proyecto PairProgramming
📋 Tabla de Contenidos
Descripción General

Estructura del Proyecto

Tecnologías Utilizadas

Arquitectura y Componentes

Configuración y Estilos

Páginas y Rutas

Context y Estado Global

Hooks Personalizados

Componentes UI

Guías de Desarrollo

🚀 Descripción General
PairProgramming es una aplicación web moderna desarrollada con Next.js 14 que presenta una agencia de desarrollo de software especializada en crear soluciones digitales personalizadas. La aplicación cuenta con un diseño oscuro elegante con acentos dorados y una interfaz de usuario responsiva.

Características Principales
✨ Diseño moderno con tema oscuro y acentos dorados

📱 Completamente responsiva

🎨 Animaciones y transiciones suaves

🔧 Arquitectura componentizada y reutilizable

⚡ Optimizada para rendimiento con Next.js

📁 Estructura del Proyecto
text
pairprogramming-app/
├── app/ # Páginas de la aplicación (App Router)
│ ├── contacto/
│ │ └── page.js
│ ├── nosotros/
│ │ └── page.js
│ ├── portafolio/
│ │ └── page.js
│ ├── servicios/
│ │ └── page.js
│ ├── globals.css
│ ├── layout.js # Layout principal
│ └── page.js # Página de inicio
├── components/ # Componentes React
│ ├── ui/ # Componentes de interfaz reutilizables
│ │ ├── Button.js
│ │ ├── Card.js
│ │ ├── Container.js
│ │ ├── Input.js
│ │ └── TextArea.js
│ ├── sections/ # Secciones específicas
│ │ └── ContactInfo.js
│ ├── CallToAction.js
│ ├── Contacto.js
│ ├── Footer.js
│ ├── Hero.js
│ ├── MainContainer.js
│ ├── Nosotros.js
│ ├── Portfolio.js
│ ├── Services.js
│ ├── Sidebar.js
│ └── Values.js
├── context/ # Contextos de React para estado global
│ └── SidebarContext.js
└── hooks/ # Hooks personalizados
└── useForm.js
🛠 Tecnologías Utilizadas
Frontend Framework
Next.js 14 - Framework React con App Router

React 18 - Biblioteca de interfaz de usuario

Estilización
Tailwind CSS - Framework de CSS utility-first

CSS Modules - Estilos con scope local

Fuentes
Inter - Fuente principal via Google Fonts

Deployment
Configuración optimizada para Vercel

🏗 Arquitectura y Componentes
Layout Principal (app/layout.js)
jsx
export default function RootLayout({ children }) {
return (
<html lang="es" className="dark">
<body className={`${inter.variable} antialiased`}>
<SidebarProvider>{children}</SidebarProvider>
</body>
</html>
);
}
Responsabilidades:

Provee el contexto del sidebar a toda la aplicación

Configura el tema oscuro por defecto

Incluye la fuente Inter globalmente

Componente Sidebar (components/Sidebar.js)
Funcionalidades:

Navegación principal entre páginas

Estado expandido/contraído (solo desktop)

Menú hamburguesa en móvil

Logo y información de la empresa

Estados:

isMobileOpen: Controla visibilidad en móvil

isSidebarExpanded: Controla expansión en desktop

MainContainer (components/MainContainer.js)
Ajusta el margen izquierdo basado en el estado del sidebar para evitar superposición de contenido.

🎨 Configuración y Estilos
Sistema de Diseño (app/globals.css)
Paleta de Colores
css
:root {
--background: #1a202c; /_ Fondo principal _/
--foreground: #f7fafc; /_ Texto principal _/
--primary: #d4af37; /_ Dorado principal _/
--primary-dark: #b8941f; /_ Dorado oscuro _/
--primary-light: #f4d03f; /_ Dorado claro _/
--accent: #ffd700; /_ Acento dorado _/
--card-bg: #2d3748; /_ Fondo de tarjetas _/
--hover-bg: #4a5568; /_ Fondo hover _/
--secondary-text: #cbd5e0; /_ Texto secundario _/
--border-color: #4a5568; /_ Bordes _/
--success: #48bb78; /_ Éxito _/
}
Utilidades CSS Personalizadas
Glass Card Effect:

css
.glass-card {
background: rgba(45, 55, 72, 0.8);
backdrop-filter: blur(8px);
border: 1px solid rgba(255, 255, 255, 0.1);
}
Botones:

.btn-gold: Botón principal dorado

.btn-gold-outline: Botón con borde dorado

Animaciones:

fadeIn: Entrada suave de elementos

shimmer: Efecto brillante para botones

📄 Páginas y Rutas
Página de Inicio (app/page.js)
jsx
export default function Home() {
return (
<div className="min-h-screen bg-background">
<Sidebar />
<MainContainer>
<Hero />
<Values />
<CallToAction />
<Footer />
</MainContainer>
</div>
);
}
Rutas Disponibles
/ - Página de inicio con hero y valores

/servicios - Listado de servicios ofrecidos

/portafolio - Galería de proyectos con videos

/nosotros - Información del equipo y metodología

/contacto - Formulario de contacto e información

🔄 Context y Estado Global
SidebarContext (context/SidebarContext.js)
Propósito: Gestionar el estado expandido/contraído del sidebar de manera global.

Hook: useSidebar()

Valores proporcionados:

isSidebarExpanded: boolean

setIsSidebarExpanded: function

Comportamiento Responsive:

Desktop: Inicia expandido, permite toggle

Mobile: Inicia contraído, se abre como overlay

🎣 Hooks Personalizados
useForm (hooks/useForm.js)
Hook para manejo simplificado de formularios.

Parámetros:

initialState: Objeto con valores iniciales

onSubmit: Función que se ejecuta al enviar

Retorna:

jsx
{
formData, // Estado actual del formulario
handleChange, // Manejador de cambios
handleSubmit, // Manejador de envío
isLoading, // Estado de carga
status, // Estado del envío ('success', 'error', null)
reset, // Función para resetear
setFormData // Setter directo del estado
}
🧩 Componentes UI
Button (components/ui/Button.js)
Props:

variant: 'primary' | 'outline' | 'secondary'

size: 'sm' | 'md' | 'lg'

href: Para enlaces (opcional)

loading: Estado de carga

icon: Elemento JSX para ícono

Card (components/ui/Card.js)
Props:

hover: boolean - Efecto hover

padding: 'sm' | 'md' | 'lg'

className: Clases adicionales

Container (components/ui/Container.js)
Props:

size: 'default' | 'expanded' | 'full'

Se adapta automáticamente al estado del sidebar

Input & TextArea (components/ui/Input.js, components/ui/TextArea.js)
Componentes de formulario con estilos consistentes y validación.

📱 Páginas Específicas
Servicios (/servicios)
Muestra tres categorías de servicios

Diseño en grid responsivo

Iconos y características por servicio

Portafolio (/portafolio)
Galería de proyectos con videos de YouTube

Lista navegable de proyectos

Información detallada de tecnologías

Diseño de dos columnas en desktop

Nosotros (/nosotros)
Información del equipo fundador

Estadísticas de la empresa

Metodología de trabajo

Historia de la compañía

Contacto (/contacto)
Formulario de contacto completo

Información de contacto

Validación de campos

Estados de carga y éxito

🎯 Guías de Desarrollo
Agregar una Nueva Página
Crear archivo en /app/

jsx
// app/nueva-pagina/page.js
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";

export default function NuevaPagina() {
return (
<div className="min-h-screen bg-background">
<Sidebar />
<MainContainer>
{/_ Contenido _/}
<Footer />
</MainContainer>
</div>
);
}
Actualizar navegación en Sidebar

jsx
// En components/Sidebar.js
const menuItems = [
// ... items existentes
{
href: "/nueva-pagina",
label: "Nueva Página",
icon: /* SVG icon */
}
];
Crear un Nuevo Componente
jsx
"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";

export default function NuevoComponente() {
const { isSidebarExpanded } = useSidebar();

return (
<section className="py-16 bg-background">
<Container size={isSidebarExpanded ? "expanded" : "default"}>
<Card hover padding="md">
{/_ Contenido _/}
</Card>
</Container>
</section>
);
}
Personalizar Estilos
Variables CSS: Modificar en globals.css

Componentes: Usar clases de Tailwind

Temas: El proyecto usa tema oscuro por defecto

Manejo de Formularios
jsx
import { useForm } from "../hooks/useForm";

export default function MiFormulario() {
const { formData, handleChange, handleSubmit, isLoading, status } = useForm(
{ nombre: "", email: "" },
async (data) => {
// Lógica de envío
}
);

return (
<form onSubmit={handleSubmit}>
<Input
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
{/_ ... más campos _/}
</form>
);
}
🚀 Scripts de Desarrollo
bash

# Instalación

npm install

# Desarrollo

npm run dev

# Build

npm run build

# Producción

npm start
📊 Consideraciones de Performance
Imágenes: Optimizadas con Next.js Image

Fuentes: Cargadas via next/font

Código: Division automática de código con App Router

CSS: Purge de Tailwind en producción

🔧 Configuración de Tailwind
El proyecto usa una configuración personalizada de Tailwind que incluye:

Extensión de colores con la paleta del proyecto

Animaciones personalizadas

Utilidades para glass morphism

Breakpoints consistentes

PairProgramming - Transformamos Ideas en Soluciones Digitales

hazlo para el readme
PairProgramming - Transformamos Ideas en Soluciones Digitales
https://res.cloudinary.com/dmjusy7sn/image/upload/v1758981340/usuarios/xkajcqpxdbggr4q7ywjy.jpg

Una aplicación web moderna desarrollada con Next.js 14 que presenta una agencia de desarrollo de software especializada en crear soluciones digitales personalizadas. Diseño oscuro elegante con acentos dorados y interfaz completamente responsiva.

✨ Características
🎨 Diseño Moderno - Tema oscuro con acentos dorados y efectos glassmorphism

📱 Completamente Responsive - Adaptable a todos los dispositivos

⚡ Alto Rendimiento - Desarrollado con Next.js 14 y React 18

🎭 Animaciones Suaves - Transiciones y efectos visuales elegantes

🔧 Arquitectura Sólida - Componentes reutilizables y código mantenible

🌐 SEO Optimizado - Metadatos y estructura semántica

🛠 Tecnologías
Frontend: Next.js 14, React 18

Estilos: Tailwind CSS, CSS Modules

Fuentes: Inter (Google Fonts)

Deployment: Optimizado para Vercel

Iconos: SVG personalizados

🚀 Instalación y Desarrollo
Prerrequisitos
Node.js 18+

npm o yarn

Instalación
bash

# Clonar el repositorio

git clone <repository-url>
cd pairprogramming-app

# Instalar dependencias

npm install

# Ejecutar en desarrollo

npm run dev

# Abrir en el navegador

http://localhost:3000
Scripts Disponibles
bash
npm run dev # Modo desarrollo
npm run build # Build de producción
npm run start # Servidor de producción
npm run lint # Análisis de código
📁 Estructura del Proyecto
text
pairprogramming-app/
├── app/ # Páginas (App Router)
│ ├── contacto/ # Página de contacto
│ ├── nosotros/ # Sobre nosotros
│ ├── portafolio/ # Portafolio de proyectos
│ ├── servicios/ # Servicios ofrecidos
│ ├── globals.css # Estilos globales
│ ├── layout.js # Layout principal
│ └── page.js # Página de inicio
├── components/ # Componentes React
│ ├── ui/ # Componentes UI reutilizables
│ ├── sections/ # Secciones específicas
│ └── _.js # Componentes principales
├── context/ # Contextos de React
├── hooks/ # Hooks personalizados
└── public/ # Archivos estáticos
🎨 Sistema de Diseño
Paleta de Colores
css
--background: #1a202c /_ Fondo principal _/
--foreground: #f7fafc /_ Texto principal _/
--primary: #d4af37 /_ Dorado principal _/
--card-bg: #2d3748 /_ Fondo de tarjetas _/
--hover-bg: #4a5568 /_ Fondo hover \*/
Componentes UI
El proyecto incluye componentes reutilizables:

Button - Botones con variantes primary, outline y secondary

Card - Tarjetas con efecto glassmorphism

Container - Contenedores adaptables al sidebar

Input/TextArea - Campos de formulario estilizados

📄 Páginas
🏠 Inicio (/)
Hero section con imagen destacada

Valores de la empresa

Llamado a acción

🛠 Servicios (/servicios)
Productos Digitales (Plataformas escalables)

Servicios Digitales (Desarrollo a medida)

Soluciones Digitales (Proyectos integrales)

💼 Portafolio (/portafolio)
Galería de proyectos con videos

Detalles de tecnologías utilizadas

Navegación entre proyectos

👥 Nosotros (/nosotros)
Información del equipo fundador

Estadísticas y métricas

Metodología de trabajo

Historia de la empresa

📞 Contacto (/contacto)
Formulario de contacto completo

Información de contacto

Validación y estados de envío

🔧 Componentes Principales
Sidebar
Navegación principal con estados expandido/contraído y menú hamburguesa para móviles.

jsx
const { isSidebarExpanded, setIsSidebarExpanded } = useSidebar();
MainContainer
Ajusta el contenido principal basado en el estado del sidebar.

Hero
Sección principal con imagen, título llamativo y llamados a acción.

🎣 Hooks Personalizados
useForm
Manejo simplificado de formularios con validación y estados.

jsx
const { formData, handleChange, handleSubmit, isLoading, status } = useForm(
initialState,
onSubmitFunction
);
🔄 Estado Global
SidebarContext
Gestiona el estado del sidebar a través de toda la aplicación.

jsx
import { useSidebar } from "../context/SidebarContext";
const { isSidebarExpanded } = useSidebar();
📱 Responsive Design
El diseño se adapta perfectamente a:

Mobile: < 768px - Sidebar como overlay

Tablet: 768px - 1024px - Layout adaptativo

Desktop: > 1024px - Sidebar lateral fijo

🚀 Deployment
Vercel (Recomendado)
bash

# Instalar Vercel CLI

npm i -g vercel

# Deployment

vercel --prod
Configuración de Build
bash
npm run build # Crea la versión optimizada
npm run start # Sirve la aplicación en producción
🎯 Características Técnicas
Performance
✅ Optimización de imágenes con Next.js Image

✅ División automática de código

✅ Fuentes optimizadas

✅ CSS purgado en producción

SEO
✅ Metadatos dinámicos

✅ Estructura semántica

✅ Meta tags para redes sociales

✅ Open Graph optimizado

Accesibilidad
✅ Navegación por teclado

✅ Contraste de colores adecuado

✅ Etiquetas ARIA

✅ Focus states visibles

🤝 Contribución
Fork el proyecto

Crear una rama feature (git checkout -b feature/AmazingFeature)

Commit cambios (git commit -m 'Add some AmazingFeature')

Push a la rama (git push origin feature/AmazingFeature)

Abrir un Pull Request

📝 Guías de Desarrollo
Agregar Nueva Página
Crear directorio en /app/nueva-pagina/page.js

Actualizar navegación en Sidebar.js

Seguir la estructura de componentes existente

Crear Nuevo Componente
jsx
"use client";
import { useSidebar } from "../context/SidebarContext";

export default function NuevoComponente() {
const { isSidebarExpanded } = useSidebar();

return (
<section className="py-16 bg-background">
{/_ Contenido _/}
</section>
);
}
📞 Soporte
Para soporte técnico o consultas sobre el proyecto, contactar al equipo de desarrollo.

📄 Licencia
Este proyecto es privado y pertenece a PairProgramming.

Desarrollado con ❤️ por el equipo de PairProgramming
