
import React from "react";

const skills = [
  {
    title: "Website Design & Development",
    desc: "I design and build modern, responsive, and user-friendly websites. Skilled in HTML, CSS, JavaScript, and React.js, focusing on clean and efficient code.",
  },
  {
    title: "Design Tools",
    desc: "I use Canva and Figma to design intuitive, visually appealing layouts, mockups, and prototypes that balance creativity and usability.",
  },
  {
    title: "Productivity Tools",
    desc: "Proficient in MS Office, Excel, Word, and PowerPoint. Efficient in documentation, data management, and project communication.",
  },
  {
    title: "Other Skills",
    desc: "Strong in team collaboration, problem-solving, adaptability, and time management. I bring technical expertise and professional soft skills.",
  },
];

const Skills = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center text-center py-24 px-6 bg-gray-100"
    >
      <h1 className="text-4xl font-bold mb-4">Skills</h1>
      <span className="text-lg max-w-2xl mb-12 text-gray-700">
        I am a passionate web developer who focuses on creating great digital experiences.
      </span>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-xl p-6 text-left hover:shadow-lg hover:border-blue-600 transition h-full"
          >
            <h2 className="text-xl font-semibold mb-2">{skill.title}</h2>
            <p className="text-gray-700">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

