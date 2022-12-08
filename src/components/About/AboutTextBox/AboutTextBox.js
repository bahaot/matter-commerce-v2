import React from "react";
import "./AboutTextBox.css"

const AboutTextBox = () => {
  return (
    <div className="about-text-box">
      <p className="about-description">
        Our mission is threefold - to foster designer-artisan collaborations,
        inspire consumers to value provenance and process, and pioneer industry
        change and sustainability for rural textile communities.{" "}
      </p>

      <div className="about-infos">
        <p className="about-infos-title">Artisan Employment Days Created</p>
        <ul className="about-infos-lists">
          <li>123456</li>
        </ul>
      </div>
      <div className="about-infos">
        <p className="about-infos-title">Countries Involved To Date</p>
        <ul className="about-infos-lists">
          <li>india</li>
          <li>China</li>
          <li>Sri Lanka</li>
        </ul>
      </div>
      <div className="about-infos">
        <p className="about-infos-title">#MatterTribe </p>
        <ul className="about-infos-lists">
          <li>12 designers</li>
          <li>12 Factories</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutTextBox;
