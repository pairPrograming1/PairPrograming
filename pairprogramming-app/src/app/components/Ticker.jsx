export default function Ticker() {
  const items = ["Next.js","React","TypeScript","Node.js","PostgreSQL","AWS","Docker","Tailwind","GraphQL","Python","Redis","Stripe"];
  return (
    <div style={{
      borderTop:"1px solid rgba(238,242,247,0.07)",
      borderBottom:"1px solid rgba(238,242,247,0.07)",
      background:"#0d1520",overflow:"hidden",padding:".85rem 0",
    }}>
      <div className="animate-ticker" style={{ display:"flex", whiteSpace:"nowrap" }}>
        {[...items,...items,...items].map((item,i) => (
          <span key={i} style={{
            display:"inline-flex",alignItems:"center",gap:".9rem",
            padding:"0 1.8rem",flexShrink:0,
            fontSize:".74rem",fontWeight:500,letterSpacing:".14em",
            textTransform:"uppercase",color:"rgba(238,242,247,.22)",
          }}>
            {item}<span style={{color:"#c9920d"}}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
