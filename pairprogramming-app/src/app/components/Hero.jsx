"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div style={{ minHeight: "100vh", background: "#080c12" }} />;

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "9rem 5vw 5rem",
      position: "relative",
      overflow: "hidden",
      background: "#080c12",
    }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(238,242,247,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(238,242,247,.025) 1px,transparent 1px)",
        backgroundSize: "72px 72px",
        WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%,black 20%,transparent 100%)",
      }}/>

      {/* Blobs */}
      <div className="animate-float1" style={{ position:"absolute",width:600,height:600,background:"radial-gradient(circle,rgba(46,109,164,.14) 0%,transparent 70%)",top:"-80px",right:"-60px",borderRadius:"50%",filter:"blur(60px)",pointerEvents:"none" }}/>
      <div className="animate-float2" style={{ position:"absolute",width:380,height:380,background:"radial-gradient(circle,rgba(201,146,13,.09) 0%,transparent 70%)",bottom:"60px",left:"4%",borderRadius:"50%",filter:"blur(60px)",pointerEvents:"none" }}/>

      {/* Badge */}
      <div className="animate-fade-in-up" style={{
        display:"inline-flex",alignItems:"center",gap:".55rem",
        fontSize:".72rem",fontWeight:500,letterSpacing:".14em",textTransform:"uppercase",
        color:"#e8b84b",border:"1px solid rgba(232,184,75,.22)",background:"rgba(232,184,75,.05)",
        padding:".38rem 1rem",borderRadius:"100px",width:"fit-content",marginBottom:"2.5rem",position:"relative",zIndex:1,
        animationDelay: ".2s",
      }}>
        <span className="animate-blink" style={{width:6,height:6,background:"#e8b84b",borderRadius:"50%",display:"inline-block"}}/>
        Desarrollo B2B SaaS · Argentina
      </div>

      {/* H1 */}
      <h1 className="ff animate-fade-in-up" style={{
        fontWeight:800,
        fontSize:"clamp(3.2rem,7.5vw,7rem)",
        lineHeight:.96,
        letterSpacing:"-.04em",
        maxWidth:860,
        position:"relative",zIndex:1,
        animationDelay: ".35s",
        marginBottom: "2rem",
      }}>
        Tu idea.<br/>
        <span style={{ color:"transparent", WebkitTextStroke:"1.5px #4a8fc4" }}>Nuestro</span><br/>
        <span style={{ color:"#e8b84b" }}>código.</span>
      </h1>

      {/* Subtext */}
      <p className="animate-fade-in-up" style={{
        fontSize:"1.05rem",fontWeight:300,color:"rgba(238,242,247,0.42)",
        maxWidth:440,lineHeight:1.75,position:"relative",zIndex:1,
        animationDelay: ".5s", marginBottom: "2.8rem",
      }}>
        Co-creamos soluciones digitales que integran tecnología y estrategia. Tu socio técnico desde el día uno hasta producción.
      </p>

      {/* Buttons */}
      <div className="animate-fade-in-up" style={{ display:"flex",gap:"1rem",alignItems:"center",position:"relative",zIndex:1,flexWrap:"wrap", animationDelay: ".65s" }}>
        <Link href="/contacto" style={{
          background:"linear-gradient(135deg,#c9920d,#e8b84b)",color:"#080c12",
          padding:".9rem 2rem",borderRadius:"100px",fontWeight:600,fontSize:".9rem",
          display:"inline-flex",alignItems:"center",gap:".5rem",textDecoration:"none",
          boxShadow:"0 4px 20px rgba(201,146,13,.25)",transition:"all .25s",
        }}
        onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 8px 32px rgba(201,146,13,.45)";e.currentTarget.style.transform="translateY(-2px)";}}
        onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(201,146,13,.25)";e.currentTarget.style.transform="none";}}>
          Empezar proyecto
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
        <Link href="/portafolio" style={{
          border:"1px solid rgba(74,143,196,0.2)",color:"rgba(238,242,247,0.42)",background:"transparent",
          padding:".9rem 2rem",borderRadius:"100px",fontSize:".9rem",fontWeight:400,
          display:"inline-flex",alignItems:"center",gap:".5rem",textDecoration:"none",transition:"all .25s",
        }}
        onMouseEnter={e=>{e.currentTarget.style.borderColor="#4a8fc4";e.currentTarget.style.color="#eef2f7";e.currentTarget.style.background="rgba(46,109,164,.08)";}}
        onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(74,143,196,0.2)";e.currentTarget.style.color="rgba(238,242,247,0.42)";e.currentTarget.style.background="transparent";}}>
          Ver portafolio
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </div>

      {/* Floating stats card - desktop only */}
      <div className="animate-fade-in-up hidden lg:flex" style={{
        position:"absolute",right:"5vw",bottom:"8%",
        background:"#111b2a",border:"1px solid rgba(74,143,196,0.2)",
        borderRadius:16,padding:"1.4rem 2rem",
        gap:"2rem",alignItems:"center",
        boxShadow:"0 20px 60px rgba(0,0,0,.45)",
        zIndex:1,animationDelay: ".85s",
      }}>
        {[["20+","Proyectos"],["100%","Satisfechos"],["5+","Años"]].map(([n,l],i,a)=>(
          <div key={n} style={{display:"flex",alignItems:"center",gap:"2rem"}}>
            <div style={{textAlign:"center"}}>
              <div className="ff" style={{fontSize:"1.9rem",fontWeight:800,lineHeight:1,background:"linear-gradient(135deg,#4a8fc4,#e8b84b)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{n}</div>
              <div style={{fontSize:".7rem",color:"rgba(238,242,247,0.42)",letterSpacing:".07em",marginTop:".3rem"}}>{l}</div>
            </div>
            {i < a.length-1 && <div style={{width:1,height:32,background:"rgba(238,242,247,0.07)"}}/>}
          </div>
        ))}
      </div>
    </section>
  );
}
