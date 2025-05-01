import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-end p-4 ">
      <div className="flex flex-row gap-4 items-center">
        <div>About</div>
        <div>Skills</div>
        <div>Portfolio</div>
        <div>Experiences</div>
        <div>
          <button>CONTACT ME</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
