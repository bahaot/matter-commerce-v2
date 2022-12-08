import React from "react";
import Video from "./Video/Video";
import HeadingSecondary from "../../UI/HeadingSecondary/HeadingSecondary";
import Container from "../../UI/Container/Container";
import MainBtn from "../../UI/MainBtn/MainBtn";
import "./Videos.css";

const Videos = () => {
  const sectionTitle = "Recommended Videos";
  const VidosTitleArr = [
    "Jamdani",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];
  return (
    <section className="section-videos">
      <HeadingSecondary>{sectionTitle}</HeadingSecondary>
      <Container className="videos-contaienr">
        {VidosTitleArr.map((vTitle, i) => (
          <Video title={vTitle} src={`imgs/videos/${i}.png`} />
        ))}
      </Container>
      <MainBtn>Show more</MainBtn>
    </section>
  );
};

export default Videos;
