"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 right-0 w-full md:w-auto p-6 z-20">
      <div className="hidden md:flex items-center space-x-12 gap-4">
        <a href="#about" className="text-white hover:text-gray-300">
          About me
        </a>
        <a href="#skills" className="text-white hover:text-gray-300">
          Skills
        </a>
        <a href="#portfolio" className="text-white hover:text-gray-300">
          Portfolio
        </a>
        <a href="#projects" className="text-white hover:text-gray-300">
          Projects
        </a>
        <a
          href="#contact"
          className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition"
        >
          CONTACT ME
        </a>
      </div>

      <div className="md:hidden flex justify-end w-full">
        {!isMenuOpen && (
          <RxHamburgerMenu
            size={24}
            className="text-white"
            onClick={toggleMenu}
          />
        )}
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex flex-col 
        items-center justify-center space-y-5 text-xl md:hidden z-40"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white"
            aria-label="Close menu"
          >
            <IoMdClose size={28} />
          </button>
          <a href="#about" onClick={toggleMenu} className="text-white">
            About me
          </a>
          <a href="#skills" onClick={toggleMenu} className="text-white">
            Skills
          </a>
          <a href="#portfolio" onClick={toggleMenu} className="text-white">
            Portfolio
          </a>
          <a href="#projects" onClick={toggleMenu} className="text-white">
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            CONTACT ME
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
