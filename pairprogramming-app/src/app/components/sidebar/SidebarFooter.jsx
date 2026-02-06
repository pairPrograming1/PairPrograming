export function SidebarFooter({ shouldShowText, isAdmin }) {
  return (
    <div className="p-3 border-t border-border-color">
      <div
        className={`transition-all duration-300 text-center ${
          shouldShowText ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-secondary-text text-xs">
          © {new Date().getFullYear()}{" "}
          <span className="text-brand-blue">pair</span>
          <span className="text-foreground">programming</span>
        </p>
        {isAdmin && (
          <div className="mt-2 p-2 bg-brand-gold/10 border border-brand-gold/20 rounded-lg">
            <p className="text-brand-gold text-xs font-semibold">Modo Admin</p>
          </div>
        )}
      </div>
    </div>
  );
}
