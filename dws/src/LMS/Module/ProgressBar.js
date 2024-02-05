import React from "react";
import styled from "styled-components";

const ProgressBox = styled.div`
  position: absolute;
  bottom: 5px;
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1rem;
  color: #fff;
`;

const ProgressBar = ({ played, duration, onSeek, playerRef }) => {
  return (
    <ProgressBox>
      <time dateTime="P1S">{formatTime(played * duration)}</time>
      <input
        type="range"
        min="0"
        max="0.999999"
        step="any"
        value={played}
        onChange={(e) => {
          onSeek(parseFloat(e.target.value));
          playerRef.current.seekTo(parseFloat(e.target.value));
        }}
      />
      <time dateTime="P1S">{formatTime(duration)}</time>
    </ProgressBox>
  );
};

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export default ProgressBar;
