"use client";

import { Home, Info, Play, Search } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Logo from "../public/logo.png";

// Define navigation links
export const NAV_LINKS = [
  { key: "home", label: "Home", icon: <Home size={20} />, href: "/" },
  { key: "episodes", label: "Episodes", icon: <Play size={20} />, href: "/episodes" },
  { key: "investigate", label: "Investigate", icon: <Search size={20} />, href: "/case" },
  { key: "about", label: "About", icon: <Info size={20} />, href: "/about" },
];

// Define TypeScript types for props
interface NavbarProps {
  navLinks?: typeof NAV_LINKS;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks = NAV_LINKS }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="">
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="AI Nyayavaani Logo" width={44} height={44} />
          <span className="text-4xl text-neonBlue font-bold">AI Nyayavaani</span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.key} className="flex items-center gap-2 pb-1.5 hover:font-bold">
              {link.icon}
              <Link href={link.href} className="text-base text-gray-700 hover:text-cyberRed transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:flex ml-10">
          <Button type="button" title="Start Investigation" icon="/user.svg" variant="btn_dark_green" />
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden" aria-label="Toggle Menu">
          <Image src="/menu.svg" alt="menu icon" width={34} height={32} className="cursor-pointer" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg py-4 px-4 flex gap-2 text-center z-40">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="flex items-center  text-xs font-semibold text-deepDark hover:text-cyberRed transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
