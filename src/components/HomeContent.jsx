import React from "react";

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
        <h2 className="text-xl tracking-widest font-semibold">IT BERRIES</h2>
        <p className="mt-4 text-sm leading-relaxed">{/* Your paragraph */}</p>
        <button className="mt-4 border border-white px-4 py-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default HomeContent;
