
import React from "react";

const ProfileImage = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-full border-4 border-primary shadow-xl overflow-hidden ${className}`}>
    {/* User-provided headshot image */}
    <img
      src="https://i.ibb.co/yckCsX50/profile.jpg"
      alt="Samarth Mistry profile"
      className="w-full h-full object-cover"
      width={160}
      height={160}
    />
  </div>
);

export default ProfileImage;
