// app/soporte/page.jsx
"use client";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import SoporteContent from "../components/SoporteContent";

export default function SoportePage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <SoporteContent />
        <Footer />
      </MainContainer>
    </div>
  );
}
