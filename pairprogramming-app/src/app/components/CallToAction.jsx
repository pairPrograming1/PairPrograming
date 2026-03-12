"use client";
import { useState } from "react";
import Link from "next/link";

export default function CallToAction() {
  const [h, setH] = useState(false);
  return (
    <section style={{ padding:"10rem 5vw",textAlign:"center",position:"relative",overflow:"hidden",background:"#080c12" }}>
      {/* Radial gradients */}
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 55% 50% at 50% 100%,rgba(46,109,164,.1) 0%,transparent 70%),radial-gradient(ellipse 35% 35% at 30% 20%,rgba(201,146,13,.06) 0%,transparent 70%)" }}/>
      {/* Grid pattern */}
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"linear-gradient(rgba(238,242,247,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(238,242,247,.025) 1px,transparent 1px)",backgroundSize:"72px 72px",WebkitMaskImage:"radial-gradient(ellipse 60% 60% at 50% 50%,black 0%,transparent 100%)" }}/>

      <h2 className="ff" style={{ fontWeight:800,fontSize:"clamp(2.2rem,5.5vw,5rem)",letterSpacing:"-.04em",lineHeight:.98,maxWidth:660,margin:"0 auto 1.5rem",position:"relative",zIndex:1,color:"#eef2f7" }}>
        ¿Tenés una <span style={{color:"#e8b84b"}}>idea</span>?<br/>La hacemos realidad.
      </h2>
      <p style={{ color:"rgba(238,242,247,0.42)",fontSize:".98rem",fontWeight:300,marginBottom:"2.8rem",position:"relative",zIndex:1 }}>
        Sin compromisos. Solo una charla honesta sobre tu proyecto.
      </p>

      <div style={{ position:"relative",zIndex:1 }}>
        <Link
          href="/contacto"
          onMouseEnter={()=>setH(true)}
          onMouseLeave={()=>setH(false)}
          style={{
            background:"linear-gradient(135deg,#c9920d,#e8b84b)",color:"#080c12",
            border:"none",cursor:"pointer",
            padding:".9rem 2rem",borderRadius:"100px",fontWeight:600,fontSize:".9rem",
            display:"inline-flex",alignItems:"center",gap:".5rem",textDecoration:"none",
            transition:"all .25s",
            boxShadow: h ? "0 8px 32px rgba(201,146,13,.45)" : "0 4px 20px rgba(201,146,13,.25)",
            transform: h ? "translateY(-2px)" : "none",
          }}
        >
          Hablemos
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </div>
    </section>
  );
}
