// src/components/Navigation.jsx
"use client";

import { baseMenuItems, adminMenuItem } from "@/constants/menuItems";
import AppLink from "@/components/ui/AppLink";

export default function Navigation() {
  return (
    <nav>
      <ul className="space-y-2">
        {baseMenuItems.map((item) => (
          <li key={item.href}>
            <AppLink
              href={item.href}
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              activeClassName="bg-blue-100 text-blue-600"
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </AppLink>
          </li>
        ))}

        {/* Item de admin */}
        <li>
          <AppLink
            href={adminMenuItem.href}
            className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            activeClassName="bg-purple-100 text-purple-600"
          >
            {adminMenuItem.icon}
            <span className="ml-3">{adminMenuItem.label}</span>
          </AppLink>
        </li>
      </ul>
    </nav>
  );
}
