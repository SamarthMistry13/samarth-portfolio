
import React from "react";
import ProfileImage from "./ProfileImage";
import { Link } from "react-router-dom";
import { ArrowDown, Play } from "lucide-react";

const HeroSection = () => (
  <section className="relative flex items-center justify-between min-h-[60vh] pt-36 pb-16 md:pb-28 bg-[#181f36] rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
    <div className="relative flex-1 z-10 pl-8 pr-4">
      <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6 drop-shadow-lg">
        Hi, I’m <span className="text-primary">Samarth Mistry</span>
        <br />
        <span className="text-xl font-sans font-semibold text-accent block mt-3">
          Aspiring Game Designer
        </span>
      </h1>
      <p className="max-w-prose text-lg text-white/90 mb-8">
        Passionate about crafting immersive worlds and gameplay experiences. Skilled in <span className="font-semibold text-primary">Unreal Engine 5</span>, <span className="font-semibold text-primary">environment design</span>, gameplay prototyping, and C++/Blueprint scripting.
      </p>
      <div className="flex gap-4 items-center mb-6">
        <Link to="/portfolio" className="bg-primary text-[#16202a] px-6 py-2 rounded-full font-semibold text-lg hover:bg-accent transition-colors shadow-lg animate-scale-in duration-300">
          View Portfolio
        </Link>
        <Link to="/about" className="flex items-center gap-2 text-lg font-semibold text-primary px-4 py-2 rounded-full border border-primary/40 hover:bg-primary/10 transition-colors">
          About Me
          <ArrowDown size={18} className="animate-bounce" />
        </Link>
      </div>
      <a href="/contact" className="inline-flex items-center gap-2 text-base text-accent hover:underline">
        <Play size={18} />
        Let’s Connect
      </a>
    </div>
    <div className="hidden md:flex flex-1 justify-center items-end pr-8">
      <ProfileImage className="w-56 h-56 md:w-72 md:h-72 shadow-2xl animate-fade-in" />
    </div>
    {/* Decorative abstract SVG background, wave or blobs */}
    <svg className="absolute inset-y-0 right-0 h-full w-2/5 z-0 opacity-45" fill="none" viewBox="0 0 320 640">
      <circle cx="280" cy="320" r="180" fill="#14b8a6" fillOpacity="0.11" />
      <ellipse cx="120" cy="520" rx="140" ry="80" fill="#0ea5e9" fillOpacity="0.08" />
      <circle cx="80" cy="120" r="55" fill="#22d3ee" fillOpacity="0.10" />
    </svg>
  </section>
);

export default HeroSection;
