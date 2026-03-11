"use client";
import { useState } from "react";

const VALUES = [
  { n:"01", icon:<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, title:"Calidad sin concesiones", text:"No entregamos algo que no usaríamos nosotros mismos. El estándar es siempre el máximo." },
  { n:"02", icon:<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title:"Colaboración real", text:"Somos socios tecnológicos. Trabajamos codo a codo con vos, no para vos." },
  { n:"03", icon:<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/><circle cx="12" cy="12" r="3"/></svg>, title:"Innovación con propósito", text:"Tecnologías modernas cuando tiene sentido. Sin hype, con resultados medibles." },
  { n:"04", icon:<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title:"Escalabilidad por diseño", text:"Arquitecturas que crecen desde el primer commit. No hay excusas técnicas para no escalar." },
  { n:"05", icon:<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>, title:"Simplicidad elegante", text:"La mejor solución es la más simple que funciona. Complejidad innecesaria es deuda técnica." },
  { n:"06", icon:<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>, title:"Escucha activa", text:"Entendemos tu negocio antes de escribir una línea. El problema correcto primero." },
];

function ValueItem({ n, icon, title, text }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={()=>setH(true)}
      onMouseLeave={()=>setH(false)}
      style={{
        background: h ? "#111b2a" : "#0d1520",
        padding:"2.2rem 2.5rem",
        transition:"background .25s",
        display:"flex",gap:"1.2rem",alignItems:"flex-start",
      }}
    >
      <div style={{
        width:38,height:38,borderRadius:10,flexShrink:0,
        background: h ? "rgba(232,184,75,.12)" : "transparent",
        border:`1px solid ${h ? "rgba(232,184,75,.3)" : "rgba(238,242,247,0.07)"}`,
        display:"flex",alignItems:"center",justifyContent:"center",
        transition:"all .3s",
        color: h ? "#e8b84b" : "rgba(238,242,247,0.42)",
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize:".65rem",fontWeight:800,color:"#c9920d",letterSpacing:".12em",marginBottom:".5rem" }}>{n}</div>
        <div className="ff" style={{ fontSize:"1rem",fontWeight:700,letterSpacing:"-.02em",marginBottom:".5rem",color:"#eef2f7" }}>{title}</div>
        <p style={{ fontSize:".85rem",color:"rgba(238,242,247,0.42)",lineHeight:1.65 }}>{text}</p>
      </div>
    </div>
  );
}

export default function Values() {
  return (
    <section style={{ padding:"8rem 5vw", background:"#0d1520", position:"relative", overflow:"hidden" }}>
      {/* Ghost text */}
      <div className="ff" style={{ position:"absolute",fontSize:"18vw",fontWeight:800,color:"rgba(46,109,164,.04)",top:"50%",left:"50%",transform:"translate(-50%,-50%)",letterSpacing:"-.05em",pointerEvents:"none",userSelect:"none",whiteSpace:"nowrap" }}>VALORES</div>

      <div style={{ position:"relative",zIndex:1 }}>
        <div style={{ fontSize:".7rem",fontWeight:600,letterSpacing:".16em",textTransform:"uppercase",color:"#e8b84b",marginBottom:".8rem" }}>— Cómo trabajamos</div>
        <h2 className="ff" style={{ fontWeight:700,fontSize:"clamp(1.8rem,3.5vw,3rem)",letterSpacing:"-.03em",lineHeight:1.05,marginBottom:"3.5rem",color:"#eef2f7" }}>
          Principios que nos definen
        </h2>
        <div style={{
          display:"grid",gridTemplateColumns:"repeat(3,1fr)",
          gap:1,background:"rgba(238,242,247,0.07)",
          border:"1px solid rgba(238,242,247,0.07)",
        }}>
          {VALUES.map(v => <ValueItem key={v.n} {...v}/>)}
        </div>
      </div>
    </section>
  );
}
