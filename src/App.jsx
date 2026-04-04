import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen" style={{ background: "#0d0a1a" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
