import ReactPlayer from "react-player";
import styled from "styled-components";
import { useRef, useState } from "react";

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

export function Player(props) {
  //상위 컴포넌트에 playing,setPlayin true로 정의
  const { playing, setPlaying, PlayList } = props;
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0); //총 재생시간
  const [curr, setCurr] = useState(
    "https://youtu.be/dh4hdtZ00EU?si=qbQcbmhsOLRHdKJC"
  );

  const onEnded = () => {
    setCurr("https://youtu.be/V7TXlm7kpaE?si=Te8a2rBGNmj3Hg_4");
    setPlaying(true);
  };

  return (
    <>
      <Container>
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
          onDuration={setDuration}
          onProgress={({ played }) => setPlayed(played)}
        />
        <ProgressBox>
          <time dataTime="P1S">{formatTime(played * duration)}</time>
          <input
            type="range"
            min="0"
            max="0.999999"
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
