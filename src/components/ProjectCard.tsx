
import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  video?: string;
  onVideoClick?: (videoUrl: string) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
  video,
  onVideoClick,
}) => {
  // If video is provided, make the whole card clickable
  const handleClick = () => {
    if (video && onVideoClick) {
      onVideoClick(video);
    }
  };

  return (
    <div
      className={`bg-card rounded-2xl shadow-lg p-5 flex flex-col group transition-transform duration-200 ease-in-out animate-fade-in relative ${
        video ? "cursor-pointer hover:scale-105 hover:shadow-xl" : ""
      }`}
      onClick={video ? handleClick : undefined}
      tabIndex={video ? 0 : -1}
      role={video ? "button" : undefined}
      aria-label={video ? `Play demo video for ${title}` : undefined}
    >
      <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform"
          loading="lazy"
        />
        {video && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="w-16 h-16 text-accent opacity-70" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" fill="#14b8a6" fillOpacity="0.17" />
              <polygon points="34,28 54,40 34,52" fill="#0ea5e9" />
            </svg>
          </div>
        )}
      </div>
      <h3 className="font-display text-2xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-base text-white/90 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto mb-2">
        {tags.map((t) => (
          <span key={t} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold">
            {t}
          </span>
        ))}
      </div>
      {!video && link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-accent underline hover:text-primary transition-colors"
        >
          View More
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
