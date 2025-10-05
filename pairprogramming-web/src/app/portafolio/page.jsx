// app/portafolio/page.js
import Sidebar from "../components/Sidebar";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import MainContainer from "../components/MainContainer";

export default function PortafolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <Portfolio />
        <CallToAction />
        <Footer />
      </MainContainer>
    </div>
  );
}
