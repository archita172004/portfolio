import React from "react";
import Image from "next/image";
const Skills = () => {
  const skillsNow = [
    { src: "/icons8-html5-96.png", label: "HTML5" },
    { src: "/icons8-css-96.png", label: "CSS3" },
    { src: "/icons8-javascript-96.png", label: "JAVASCRIPT" },
    { src: "/icons8-react-96.png", label: "REACT" },

    { src: "/icons8-github-128.png", label: "GIT" },

    { src: "/icons8-next.js-96.png", label: "NEXT JS" },
  ];

  const learning = [
    { src: "/icons8-node-js-96.png", label: "NODE JS" },
    {
      src: "/icons8-mysql-96.png",
      label: "MY SQL",
    },
    {
      src: "/icons8-mongodb-96.png",
      label: "MONGODB",
    },
    {
      src: "/icons8-express-js-100.png",
      label: "EXPRESS",
    },
    {
      src: "/icons8-typescript-96.png",
      label: "TYPESCRIPT",
    },
  ];

  const others = [
    { src: "/icons8-postman-inc-96.png", label: "POSTMAN" },
    {
      src: "/icons8-notion-100.png",
      label: "NOTION",
    },
    {
      src: "/icons8-c-96.png",
      label: "C++",
    },
    {
      src: "/icons8-python-96.png",
      label: "PYTHON",
    },
    {
      src: "/icons8-codesandbox-100.png",
      label: "CODESANDBOX",
    },
  ];
  return (
    <div className="bg-gray-200 w-full py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex justify-center mb-16">
          <div className="border-6 border-black px-12 py-6">
            <h2 className="text-2xl font-extrabold tracking-widest">
              S K I L L S
            </h2>
          </div>
        </div>

        {/* using now */}
        <div className="mb-10 p-4">
          <h3 className="text-xl font-bold mb-6">USING NOW:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {skillsNow.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={skill.src}
                  alt={skill.label}
                  width={95}
                  height={95}
                />
                <span className="mt-2 text-lg tracking-wide">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 p-4">
          <h3 className="text-xl font-bold mb-6">LEARNING :</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {learning.map((learning, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={learning.src}
                  alt={learning.label}
                  width={95}
                  height={95}
                />
                <span className="mt-2 text-lg tracking-wide">
                  {learning.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 p-4">
          <h3 className="text-xl font-bold mb-6">OTHER SKILLS:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {others.map((others, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={others.src}
                  alt={others.label}
                  width={95}
                  height={95}
                />
                <span className="mt-2 text-lg tracking-wide">
                  {others.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* seperation */}
      </div>
    </div>
  );
};

export default Skills;
