"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarNavigation({ menuItems, shouldShowText, onItemClick }) {
  const pathname = usePathname();

  return (
    <nav className="flex-1 p-2">
      <ul className="space-y-1">
        {menuItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center p-3 rounded-lg transition-all duration-300 font-medium group relative overflow-hidden ${
                  isActive
                    ? "bg-brand-blue/15 text-foreground border border-brand-blue/30"
                    : "hover:bg-hover-bg border border-transparent"
                }`}
                onClick={onItemClick}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue to-brand-gold" />
                )}
                <div
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-brand-blue-light"
                      : "text-brand-blue group-hover:text-brand-blue-light"
                  }`}
                >
                  {item.icon}
                </div>
                <span
                  className={`ml-3 transition-all duration-300 whitespace-nowrap ${
                    shouldShowText ? "opacity-100 w-auto" : "opacity-0 w-0"
                  } ${isActive ? "text-foreground" : "text-secondary-text group-hover:text-foreground"}`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
