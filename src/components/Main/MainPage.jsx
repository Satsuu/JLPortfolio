import React from "react";
import { Container } from "react-bootstrap";
import "../../index.css";
import HomeNav from "../Navigation/Navbar";
import IntroCard from "../IntroCard/Introduction";
import AboutMyself from "../AboutComponent/AboutMe";
import TechnicalSkills from "../Skills/TechStack";
import FreelanceAndProExp from "../Projects/ProjectExp";
import EmailMe from "../Contact/ContactMe";
import Footer from "../Footer/FooterPage";

const HomePage = () => {
  return (
    <div>
      <HomeNav />
      <Container>
        <section className="" id="home">
          <IntroCard />
        </section>
        <section className="" id="about">
          <AboutMyself />
        </section>
        <section id="skills">
          <TechnicalSkills />
        </section>
        <section id="projects">
          <FreelanceAndProExp />
        </section>
        <section className="pb-5" id="contact">
          <EmailMe />
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
