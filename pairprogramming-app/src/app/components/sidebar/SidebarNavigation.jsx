import Link from "next/link";

export function SidebarNavigation({ menuItems, shouldShowText, onItemClick }) {
  return (
    <nav className="flex-1 p-2">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center p-3 rounded-lg hover:bg-hover-bg transition-colors font-medium group"
              onClick={onItemClick}
            >
              <div className="text-primary group-hover:text-accent transition-colors">
                {item.icon}
              </div>
              <span
                className={`ml-3 transition-all duration-300 whitespace-nowrap ${
                  shouldShowText ? "opacity-100 w-auto" : "opacity-0 w-0"
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
