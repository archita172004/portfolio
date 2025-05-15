import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
const HomeContent = () => {
  return (
    <div className="relative bg-[#1a1a1a] text-white py-12">
      {/* Watermark */}
      {/* <div className="absolute inset-0 opacity-10 flex justify-end items-center pointer-events-none">
        <img
          src="public/watermark_ac.png"
          alt="IT Watermark"
          className="max-w-[50%]"
        />
      </div> */}

      <div className="relative z-10 px-8">
        <h2 className="text-xl tracking-widest font-semibold">
          Welcome to my corner of the internet!
        </h2>
        <p className="mt-4 text-sm leading-relaxed">
          I’m a full-stack developer who loves bringing designs to life and
          building things that are both functional and visually appealing. I’m
          always experimenting with new technologies and finding ways to improve
          my skills, focusing on creating smooth, user-friendly experiences.
        </p>
        <Link href="https://drive.google.com/file/d/1_D78guD96anVx6Eh8vbMVDRSVwWa5fs_/view?usp=sharing">
          <button className="inline-flex items-center gap-2 mt-4 border border-white px-4 py-2 hover:bg-white hover:text-black transition duration-300">
            View resume <FiExternalLink />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
