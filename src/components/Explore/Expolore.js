import React from "react";
import ExploreCard from "./ExploreCard/ExploreCard";
import HeadingSecondary from "../../UI/HeadingSecondary/HeadingSecondary";
import Container from "../../UI/Container/Container";
import MainBtn from "../../UI/MainBtn/MainBtn";
import "./Explore.css";

const Expolore = () => {
  const sectionTitle = "Explore";
  const ExploresArr = [
    {
      subTitle: "FIELDTESTED ·  JANUARY 19, 2017",
      title: "Connected Clothing: Raye Padit",
      description:
        "As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. ",
      imgSrc: "./imgs/explores/1.png",
    },
    {
      subTitle: "FIELDTESTED ·  JANUARY 19, 2017",
      title: "Kérastase: A Collaboration",
      description: "",
      imgSrc: "./imgs/explores/2.png",
    },
    {
      subTitle: "FIELDTESTED ·  JANUARY 19, 2017",
      title: "Jaclynn Seah",
      description:
        "Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.",
      imgSrc: "",
    },
    {
      subTitle: "FIELDTESTED ·  JANUARY 19, 2017",
      title: "Remarkable Resilience: Grace Kim",
      description:
        "A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.",
      imgSrc: "",
    },
    {
      subTitle: "FIELDTESTED ·  JANUARY 19, 2017",
      title: "How To Wear The Lounge Lunghi",
      description: "Connected Clothing: Raye Padit",
      imgSrc: "./imgs/explores/3.png",
    },
  ];
  return (
    <section className="section-explore">
      <HeadingSecondary>{sectionTitle}</HeadingSecondary>
      <Container className="container-explore">
        {ExploresArr.map((item) => (
          <ExploreCard {...item} />
        ))}
      </Container>

      <MainBtn className="btn-explore">See the journal</MainBtn>
    </section>
  );
};

export default Expolore;
