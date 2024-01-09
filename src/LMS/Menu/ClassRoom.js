import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { Player } from "../Module/Player";
import { PlayerBar } from "../Module/PlayerBar";
import { ProgressBar } from "../Module/ProgressBar";

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

const PercentBox = styled.div``;
const PercentageBar = styled.div`
  width: ${(props) =>
    isNaN(props.percentage) ? "0px" : `${props.percentage}px`};
  height: 20px;
  background-color: #4caf50;
  text-align: center;
  z-index: 1;
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
  const videoRef = useRef(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const [playing, setPlaying] = useState(false);

  const updateProgress = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const progress = (videoElement.currentTime / videoElement.duration) * 100;
      setVideoProgress(progress);
    }

    requestAnimationFrame(updateProgress);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  return (
    <>
      <Container>
        <ClassContent>
          <ClassBoard>
            <ClassBoardTxt>수업 동영상</ClassBoardTxt>
            <Player playing={playing} setPlaying={setPlaying} />
            {/* <Video
              ref={videoRef}
              src="https://www.youtube.com/embed/dh4hdtZ00EU" // controls 속성 제거
              frameBorder="0"
              allowFullScreen
              controls={false}
            /> */}
          </ClassBoard>
          <ClassCheck>
            <PercentBox>
              <PercentageBar percentage={videoProgress} />
            </PercentBox>
            {/* 출석 체크 후 강의완료되면 수강완료 버튼으로 전환 */}
            <PlayerBar playing={playing} setPlaying={setPlaying} />
            <CheckBox>
              <Check>출석 체크</Check>
            </CheckBox>
          </ClassCheck>
        </ClassContent>
      </Container>
    </>
  );
}
