import Sidebar from "../components/Sidebar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import MainContainer from "../components/MainContainer";
import FloatingWidgets from "../components/FloatingWidgets";

export default function Servicios() {
  return (
    <div className="min-h-screen bg-black">
      <Sidebar />
      <MainContainer>
        <Services />
        <CallToAction />
        <Footer />
      </MainContainer>
      <FloatingWidgets />
    </div>
  );
}
