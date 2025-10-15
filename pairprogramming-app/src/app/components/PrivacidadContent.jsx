// components/PrivacidadContent.jsx
"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";

export default function PrivacidadContent() {
  const { isSidebarExpanded } = useSidebar();

  const sections = [
    {
      title: "1. Información que Recopilamos",
      content: `Recopilamos información necesaria para proporcionar nuestros servicios:

• Información de contacto (nombre, email, teléfono)
• Información de la empresa
• Datos del proyecto y requerimientos
• Información de facturación
• Comunicaciones y correspondencia
• Datos técnicos (IP, navegador, dispositivo)`,
    },
    {
      title: "2. Uso de la Información",
      content: `Utilizamos su información para:

• Proporcionar y mejorar nuestros servicios
• Comunicarnos sobre el proyecto
• Enviar actualizaciones y notificaciones
• Facturación y procesamiento de pagos
• Cumplir con obligaciones legales
• Prevenir fraudes y abusos
• Análisis y mejora de servicios`,
    },
    {
      title: "3. Compartición de Información",
      content: `No vendemos ni alquilamos su información personal. Podemos compartir información con:

• Proveedores de servicios necesarios para el proyecto
• Autoridades legales cuando sea requerido por ley
• Socios comerciales con su consentimiento explícito
• En caso de fusión o adquisición de la empresa

Todos los terceros están obligados a proteger su información.`,
    },
    {
      title: "4. Protección de Datos",
      content: `Implementamos medidas de seguridad robustas:

• Encriptación de datos sensibles
• Acceso restringido a información confidencial
• Protocolos de seguridad actualizados
• Backup regular de datos
• Capacitación en seguridad del equipo
• Revisión periódica de medidas de seguridad`,
    },
    {
      title: "5. Cookies y Tecnologías Similares",
      content: `Utilizamos cookies para:

• Mejorar la experiencia del usuario
• Analizar el tráfico del sitio web
• Recordar preferencias del usuario
• Personalizar contenido
• Publicidad dirigida (con consentimiento)

Puede gestionar las cookies desde la configuración de su navegador.`,
    },
    {
      title: "6. Sus Derechos",
      content: `Usted tiene derecho a:

• Acceder a su información personal
• Corregir información inexacta
• Solicitar la eliminación de sus datos
• Oponerse al procesamiento de datos
• Portabilidad de datos
• Retirar consentimiento en cualquier momento

Para ejercer estos derechos, contáctenos.`,
    },
    {
      title: "7. Retención de Datos",
      content: `Conservamos su información por:

• Datos de proyecto: 5 años después de finalizado
• Información de facturación: 10 años (requerido por ley)
• Datos de contacto: Hasta que solicite eliminación
• Datos de navegación: 2 años

Períodos pueden variar según requerimientos legales.`,
    },
    {
      title: "8. Transferencias Internacionales",
      content: `Sus datos pueden ser procesados en:

• Argentina (sede principal)
• Estados Unidos (servidores cloud)
• Países con adecuada protección de datos

Implementamos cláusulas contractuales estándar para transferencias.`,
    },
    {
      title: "9. Menores de Edad",
      content: `Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información de menores. Si descubre que un menor nos ha proporcionado información, contáctenos inmediatamente.`,
    },
    {
      title: "10. Cambios en la Política",
      content: `Podemos actualizar esta política periódicamente. Las versiones actualizadas se publicarán en nuestro sitio web. Los cambios significativos serán notificados por email. El uso continuado del servicio después de los cambios constituye la aceptación de la nueva política.`,
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center mb-12 fade-in">
          <h1
            className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Política de Privacidad
          </h1>
          <p className="text-secondary-text max-w-2xl mx-auto text-lg">
            Comprometidos con la protección y privacidad de sus datos.
          </p>
        </div>

        <Card padding="lg" className="fade-in">
          <div className="prose prose-invert max-w-none">
            <div className="mb-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-secondary-text">
                <strong>Resumen Ejecutivo:</strong> En PairProgramming valoramos
                su privacidad. Esta política explica cómo recopilamos, usamos y
                protegemos su información cuando utiliza nuestros servicios.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="border-b border-border-color pb-6 last:border-b-0"
                >
                  <h2 className="text-xl font-bold text-primary mb-4">
                    {section.title}
                  </h2>
                  <div className="text-secondary-text leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-background rounded-lg border border-border-color">
              <h3 className="font-bold text-white mb-3">
                Contacto de Privacidad
              </h3>
              <div className="text-secondary-text text-sm space-y-2">
                <p>
                  <strong>Oficial de Privacidad:</strong> Departamento de
                  Cumplimiento
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:privacidad@pairprogramming.com"
                    className="text-primary hover:underline"
                  >
                    pairprogramming@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Dirección:</strong> Buenos Aires, Argentina
                </p>
                <p className="mt-3 text-xs">
                  Tiempo de respuesta estimado: 72 horas hábiles
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
