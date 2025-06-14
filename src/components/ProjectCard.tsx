
import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => (
  <div className="bg-card rounded-2xl shadow-lg p-5 flex flex-col group hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out animate-fade-in">
    <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full group-hover:scale-110 transition-transform"
        loading="lazy"
      />
    </div>
    <h3 className="font-display text-2xl font-semibold mb-2 text-primary">{title}</h3>
    <p className="text-base text-white/90 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mt-auto mb-2">
      {tags.map(t => (
        <span key={t} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold">
          {t}
        </span>
      ))}
    </div>
    {link && (
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

export default ProjectCard;
