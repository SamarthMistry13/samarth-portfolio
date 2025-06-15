
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import React, { useState } from "react";

const projects = [
  {
    title: "Castle Environment (UE5)",
    description:
      "Environment design using modular assets, terrain sculpting, and foliage. Optimized lighting and assets for clarity.",
    image: "/lovable-uploads/33d6b50a-2368-4524-ba86-f9530cf4a963.png",
    tags: ["UE5", "Environment Art", "Modular Assets"],
    // Replace with your actual video URL (sample or placeholder)
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Third-Person Shooter Prototype",
    description:
      "Fast-paced shooter demo with player movement, shooting mechanics. Scoreboard, timer, Victory screen, and Restart button.",
    image: "/lovable-uploads/f22129ae-1956-4cd4-9d8e-61b9e0756d4a.png",
    tags: ["Prototype", "Shooter", "Blueprint", "Gameplay"],
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "Villager Game",
    description:
      "Stylized top-down game with coin collection, player animation, sound, enemy AI, and sliding mechanic.",
    image: "/lovable-uploads/e61a9389-08f8-4e45-9158-0b8c7ebad45d.png",
    tags: ["Blueprint", "Top-down", "Gameplay", "Enemy AI"],
    // If you have a video for this, add it here, else leave it as undefined.
    video: undefined,
  },
];

const Portfolio = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleVideoOpen = (url: string) => {
    setVideoUrl(url);
  };

  const handleVideoClose = () => {
    setVideoUrl(null);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-white">
      <NavBar />
      <main className="pt-28 pb-14 container max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-primary">Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              {...project}
              onVideoClick={project.video ? handleVideoOpen : undefined}
            />
          ))}
        </div>
      </main>
      {/* Video Modal */}
      {videoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 animate-fade-in">
          <div className="bg-card rounded-2xl shadow-2xl p-4 relative w-[90vw] max-w-2xl flex flex-col items-center">
            <button
              onClick={handleVideoClose}
              className="absolute top-2 right-2 text-white bg-black/40 rounded-full px-3 py-1 hover:bg-accent transition-colors"
              aria-label="Close video"
            >
              ✕
            </button>
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full rounded-lg max-h-[70vh] bg-black my-2"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
