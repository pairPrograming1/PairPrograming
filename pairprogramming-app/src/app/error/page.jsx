// app/error/page.jsx
"use client";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import ErrorContent from "../components/ErrorContent";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <ErrorContent />
        <Footer />
      </MainContainer>
    </div>
  );
}
