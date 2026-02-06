export function SidebarFooter({ shouldShowText, isAdmin }) {
  return (
    <div className="p-3 border-t border-border-color">
      <div
        className={`transition-all duration-300 text-center ${
          shouldShowText ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-secondary-text text-xs">© 2025 PairProgramming</p>
        {isAdmin && (
          <div className="mt-2 p-2 bg-brand-blue/10 rounded">
            <p className="text-brand-blue-light text-xs font-semibold">Modo Admin</p>
          </div>
        )}
      </div>
    </div>
  );
}
