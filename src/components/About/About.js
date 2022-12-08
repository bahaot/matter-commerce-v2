import React from "react";
import AboutImg from "./AboutImg/AboutImg";
import AboutTextBox from "./AboutTextBox/AboutTextBox";
import Container from "../../UI/Container/Container";
import HeadingSecondary from "../../UI/HeadingSecondary/HeadingSecondary";
import "./About.css";

const About = () => {
  const heaidngTitle = "About Matter";
  return (
    <section className="section-about">
      <HeadingSecondary>{heaidngTitle}</HeadingSecondary>
      <Container className="about-container">
        <AboutImg />
        <AboutTextBox />
      </Container>
    </section>
  );
};

export default About;
