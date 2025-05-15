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
            been learning Web technologies for a year and this time was just
            enough for me to make sure that this is my place in the industry.
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
            <h3 className="text-xl font-bold tracking-wider mb-4 relative z-10">
              FRONTEND DEVELOPMENT
            </h3>
            <div className="absolute top-0 left-0 right-0 flex justify-center items-center">
              <MdDesignServices className="text-[85px] text-black opacity-8" />
            </div>
            <p className="text-sm text-gray-700 relative z-10">
              I create responsive, user-friendly interfaces using modern tools
              like React and Tailwind CSS. My goal is to bring designs to life
              with clean, accessible code that feels smooth and intuitive.
            </p>
          </div>

          {/* DEVELOPMENT */}
          <div className="relative text-center px-4 py-8">
            <h3 className="text-xl font-bold tracking-wider mb-4 relative z-10">
              BACKEND DEVELOPMENT
            </h3>

            <div className="absolute top-0 left-0 right-0 flex justify-center items-center">
              <IoIosConstruct className="text-[85px] text-black opacity-8" />
            </div>

            <p className="text-sm text-gray-700 relative z-10">
              I build robust server-side systems with Node.js and MongoDB. From
              API design to deployment, I ensure your backend is scalable,
              secure, and built for performance.
            </p>
          </div>

          {/* MAINTENANCE - spans full width below */}
          {/* <div className="relative text-center px-4 py-8 md:col-span-2">
            <div className="absolute inset-0 flex justify-left items-left">
              <GrVmMaintenance className="text-[85px] text-black opacity-8" />
            </div>
            <h3 className="text-xl font-bold tracking-wider mb-4 relative z-10">
              MAINTENANCE
            </h3>
            <p className="text-sm text-gray-700 relative z-10">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>

          </div> */}
          <div className="relative text-center px-4 py-8 md:col-span-2 mx-auto max-w-md">
            <h3 className="text-xl font-bold tracking-wider mb-4 relative z-10">
              MAINTENANCE
            </h3>
            <div className="absolute top-0 left-0 right-0 flex justify-center items-center">
              <GrVmMaintenance className="text-[85px] text-black opacity-8" />
            </div>
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
