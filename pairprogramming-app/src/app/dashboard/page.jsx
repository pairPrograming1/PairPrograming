// app/admin/dashboard/page.jsx
"use client";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import MainContainer from "../../MainContainer";
import DashboardAdminContent from "../../DashboardAdminContent";

export default function DashboardAdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <DashboardAdminContent />
        <Footer />
      </MainContainer>
    </div>
  );
}
