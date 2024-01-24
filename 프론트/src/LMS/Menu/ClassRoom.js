import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { Player } from "../Module/Player";
import { PlayerBar } from "../Module/PlayerBar";
import ProgressBar from "../Module/ProgressBar";

const Container = styled.div`
  width: 100vw;
  height: 100%;
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

const Video = styled.iframe`
  width: 100%;
  height: 100%;
`;
const ClassCheck = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const CheckBox = styled.div``;
const Check = styled.button`
  width: 200px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: white;
`;

export function ClassRoom() {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  //played,duration,onSeek 값 설정
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  const onSeek = (value) => {
    if (playerRef.current) {
      setPlayed(value);
      playerRef.current.seekTo(value);
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
          <ClassCheck>
            {/* 진행도 */}
            <ProgressBar
              played={played}
              duration={duration}
              onSeek={onSeek}
              ref={playerRef}
              playing={playing}
              setPlaying={setPlaying}
            />
            {/* 재생멈춤 버튼 */}
            <PlayerBar playing={playing} setPlaying={setPlaying} />
            <CheckBox>
              {/* 출석 체크 후 강의완료되면 수강완료 버튼으로 전환 */}
              <Check>출석 체크</Check>
            </CheckBox>
          </ClassCheck>
        </ClassContent>
      </Container>
    </>
  );
}
