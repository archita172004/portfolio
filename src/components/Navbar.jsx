"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white flex items-center justify-end py-4 px-6 font-mono">
      <div className=" hidden md:flex items-center space-x-8 ">
        <Link href="#about"> About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="Experiences">Experiences</Link>
        <Link
          href="#contact"
          className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition "
        >
          CONTACT ME
        </Link>
      </div>

      <div className="md:hidden z-50 " onClick={toggleMenu}>
        {isMenuOpen ? <IoMdClose size={28} /> : <RxHamburgerMenu size={24} />}
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-5 text-xl md:hidden z-40">
          <Link href="#about" onClick={toggleMenu}>
            About me
          </Link>
          <Link href="#skills" onClick={toggleMenu}>
            Skills
          </Link>
          <Link href="#portfolio" onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link href="#expeirence" onClick={toggleMenu}>
            Experience
          </Link>
          <Link
            href="#contact"
            onClick={toggleMenu}
            className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition "
          >
            CONTACT ME
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
