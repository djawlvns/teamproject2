import styled from "styled-components";
import { useLocation } from "react-router-dom";
import VideoPlayer from "../Module/VideoPlayer";

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
  const location = useLocation();
  const videoURL = new URLSearchParams(location.search).get("url");

  return (
    <>
      <Container>
        <ClassContent>
          <ClassBoard>
            <ClassBoardTxt></ClassBoardTxt>
            <VideoPlayer videoURL={videoURL} />
          </ClassBoard>
        </ClassContent>
      </Container>
    </>
  );
}
