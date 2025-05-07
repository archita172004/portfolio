"use client";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import HomeContent from "@/components/HomeContent";
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
          <div className="absolute top-0 right-0 z-20 w-full">
            <Navbar />
          </div>

          {/* Profile image */}
          <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-center">
            <div className="relative w-4/5 h-4/5 flex items-end">
              <Image
                src="/download.jpg"
                alt="Profile"
                layout="fill"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>

        {/* Diagonal overlay that creates the slant effect */}
        {/* <div
          className="absolute top-0 right-0 w-1/2 h-full bg-black"
          style={{
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
            zIndex: 5,
          }}
        ></div> */}
      </div>
      <HomeContent />
    </>
  );
}

// "use client";
// import React from "react";
// import { BsGithub } from "react-icons/bs";
// import { FiAtSign } from "react-icons/fi";
// import { FaLinkedin } from "react-icons/fa";
// import Navbar from "@/components/Navbar";
// import HomeContent from "@/components/HomeContent";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <div className="h-screen w-full flex overflow-hidden">
//         {/* Left side (gray) */}
//         <div className="w-1/2 bg-gray-200 flex flex-col justify-center pl-8 sm:pl-16 md:pl-24 relative z-10">
//           <div className="absolute top-6 left-8 sm:left-16 md:left-24"></div>

//           <div className="mt-16 md:mt-0">
//             <h2 className="text-xl font-medium mb-2">Hi, I am</h2>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1">
//               Archita Chaudhary
//             </h1>
//             <p className="text-gray-500 text-lg sm:text-xl">
//               Front-end Developer
//             </p>

//             <div className="flex gap-4 mt-8">
//               <a
//                 href="mailto:your.email@example.com"
//                 aria-label="Email"
//                 className="bg-gray-300 p-3 rounded-md hover:bg-gray-400 transition-colors"
//               >
//                 <FiAtSign size={24} />
//               </a>
//               <a
//                 href="https://github.com/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//                 className="bg-gray-300 p-3 rounded-md hover:bg-gray-400 transition-colors"
//               >
//                 <BsGithub size={24} />
//               </a>
//               <a
//                 href="https://linkedin.com/in/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="bg-gray-300 p-3 rounded-md hover:bg-gray-400 transition-colors"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right side (black) with diagonal cut */}
//         <div className="w-1/2 bg-black relative">
//           {/* Navigation */}
//           <Navbar />

//           {/* Profile image */}
//           <div className="relative h-4/5">
//             <Image
//               src="/profile.jpg"
//               alt="Profile"
//               width="200"
//               height="300"
//               className="object-contain rounded-xl"
//             />
//           </div>
//         </div>

//         {/* Diagonal overlay that creates the slant effect */}
//         <div
//           className="absolute top-0 right-0 w-1/2 h-full bg-black"
//           style={{
//             clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
//             zIndex: 0,
//           }}
//         ></div>
//       </div>
//       <HomeContent />
//     </>
//   );
// }
