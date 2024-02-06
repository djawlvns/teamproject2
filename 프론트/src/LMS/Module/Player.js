import { useRef, useState, useEffect } from "react";
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

export function Player({ playing, setPlaying, vodId }) {
  console.log("vod id", vodId);
  //상위 컴포넌트에 playing,setPlayin true로 정의
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [played, setPlayed] = useState(0);
  const [liveCheck, setliveCheck] = useState(true);
  const [duration, setDuration] = useState(0); //총 재생시간
  const [curr, setCurr] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/vod");
        if (!response.ok) throw new Error("Error");
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          setCurr(data.data[0].url);
        }
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
    };

    fetchVideos();
  }, []);

  const onEnded = () => {
    setCurr("");
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
  console.log(curr);
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
