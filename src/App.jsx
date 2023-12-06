import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Landing/LandingPage";
import HomePage from "./components/Main/MainPage";
import IntroCard from "./components/IntroCard/Introduction";
import AboutMyself from "./components/AboutComponent/AboutMe";
import TechnicalSkills from "./components/Skills/TechStack";
import FreelanceAndProExp from "./components/Projects/ProjectExp";

function App() {
  return (
    <Router>
      <main
        className="App"
        style={{
          backgroundColor: "#1a1f2b",
          fontFamily: "Colon Mono, monospace",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Introduction" element={<IntroCard />} />
          <Route path="/AboutMe" element={<AboutMyself />} />
          <Route path="/TechStack" element={<TechnicalSkills />} />
          <Route path="/Projects" element={<FreelanceAndProExp />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
