import Sidebar from "../components/Sidebar";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import MainContainer from "../components/MainContainer";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <Nosotros />
        <CallToAction />
        <Footer />
      </MainContainer>
    </div>
  );
}
