import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const Container = styled.div`
  position: relative;
  width: 1500px;
  height: 800px;
  z-index: 2;

  .player {
    position: absolute;
    top: 0%;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
`;

const PlayerCoverbox = styled.div`
  width: 1500px;
  height: 800px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
`;

export function Player({ playing, setPlaying }) {
  //상위 컴포넌트에 playing,setPlayin true로 정의
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [played, setPlayed] = useState(0);
  const [liveCheck, setliveCheck] = useState(false);
  const [duration, setDuration] = useState(0); //총 재생시간
  const [curr, setCurr] = useState(
    "https://youtu.be/dh4hdtZ00EU?si=qbQcbmhsOLRHdKJC"
  );

  const onEnded = () => {
    setCurr("https://youtu.be/V7TXlm7kpaE?si=Te8a2rBGNmj3Hg_4");
    setPlaying(true);
  };

  const onSeek = (value) => {
    if (playerRef.current) {
      setPlayed(value);
      playerRef.current.seekTo(value);
    }
    if (!playing) {
      onSeek(value, played);
      console.log("이거 호출 되니?");
    }
  };

  return (
    <>
      <Container>
        <PlayerCoverbox />
        <ReactPlayer
          url={curr} // 영상url삽입
          ref={playerRef}
          className="player" //  클래스 이름 지정하여 스탙일 적용
          playing={playing} // 재생상태, true = 재생 / false = 일시정지
          controls={false} // 유튜브 재생 컨트롤 바 노출 여부
          width="1500px"
          height="800px"
          onEnded={onEnded} // 현재 재생중인 영상 종료시 호출
          onReady={() => setReady(true)} // 영상이 로드되어 준비된 상태
          onDuration={(value) => setDuration(value)}
          onProgress={({ played }) => setPlayed(played)}
        />
        {liveCheck ? null : (
          <ProgressBar played={played} duration={duration} onSeek={onSeek} />
        )}
      </Container>
    </>
  );
}
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
