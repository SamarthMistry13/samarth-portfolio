import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import React, { useState } from "react";

// Updated Castle Environment project to include images (remove video)
const projects = [
  {
    title: "Castle Environment (UE5)",
    description:
      "Environment design using modular assets, terrain sculpting, and foliage. Optimized lighting and assets for clarity.",
    image: "/lovable-uploads/33d6b50a-2368-4524-ba86-f9530cf4a963.png",
    tags: ["UE5", "Environment Art", "Modular Assets"],
    images: [
      "/lovable-uploads/563f9ab9-36ff-4a0b-8504-35244c6801aa.png",
      "/lovable-uploads/699ea561-b149-42ba-af71-4976ddff0ce1.png",
      "/lovable-uploads/c1720e90-5432-4f75-9e3a-1d78e1b0b415.png",
    ],
  },
  {
    title: "Third-Person Shooter Prototype",
    description:
      "Fast-paced shooter demo with player movement, shooting mechanics. Scoreboard, timer, Victory screen, and Restart button.",
    image: "/lovable-uploads/f22129ae-1956-4cd4-9d8e-61b9e0756d4a.png",
    tags: ["Prototype", "Shooter", "Blueprint", "Gameplay", "Chaos Physics"],
    video: "https://drive.google.com/file/d/1mM5l8gfowgtalJboxviKVF8j9cbc7pDm/preview",
  },
  {
    title: "Villager Game",
    description:
      "Stylized top-down game with coin collection, player animation, sound, enemy AI, and sliding mechanic.",
    image: "/lovable-uploads/e61a9389-08f8-4e45-9158-0b8c7ebad45d.png",
    tags: ["Blueprint", "Gameplay", "Enemy AI", "Sound Effects", "Player Animation"],
    video: "https://drive.google.com/file/d/1MPy2P1GFL5fDN9CTMjd3vosZBzf94_8o/preview",
  },
];

const Portfolio = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Show images in gallery modal
  const handleImagesOpen = (imgs: string[]) => {
    setModalImages(imgs);
    setGalleryIndex(0);
  };
  const handleImagesClose = () => {
    setModalImages(null);
    setGalleryIndex(0);
  };
  const handleImageNav = (direction: "prev" | "next") => {
    if (!modalImages) return;
    setGalleryIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? modalImages.length - 1 : prev - 1;
      }
      return prev === modalImages.length - 1 ? 0 : prev + 1;
    });
  };

  // Show video in modal
  const handleVideoOpen = (url: string) => setVideoUrl(url);
  const handleVideoClose = () => setVideoUrl(null);

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
              onImagesClick={project.images ? handleImagesOpen : undefined}
            />
          ))}
        </div>
      </main>
      {/* Image Gallery Modal */}
      {modalImages && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in">
          <div className="bg-card rounded-2xl shadow-2xl p-2 relative w-[96vw] max-w-3xl flex flex-col items-center">
            <button
              onClick={handleImagesClose}
              className="absolute top-2 right-2 text-white bg-black/40 rounded-full px-3 py-1 hover:bg-accent transition-colors"
              aria-label="Close gallery"
            >
              ✕
            </button>
            <div className="flex items-center justify-center w-full h-[40vh] md:h-[55vh]">
              <button
                onClick={() => handleImageNav("prev")}
                className="text-3xl px-2 text-white/60 hover:text-accent focus:outline-none"
                aria-label="Prev image"
              >
                ‹
              </button>
              <img
                src={modalImages[galleryIndex]}
                alt={`Portfolio gallery ${galleryIndex + 1}`}
                className="max-h-[38vh] md:max-h-[52vh] rounded-lg mx-2 shadow-lg object-contain"
                style={{ maxWidth: "70vw" }}
              />
              <button
                onClick={() => handleImageNav("next")}
                className="text-3xl px-2 text-white/60 hover:text-accent focus:outline-none"
                aria-label="Next image"
              >
                ›
              </button>
            </div>
            <div className="flex gap-2 justify-center mt-4">
              {modalImages.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setGalleryIndex(idx)}
                  className={`w-3 h-3 rounded-full ${galleryIndex === idx ? 'bg-accent' : 'bg-white/40'}`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
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
            {videoUrl.includes('drive.google.com') ? (
              <iframe
                src={videoUrl}
                allow="autoplay"
                allowFullScreen
                className="w-full rounded-lg max-h-[70vh] bg-black my-2"
                style={{ aspectRatio: '16/9', minHeight: 320 }}
                title="Google Drive Video"
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full rounded-lg max-h-[70vh] bg-black my-2"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
