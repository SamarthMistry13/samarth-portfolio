
import React from "react";

const ProfileImage = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-full border-4 border-primary shadow-xl overflow-hidden ${className}`}>
    {/* Placeholder headshot image */}
    <img
      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&h=320&facepad=2&q=80"
      alt="Samarth Mistry profile"
      className="w-full h-full object-cover"
      width={160}
      height={160}
    />
  </div>
);

export default ProfileImage;
