import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import "./Video.css"

const Video = (props) => {
  return (
    <div className="card-video">
      <img src={props.src} />
      <PlayCircleIcon className="icon-video" />
      <p className="card-video__description">{props.title}</p>
    </div>
  );
};

export default Video;
