// app/privacidad/page.jsx
"use client";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import PrivacidadContent from "../components/PrivacidadContent";

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <PrivacidadContent />
        <Footer />
      </MainContainer>
    </div>
  );
}
