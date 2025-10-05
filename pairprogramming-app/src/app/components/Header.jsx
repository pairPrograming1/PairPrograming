// components/Header.jsx
"use client";
import AdminAuth from "./AdminAuth";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-40 p-4">
      <div className="flex items-center space-x-4">
        <AdminAuth />
      </div>
    </header>
  );
}
