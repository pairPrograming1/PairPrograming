
"use client";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import TerminosCondicionesContent from "../components/TerminosCondicionesContent";

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <TerminosCondicionesContent />
        <Footer />
      </MainContainer>
    </div>
  );
}
