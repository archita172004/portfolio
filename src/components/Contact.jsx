"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-200 w-full font-mono py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex justify-center mb-16">
          <div className="border-6 border-black px-12 py-6">
            <h2 className="text-2xl font-extrabold tracking-widest">
              C O N T A C T
            </h2>
          </div>
        </div>

        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-gray-700 m-2">
            <p className="text-2xl">Ready to move forward with your project?</p>
            Let’s connect and make it happen
          </div>
        </div>

        <div className="m-5">
          <form className="flex flex-col space-y-4">
            <div className="border-l-4 border-black border-b-4 m-8">
              <input
                type="text"
                className="pb-2 p-4 font-bold outline-none border-none w-full"
                placeholder="ENTER YOUR NAME*"
              />
            </div>
            <div className="border-l-4 border-black border-b-4 m-8">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL*"
                className="pb-2 p-4 font-bold outline-none border-none w-full"
              />
            </div>
            <div className="border-l-4 border-black border-b-4 m-8">
              <input
                type="text"
                placeholder="CONTACT NUMBER"
                className="pb-2 p-4 font-bold outline-none border-none w-full"
              />
            </div>
            <div className="border-l-4 border-black border-b-4 m-8">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="GOT AN IDEA?"
                className="pb-2 p-4 font-bold outline-none border-none w-full resize-none"
              />
            </div>
            <div className="flex justify-center m-10">
              <button className="border-l-4 border-r-4 border-black px-10 hover:bg-gray-300 transition-colors font-bold text-2xl py-2">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
