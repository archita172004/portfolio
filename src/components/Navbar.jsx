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
        <Link href="/about" className="text-white hover:text-gray-300">
          About me
        </Link>
        <Link href="/skills" className="text-white hover:text-gray-300">
          Skills
        </Link>
        <Link href="/portfolio" className="text-white hover:text-gray-300">
          Portfolio
        </Link>
        <Link href="/experience" className="text-white hover:text-gray-300">
          Experience
        </Link>
        <Link
          href="/contact"
          className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition"
        >
          CONTACT ME
        </Link>
      </div>

      <div className="md:hidden flex justify-end w-full" onClick={toggleMenu}>
        {isMenuOpen ? (
          <IoMdClose size={28} className="text-white" />
        ) : (
          <RxHamburgerMenu size={24} className="text-white" />
        )}
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-5 text-xl md:hidden z-40">
          <Link href="/about" onClick={toggleMenu} className="text-white">
            About me
          </Link>
          <Link href="/skills" onClick={toggleMenu} className="text-white">
            Skills
          </Link>
          <Link href="/portfolio" onClick={toggleMenu} className="text-white">
            Portfolio
          </Link>
          <Link href="/experience" onClick={toggleMenu} className="text-white">
            Experience
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            CONTACT ME
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
