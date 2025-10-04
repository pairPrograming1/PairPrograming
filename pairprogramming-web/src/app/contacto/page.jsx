// app/contacto/page.js
"use client";
import Sidebar from "../components/Sidebar";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <Contacto />
        <Footer />
      </MainContainer>
    </div>
  );
}
