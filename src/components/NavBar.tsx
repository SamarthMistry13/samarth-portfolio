
import { Link, NavLink } from "react-router-dom";
import { Download, Book, User, Briefcase, Mail } from "lucide-react";
import React from "react";

const navLinks = [
  { path: "/", label: "Home", icon: Book },
  { path: "/about", label: "About", icon: User },
  { path: "/portfolio", label: "Portfolio", icon: Briefcase },
  { path: "/contact", label: "Contact", icon: Mail }
];

const RESUME_LINK = "https://drive.google.com/file/d/13LUvlfcsxVpfSRIg0tSnVEU4AToX71x5/view?usp=sharing";

// Make NavBar responsive for mobile: center name/logo, menu right, left-align on md+.
const NavBar = () => (
  <header className="fixed top-0 left-0 z-40 w-full bg-[#111827]/80 backdrop-blur border-b border-[#232a3f] hidden md:block">
    {/* NavBar is hidden on mobile (default), visible on md+ */}
    <nav className="container flex items-center justify-between h-16 sm:h-20 px-2 sm:px-0 relative flex-col md:flex-row">
      {/* Center logo on mobile; left on md+ */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full flex items-center md:static md:translate-x-0 md:h-auto md:flex-none">
        <Link to="/" className="font-display text-xl sm:text-2xl text-primary tracking-widest flex items-center gap-2 py-2 md:ml-8">
          <span>Samarth Mistry</span>
        </Link>
      </div>
      {/* Navlinks stay right; add pl space on md+ for logo */}
      <div className="flex gap-2 sm:gap-6 items-center overflow-x-auto md:overflow-x-visible ml-auto md:ml-0 md:pl-[180px]">
        {navLinks.map(({ path, label, icon: Icon }) => (
          <NavLink
            to={path}
            key={path}
            className={({ isActive }) =>
              `flex items-center gap-1 font-sans text-base sm:text-lg transition-colors hover:text-primary px-2 py-1 rounded-lg ${
                isActive ? "text-primary font-semibold bg-[#232a3f]/60" : "text-white/90"
              }`
            }
            end
          >
            <Icon size={18} className="inline-block mr-1" />
            {label}
          </NavLink>
        ))}
        {/* Show Resume button only on md+ in nav links */}
        <a
          href={RESUME_LINK}
          className="hidden md:inline-flex mr-2 lg:mr-6 items-center px-3 py-2 sm:px-5 font-semibold rounded-xl bg-primary text-[#16202a] hover:bg-accent transition-colors animate-scale-in shadow-lg text-sm sm:text-base whitespace-nowrap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={15} className="mr-2" />
          Resume
        </a>
      </div>
    </nav>
  </header>
);

export default NavBar;
