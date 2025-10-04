"use client";
import Sidebar from "../components/Sidebar";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="lg:ml-64 flex flex-col">
        <Contacto />
        <Footer />
      </main>
    </div>
  );
}
