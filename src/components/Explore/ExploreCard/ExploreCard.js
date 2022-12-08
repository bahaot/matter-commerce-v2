import React from "react";
import './ExploreCard.css'

const ExploreCard = ({ subTitle, title, description, imgSrc }) => {
  return (
    <div className="card-explore">
      <div className="card-text__box">
        <p className="subtitle-explore">{subTitle}</p>
        <p className="title-explore">{title}</p>
        {description ? (
          <p className="descirption-explore">{description}</p>
        ) : (
          ""
        )}
      </div>
      {imgSrc ? <img src={imgSrc} className="img-explore" /> : ""}
    </div>
  );
};

export default ExploreCard;
