import React from "react";
import ProfileImage from "./ProfileImage";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const HeroSection = () => {
  return (
    // Tweak top margin for mobile; keep mt-7 on md+ only
    <section className="w-full bg-[#131b2e] rounded-3xl shadow-2xl px-6 py-10 sm:p-12 max-w-4xl mx-auto mt-2 md:mt-7 animate-fade-in border border-[#273862]">
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-12 gap-7">
        {/* Profile image left side */}
        <div className="w-[160px] h-[160px] shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
          <ProfileImage />
        </div>
        {/* Content right side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-white">
            <span className="text-white">Hi, I’m </span>
            <span className="text-primary">Samarth Mistry</span>
          </h1>
          <div className="mb-3">
            <span className="text-xl sm:text-2xl font-semibold text-accent">
              Aspiring Game Designer
            </span>
          </div>
          <p className="text-base sm:text-lg text-white/90 mb-7 max-w-xl leading-relaxed">
            Passionate about crafting immersive worlds and gameplay experiences.<br />
            Moderately skilled in{" "}
            <span className="text-primary font-bold">Unreal Engine 5</span>
            {", "}
            <span className="text-primary font-bold">environment design</span>
            {", gameplay prototyping, and "}
            <span className="text-primary font-bold">C++/Blueprint scripting</span>.
          </p>
          <div className="flex flex-col sm:flex-row w-full gap-4 justify-center md:justify-start mb-5">
            {/* View Portfolio */}
            <Link
              to="/portfolio"
              className="flex-1 sm:flex-none bg-primary hover:bg-accent text-[#16202a] font-semibold text-lg px-8 py-3 rounded-2xl shadow-lg transition-colors text-center"
            >
              View Portfolio
            </Link>
            {/* About Me secondary button */}
            <Link
              to="/about"
              className="flex-1 sm:flex-none border border-primary text-primary hover:bg-primary hover:text-[#16202a] px-8 py-3 font-semibold rounded-2xl text-lg shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              About Me
              <span className="text-xl ml-1">↓</span>
            </Link>
          </div>
          {/* Let's Connect link */}
          <a
            href="/contact"
            className="mt-1 inline-flex items-center text-accent font-semibold text-base hover:underline hover:text-primary transition-colors"
          >
            <Home size={18} className="mr-1 -ml-1" />
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
