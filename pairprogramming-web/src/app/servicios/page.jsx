// app/servicios/page.js
import Sidebar from "../components/Sidebar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import MainContainer from "../components/MainContainer";

export default function Servicios() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <Services />
        <CallToAction />
        <Footer />
      </MainContainer>
    </div>
  );
}
