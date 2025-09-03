import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";


function App() {
  return (
    <div className="App font-sans">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;

