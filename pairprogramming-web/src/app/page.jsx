import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-64 flex flex-col">
        <Hero />
        <Footer />
      </main>
    </div>
  );
}
