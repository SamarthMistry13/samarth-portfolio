
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import React from "react";

const projects = [
  {
    title: "Castle Environment (UE5)",
    description:
      "Environment design using modular assets, terrain sculpting, and foliage. Optimized lighting and assets for clarity.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    tags: ["UE5", "Environment Art", "Modular Assets"],
  },
  {
    title: "Third-Person Shooter Prototype",
    description:
      "Fast-paced shooter demo with player movement, shooting mechanics. Scoreboard, timer, Victory screen, and Restart button.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    tags: ["Prototype", "Shooter", "Blueprint", "Gameplay"],
  },
  {
    title: "Villager Simulation",
    description:
      "Stylized top-down game with coin collection, player animation, sound, enemy AI, and sliding mechanic.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    tags: ["Simulation", "Blueprint", "Top-down", "Gameplay"],
  },
];

const Portfolio = () => (
  <div className="min-h-screen bg-[#0f172a] font-sans text-white">
    <NavBar />
    <main className="pt-28 pb-14 container max-w-6xl mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-primary">Portfolio</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </main>
  </div>
);

export default Portfolio;
