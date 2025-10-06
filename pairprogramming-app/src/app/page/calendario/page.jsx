// app/calendario/page.jsx
"use client";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import MainContainer from "../../components/MainContainer";
import CalendarioContent from "../../components/CalendarioContent";

export default function CalendarioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <CalendarioContent />
        <Footer />
      </MainContainer>
    </div>
  );
}
