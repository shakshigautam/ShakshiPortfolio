
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["intro", "skills", "works", "experience", "contact"];

  return (
    <nav className="h-20 flex justify-between items-center px-8 md:px-16 sticky top-0 z-50 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">Shakshi</div>

      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-8">
        {sections.map((section, idx) => (
          <Link
            key={idx}
            to={section}
            smooth
            duration={500}
            className="cursor-pointer text-gray-700 font-medium hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition"
          >
            {section === "intro"
              ? "Home"
              : section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 right-4 w-48 bg-white shadow-lg rounded-md flex flex-col items-start p-4 space-y-2 md:hidden">
          {sections.map((section, idx) => (
            <Link
              key={idx}
              to={section}
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="w-full cursor-pointer text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-2 rounded transition"
            >
              {section === "intro"
                ? "Home"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
