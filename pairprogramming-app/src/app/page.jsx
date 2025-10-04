import SectionCard from "../app/components/SectionCard";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Bienvenido a PairProgramming
      </h1>
      <SectionCard title="Introducción y Contexto">
        <p>
          Somos PairProgramming, una empresa especializada en desarrollo de
          software y soluciones digitales a medida, con enfoque en la
          colaboración, escalabilidad y eficiencia. Transformamos ideas y
          necesidades en productos y servicios digitales que aportan valor real
          a nuestros clientes.
        </p>
        <p>
          Nuestro equipo combina Full-stack development, integración de
          sistemas, UX/UI design, desarrollo web y móvil, y modernización de
          sistemas legacy, trabajando con metodologías ágiles y pair
          programming.
        </p>
      </SectionCard>
      <SectionCard title="Propuesta de Valor">
        <p>
          Transformamos ideas en soluciones digitales concretas, eficientes y
          escalables. Convertimos la complejidad en claridad, integrando
          tecnología, diseño y estrategia.
        </p>
      </SectionCard>
    </div>
  );
}
