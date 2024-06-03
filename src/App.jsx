import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <SectionHero />
      </main>
      <Footer />
    </div>
  );
}
