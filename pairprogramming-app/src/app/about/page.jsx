import SectionCard from "../components/SectionCard";

export default function About() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros</h1>
      <SectionCard title="Misión">
        <p>
          Desarrollar software, plataformas y soluciones que optimicen procesos,
          integren sistemas y mejoren la experiencia de usuario, acompañando a
          empresas en su evolución digital.
        </p>
      </SectionCard>
      <SectionCard title="Visión">
        <p>
          Ser un referente en soluciones digitales que combinan tecnología de
          vanguardia con un enfoque humano, estratégico y práctico.
        </p>
      </SectionCard>
      <SectionCard title="Valores">
        <ul className="list-disc pl-6">
          <li>Calidad</li>
          <li>Escalabilidad</li>
          <li>Eficiencia</li>
          <li>Aprendizaje continuo</li>
          <li>Colaboración</li>
          <li>Innovación</li>
          <li>Orientación al cliente</li>
          <li>Coherencia</li>
          <li>Escucha activa</li>
          <li>Curiosidad aplicada</li>
          <li>Simplicidad estructural</li>
        </ul>
      </SectionCard>
      <SectionCard title="Identidad Estratégica">
        <p>
          PairProgramming no es solo software ni solo agencia: es un nodo
          híbrido entre estrategia, diseño y tecnología. Diseñamos como
          estrategas, desarrollamos como diseñadores y pensamos como
          sistemistas.
        </p>
      </SectionCard>
      <SectionCard title="Ventajas Competitivas">
        <ul className="list-disc pl-6">
          <li>
            Modelo híbrido operativo: integración real de capacidades técnicas,
            estratégicas y creativas.
          </li>
          <li>
            Enfoque sistémico: diseño y tecnología como dimensiones de una misma
            lógica.
          </li>
          <li>
            Cultura de colaboración horizontal: trabajo en red y co-decisión.
          </li>
          <li>
            Estética funcional y simbólica: cada entrega comunica lo que el
            sistema representa.
          </li>
          <li>
            Adaptabilidad sin pérdida de identidad: operamos en entornos
            cambiantes sin perder coherencia.
          </li>
        </ul>
      </SectionCard>
      <SectionCard title="Identidad Cultural">
        <p>
          Somos iterativos por método, adaptativos por cultura y conectivos por
          esencia. Nuestra cultura no es un manifiesto colgado en la pared, sino
          una práctica cotidiana basada en colaboración, aprendizaje continuo y
          construcción colectiva.
        </p>
      </SectionCard>
      <SectionCard title="Experiencia de Marca">
        <p>
          PairProgramming no solo presta un servicio: co-crea trayectorias con
          sus clientes. El customer journey contempla atracción, consideración,
          conversión, entrega y fidelización; mientras que el brand journey
          interno refuerza la cultura viva desde la incorporación hasta la
          pertenencia.
        </p>
        <p>
          Estilo de relación: activo, claro, cercano, sistémico y aprendiente.
          Diseñamos experiencias con coherencia simbólica y emocional, cuidando
          los detalles en...
        </p>
      </SectionCard>
    </div>
  );
}
