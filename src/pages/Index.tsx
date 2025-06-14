
// Home page with HeroSection and quicklinks
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-white">
      <NavBar />
      <main className="pt-24 container max-w-6xl mx-auto px-4">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
