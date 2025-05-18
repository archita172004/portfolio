"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Projects = () => {
  const projectItems = [
    {
      title: "Weather Wise",
      description:
        "A sleek weather forecasting app using the OpenWeather API, providing real-time data and forecasts.",
      link: "https://weather-wise-rho-dun.vercel.app/",
      // image: "/weather.png",
    },
    {
      title: "Facility Booking",
      description:
        "A facility seat booking system with a visual selection interface and real-time availability tracking.",
      link: "https://booking-system-flax.vercel.app/",
    },
    {
      title: "Water Watch",
      description:
        "A web platform that enables users to report water logging and potholes in their area, automatically directing the complaint to the nearest or responsible regional authority.",
      link: "https://water-watch-black.vercel.app/",
    },
    {
      title: "Miners SIH Project",
      description:
        "A digital solution developed for Smart India Hackathon to automate documentation and form submissions for miners under the Indian Coal Ministry, streamlining processes and reducing paperwork.",
      link: "1",
    },
    {
      title: "Split Wise",
      description:
        "A JavaScript-based app that helps users split bills with friends easily, track who owes what, and manage shared expenses efficiently.",
      link: "2",
    },
  ];

  const className = "gap-6 px-6";

  return (
    <div id="projects" className="bg-gray-200 w-full py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-center mb-16">
          <div className="border-6 border-black px-12 py-6">
            <h2 className="text-2xl font-extrabold tracking-widest">
              P R O J E C T S
            </h2>
          </div>
        </div>
        <HoverEffect items={projectItems} className="m-1" />
      </div>
    </div>
  );
};

export default Projects;
