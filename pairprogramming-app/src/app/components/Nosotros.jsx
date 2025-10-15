"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";

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
      icon: "🔍",
      title: "Descubrimiento",
      description:
        "Analizamos tus necesidades y objetivos para crear la estrategia perfecta.",
    },
    {
      icon: "🎨",
      title: "Diseño",
      description:
        "Creamos interfaces intuitivas y experiencias de usuario excepcionales.",
    },
    {
      icon: "💻",
      title: "Desarrollo",
      description:
        "Implementamos soluciones robustas con las mejores tecnologías.",
    },
    {
      icon: "🚀",
      title: "Entrega",
      description:
        "Desplegamos y damos soporte continuo para garantizar el éxito.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center mb-16 fade-in">
          <h1
            className={`font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Sobre Nosotros
          </h1>
          <p className="text-secondary-text max-w-3xl mx-auto text-lg leading-relaxed">
            En{" "}
            <span className="text-primary font-semibold">PairProgramming</span>,
            somos un equipo apasionado por transformar ideas en soluciones
            digitales innovadoras. Combinamos tecnología, diseño y estrategia
            para crear productos que impulsan el crecimiento de tu negocio.
          </p>
        </div>

        <div className="mb-16 fade-in" style={{ animationDelay: "0.1s" }}>
          <Card padding="lg">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
              Nuestra Historia
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-secondary-text mb-4 leading-relaxed">
                  Fundada en 2022, PairProgramming nació de la visión de crear
                  soluciones digitales que realmente importen. Comenzamos como
                  un pequeño equipo de desarrolladores apasionados y hemos
                  crecido hasta convertirnos en una agencia de desarrollo
                  full-stack.
                </p>
                <p className="text-secondary-text mb-4 leading-relaxed">
                  Creemos en el poder de la colaboración estrecha con nuestros
                  clientes, trabajando codo a codo para entender sus necesidades
                  y superar sus expectativas.
                </p>
                <p className="text-secondary-text leading-relaxed">
                  Nuestro nombre refleja nuestra metodología: trabajamos en
                  pareja no solo internamente, sino también con nuestros
                  clientes, asegurando que cada paso del desarrollo sea
                  transparente y colaborativo.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl p-8 text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Innovación Constante
                </h3>
                <p className="text-secondary-text text-sm">
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
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-text text-sm font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16 fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8 text-center">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} hover padding="md">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {member.role}
                  </p>
                </div>
                <p className="text-secondary-text text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full"
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
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6 text-center">
              Nuestra Metodología
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-lg">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-secondary-text text-sm">
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
