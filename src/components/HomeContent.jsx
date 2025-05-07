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
        <h2 className="text-xl tracking-widest font-semibold">AC DEVS</h2>
        <p className="mt-4 text-sm leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          ad illum laudantium delectus corporis vero libero deserunt eaque velit
          hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quaerat quos blanditiis optio, maiores tempora amet ad ipsam debitis
          aut doloremque. Aliquid ex ipsa hic placeat dolore distinctio iure
          exercitationem qui at, est, temporibus minus corrupti dignissimos,
          ipsum nostrum corporis.
        </p>
        <button className="mt-4 border border-white px-4 py-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default HomeContent;
