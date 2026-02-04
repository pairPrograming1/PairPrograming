// app/contacto/page.jsx
"use client";
import Sidebar from "../components/Sidebar";
import Contacto from "../components/contacto";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import FloatingWidgets from "../components/FloatingWidgets";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-black">
      <Sidebar />
      <MainContainer>
        <Contacto />
        <Footer />
      </MainContainer>
      <FloatingWidgets />
    </div>
  );
}
