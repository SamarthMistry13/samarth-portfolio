
import { Link, NavLink } from "react-router-dom";
import { Download, Book, User, Briefcase, Mail } from "lucide-react";
import React from "react";

const navLinks = [
  { path: "/", label: "Home", icon: Book },
  { path: "/about", label: "About", icon: User },
  { path: "/portfolio", label: "Portfolio", icon: Briefcase },
  { path: "/contact", label: "Contact", icon: Mail }
];

// Make NavBar responsive for mobile: stack items, smaller logo/text, scrollable links
const NavBar = () => (
  <header className="fixed top-0 left-0 z-40 w-full bg-[#111827]/80 backdrop-blur border-b border-[#232a3f]">
    <nav className="container flex items-center justify-between h-16 sm:h-20 px-2 sm:px-0">
      <Link to="/" className="font-display text-xl sm:text-2xl text-primary tracking-widest flex items-center gap-2 py-2">
        <span>Samarth Mistry</span>
      </Link>
      <div className="flex gap-2 sm:gap-6 items-center overflow-x-auto">
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
        <a
          href="https://drive.google.com/file/d/13LUvlfcsxVpfSRIg0tSnVEU4AToX71x5/view?usp=sharing"
          className="ml-2 sm:ml-4 inline-flex items-center px-3 py-2 sm:px-5 font-semibold rounded-xl bg-primary text-[#16202a] hover:bg-accent transition-colors animate-scale-in shadow-lg text-sm sm:text-base"
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
