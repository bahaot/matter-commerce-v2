import React from "react";
import Container from "../../UI/Container/Container";
import HeadingSecondary from "../../UI/HeadingSecondary/HeadingSecondary";
import styles from "./AsSeenOn.module.css"

const AsSeenOn = () => {
  const sectionTitle = "As Seen On";
  return (
    <section className={styles["seciton-featured__in"]}>
      <HeadingSecondary>{sectionTitle}</HeadingSecondary>
      <Container className={styles["asSeenOn-container"]}>
        <img src="./imgs/logos/asSeenOn.png" />
      </Container>
    </section>
  );
};

export default AsSeenOn;
