
import React from "react";
import ProfileImage from "./ProfileImage";
import { Download } from "lucide-react";

const RESUME_LINK = "https://drive.google.com/file/d/13LUvlfcsxVpfSRIg0tSnVEU4AToX71x5/view?usp=sharing";

const HeroSection = () => {
  return (
    <section className="w-full bg-card rounded-3xl shadow-xl px-6 py-10 sm:p-12 relative mt-4 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left: Image */}
        <div className="w-[160px] h-[160px] shrink-0 mx-auto md:mx-0 md:mt-2">
          <ProfileImage />
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3 text-primary text-center md:text-left">
            Samarth Mistry
          </h1>
          <p className="text-lg text-white/90 mb-6 text-center md:text-left">
            Aspiring Game Designer passionate about creating immersive environments and gameplay experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center md:items-start">
            <a
              href={RESUME_LINK}
              className="inline-flex items-center px-5 py-2 font-semibold rounded-xl bg-primary text-[#16202a] hover:bg-accent transition-colors shadow-lg text-base whitespace-nowrap animate-scale-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} className="mr-2" />
              Resume
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center px-6 py-3 font-semibold rounded-xl bg-accent text-[#16202a] hover:bg-primary transition-colors shadow-lg text-base whitespace-nowrap animate-scale-in"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
