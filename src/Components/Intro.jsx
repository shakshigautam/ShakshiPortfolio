
import React from "react";
import { Link } from "react-scroll";
import yourImage from "../../src/Images/Image.jpg";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-24 bg-gray-50"
    >
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl space-y-6">
        <p className="text-2xl font-light">Hello,</p>
        <h1 className="text-5xl md:text-6xl font-bold leading-snug">
          I am <span className="text-blue-600">Shakshi</span>
          <br />
          Frontend Developer
        </h1>
           <p className="text-lg text-gray-600 leading-relaxed mt-2">
      I’m a motivated IT student at Pokhara University with a passion for
           front-end development and building meaningful digital experiences.
           I have hands-on experience in <strong>HTML, CSS, React.js</strong> and
           growing knowledge in <strong>Node.js</strong>.
           <br />
           <br />
           I focus on combining <strong>creativity, technical skills, and user-friendly design</strong>
           to create impactful web solutions, and I am eager to learn new tools
          and frameworks to grow as a developer.
      </p>
        <Link
          to="contact"
          smooth
          duration={500}
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </Link>
      </div>

      <div className="flex-1 flex justify-end mt-10 md:mt-0 pr-8">
        <img
          src={yourImage}
          alt="Shakshi"
          className="w-96 h-96 rounded-full object-cover shadow-xl border-4 border-blue-100"
        />
      </div>
    </section>
  );
};

export default Intro;

