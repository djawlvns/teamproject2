import ReactPlayer from "react-player";
import styled from "styled-components";
import { useRef, useState } from "react";

const Container = styled.div``;

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

export function ProgressBar(props) {
  const { playing, setPlaying, playList } = props;
  const [curr, setCurr] = useState(
    "https://youtu.be/dh4hdtZ00EU?si=qbQcbmhsOLRHdKJC"
  );
  const playerRef = useRef(null);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0); //총 재생시간
  const [ready, setReady] = useState(false);

  const onEnded = () => {
    setCurr("https://youtu.be/V7TXlm7kpaE?si=Te8a2rBGNmj3Hg_4");
    setPlaying(true);
  };

  return (
    <>
      <Container>
        {/* <ReactPlayer
          url={curr}
          ref={playerRef} //실제 영상 재생 위치 조절
          className="player"
          playing={playing}
          controls={true}
          width="100%"
          height="100%"
          onEnded={onEnded}
          onProgress={({ played }) => setPlayed(played)} //현재 재생시간
        /> */}
        <ProgressBox>
          <time dataTime="P1S">{formatTime(played * duration)}</time>
          <input
            type="range"
            min="0"
            man="0.999999"
            step="any"
            value={played}
            disabled={!ready}
            styled={{ "--progress": `${played * 100}%` }}
            onChange={(e) => {
              setPlayed(parseFloat(e.target.value)); //재생 포인트 위치 실시간변경
              playerRef.current.seekTo(parseFloat(e.target.value)); //실제 영상 재생 위치 실시간 변경
            }}
          />
          <time dateTime="P1S">{formatTime(duration)}</time>
        </ProgressBox>
      </Container>
    </>
  );
}
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
