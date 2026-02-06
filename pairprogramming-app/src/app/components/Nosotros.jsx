"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";

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
      color: "blue",
    },
    {
      name: "Esteban Aleart",
      role: "Full-Stack Developer",
      description:
        "Más de 5 años de experiencia en desarrollo web y mobile. Especialista en React, Node.js y arquitecturas escalables.",
      expertise: ["React", "Node.js", "TypeScript", "AWS"],
      color: "gold",
    },
    {
      name: "Josue Rendom",
      role: "Full-Stack Developer",
      description:
        "Más de 5 años de experiencia en desarrollo web y mobile. Especialista en React, Node.js y arquitecturas escalables.",
      expertise: ["React", "Node.js", "TypeScript", "AWS"],
      color: "blue",
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
      step: "01",
      description:
        "Analizamos tus necesidades y objetivos para crear la estrategia perfecta.",
    },
    {
      title: "Diseño",
      step: "02",
      description:
        "Creamos interfaces intuitivas y experiencias de usuario excepcionales.",
    },
    {
      title: "Desarrollo",
      step: "03",
      description:
        "Implementamos soluciones robustas con las mejores tecnologías.",
    },
    {
      title: "Entrega",
      step: "04",
      description:
        "Desplegamos y damos soporte continuo para garantizar el éxito.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background text-foreground min-h-screen relative overflow-hidden border-b border-border-color">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl animate-float-blob" />
        <div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-brand-gold/8 rounded-full blur-3xl animate-float-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <Container
        size={isSidebarExpanded ? "expanded" : "default"}
        className="relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span className="text-sm font-medium text-brand-blue-light">
              Conocé al Equipo
            </span>
          </div>

          <h1
            className={`font-bold mb-6 text-foreground tracking-tight leading-tight transition-all duration-300 animate-fade-in-up stagger-1 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Sobre{" "}
            <span className="text-brand-blue">Nosotros</span>
          </h1>

          <p className="text-secondary-text max-w-3xl mx-auto text-lg leading-relaxed animate-fade-in-up stagger-2">
            En{" "}
            <span className="text-brand-blue font-semibold">PairProgramming</span>,
            somos un equipo apasionado por transformar ideas en soluciones
            digitales innovadoras. Combinamos tecnología, diseño y estrategia
            para crear productos que impulsan el crecimiento de tu negocio.
          </p>
        </div>

        {/* Nuestra Historia */}
        <div className="mb-16 animate-fade-in-up stagger-3">
          <div className="bg-background-card rounded-xl p-8 border border-border-color shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Nuestra <span className="text-brand-blue">Historia</span>
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
              <div className="bg-gradient-to-br from-brand-blue/10 to-brand-gold/5 rounded-2xl p-8 text-center border border-brand-blue/20">
                <div className="text-brand-gold mb-4 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Innovación Constante
                </h3>
                <p className="text-secondary-text text-sm">
                  Nos mantenemos a la vanguardia de las últimas tecnologías y
                  metodologías de desarrollo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16 animate-fade-in-up stagger-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-background-card border border-border-color rounded-xl p-6 text-center hover:border-brand-blue/40 hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-blue/0 to-brand-gold/0 group-hover:from-brand-blue/5 group-hover:to-brand-gold/5 transition-all duration-300" />
                <div className="relative z-10">
                  <div className="text-2xl lg:text-3xl font-bold text-brand-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary-text text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4 animate-fade-in-up stagger-5">
              <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                El Equipo
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground animate-fade-in-up stagger-5">
              Nuestro <span className="text-brand-blue">Equipo</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const isGold = member.color === "gold";
              return (
                <div
                  key={index}
                  className={`group relative bg-background-card border border-border-color rounded-xl p-6 hover:border-brand-blue/40 hover:shadow-lg transition-all duration-300 animate-fade-in-up stagger-${Math.min(index + 5, 8)} overflow-hidden`}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-blue/0 to-brand-gold/0 group-hover:from-brand-blue/5 group-hover:to-brand-gold/5 transition-all duration-300" />

                  <div className="relative z-10">
                    <div className="text-center mb-4">
                      <div
                        className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg ${
                          isGold
                            ? "bg-gradient-to-br from-brand-gold to-brand-gold-dark shadow-brand-gold/20"
                            : "bg-gradient-to-br from-brand-blue to-brand-blue-dark shadow-brand-blue/20"
                        }`}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className={`text-sm font-medium mb-3 ${isGold ? "text-brand-gold" : "text-brand-blue"}`}>
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
                          className="bg-background-secondary text-foreground/80 text-xs font-medium px-3 py-1 rounded-full border border-border-color hover:border-brand-blue/50 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Metodología */}
        <div className="animate-fade-in-up stagger-6">
          <div className="bg-background-card rounded-xl p-8 border border-border-color shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4">
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                  Proceso
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Nuestra <span className="text-brand-blue">Metodología</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative w-14 h-14 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue/15 group-hover:border-brand-blue/30 transition-all duration-300">
                    <div className="text-brand-blue">
                      <MethodologyIcon name={item.title} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-gold text-background text-xs font-bold rounded-full flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-secondary-text text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
