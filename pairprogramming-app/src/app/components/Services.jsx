"use client";
import { useState } from "react";

const SERVICES = [
  {
    n:"01",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="4" rx="1"/><rect x="2" y="10" width="20" height="4" rx="1"/><rect x="2" y="17" width="20" height="4" rx="1"/></svg>,
    name:"Arquitectura B2B SaaS",
    desc:"Plataformas multi-tenant desde cero. Modelo de planes, feature flags, onboarding, billing y escala. Lo que más hacemos y donde más valor generamos.",
  },
  {
    n:"02",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    name:"Productos Digitales",
    desc:"Apps web, móviles, CRM, ERP e intranets. Sistemas escalables que crecen con tu negocio desde el primer commit.",
  },
  {
    n:"03",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    name:"CRM & Automatización",
    desc:"Implementación e integración de CRM, workflows automáticos, pipelines de ventas y dashboards de seguimiento.",
  },
  {
    n:"04",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    name:"Automatización & n8n",
    desc:"Flujos visuales con n8n para integrar herramientas, orquestar pipelines y eliminar trabajo manual repetitivo.",
  },
  {
    n:"05",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    name:"Cloud & DevOps",
    desc:"Infraestructura en la nube, CI/CD, IaC y observabilidad. Despliegues seguros y escalables sin drama.",
  },
  {
    n:"06",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    name:"SEO & Contenido",
    desc:"Auditorías técnicas, optimización on-page, estrategia de contenidos y linkbuilding para crecer en orgánico.",
  },
  {
    n:"07",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>,
    name:"Modernización de Legacy",
    desc:"Migramos sistemas viejos a arquitecturas modernas: microservicios, contenedores, APIs REST/GraphQL.",
  },
  {
    n:"08",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    name:"QA & Performance",
    desc:"Tests E2E, unitarios e integración. Auditorías de performance y monitoreo continuo para productos sin bugs.",
  },
  {
    n:"09",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    name:"Branding & Identidad",
    desc:"Naming, logotipo, sistema visual y manual de marca. La identidad que comunica tu propuesta de valor.",
  },
];

function ServiceCard({ n, icon, name, desc }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={()=>setH(true)}
      onMouseLeave={()=>setH(false)}
      style={{
        background: h ? "#0d1520" : "#080c12",
        padding:"2.5rem",position:"relative",overflow:"hidden",
        transition:"background .3s",cursor:"default",
      }}
    >
      <div style={{ fontSize:".68rem",fontWeight:700,letterSpacing:".16em",color:"rgba(238,242,247,0.42)",marginBottom:"1.8rem" }}>{n}</div>
      <div style={{
        width:44,height:44,borderRadius:12,marginBottom:"1.2rem",
        background: h ? "linear-gradient(135deg,#1a3a5c,#2e6da4)" : "#111b2a",
        border:`1px solid ${h ? "#4a8fc4" : "rgba(238,242,247,0.07)"}`,
        display:"flex",alignItems:"center",justifyContent:"center",
        transition:"all .3s",
        boxShadow: h ? "0 0 20px rgba(46,109,164,.3)" : "none",
        color: h ? "#e8b84b" : "#4a8fc4",
      }}>
        {icon}
      </div>
      <div className="ff" style={{ fontSize:"1.1rem",fontWeight:700,letterSpacing:"-.02em",marginBottom:".75rem",color:"#eef2f7" }}>{name}</div>
      <p style={{ fontSize:".875rem",color:"rgba(238,242,247,0.42)",lineHeight:1.7 }}>{desc}</p>
      <div style={{
        position:"absolute",left:0,bottom:0,right:0,height:2,
        background:"linear-gradient(90deg,#2e6da4,#c9920d)",
        transform: h ? "scaleX(1)" : "scaleX(0)",
        transformOrigin:"left",transition:"transform .4s ease",
      }}/>
    </div>
  );
}

export default function Services() {
  return (
    <section style={{ padding:"8rem 5vw", background:"#080c12" }}>
      {/* Header */}
      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"3.5rem",gap:"2rem",flexWrap:"wrap" }}>
        <div>
          <div style={{ fontSize:".7rem",fontWeight:600,letterSpacing:".16em",textTransform:"uppercase",color:"#e8b84b",marginBottom:".8rem" }}>— Lo que hacemos</div>
          <h2 className="ff" style={{ fontWeight:700,fontSize:"clamp(1.8rem,3.5vw,3rem)",letterSpacing:"-.03em",lineHeight:1.05,maxWidth:500,color:"#eef2f7" }}>
            Servicios que<br/>mueven negocios
          </h2>
        </div>
        <p style={{ fontSize:".88rem",color:"rgba(238,242,247,0.42)",lineHeight:1.7,maxWidth:260,textAlign:"right" }}>
          Desde la idea hasta producción.<br/>Sin intermediarios, con resultados.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:1,
        background:"rgba(238,242,247,0.07)",
        border:"1px solid rgba(238,242,247,0.07)",
      }}>
        {SERVICES.map(s => <ServiceCard key={s.n} {...s}/>)}
      </div>
    </section>
  );
}
