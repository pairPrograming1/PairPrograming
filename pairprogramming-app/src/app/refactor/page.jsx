"use client";
import { useState, useEffect, useRef } from "react";
import {
  Zap, Cloud, Smartphone, Link2, Bot, Shield,
  ArrowRight, Star, CheckCircle2, Rocket,
  Search, PenTool, GitBranch, HeartHandshake,
  Lightbulb, Layers, MessageSquare, ExternalLink,
  Github, Globe, ChevronRight, Menu, X
} from "lucide-react";

/* ─── TOKENS ─── */
const C = {
  bg:"#080c12", bg2:"#0d1520", bg3:"#111b2a",
  navy:"#1a3a5c", blue:"#2e6da4", blueLt:"#4a8fc4",
  gold:"#c9920d", goldLt:"#e8b84b",
  white:"#eef2f7", muted:"rgba(238,242,247,0.42)",
  border:"rgba(238,242,247,0.07)", border2:"rgba(74,143,196,0.2)",
};

const TEAM_IMAGE = "/team.jpg";

/* ─── GLOBAL STYLES ─── */
const GS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;600;700;800&family=Instrument+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'Instrument Sans',sans-serif;background:${C.bg};color:${C.white};overflow-x:hidden;}
.ff{font-family:'Bricolage Grotesque',sans-serif;}
@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@keyframes slideDown{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}
@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes float1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,-30px) scale(1.05)}}
@keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,20px)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes borderPulse{0%,100%{border-color:rgba(74,143,196,0.2)}50%{border-color:rgba(232,184,75,0.4)}}
.reveal{opacity:0;transform:translateY(32px);transition:opacity .7s ease,transform .7s ease;}
.reveal.in{opacity:1;transform:none;}
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:${C.bg};}
::-webkit-scrollbar-thumb{background:${C.navy};border-radius:2px;}
.mobileToggle{display:none;}
.mobilePanel{display:none;}
.heroVisual{position:absolute;right:5vw;top:22%;width:min(34vw,480px);height:min(26vw,320px);border-radius:18px;overflow:hidden;border:1px solid ${C.border2};box-shadow:0 24px 64px rgba(0,0,0,.45);z-index:1;}
.heroStats{position:absolute;right:5vw;bottom:8%;}
.nosotrosLead{display:grid;grid-template-columns:1.2fr .8fr;gap:2rem;align-items:end;margin-bottom:5rem;}
@media (max-width: 1024px){
  .heroVisual{position:relative;right:auto;top:auto;width:100%;max-width:560px;height:260px;margin-top:2rem;}
  .heroStats{position:relative;right:auto;bottom:auto;margin-top:1.5rem;width:fit-content;}
  .nosotrosLead{grid-template-columns:1fr;}
}
@media (max-width: 900px){
  .navLinks{display:none !important;}
  .mobileToggle{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;border:1px solid ${C.border2};background:${C.bg2};color:${C.white};cursor:pointer;}
  .mobilePanel{display:flex;flex-direction:column;gap:.35rem;position:absolute;left:5vw;right:5vw;top:74px;padding:.8rem;border-radius:12px;border:1px solid ${C.border2};background:rgba(8,12,18,.97);backdrop-filter:blur(12px);box-shadow:0 16px 40px rgba(0,0,0,.35);}
  .mobilePanel button{background:none;border:none;color:${C.muted};text-align:left;padding:.65rem .55rem;border-radius:8px;font-size:.9rem;cursor:pointer;}
  .mobilePanel button:hover{background:${C.bg2};color:${C.white};}
  .mobilePanel .mobilePrimary{margin-top:.35rem;background:linear-gradient(135deg,${C.gold},${C.goldLt});color:${C.bg};font-weight:700;text-align:center;}
  .homeButtons{flex-wrap:wrap;}
  .servicesGrid,.valuesGrid,.portfolioGrid,.teamGrid,.statsGrid{grid-template-columns:1fr !important;}
  .processGrid{grid-template-columns:repeat(2,1fr) !important;gap:1.2rem !important;}
  .processLine{display:none;}
  .contactGrid{grid-template-columns:1fr !important;gap:2rem !important;}
  .contactNameGrid{grid-template-columns:1fr !important;}
  .footerWrap{flex-direction:column;align-items:flex-start !important;gap:1.1rem;}
}
@media (max-width: 560px){
  .processGrid{grid-template-columns:1fr !important;}
  .heroStats{padding:1rem 1.2rem !important;gap:1rem !important;}
  .heroStats .ff{font-size:1.35rem !important;}
}
`;

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── LOGO ICON ─── */
function LogoIcon({ size = 36 }) {
  return (
    <div style={{
      width:size, height:size, borderRadius:size*.25,
      background:`linear-gradient(145deg,${C.navy},${C.bg3})`,
      border:`1px solid ${C.border2}`,
      position:"relative", overflow:"hidden", flexShrink:0,
    }}>
      <div style={{ position:"absolute", width:"62%", height:"68%", background:`linear-gradient(160deg,${C.blueLt},${C.navy})`, borderRadius:"0 0 50% 50%", top:"10%", left:"12%" }}/>
      <div style={{ position:"absolute", width:"42%", height:"42%", background:`linear-gradient(135deg,${C.goldLt},${C.gold})`, borderRadius:"50% 50% 50% 0", top:"10%", right:"10%" }}/>
    </div>
  );
}

/* ─── NAV ─── */
const NAV_LINKS = ["Inicio","Servicios","Portafolio","Nosotros"];

function Nav({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"1.2rem 5vw",
      background: scrolled ? "rgba(8,12,18,0.95)" : "rgba(8,12,18,0.6)",
      backdropFilter:"blur(24px)",
      borderBottom:`1px solid ${C.border}`,
      animation:"slideDown .6s ease both",
      transition:"background .3s",
    }}>
      <button onClick={() => setActive("home")} style={{ display:"flex", alignItems:"center", gap:".65rem", background:"none", border:"none", cursor:"pointer" }}>
        <LogoIcon size={34}/>
        <span className="ff" style={{ fontWeight:700, fontSize:"1rem", color:C.white, letterSpacing:"-.02em" }}>
          pair<span style={{color:C.goldLt}}>programming</span>
        </span>
      </button>
      <ul className="navLinks" style={{ display:"flex", gap:"2rem", listStyle:"none", alignItems:"center" }}>
        {NAV_LINKS.map(l => (
          <li key={l}>
            <button onClick={() => setActive(l.toLowerCase())} style={{
              background:"none", border:"none", cursor:"pointer",
              color: active === l.toLowerCase() ? C.white : C.muted,
              fontSize:".875rem", fontWeight: active === l.toLowerCase() ? 500 : 400,
              transition:"color .2s", borderBottom: active === l.toLowerCase() ? `1px solid ${C.goldLt}` : "1px solid transparent",
              paddingBottom:"2px",
            }}>{l}</button>
          </li>
        ))}
        <li>
          <button onClick={() => setActive("contacto")} style={{
            background:`linear-gradient(135deg,${C.gold},${C.goldLt})`,
            color:C.bg, padding:".5rem 1.3rem", borderRadius:"100px",
            border:"none", cursor:"pointer", fontWeight:600, fontSize:".875rem",
            transition:"opacity .2s, transform .2s",
          }}
          onMouseEnter={e=>{e.currentTarget.style.opacity=".85";e.currentTarget.style.transform="scale(1.04)";}}
          onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="scale(1)";}}>
            Contacto
          </button>
        </li>
      </ul>
      <button
        className="mobileToggle"
        aria-label="Abrir menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
      {menuOpen && (
        <div className="mobilePanel">
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => { setActive(l.toLowerCase()); setMenuOpen(false); }}>
              {l}
            </button>
          ))}
          <button className="mobilePrimary" onClick={() => { setActive("contacto"); setMenuOpen(false); }}>
            Contacto
          </button>
        </div>
      )}
    </nav>
  );
}

/* ─── SHARED COMPONENTS ─── */
function SectionLabel({ children }) {
  return <div style={{ fontSize:".7rem", fontWeight:600, letterSpacing:".16em", textTransform:"uppercase", color:C.goldLt, marginBottom:".8rem" }}>— {children}</div>;
}
function SectionTitle({ children, maxWidth=500 }) {
  return <h2 className="ff" style={{ fontWeight:700, fontSize:"clamp(1.8rem,3.5vw,3rem)", letterSpacing:"-.03em", lineHeight:1.05, maxWidth }}>{children}</h2>;
}
function BtnGold({ children, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      background:`linear-gradient(135deg,${C.gold},${C.goldLt})`, color:C.bg, border:"none", cursor:"pointer",
      padding:".9rem 2rem", borderRadius:"100px", fontWeight:600, fontSize:".9rem",
      display:"inline-flex", alignItems:"center", gap:".5rem", transition:"all .25s",
      boxShadow: h ? `0 8px 32px rgba(201,146,13,.45)` : `0 4px 20px rgba(201,146,13,.25)`,
      transform: h ? "translateY(-2px)" : "none",
    }}>{children}</button>
  );
}
function BtnOutline({ children, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      border:`1px solid ${h ? C.blueLt : C.border2}`,
      color: h ? C.white : C.muted, background: h ? `rgba(46,109,164,.08)` : "transparent",
      cursor:"pointer", padding:".9rem 2rem", borderRadius:"100px", fontSize:".9rem", fontWeight:400,
      display:"inline-flex", alignItems:"center", gap:".5rem", transition:"all .25s",
    }}>{children}</button>
  );
}

/* ─── TICKER ─── */
function Ticker() {
  const items = ["React","Node.js","TypeScript","Next.js","AWS","PostgreSQL","Docker","GraphQL","Python","Kubernetes"];
  return (
    <div style={{ borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}`, background:C.bg2, overflow:"hidden", padding:".85rem 0" }}>
      <div style={{ display:"flex", animation:"ticker 26s linear infinite", whiteSpace:"nowrap" }}>
        {[...items,...items].map((item,i) => (
          <span key={i} style={{
            display:"inline-flex", alignItems:"center", gap:".9rem", padding:"0 1.8rem", flexShrink:0,
            fontSize:".74rem", fontWeight:500, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(238,242,247,.22)",
          }}>
            {item}<span style={{color:C.gold}}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE: HOME
══════════════════════════════════════════ */
function PageHome({ setActive }) {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"9rem 5vw 5rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(rgba(238,242,247,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(238,242,247,.025) 1px,transparent 1px)`, backgroundSize:"72px 72px", WebkitMaskImage:"radial-gradient(ellipse 80% 70% at 50% 50%,black 20%,transparent 100%)", pointerEvents:"none" }}/>
        {[
          {w:600,h:600,c:"rgba(46,109,164,.14)",top:"-80px",right:"-60px",a:"float1 14s ease-in-out infinite"},
          {w:380,h:380,c:"rgba(201,146,13,.09)",bottom:"60px",left:"4%",a:"float2 10s ease-in-out infinite"},
        ].map((o,i)=>(
          <div key={i} style={{ position:"absolute", width:o.w, height:o.h, background:`radial-gradient(circle,${o.c} 0%,transparent 70%)`, top:o.top, right:o.right, bottom:o.bottom, left:o.left, borderRadius:"50%", filter:"blur(60px)", pointerEvents:"none", animation:o.a }}/>
        ))}

        <div style={{ display:"inline-flex", alignItems:"center", gap:".55rem", fontSize:".72rem", fontWeight:500, letterSpacing:".14em", textTransform:"uppercase", color:C.goldLt, border:`1px solid rgba(232,184,75,.22)`, background:"rgba(232,184,75,.05)", padding:".38rem 1rem", borderRadius:"100px", width:"fit-content", marginBottom:"2.5rem", position:"relative", zIndex:1, animation:"fadeUp .7s .2s both" }}>
          <span style={{ width:6, height:6, background:C.goldLt, borderRadius:"50%", animation:"blink 2s infinite", display:"inline-block" }}/>
          Desarrollo B2B SaaS · Argentina
        </div>

        <h1 className="ff" style={{ fontWeight:800, fontSize:"clamp(3.2rem,7.5vw,7rem)", lineHeight:.96, letterSpacing:"-.04em", maxWidth:860, position:"relative", zIndex:1, animation:"fadeUp .8s .35s both" }}>
          Tu idea.<br/>
          <span style={{ color:"transparent", WebkitTextStroke:`1.5px ${C.blueLt}` }}>Nuestro</span><br/>
          <span style={{ color:C.goldLt }}>código.</span>
        </h1>

        <p style={{ marginTop:"2rem", fontSize:"1.05rem", fontWeight:300, color:C.muted, maxWidth:440, lineHeight:1.75, position:"relative", zIndex:1, animation:"fadeUp .8s .5s both" }}>
          Co-creamos soluciones digitales que integran tecnología y estrategia. Tu socio técnico desde el día uno hasta producción.
        </p>

        <div className="homeButtons" style={{ marginTop:"2.8rem", display:"flex", gap:"1rem", alignItems:"center", position:"relative", zIndex:1, animation:"fadeUp .8s .65s both" }}>
          <BtnGold onClick={()=>setActive("contacto")}>Empezar proyecto <ArrowRight size={15}/></BtnGold>
          <BtnOutline onClick={()=>setActive("portafolio")}>Ver portafolio <ArrowRight size={14}/></BtnOutline>
        </div>

        <div className="heroVisual" style={{ animation:"fadeUp .9s .8s both" }}>
          <img src={TEAM_IMAGE} alt="Equipo PairProgramming" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,transparent 35%,rgba(8,12,18,.72) 100%)" }} />
          <div style={{ position:"absolute", left:16, bottom:14, display:"inline-flex", alignItems:"center", gap:".45rem", fontSize:".68rem", letterSpacing:".1em", textTransform:"uppercase", color:C.white, background:"rgba(8,12,18,.65)", border:`1px solid ${C.border2}`, borderRadius:999, padding:".35rem .65rem" }}>
            <span style={{ width:6, height:6, background:C.goldLt, borderRadius:"50%" }} />
            Equipo en acción
          </div>
        </div>

        <div className="heroStats" style={{ background:C.bg3, border:`1px solid ${C.border2}`, borderRadius:16, padding:"1.4rem 2rem", display:"flex", gap:"2rem", alignItems:"center", animation:"fadeUp .9s .85s both", zIndex:1, boxShadow:"0 20px 60px rgba(0,0,0,.45)" }}>
          {[["50+","Proyectos"],["5★","Rating"],["3+","Años"]].map(([n,l],i,a)=>(
            <div key={n} style={{ display:"flex", alignItems:"center", gap:"2rem" }}>
              <div style={{ textAlign:"center" }}>
                <div className="ff" style={{ fontSize:"1.9rem", fontWeight:800, lineHeight:1, background:`linear-gradient(135deg,${C.blueLt},${C.goldLt})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{n}</div>
                <div style={{ fontSize:".7rem", color:C.muted, letterSpacing:".07em", marginTop:".3rem" }}>{l}</div>
              </div>
              {i < a.length-1 && <div style={{ width:1, height:32, background:C.border }}/>}
            </div>
          ))}
        </div>
      </section>

      <Ticker/>

      {/* SERVICES */}
      <section style={{ padding:"8rem 5vw" }}>
        <div className="reveal" style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3.5rem", gap:"2rem" }}>
          <div><SectionLabel>Lo que hacemos</SectionLabel><SectionTitle>Servicios que<br/>mueven negocios</SectionTitle></div>
          <p style={{ fontSize:".88rem", color:C.muted, lineHeight:1.7, maxWidth:260, textAlign:"right" }}>Desde la idea hasta producción.<br/>Sin intermediarios, con resultados.</p>
        </div>
        <div className="reveal servicesGrid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:C.border, border:`1px solid ${C.border}` }}>
          {SERVICES.map(s=><ServiceCard key={s.n} {...s}/>)}
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding:"8rem 5vw", background:C.bg2, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:"18vw", fontWeight:800, color:"rgba(46,109,164,.04)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", letterSpacing:"-.05em", pointerEvents:"none", userSelect:"none", whiteSpace:"nowrap" }}>VALORES</div>
        <div className="reveal"><SectionLabel>Cómo trabajamos</SectionLabel><SectionTitle>Principios que nos definen</SectionTitle></div>
        <div className="reveal valuesGrid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:C.border, border:`1px solid ${C.border}`, marginTop:"3.5rem" }}>
          {VALUES.map(v=><ValueItem key={v.n} {...v}/>)}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding:"8rem 5vw" }}>
        <div className="reveal"><SectionLabel>Cómo arrancamos</SectionLabel><SectionTitle>Del concepto al deploy</SectionTitle></div>
        <div className="reveal processGrid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0, marginTop:"4rem", position:"relative" }}>
          <div className="processLine" style={{ position:"absolute", top:32, left:"12%", right:"12%", height:1, background:`linear-gradient(90deg,transparent,${C.border2},${C.goldLt},${C.border2},transparent)` }}/>
          {STEPS.map(s=><StepCard key={s.n} {...s}/>)}
        </div>
      </section>

      {/* CTA */}
      <CtaSection setActive={setActive}/>
    </>
  );
}

/* ══════════════════════════════════════════
   PAGE: PORTAFOLIO
══════════════════════════════════════════ */
const PROJECTS = [
  { id:1, name:"FlowDesk CRM", cat:"SaaS", tags:["Next.js","TypeScript","PostgreSQL","AWS"], desc:"CRM B2B completo con pipeline de ventas, automatizaciones y reportes en tiempo real para equipos comerciales.", color:C.blue, year:"2024" },
  { id:2, name:"MediBook", cat:"Mobile", tags:["React Native","Node.js","MongoDB"], desc:"App de turnos médicos con recordatorios push, historial de consultas y pagos integrados. +50k usuarios activos.", color:C.gold, year:"2024" },
  { id:3, name:"LogiTrack", cat:"Web", tags:["React","GraphQL","Docker","Redis"], desc:"Dashboard de logística en tiempo real. Tracking de flota, gestión de rutas y alertas automáticas.", color:C.blueLt, year:"2023" },
  { id:4, name:"EduPlatform", cat:"SaaS", tags:["Next.js","Stripe","Prisma","S3"], desc:"Plataforma educativa con cursos en video, certificados digitales y marketplace para instructores.", color:"#7c5cbf", year:"2023" },
  { id:5, name:"StockPilot", cat:"Web", tags:["React","Python","FastAPI","PostgreSQL"], desc:"Sistema de gestión de inventario con predicción de demanda basada en IA y alertas de stock crítico.", color:"#2a8a6e", year:"2023" },
  { id:6, name:"PayFlow", cat:"SaaS", tags:["Next.js","Stripe","Node.js","Redis"], desc:"Pasarela de pagos B2B con split de pagos, conciliación automática y reportes fiscales.", color:C.goldLt, year:"2022" },
];

const CATS = ["Todos","SaaS","Web","Mobile"];

function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{
      background: hov ? C.bg3 : C.bg2,
      border:`1px solid ${hov ? C.border2 : C.border}`,
      borderRadius:16, overflow:"hidden",
      transition:"all .3s", cursor:"default",
      transform: hov ? "translateY(-4px)" : "none",
      boxShadow: hov ? `0 20px 60px rgba(0,0,0,.4)` : "none",
    }}>
      {/* top color bar */}
      <div style={{ height:3, background:`linear-gradient(90deg,${project.color},${C.goldLt})` }}/>
      {/* mock screenshot */}
      <div style={{
        height:180, background:`linear-gradient(135deg,${C.bg3} 0%,rgba(26,58,92,.3) 100%)`,
        display:"flex", alignItems:"center", justifyContent:"center",
        position:"relative", overflow:"hidden",
        borderBottom:`1px solid ${C.border}`,
      }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${C.border} 1px,transparent 1px),linear-gradient(90deg,${C.border} 1px,transparent 1px)`, backgroundSize:"28px 28px" }}/>
        <div style={{
          width:64, height:64, borderRadius:16,
          background:`linear-gradient(135deg,${project.color}33,${project.color}66)`,
          border:`1px solid ${project.color}44`,
          display:"flex", alignItems:"center", justifyContent:"center",
          position:"relative", zIndex:1,
        }}>
          <Globe size={28} color={project.color} strokeWidth={1.5}/>
        </div>
        <div style={{ position:"absolute", top:12, right:12, background:C.bg2, border:`1px solid ${C.border}`, borderRadius:100, padding:".25rem .7rem", fontSize:".68rem", fontWeight:600, color:C.muted, letterSpacing:".08em" }}>{project.year}</div>
      </div>
      <div style={{ padding:"1.5rem" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:".75rem" }}>
          <div>
            <span style={{ fontSize:".68rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:project.color, marginBottom:".3rem", display:"block" }}>{project.cat}</span>
            <div className="ff" style={{ fontSize:"1.15rem", fontWeight:700, letterSpacing:"-.02em" }}>{project.name}</div>
          </div>
          <div style={{ display:"flex", gap:".4rem" }}>
            {[Github,ExternalLink].map((Icon,i)=>(
              <button key={i} style={{
                width:32, height:32, borderRadius:"50%",
                background: hov ? C.bg3 : C.bg,
                border:`1px solid ${C.border2}`,
                display:"flex", alignItems:"center", justifyContent:"center",
                cursor:"pointer", transition:"all .2s",
              }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=C.goldLt;e.currentTarget.style.background=`rgba(232,184,75,.1)`;}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border2;e.currentTarget.style.background=hov?C.bg3:C.bg;}}>
                <Icon size={13} color={C.muted} strokeWidth={1.5}/>
              </button>
            ))}
          </div>
        </div>
        <p style={{ fontSize:".85rem", color:C.muted, lineHeight:1.65, marginBottom:"1.2rem" }}>{project.desc}</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:".4rem" }}>
          {project.tags.map(t=>(
            <span key={t} style={{
              fontSize:".68rem", fontWeight:500, letterSpacing:".05em",
              color:C.blueLt, background:`rgba(46,109,164,.12)`,
              border:`1px solid rgba(74,143,196,.2)`,
              padding:".25rem .65rem", borderRadius:100,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PagePortafolio() {
  const [cat, setCat] = useState("Todos");
  const filtered = cat === "Todos" ? PROJECTS : PROJECTS.filter(p=>p.cat===cat);
  return (
    <div style={{ padding:"9rem 5vw 6rem" }}>
      <div className="reveal" style={{ marginBottom:"3rem" }}>
        <SectionLabel>Nuestro trabajo</SectionLabel>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:"2rem" }}>
          <SectionTitle maxWidth={500}>Proyectos que<br/>nos enorgullecen</SectionTitle>
          <p style={{ fontSize:".88rem", color:C.muted, lineHeight:1.7, maxWidth:280, textAlign:"right" }}>Cada proyecto es una colaboración. Estos son algunos de los que construimos juntos.</p>
        </div>
      </div>

      {/* filter */}
      <div className="reveal" style={{ display:"flex", gap:".6rem", marginBottom:"2.5rem", flexWrap:"wrap" }}>
        {CATS.map(c=>(
          <button key={c} onClick={()=>setCat(c)} style={{
            padding:".5rem 1.3rem", borderRadius:100, border:"none", cursor:"pointer", fontSize:".83rem", fontWeight:500,
            background: cat===c ? `linear-gradient(135deg,${C.navy},${C.blue})` : C.bg2,
            color: cat===c ? C.white : C.muted,
            border: `1px solid ${cat===c ? C.blueLt : C.border}`,
            transition:"all .2s",
          }}>{c} {cat===c && <span style={{color:C.goldLt}}>({filtered.length})</span>}</button>
        ))}
      </div>

      <div className="portfolioGrid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
        {filtered.map((p,i)=>(
          <div key={p.id} className="reveal" style={{ animationDelay:`${i*.08}s` }}>
            <ProjectCard project={p}/>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE: NOSOTROS
══════════════════════════════════════════ */
const TEAM = [
  { name:"Matías López", role:"CEO & Fullstack Dev", tags:["Next.js","Node.js","AWS"] },
  { name:"Sofía Ruiz",   role:"Lead Frontend Dev",   tags:["React","TypeScript","Figma"] },
  { name:"Agustín Vera", role:"Backend Engineer",    tags:["Python","PostgreSQL","Docker"] },
];

function PageNosotros() {
  return (
    <div style={{ padding:"9rem 5vw 6rem" }}>
      <div className="reveal nosotrosLead">
        <div style={{ maxWidth:680 }}>
          <SectionLabel>Quiénes somos</SectionLabel>
          <h1 className="ff" style={{ fontWeight:800, fontSize:"clamp(2.5rem,5vw,4.5rem)", lineHeight:.96, letterSpacing:"-.04em", marginBottom:"1.5rem" }}>
            Somos devs que<br/><span style={{color:C.goldLt}}>entienden</span><br/>tu negocio.
          </h1>
          <p style={{ fontSize:"1.05rem", fontWeight:300, color:C.muted, lineHeight:1.75 }}>
            No somos una agencia enorme con capas de burocracia. Somos un equipo chico, muy bueno, que trabaja directo con vos. Entendemos el problema antes de escribir una línea de código.
          </p>
        </div>
        <div style={{ position:"relative", width:"100%", height:320, borderRadius:16, overflow:"hidden", border:`1px solid ${C.border2}`, boxShadow:"0 20px 50px rgba(0,0,0,.35)" }}>
          <img src={TEAM_IMAGE} alt="Equipo de PairProgramming" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,transparent 40%,rgba(8,12,18,.78) 100%)" }} />
          <div style={{ position:"absolute", left:14, bottom:12, fontSize:".72rem", letterSpacing:".08em", textTransform:"uppercase", color:C.white, padding:".35rem .6rem", borderRadius:999, border:`1px solid ${C.border2}`, background:"rgba(8,12,18,.62)" }}>
            Partner técnico real
          </div>
        </div>
      </div>

      {/* stats row */}
      <div className="reveal statsGrid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:C.border, border:`1px solid ${C.border}`, marginBottom:"6rem" }}>
        {[["50+","Proyectos entregados"],["100%","Clientes satisfechos"],["3+","Años en el mercado"],["∞","Café consumido"]].map(([n,l])=>(
          <div key={l} style={{ background:C.bg2, padding:"2.5rem", textAlign:"center" }}>
            <div className="ff" style={{ fontSize:"2.8rem", fontWeight:800, background:`linear-gradient(135deg,${C.blueLt},${C.goldLt})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", lineHeight:1, marginBottom:".5rem" }}>{n}</div>
            <div style={{ fontSize:".8rem", color:C.muted, letterSpacing:".06em" }}>{l}</div>
          </div>
        ))}
      </div>

      {/* team */}
      <div className="reveal" style={{ marginBottom:"2rem" }}>
        <SectionLabel>El equipo</SectionLabel>
        <SectionTitle>Las personas detrás del código</SectionTitle>
      </div>
      <div className="reveal teamGrid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
        {TEAM.map((m,i)=>{
          const [hov, setHov] = useState(false);
          return (
            <div key={i} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{
              background: hov ? C.bg3 : C.bg2,
              border:`1px solid ${hov ? C.border2 : C.border}`,
              borderRadius:16, padding:"2rem",
              transition:"all .3s",
              transform: hov ? "translateY(-3px)" : "none",
            }}>
              <div style={{ width:56, height:56, borderRadius:"50%", background:`linear-gradient(135deg,${C.navy},${C.blue})`, border:`2px solid ${C.border2}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1.2rem", fontSize:"1.4rem" }}>
                {m.name[0]}
              </div>
              <div className="ff" style={{ fontWeight:700, fontSize:"1.05rem", letterSpacing:"-.02em", marginBottom:".3rem" }}>{m.name}</div>
              <div style={{ fontSize:".82rem", color:C.goldLt, marginBottom:"1rem" }}>{m.role}</div>
              <div style={{ display:"flex", gap:".4rem", flexWrap:"wrap" }}>
                {m.tags.map(t=>(
                  <span key={t} style={{ fontSize:".68rem", color:C.blueLt, background:`rgba(46,109,164,.12)`, border:`1px solid rgba(74,143,196,.2)`, padding:".2rem .6rem", borderRadius:100 }}>{t}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE: CONTACTO
══════════════════════════════════════════ */
function PageContacto() {
  const [form, setForm] = useState({ nombre:"", email:"", proyecto:"", mensaje:"" });
  const [sent, setSent] = useState(false);
  const inp = (field) => ({
    value: form[field],
    onChange: e => setForm({...form,[field]:e.target.value}),
    style: {
      width:"100%", background:C.bg2, border:`1px solid ${C.border2}`,
      borderRadius:10, padding:".85rem 1.1rem", color:C.white,
      fontSize:".9rem", outline:"none", fontFamily:"inherit",
      transition:"border-color .2s",
    },
    onFocus: e => e.target.style.borderColor=C.goldLt,
    onBlur:  e => e.target.style.borderColor=C.border2,
  });

  return (
    <div className="contactGrid" style={{ padding:"9rem 5vw 6rem", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6rem", alignItems:"start" }}>
      <div>
        <div className="reveal"><SectionLabel>Escribinos</SectionLabel></div>
        <h1 className="ff reveal" style={{ fontWeight:800, fontSize:"clamp(2.5rem,5vw,4rem)", lineHeight:.96, letterSpacing:"-.04em", marginBottom:"1.5rem" }}>
          Contanos tu<br/><span style={{color:C.goldLt}}>proyecto.</span>
        </h1>
        <p className="reveal" style={{ fontSize:"1rem", fontWeight:300, color:C.muted, lineHeight:1.75, marginBottom:"2.5rem" }}>
          Sin compromisos. Te respondemos en menos de 24hs con una propuesta honesta.
        </p>
        <div className="reveal" style={{ display:"flex", flexDirection:"column", gap:"1.2rem" }}>
          {[["📍","Argentina"],["📧","hola@pairprogramming.com.ar"],["🕐","Lun–Vie, 9–18hs"]].map(([ic,txt])=>(
            <div key={txt} style={{ display:"flex", alignItems:"center", gap:".8rem", fontSize:".9rem", color:C.muted }}>
              <span>{ic}</span>{txt}
            </div>
          ))}
        </div>
      </div>

      <div className="reveal">
        {sent ? (
          <div style={{ background:C.bg2, border:`1px solid ${C.border2}`, borderRadius:16, padding:"3rem", textAlign:"center" }}>
            <CheckCircle2 size={48} color={C.goldLt} strokeWidth={1.5} style={{ marginBottom:"1rem" }}/>
            <div className="ff" style={{ fontSize:"1.5rem", fontWeight:700, marginBottom:".5rem" }}>¡Mensaje enviado!</div>
            <p style={{ color:C.muted, fontSize:".9rem" }}>Te respondemos en menos de 24hs.</p>
          </div>
        ) : (
          <div style={{ background:C.bg2, border:`1px solid ${C.border2}`, borderRadius:16, padding:"2.5rem", display:"flex", flexDirection:"column", gap:"1.2rem" }}>
            <div className="contactNameGrid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
              <div><label style={{ fontSize:".75rem", color:C.muted, letterSpacing:".08em", display:"block", marginBottom:".4rem" }}>NOMBRE</label><input {...inp("nombre")} placeholder="Tu nombre"/></div>
              <div><label style={{ fontSize:".75rem", color:C.muted, letterSpacing:".08em", display:"block", marginBottom:".4rem" }}>EMAIL</label><input {...inp("email")} placeholder="tu@email.com"/></div>
            </div>
            <div><label style={{ fontSize:".75rem", color:C.muted, letterSpacing:".08em", display:"block", marginBottom:".4rem" }}>TIPO DE PROYECTO</label>
              <select {...inp("proyecto")} style={{ ...inp("proyecto").style, appearance:"none" }}>
                <option value="">Seleccioná una opción</option>
                {["Web App","Mobile App","SaaS","Consultoría","Otro"].map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
            <div><label style={{ fontSize:".75rem", color:C.muted, letterSpacing:".08em", display:"block", marginBottom:".4rem" }}>MENSAJE</label>
              <textarea {...inp("mensaje")} placeholder="Contanos tu idea..." rows={4} style={{ ...inp("mensaje").style, resize:"vertical" }}/>
            </div>
            <button onClick={()=>setSent(true)} style={{
              background:`linear-gradient(135deg,${C.gold},${C.goldLt})`, color:C.bg,
              border:"none", borderRadius:100, padding:"1rem", fontWeight:600, fontSize:".95rem",
              cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:".5rem",
              transition:"opacity .2s",
            }}
            onMouseEnter={e=>e.currentTarget.style.opacity=".85"}
            onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
              Enviar mensaje <ArrowRight size={16}/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── CTA SECTION ─── */
function CtaSection({ setActive }) {
  return (
    <section style={{ padding:"10rem 5vw", textAlign:"center", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:`radial-gradient(ellipse 55% 50% at 50% 100%,rgba(46,109,164,.1) 0%,transparent 70%),radial-gradient(ellipse 35% 35% at 30% 20%,rgba(201,146,13,.06) 0%,transparent 70%)` }}/>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:`linear-gradient(${C.border} 1px,transparent 1px),linear-gradient(90deg,${C.border} 1px,transparent 1px)`, backgroundSize:"72px 72px", WebkitMaskImage:"radial-gradient(ellipse 60% 60% at 50% 50%,black 0%,transparent 100%)" }}/>
      <h2 className="ff reveal" style={{ fontWeight:800, fontSize:"clamp(2.2rem,5.5vw,5rem)", letterSpacing:"-.04em", lineHeight:.98, maxWidth:660, margin:"0 auto 1.5rem", position:"relative", zIndex:1 }}>
        ¿Tenés una <span style={{color:C.goldLt}}>idea</span>?<br/>La hacemos realidad.
      </h2>
      <p className="reveal" style={{ color:C.muted, fontSize:".98rem", fontWeight:300, marginBottom:"2.8rem", position:"relative", zIndex:1 }}>Sin compromisos. Solo una charla honesta sobre tu proyecto.</p>
      <div className="reveal" style={{ position:"relative", zIndex:1 }}>
        <BtnGold onClick={()=>setActive("contacto")}>Hablemos <ArrowRight size={16}/></BtnGold>
      </div>
    </section>
  );
}

/* ─── SERVICE CARD ─── */
const SERVICES = [
  {Icon:Zap,       n:"01",name:"Desarrollo Web",      desc:"Apps de alto rendimiento. Rápidas, seguras y escalables desde el primer deploy."},
  {Icon:Cloud,     n:"02",name:"B2B SaaS",            desc:"Plataformas que soportan desde 10 hasta 100.000 usuarios sin transpirar."},
  {Icon:Smartphone,n:"03",name:"Apps Móviles",        desc:"iOS y Android con un solo codebase. Experiencias que los usuarios adoran."},
  {Icon:Link2,     n:"04",name:"Integraciones & API", desc:"APIs RESTful y GraphQL que funcionan en producción, sin sorpresas."},
  {Icon:Bot,       n:"05",name:"IA & Automatización", desc:"Incorporamos IA donde genera valor real. Sin hype, resultados medibles."},
  {Icon:Shield,    n:"06",name:"Consultoría Técnica", desc:"Auditamos tu stack y definimos la hoja de ruta técnica de tu producto."},
];
function ServiceCard({Icon,n,name,desc}) {
  const [h,setH]=useState(false);
  return (
    <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ background:h?C.bg2:C.bg, padding:"2.5rem", position:"relative", overflow:"hidden", transition:"background .3s" }}>
      <div style={{ fontSize:".68rem", fontWeight:700, letterSpacing:".16em", color:C.muted, marginBottom:"1.8rem" }}>{n}</div>
      <div style={{ width:44, height:44, borderRadius:12, marginBottom:"1.2rem", background:h?`linear-gradient(135deg,${C.navy},${C.blue})`:C.bg3, border:`1px solid ${h?C.blueLt:C.border}`, display:"flex", alignItems:"center", justifyContent:"center", transition:"all .3s", boxShadow:h?`0 0 20px rgba(46,109,164,.3)`:"none" }}>
        <Icon size={20} color={h?C.goldLt:C.blueLt} strokeWidth={1.5}/>
      </div>
      <div className="ff" style={{ fontSize:"1.1rem", fontWeight:700, letterSpacing:"-.02em", marginBottom:".75rem" }}>{name}</div>
      <p style={{ fontSize:".875rem", color:C.muted, lineHeight:1.7 }}>{desc}</p>
      <div style={{ position:"absolute", left:0, bottom:0, right:0, height:2, background:`linear-gradient(90deg,${C.blue},${C.gold})`, transform:h?"scaleX(1)":"scaleX(0)", transformOrigin:"left", transition:"transform .4s ease" }}/>
    </div>
  );
}

const VALUES = [
  {Icon:Star,          n:"01",title:"Calidad sin concesiones",text:"No entregamos algo que no usaríamos nosotros mismos."},
  {Icon:HeartHandshake,n:"02",title:"Colaboración real",      text:"Somos socios tecnológicos. Trabajamos codo a codo con vos."},
  {Icon:Lightbulb,     n:"03",title:"Innovación con propósito",text:"Tecnologías modernas cuando tiene sentido, no para impresionar."},
  {Icon:Layers,        n:"04",title:"Escalabilidad por diseño",text:"Arquitecturas que crecen desde el primer commit."},
  {Icon:CheckCircle2,  n:"05",title:"Simplicidad elegante",   text:"La mejor solución es la más simple que funciona."},
  {Icon:MessageSquare, n:"06",title:"Escucha activa",         text:"Entendemos tu negocio antes de escribir una línea."},
];
function ValueItem({Icon,n,title,text}) {
  const [h,setH]=useState(false);
  return (
    <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ background:h?C.bg3:C.bg2, padding:"2.2rem 2.5rem", transition:"background .25s", display:"flex", gap:"1.2rem", alignItems:"flex-start" }}>
      <div style={{ width:38, height:38, borderRadius:10, flexShrink:0, background:h?`rgba(232,184,75,.12)`:"transparent", border:`1px solid ${h?`rgba(232,184,75,.3)`:C.border}`, display:"flex", alignItems:"center", justifyContent:"center", transition:"all .3s" }}>
        <Icon size={17} color={h?C.goldLt:C.muted} strokeWidth={1.5}/>
      </div>
      <div>
        <div style={{ fontSize:".65rem", fontWeight:800, color:C.gold, letterSpacing:".12em", marginBottom:".5rem" }}>{n}</div>
        <div className="ff" style={{ fontSize:"1rem", fontWeight:700, letterSpacing:"-.02em", marginBottom:".5rem" }}>{title}</div>
        <p style={{ fontSize:".85rem", color:C.muted, lineHeight:1.65 }}>{text}</p>
      </div>
    </div>
  );
}

const STEPS = [
  {Icon:Search,   n:"01",title:"Discovery",            desc:"Entendemos tu negocio, usuarios y objetivos."},
  {Icon:PenTool,  n:"02",title:"Diseño & Arquitectura",desc:"Definimos la solución técnica y UX."},
  {Icon:GitBranch,n:"03",title:"Desarrollo iterativo", desc:"Sprints cortos, entregas reales, feedback constante."},
  {Icon:Rocket,   n:"04",title:"Launch & Soporte",     desc:"Deploy, monitoreo y acompañamiento post-lanzamiento."},
];
function StepCard({Icon,n,title,desc}) {
  const [h,setH]=useState(false);
  return (
    <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ padding:"0 2rem 2rem", textAlign:"center" }}>
      <div style={{ width:48, height:48, margin:"0 auto 1.5rem", borderRadius:"50%", background:h?`linear-gradient(135deg,${C.navy},${C.blue})`:C.bg2, border:`1px solid ${h?C.blueLt:C.border2}`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative", zIndex:1, transition:"all .3s", boxShadow:h?`0 0 24px rgba(46,109,164,.4)`:"none" }}>
        <Icon size={18} color={h?C.goldLt:C.blueLt} strokeWidth={1.5}/>
      </div>
      <div className="ff" style={{ fontWeight:700, fontSize:".95rem", letterSpacing:"-.02em", marginBottom:".5rem" }}>{title}</div>
      <p style={{ fontSize:".82rem", color:C.muted, lineHeight:1.6 }}>{desc}</p>
    </div>
  );
}

/* ─── FOOTER ─── */
function Footer({ setActive }) {
  return (
    <footer className="footerWrap" style={{ borderTop:`1px solid ${C.border}`, padding:"2.5rem 5vw", display:"flex", alignItems:"center", justifyContent:"space-between", background:C.bg }}>
      <button onClick={()=>setActive("home")} style={{ display:"flex", alignItems:"center", gap:".6rem", background:"none", border:"none", cursor:"pointer" }}>
        <LogoIcon size={28}/>
        <span className="ff" style={{ fontWeight:700, fontSize:".9rem", color:"rgba(238,242,247,.3)" }}>pair<span style={{color:C.gold}}>·</span>programming</span>
      </button>
      <ul style={{ display:"flex", gap:"2rem", listStyle:"none" }}>
        {["FAQ","Términos","Privacidad"].map(l=>(
          <li key={l}><a href="#" style={{ color:"rgba(238,242,247,.22)", textDecoration:"none", fontSize:".8rem", transition:"color .2s" }} onMouseEnter={e=>e.target.style.color=C.white} onMouseLeave={e=>e.target.style.color="rgba(238,242,247,.22)"}>{l}</a></li>
        ))}
      </ul>
      <div style={{ fontSize:".75rem", color:"rgba(238,242,247,.18)" }}>© 2026 pairprogramming · Argentina</div>
    </footer>
  );
}

/* ══════════════════════════════════════════
   ROOT APP
══════════════════════════════════════════ */
export default function App() {
  const [active, setActive] = useState("home");
  useReveal();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [active]);

  const pages = {
    home:       <PageHome setActive={setActive}/>,
    portafolio: <PagePortafolio/>,
    nosotros:   <PageNosotros/>,
    contacto:   <PageContacto/>,
    servicios:  <PageHome setActive={setActive}/>,
  };

  return (
    <>
      <style>{GS}</style>
      <Nav active={active} setActive={setActive}/>
      <main>{pages[active] ?? pages.home}</main>
      {active !== "contacto" && <CtaSection setActive={setActive}/>}
      <Footer setActive={setActive}/>
    </>
  );
}