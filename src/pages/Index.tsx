// Home page with HeroSection and quicklinks
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-white">
      <NavBar />
      {/* Remove extra top padding on mobile, keep for md+: pt-24 md:pt-24, but no pt on mobile */}
      <main className="pt-4 md:pt-24 pb-10 container max-w-6xl mx-auto px-2 sm:px-4">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
