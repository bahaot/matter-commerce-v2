import React, { useState } from "react";
import SliderButtons from "./SliderButtons/SliderButtons";
import RelativeDiv from "../../UI/RelativeDiv/RelativeDiv";
import styles from "./Slider.module.css";
import SliderTextBox from "./SliderTextBox/SliderTextBox";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const imgs = [
    {
      srcImg: "./imgs/slider/1.png",
      isNeedBoxForTitle: false,
    },
    {
      srcImg: "./imgs/slider/2.png",
      isNeedBoxForTitle: true,
    },
    {
      srcImg: "./imgs/slider/3.png",
      isNeedBoxForTitle: false,
    },
  ];
  const maxSize = imgs.length;

  const handleNextslide = (e, btn) => {
    if (!btn) return;

    if (+btn.dataset.index >= maxSize - 1) {
      return setIndex(0);
    }

    setIndex((prevState) => prevState + 1);
  };

  const hanldePreviousSlide = (e, btn) => {
    if (!btn) return;

    if (+btn.dataset.index <= 0) {
      return setIndex(maxSize - 1);
    }

    setIndex((prevState) => prevState - 1);
  };

  return (
    <RelativeDiv className={styles["container-slider"]}>
      <img className={styles["img-slider"]} src={`${imgs[index].srcImg}`} />
      <SliderButtons
        imgIndex={index}
        onNextSlide={handleNextslide}
        onPrevSlide={hanldePreviousSlide}
      />

      <SliderTextBox isNeedBoxForText={imgs[index].isNeedBoxForTitle} />
    </RelativeDiv>
  );
};

export default Slider;
