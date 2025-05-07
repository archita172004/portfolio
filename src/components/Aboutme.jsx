import React from "react";
import { MdDesignServices } from "react-icons/md";
import { IoIosConstruct } from "react-icons/io";
import { GrVmMaintenance } from "react-icons/gr";

const Aboutme = () => {
  return (
    <div className="bg-gray-200 w-full py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex justify-center mb-16">
          <div className="border-6 border-black px-12 py-6">
            <h2 className="text-2xl font-extrabold tracking-widest">
              A B O U T &nbsp; M E
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-gray-700 m-2">
            My name is Archita Chaudhary, I'm a third year Computer Science
            student at Maharaja Agrasen Institute of Technology in Delhi. I have
            been learning Front-End technologies for a year and this time was
            just enough for me to make sure that this is my place in the
            industry.
          </p>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mb-14">
          <button className="border-l-2 border-r-2 border-black px-8 hover:bg-gray-300 transition-colors font-bold text-lg">
            EXPLORE
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* DESIGN */}
          <div className="relative text-center px-4 py-8">
            <div className="absolute inset-0 flex justify-center items-center">
              <MdDesignServices className="text-[100px] text-black opacity-10" />
            </div>
            <h3 className="text-xl font-bold tracking-wider mb-4 relative z-10">
              DESIGN
            </h3>
            <p className="text-sm text-gray-700 relative z-10">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          {/* DEVELOPMENT */}
          <div className="relative text-center px-4 py-8">
            <div className="absolute inset-0 flex justify-center items-center">
              <IoIosConstruct className="text-[100px] text-black opacity-10" />
            </div>
            <h3 className="text-xl font-bold tracking-wider mb-4 relative z-10">
              DEVELOPMENT
            </h3>
            <p className="text-sm text-gray-700 relative z-10">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          {/* MAINTENANCE - spans full width below */}
          <div className="relative text-center px-4 py-8 md:col-span-2">
            <div className="absolute inset-0 flex justify-center items-center">
              <GrVmMaintenance className="text-[100px] text-black opacity-10" />
            </div>
            <h3 className="text-xl font-bold tracking-wider mb-4 relative z-10">
              MAINTENANCE
            </h3>
            <p className="text-sm text-gray-700 relative z-10">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

// import React from "react";
// import Image from "next/image";
// import { MdDesignServices } from "react-icons/md";
// import { IoIosConstruct } from "react-icons/io";
// import { GrVmMaintenance } from "react-icons/gr";
// const Aboutme = () => {
//   const dividerSvg = (
//     <div className="flex items-center justify-center my-16">
//       <div className="w-16 h-px bg-gray-400"></div>
//       <div className="mx-4">
//         <svg
//           width="40"
//           height="12"
//           viewBox="0 0 40 12"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M0 6L10 0L20 6L30 0L40 6L30 12L20 6L10 12L0 6Z"
//             fill="#333333"
//           />
//         </svg>
//       </div>
//       <div className="w-16 h-px bg-gray-400"></div>
//     </div>
//   );

//   return (
//     <div className="bg-gray-200 w-full py-20">
//       <div className="container mx-auto px-4 max-w-4xl">
//         {/* about me header section */}
//         <div className="flex justify-center mb-16">
//           <div className="border-6 border-black px-12 py-6">
//             <h2 className="text-2xl font-extrabold tracking-widest ">
//               A B O U T &nbsp; M E
//             </h2>
//           </div>
//         </div>

//         <div className="text-center mb-12 max-w-2xl mx-auto">
//           <p className="text-gray-700 m-2">
//             My name is Archita Chaudhary, I'm a third year Computer Science
//             student at Maharaja agrasen institute of Technology in Delhi. I have
//             been learning Front-End technologies for a year and this time was
//             just enough for me to make sure that this is my place in the
//             industry.
//           </p>
//         </div>
//         <div className="flex justify-center mb-14">
//           <button className="border-l-2 border-r-2 border-black  px-8  hover:bg-gray-300 transition-colors font-bold text-lg ">
//             EXPLORE
//           </button>
//         </div>
//         {/* {dividerSvg} */}

//         <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
//           <div className="text-center">
//             <div className="flex justify-center mb-4">
//               {/* <Image src="/img.png" alt="design icon" width={60} height={60} /> */}
//               <MdDesignServices />
//             </div>
//             <h3 className="text-xl font-bold tracking-wider mb-4">DESIGN</h3>
//             <p className="text-sm text-gray-700">
//               I can design the site based on your needs and suggestions. I can
//               also design the site from scratch and consult you during the job.
//             </p>
//           </div>
//           <div className="text-center">
//             <div className="flex justify-center mb-4">
//               {/* <Image
//                 src="/icons/development-icon.png"
//                 alt="Development Icon"
//                 width={60}
//                 height={60}
//                 className="opacity-20"
//               /> */}
//               <IoIosConstruct />
//             </div>
//             <h3 className="text-xl font-bold tracking-wider mb-4">
//               DEVELOPMENT
//             </h3>
//             <p className="text-sm text-gray-700">
//               I can design the site based on your needs and suggestions. I can
//               also design the site from scratch and consult you during the job.
//             </p>
//           </div>
//           <div className="text-center">
//             <div className="flex justify-center mb-4">
//               {/* <Image
//                 src="/icons/maintenance-icon.png"
//                 alt="Maintenance Icon"
//                 width={60}
//                 height={60}
//                 className="opacity-20"
//               /> */}
//               <GrVmMaintenance />
//             </div>
//             <h3 className="text-xl font-bold tracking-wider mb-4">
//               MAINTENANCE
//             </h3>
//             <p className="text-sm text-gray-700">
//               I can design the site based on your needs and suggestions. I can
//               also design the site from scratch and consult you during the job.
//             </p>
//           </div>
//         </div>
//         {/* {dividerSvg} */}
//       </div>
//     </div>
//   );
// };

// export default Aboutme;
