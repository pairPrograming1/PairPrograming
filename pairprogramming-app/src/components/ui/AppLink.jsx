// src/components/ui/AppLink.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AppLink = ({
  href,
  children,
  className = "",
  activeClassName = "",
  ...props
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const finalClassName = isActive
    ? `${className} ${activeClassName}`.trim()
    : className;

  return (
    <Link href={href} className={finalClassName} {...props}>
      {children}
    </Link>
  );
};

export default AppLink;
