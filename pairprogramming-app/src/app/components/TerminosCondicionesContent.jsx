// components/TerminosCondicionesContent.jsx
"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";

export default function TerminosCondicionesContent() {
  const { isSidebarExpanded } = useSidebar();

  const sections = [
    {
      title: "1. Aceptación de los Términos",
      content: `Al acceder y utilizar los servicios de PairProgramming, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de los términos, no podrá acceder a nuestros servicios.`,
    },
    {
      title: "2. Servicios de Desarrollo",
      content: `PairProgramming ofrece servicios de desarrollo de software que incluyen pero no se limitan a:

• Desarrollo de aplicaciones web y móviles
• Consultoría tecnológica
• Diseño UX/UI
• Mantenimiento y soporte
• Integración de sistemas

Los servicios se prestan según las especificaciones acordadas en cada propuesta.`,
    },
    {
      title: "3. Propiedad Intelectual",
      content: `• El código fuente y productos desarrollados serán propiedad del cliente una vez completado el pago total.
• PairProgramming retiene el derecho de utilizar el proyecto como parte de su portafolio.
• Las librerías, frameworks y herramientas de terceros están sujetas a sus respectivas licencias.
• El cliente garantiza que posee los derechos sobre cualquier contenido proporcionado.`,
    },
    {
      title: "4. Confidencialidad",
      content: `Ambas partes acuerdan mantener la confidencialidad de toda información compartida durante el proyecto:

• Información técnica y de negocio
• Estrategias comerciales
• Datos de usuarios y clientes
• Cualquier información marcada como confidencial

Este acuerdo de confidencialidad permanece vigente incluso después de finalizado el proyecto.`,
    },
    {
      title: "5. Pagos y Facturación",
      content: `• Los precios se establecen en la propuesta inicial y pueden ajustarse por cambios de alcance.
• Se requiere un anticipo del 50% para iniciar el proyecto.
• El saldo restante se paga según hitos establecidos.
• Facturación mensual para proyectos de larga duración.
• Los precios no incluyen impuestos aplicables.`,
    },
    {
      title: "6. Garantías y Responsabilidades",
      content: `PairProgramming garantiza:

• Calidad del código y estándares de desarrollo
• Cumplimiento de plazos acordados
• Funcionamiento según especificaciones
• Soporte post-lanzamiento por 90 días

No nos hacemos responsables por:
• Daños indirectos o consecuentes
• Pérdida de datos no respaldados
• Terceros proveedores de servicios
• Cambios en requerimientos no comunicados`,
    },
    {
      title: "7. Cancelación y Reembolsos",
      content: `• El cliente puede cancelar el proyecto en cualquier momento.
• El anticipo no es reembolsable una vez iniciado el desarrollo.
• Los pagos por hitos completados no son reembolsables.
• En caso de cancelación por nuestra parte, se reembolsarán los pagos no utilizados.`,
    },
    {
      title: "8. Modificaciones de Alcance",
      content: `• Cualquier cambio en el alcance requiere aprobación por escrito.
• Los cambios pueden afectar el timeline y costo del proyecto.
• Se proporcionará cotización para cambios significativos.
• Changes menores se manejan dentro del sprint actual.`,
    },
    {
      title: "9. Ley Aplicable",
      content: `Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa será resuelta en los tribunales competentes de Buenos Aires, Argentina.`,
    },
    {
      title: "10. Modificaciones de los Términos",
      content: `Nos reservamos el derecho de modificar estos términos en cualquier momento. Las versiones actualizadas se publicarán en nuestro sitio web. El uso continuado del servicio después de los cambios constituye la aceptación de los nuevos términos.`,
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
            Términos y Condiciones
          </h1>
          <p className="text-secondary-text max-w-2xl mx-auto text-lg">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <Card padding="lg" className="fade-in">
          <div className="prose prose-invert max-w-none">
            <div className="mb-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-secondary-text">
                <strong>Nota importante:</strong> Estos términos constituyen un
                acuerdo legal entre usted y PairProgramming. Le recomendamos
                leerlos detenidamente antes de utilizar nuestros servicios.
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

            <div className="mt-8 p-4 bg-background rounded-lg border border-border-color">
              <h3 className="font-bold text-white mb-2">Contacto Legal</h3>
              <p className="text-secondary-text text-sm">
                Para preguntas sobre estos términos, contáctenos en:{" "}
                <a
                  href="mailto:legal@pairprogramming.com"
                  className="text-primary hover:underline"
                >
                  legal@pairprogramming.com
                </a>
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
