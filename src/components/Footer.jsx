"use client";
import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#161616] text-white py-10 text-center">
      {/* Back to Top */}
      <div className="mb-6">
        <button
          onClick={scrollToTop}
          className="text-sm uppercase tracking-widest mb-2 hover:opacity-80 transition"
        >
          <span className="inline-block animate-bounce">&#9650;</span>
          <br />
          Back to Top
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-6 text-xl">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:example@example.com"
          className="hover:opacity-80 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-400">
        <strong className="text-white">@2025 Archita Chaudhary</strong> All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
