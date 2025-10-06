// app/faq/page.jsx
"use client";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import MainContainer from "../../components/MainContainer";
import FAQContent from "../../components/FAQContent";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <FAQContent />
        <Footer />
      </MainContainer>
    </div>
  );
}
