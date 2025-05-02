"use client";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      {/* Left side (gray) */}
      <div className="w-1/2 bg-gray-200 flex flex-col justify-center pl-8 sm:pl-16 md:pl-24 relative z-10">
        <div className="absolute top-6 left-8 sm:left-16 md:left-24"></div>

        <div className="mt-16 md:mt-0">
          <h2 className="text-xl font-medium mb-2">Hi, I am</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1">
            Archita Chaudhary
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl">
            Front-end Developer
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="bg-gray-300 p-3 rounded-md hover:bg-gray-400 transition-colors"
            >
              <FiAtSign size={24} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-gray-300 p-3 rounded-md hover:bg-gray-400 transition-colors"
            >
              <BsGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
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

      {/* Right side (black) with diagonal cut */}
      <div className="w-1/2 bg-black relative">
        {/* Navigation */}
        <Navbar />

        {/* Profile image */}
        <div className="h-full flex items-center justify-center">
          <div className="relative h-4/5">
            <img
              src="/profile-image.jpg"
              alt="Profile"
              className="h-full object-contain"
            />
            <p className="absolute bottom-4 right-4 text-xs text-white opacity-70 max-w-xs text-right">
              this is not my photo but I dearly hope to get one just like this
            </p>
          </div>
        </div>
      </div>

      {/* Diagonal overlay that creates the slant effect */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-black"
        style={{
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
}

// import { BsGithub } from "react-icons/bs";
// import { FiAtSign } from "react-icons/fi";
// import { FaLinkedin } from "react-icons/fa";
// import Navbar from "@/components/Navbar";
// import "./globals.css";

// export default function Home() {
//   return (
//     <div className="h-screen w-full flex overflow-hidden">
//       {/* Left side (gray) */}
//       <div className="w-1/2 bg-gray-200 flex flex-col justify-center pl-24">
//         <div className="logo mb-24"></div>

//         <h2 className="text-xl font-medium mb-2">Hi, I am</h2>
//         <h1 className="text-6xl font-bold mb-1">Archita Chaudhary</h1>
//         <p className="text-gray-500 text-xl">Front-end Developer</p>

//         <div className="flex gap-4 mt-8">
//           <a
//             href="#"
//             className="bg-gray-300 p-3 rounded-md hover:bg-gray-400 transition-colors"
//           >
//             <FiAtSign size={24} />
//           </a>
//           <a
//             href="#"
//             className="bg-gray-300 p-3 rounded-md hover:bg-gray-400 transition-colors"
//           >
//             <BsGithub size={24} />
//           </a>
//           <a
//             href="#"
//             className="bg-gray-300 p-3 rounded-md hover:bg-gray-400 transition-colors"
//           >
//             <FaLinkedin size={24} />
//           </a>
//         </div>
//       </div>

//       {/* Right side (black) with diagonal cut */}
//       <div className="w-1/2 bg-black relative">
//         {/* Navigation */}
//         {/* <nav className="absolute top-0 right-0 p-6 z-10">
//           <ul className="flex items-center gap-8 text-white">
//             <li>
//               <a href="#" className="hover:text-gray-300">
//                 About me
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-300">
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-300">
//                 Portfolio
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
//               >
//                 CONTACT ME
//               </a>
//             </li>
//           </ul>
//         </nav> */}
//         <Navbar />

//         {/* Profile image */}
//         <div className="h-full flex items-center justify-center">
//           <div className="relative">
//             <img
//               src="/profile-image.jpg"
//               alt="Profile"
//               className="h-[80%] object-contain"
//             />
//             <p className="absolute bottom-4 right-4 text-xs text-white opacity-70 max-w-xs text-right">
//               this is not my photo but I dearly hope to get one just like this
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Diagonal overlay that creates the slant effect */}
//       <div
//         className="absolute top-0 right-0 w-1/2 h-full bg-black"
//         style={{
//           clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
//           zIndex: 0,
//         }}
//       ></div>
//     </div>
//   );
// }
