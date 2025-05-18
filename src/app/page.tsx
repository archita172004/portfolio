"use client";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex overflow-hidden relative">
        {/* Left side (light) */}
        <div className="w-1/2 bg-gray-200 flex flex-col justify-center pl-8 sm:pl-16 md:pl-24 relative z-10">
          {/* Logo in top left */}
          <div className="absolute top-6 left-8 sm:left-16 md:left-24">
            <div className="font-bold text-2xl">
              <span className="border-2 border-black p-1">AC</span>
            </div>
          </div>

          <div className="mt-16 md:mt-0">
            <h2 className="text-xl font-medium mb-2">Hi, I am</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1">
              Archita Chaudhary
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl">
              Full Stack Developer
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="mailto:archichaudhary2004@gmail.com"
                aria-label="Email"
                className="bg-gray-300 p-3 rounded-md hover:bg-gray-400 transition-colors"
              >
                <FiAtSign size={24} />
              </a>
              <a
                href="https://github.com/archita172004"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="bg-gray-300 p-3 rounded-md hover:bg-gray-400 transition-colors"
              >
                <BsGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/archita-chaudhary-a04373256/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-gray-300 p-3 rounded-md hover:bg-gray-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right side (black) with background image */}
        <div className="w-1/2 relative">
          {/* Background image covering the entire right side */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/Phone case.jpg" // Replace with your actual image path
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-70" // Adjust opacity as needed
              priority
            />
            {/* Optional dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>

          {/* Navigation */}
          <div className="absolute top-0 right-0 z-20 w-full">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}
