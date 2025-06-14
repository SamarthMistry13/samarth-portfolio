import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import React from "react";

const projects = [
  {
    title: "Castle Environment (UE5)",
    description:
      "Environment design using modular assets, terrain sculpting, and foliage. Optimized lighting and assets for clarity.",
    image: "/lovable-uploads/33d6b50a-2368-4524-ba86-f9530cf4a963.png",
    tags: ["UE5", "Environment Art", "Modular Assets"],
  },
  {
    title: "Third-Person Shooter Prototype",
    description:
      "Fast-paced shooter demo with player movement, shooting mechanics. Scoreboard, timer, Victory screen, and Restart button.",
    image: "/lovable-uploads/f22129ae-1956-4cd4-9d8e-61b9e0756d4a.png",
    tags: ["Prototype", "Shooter", "Blueprint", "Gameplay"],
  },
  {
    title: "Villager Game",
    description:
      "Stylized top-down game with coin collection, player animation, sound, enemy AI, and sliding mechanic.",
    image: "/lovable-uploads/e61a9389-08f8-4e45-9158-0b8c7ebad45d.png",
    tags: ["Blueprint", "Top-down", "Gameplay"],
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
