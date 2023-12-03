import React from "react";
import { Container } from "react-bootstrap";
import HomeNav from "../navigation/navbar";
import "../../index.css";
import IntroCard from "../IntroCard/Introduction";
import AboutMyself from "../AboutComponent/AboutMe";
import TechnicalSkills from "../Skills/TechStack";

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
      </Container>
    </div>
  );
};

export default HomePage;
