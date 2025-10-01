
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import images
import Design1 from "../Images/Design1.png";
import Design2 from "../Images/Design2.png";
import Design3 from "../Images/Design3.png";

const projects = [
  {
    title: "SMS",
    description:
      "A web app for SarbatraSMS that helps users send SMS messages through the SMS portal.",
    technologies: ["React", "JavaScript", "JSX"],
    github: "https://github.com/shakshigautam/SMS",
    live: "https://sms-livid-sigma.vercel.app/",
  },
  {
    title: "Weather Website",
    description:
      "A simple and responsive weather app that shows real-time weather details for any city with a clean, modern interface.",
    technologies: ["React", "JavaScript", "JSX"],
    github: "https://github.com/shakshigautam/Weather-website",
    live: "https://weather-website-smoky-nu.vercel.app/",
  },
  {
    title: "Lekha Dekha",
    description:
      "An accounting web application built to manage financial records efficiently, with a responsive interface.",
    technologies: ["React", "JavaScript", "JSX"],
    github: "https://github.com/shakshigautam/lekha-dekha-landing-page",
    live: "https://lekha-dekha-landing-page.vercel.app/",
  },
  
];

const designs = [
  { title: "Coffee Design", img: Design1 },
  { title: "Cookies Design", img: Design2 },
  { title: "Fashion Inspo", img: Design3 },
];

const Works = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="works" className="flex flex-col items-center text-center py-24 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
      
      {/* React Projects Section */}
      <div className="w-full max-w-6xl mb-20">
        <h2 className="text-3xl font-semibold text-left mb-8">React Projects</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between hover:scale-105"
            >
              <h2 className="text-2xl font-bold mb-3 text-left">{project.title}</h2>
              <p className="text-gray-700 mb-4 text-left">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 text-left">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-auto text-left">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 border-2 border-gray-800 text-gray-800 rounded-full text-sm hover:bg-gray-800 hover:text-white transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 border-2 border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Designs Section */}
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-left mb-8">Designs</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {designs.map((design, index) => (
            <div
              key={index}
              onClick={() => openModal(design.img)}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={design.img}
                alt={design.title}
                className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-blue-100 mb-4"
              />
              <h3 className="text-lg font-bold">{design.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-3xl max-h-[80vh] rounded-lg shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow hover:bg-gray-200"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;


