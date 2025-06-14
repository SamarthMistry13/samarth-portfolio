
import NavBar from "../components/NavBar";
import React from "react";

const About = () => (
  <div className="min-h-screen bg-[#0f172a] font-sans text-white">
    <NavBar />
    <main className="pt-28 pb-14 container max-w-3xl mx-auto px-4 animate-fade-in">
      <section className="bg-card rounded-3xl shadow-xl p-8 relative">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-primary">About Me</h2>
        <p className="text-lg text-white/90 mb-6">
          Aspiring Game Designer passionate about creating immersive environments and gameplay experiences.<br />
          Moderately skilled in Unreal Engine&nbsp;5, environment art, and prototyping using Blueprint.
        </p>
        <div className="flex flex-col md:flex-row gap-12 mt-8">
          <div className="flex-1">
            <h3 className="font-semibold text-xl mb-3 text-accent">Education</h3>
            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>Completed 12th grade</li>
              <li>Pursuing B.Tech (details can be updated as progress continues)</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-xl mb-3 text-accent">Skills</h3>
            <ul className="flex flex-wrap gap-3 text-base">
              <li className="bg-primary/20 text-primary px-4 py-1 rounded-full font-semibold">Unreal Engine</li>
              <li className="bg-primary/20 text-primary px-4 py-1 rounded-full font-semibold">Blueprint Scripting</li>
              <li className="bg-primary/20 text-primary px-4 py-1 rounded-full font-semibold">C++</li>
              <li className="bg-primary/20 text-primary px-4 py-1 rounded-full font-semibold">Environment Design</li>
              <li className="bg-primary/20 text-primary px-4 py-1 rounded-full font-semibold">Gameplay Mechanics</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default About;
