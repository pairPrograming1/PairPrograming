"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";

const MethodologyIcon = ({ name }) => {
  const icons = {
    Descubrimiento: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    Diseño: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
    Desarrollo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    Entrega: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default function Nosotros() {
  const { isSidebarExpanded } = useSidebar();

  const teamMembers = [
    {
      name: "Pablo Rubiño",
      role: "Full-Stack Developer",
      description:
        "Más de 5 años de experiencia en desarrollo web y mobile. Especialista en React, Node.js y arquitecturas escalables.",
      expertise: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      name: "Esteban Aleart",
      role: "Full-Stack Developer",
      description:
        "Más de 5 años de experiencia en desarrollo web y mobile. Especialista en React, Node.js y arquitecturas escalables.",
      expertise: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      name: "Josue Rendom",
      role: "Full-Stack Developer",
      description:
        "Más de 5 años de experiencia en desarrollo web y mobile. Especialista en React, Node.js y arquitecturas escalables.",
      expertise: ["React", "Node.js", "TypeScript", "AWS"],
    },
  ];

  const stats = [
    { number: "50+", label: "Proyectos Completados" },
    { number: "3+", label: "Años de Experiencia" },
    { number: "100%", label: "Clientes Satisfechos" },
    { number: "24/7", label: "Soporte Continuo" },
  ];

  const methodology = [
    {
      title: "Descubrimiento",
      description:
        "Analizamos tus necesidades y objetivos para crear la estrategia perfecta.",
    },
    {
      title: "Diseño",
      description:
        "Creamos interfaces intuitivas y experiencias de usuario excepcionales.",
    },
    {
      title: "Desarrollo",
      description:
        "Implementamos soluciones robustas con las mejores tecnologías.",
    },
    {
      title: "Entrega",
      description:
        "Desplegamos y damos soporte continuo para garantizar el éxito.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-black text-white min-h-screen border-b border-gray-800">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center mb-16 fade-in">
          <h1
            className={`font-bold mb-6 text-white transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Sobre Nosotros
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            En{" "}
            <span className="text-blue-500 font-semibold">PairProgramming</span>,
            somos un equipo apasionado por transformar ideas en soluciones
            digitales innovadoras. Combinamos tecnología, diseño y estrategia
            para crear productos que impulsan el crecimiento de tu negocio.
          </p>
        </div>

        <div className="mb-16 fade-in" style={{ animationDelay: "0.1s" }}>
          <Card padding="lg">
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-500 mb-6">
              Nuestra Historia
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Fundada en 2022, PairProgramming nació de la visión de crear
                  soluciones digitales que realmente importen. Comenzamos como
                  un pequeño equipo de desarrolladores apasionados y hemos
                  crecido hasta convertirnos en una agencia de desarrollo
                  full-stack.
                </p>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Creemos en el poder de la colaboración estrecha con nuestros
                  clientes, trabajando codo a codo para entender sus necesidades
                  y superar sus expectativas.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Nuestro nombre refleja nuestra metodología: trabajamos en
                  pareja no solo internamente, sino también con nuestros
                  clientes, asegurando que cada paso del desarrollo sea
                  transparente y colaborativo.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/10 to-blue-500/5 rounded-2xl p-8 text-center border border-blue-600/20">
                <div className="text-blue-500 mb-4 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Innovación Constante
                </h3>
                <p className="text-gray-400 text-sm">
                  Nos mantenemos a la vanguardia de las últimas tecnologías y
                  metodologías de desarrollo.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-16 fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} hover padding="md" className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16 fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-500 mb-8 text-center">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} hover padding="md">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-500 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-600/20 text-blue-500 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="fade-in" style={{ animationDelay: "0.4s" }}>
          <Card padding="lg">
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-500 mb-6 text-center">
              Nuestra Metodología
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-500">
                      <MethodologyIcon name={item.title} />
                    </div>
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
