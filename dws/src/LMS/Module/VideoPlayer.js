import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoURL }) => {
  return <ReactPlayer url={videoURL} controls width="100%" height="100%" />;
};

export default VideoPlayer;
