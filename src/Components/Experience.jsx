
import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center px-8 md:px-16 py-24 bg-gray-100"
    >
      <h1 className="text-4xl font-bold mb-12 text-center">
        Professional Experience
      </h1>

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 mb-6 hover:shadow-xl hover:scale-105 transition duration-300">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            React Developer - Internship
          </h2>
          <span className="text-gray-500 text-sm">April 2025 - June 2025</span>
        </div>
        <h3 className="text-lg font-medium text-blue-600 mb-4">
          Sarbatra Inc
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Learned React.js by working on real-world projects and cloning websites.</li>
          <li>Acquired GitHub skills for version control and collaboration.</li>
          <li>Designed a hotel website in Figma and developed it using React.js.</li>
          <li>Worked on front-end development and UI/UX design projects.</li>
          <li>Gained confidence through field activities like photoshoots and video shoots.</li>
          <li>Enhanced teamwork and problem-solving skills through on-site tasks.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
