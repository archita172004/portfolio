import React from "react";

const Aboutme = () => {
  return (
    <div className="bg-gray-200 flex-col items-center justify-center font-mono">
      <p className="border-4 border-black p-5 w-[404px] h-[74px] m-20 text-3xl font-bold items-center">
        ABOUT ME
      </p>
      <div className="flex flex-col">
        <p>
          My name is Archita Chaudhary, I'm a third year Computer Science
          student at Maharaja agrasen institute of Technology in Delhi. I have
          been learning Front-End technologies for a year and this time was just
          enough for me to make sure that this is my place in the industry.
        </p>
        <p>
          Membership in the science club developed my design skills, which
          quickly turned into a new hobby. I am fluent in English (spoken and
          written) and intermediate Spanish. Apart from designing and
          programming websites, my passion is all kinds of motorsport - from
          rallies to the very king of motorsport - formula 1.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
