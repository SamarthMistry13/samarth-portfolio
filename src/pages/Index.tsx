
// Home page with HeroSection and quicklinks
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-white">
      <NavBar />
      {/* Increase base padding for all, and use wider container for better look on all screens */}
      <main className="pt-4 md:pt-24 pb-10 container max-w-7xl mx-auto px-4 sm:px-8">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;

