import React from "react";
import { Download } from "lucide-react";

const RESUME_LINK = "https://drive.google.com/file/d/13LUvlfcsxVpfSRIg0tSnVEU4AToX71x5/view?usp=sharing";

const HeroSection = () => {
  return (
    <section className="bg-card rounded-3xl shadow-xl p-8 relative mt-4">
      {/* Name */}
      <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2 text-primary text-center">
        Samarth Mistry
      </h1>
      {/* Resume button below name, mobile only */}
      <div className="flex md:hidden justify-center mb-5">
        <a
          href={RESUME_LINK}
          className="inline-flex items-center px-5 py-2 font-semibold rounded-xl bg-primary text-[#16202a] hover:bg-accent transition-colors shadow-lg text-base whitespace-nowrap animate-scale-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={18} className="mr-2" />
          Resume
        </a>
      </div>
      <p className="text-lg text-white/90 mb-6 text-center">
        Aspiring Game Designer passionate about creating immersive environments and gameplay experiences.
      </p>
      <div className="flex justify-center">
        <a
          href="/portfolio"
          className="inline-flex items-center px-6 py-3 font-semibold rounded-xl bg-accent text-[#16202a] hover:bg-primary transition-colors shadow-lg text-base whitespace-nowrap animate-scale-in"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
