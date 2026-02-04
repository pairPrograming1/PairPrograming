export function SidebarFooter({ shouldShowText, isAdmin }) {
  return (
    <div className="p-3 border-t border-gray-800">
      <div
        className={`transition-all duration-300 text-center ${
          shouldShowText ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-gray-400 text-xs">© 2025 PairProgramming</p>
        {isAdmin && (
          <div className="mt-2 p-2 bg-blue-600/10 rounded">
            <p className="text-blue-400 text-xs font-semibold">Modo Admin</p>
          </div>
        )}
      </div>
    </div>
  );
}
