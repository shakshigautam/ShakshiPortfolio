
import React from "react";
import linkedin from "../Images/image1.png";
import github from "../Images/image2.jpeg";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center py-24 px-6 bg-gray-50"
    >
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg max-w-2xl mb-12 text-gray-700">
        I’m always interested in discussing new opportunities and projects.
      </p>

      <div className="w-full max-w-2xl space-y-6">
        {/* Email */}
        <div className="flex items-center gap-3 p-4 rounded-xl shadow hover:shadow-lg transition bg-white hover:bg-blue-50">
          <FiMail className="w-6 h-6 text-blue-600" />
          <span className="text-lg text-gray-800 font-medium">shakshigautam122@gmail.com</span>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-3 p-4 rounded-xl shadow hover:shadow-lg transition bg-white hover:bg-gray-50">
          <img src={github} alt="GitHub" className="w-6 h-6" />
          <a
            href="https://github.com/shakshigautam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-800 font-medium hover:text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3 p-4 rounded-xl shadow hover:shadow-lg transition bg-white hover:bg-gray-50">
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          <a
            href="https://www.linkedin.com/in/shakshi-gautam-341a612a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-800 font-medium hover:text-blue-700 hover:underline"
          >
            LinkedIn
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 p-4 rounded-xl shadow hover:shadow-lg transition bg-white hover:bg-green-50">
          <FiPhone className="w-6 h-6 text-green-600" />
          <span className="text-lg text-gray-800 font-medium">+977-9843274890</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

