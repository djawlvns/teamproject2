import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { Player } from "../Module/Player";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const ClassContent = styled.div`
  display: flex;
  overflow: hidden;
`;
const ClassBoard = styled.div`
  position: relative;
  width: 1500px;
  height: 800px;
  display: flex;
  flex-direction: column;
`;

const ClassBoardTxt = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: center;
  font-size: 2rem;
  z-index: 10;
`;

export function LiveRoom() {
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef(null);

  //played,duration,onSeek 값 설정
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  const onSeek = (value, callback) => {
    if (playerRef.current) {
      setPlayed(value);
      playerRef.current.seekTo(value);
    }
    if (callback) {
      callback(value);
    }
  };
  return (
    <>
      <Container>
        <ClassContent>
          <ClassBoard>
            <ClassBoardTxt>수업 동영상</ClassBoardTxt>
            <Player
              ref={playerRef}
              playing={playing}
              setPlaying={setPlaying}
              onDuration={(value) => setDuration(value)}
              onProgress={({ played }) => setPlayed(played)}
            />
          </ClassBoard>
        </ClassContent>
      </Container>
    </>
  );
}
