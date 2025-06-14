
import { Link, NavLink } from "react-router-dom";
import { Download, Book, User, Briefcase, Mail } from "lucide-react";
import React from "react";

const navLinks = [
  { path: "/", label: "Home", icon: Book },
  { path: "/about", label: "About", icon: User },
  { path: "/portfolio", label: "Portfolio", icon: Briefcase },
  { path: "/contact", label: "Contact", icon: Mail }
];

const NavBar = () => (
  <header className="fixed top-0 left-0 z-40 w-full bg-[#111827]/80 backdrop-blur border-b border-[#232a3f]">
    <nav className="container flex items-center justify-between h-20">
      <Link to="/" className="font-display text-2xl text-primary tracking-widest flex items-center gap-2">
        <span>Samarth Mistry</span>
      </Link>
      <div className="flex gap-6 items-center">
        {navLinks.map(({ path, label, icon: Icon }) => (
          <NavLink
            to={path}
            key={path}
            className={({ isActive }) =>
              `flex items-center gap-1 font-sans text-lg transition-colors hover:text-primary px-2 py-1 rounded-lg ${
                isActive ? "text-primary font-semibold bg-[#232a3f]/60" : "text-white/90"
              }`
            }
            end
          >
            <Icon size={20} className="inline-block mr-1" />
            {label}
          </NavLink>
        ))}
        <a
          href="https://drive.google.com/file/d/1hUEBlTA1EIQMWYAE-EpklCK2F9EFWO3B/view?usp=sharing"
          className="ml-4 inline-flex items-center px-5 py-2 font-semibold rounded-xl bg-primary text-[#16202a] hover:bg-accent transition-colors animate-scale-in shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={18} className="mr-2" />
          Download Resume
        </a>
      </div>
    </nav>
  </header>
);

export default NavBar;
