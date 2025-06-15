
import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#131b2e] rounded-3xl shadow-2xl p-8 sm:p-12 max-w-3xl mx-auto mt-7 animate-fade-in border border-[#273862]">
      <div className="flex flex-col items-center text-center select-none">
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
          Passionate about crafting immersive worlds and gameplay experiences.
          Moderately skilled in{" "}
          <span className="text-primary font-bold">Unreal Engine 5</span>
          {", "}
          <span className="text-primary font-bold">environment design</span>
          {", gameplay prototyping, and "}
          <span className="text-primary font-bold">C++/Blueprint scripting</span>.
        </p>
        <div className="flex flex-col sm:flex-row w-full gap-4 justify-center mb-5">
          {/* View Portfolio */}
          <Link
            to="/portfolio"
            className="flex-1 sm:flex-none bg-primary hover:bg-accent text-[#16202a] font-semibold text-lg px-8 py-3 rounded-2xl shadow-lg transition-colors"
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
    </section>
  );
};

export default HeroSection;

