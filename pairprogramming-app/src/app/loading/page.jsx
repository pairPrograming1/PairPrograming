
"use client";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import LoadingContent from "../components/LoadingContent";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <LoadingContent />
        <Footer />
      </MainContainer>
    </div>
  );
}
