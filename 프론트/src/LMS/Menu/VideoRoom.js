import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import VideoPlayer from "../Module/VideoPlayer";

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
  width: 80%; /* 변경 가능: 화면 가로 크기에 따라 조절하세요 */
  margin: auto; /* 가운데 정렬을 위한 마진 설정 */
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

const VideoRoom = () => {
  const { videoId } = useParams();

  //DB에 저장
  const getVideoURLById = (videoId) => {
    switch (videoId) {
      case "1":
        return "blob:https://www.youtube.com/d91e56aa-555d-480e-9042-81e792a6e3f5";
      case "2":
        return "https://www.youtube.com/your_video_url_2";
      // 추가적인 동영상에 대한 case문 추가
      default:
        return "https://www.youtube.com/default_video_url";
    }
  };

  const videoURL = getVideoURLById(videoId);

  return (
    <Container>
      <ClassContent>
        <ClassBoard>
          <ClassBoardTxt>수업 동영상</ClassBoardTxt>
          <VideoPlayer videoURL={videoURL} />
          <p>비디오 ID: {videoId}</p>
        </ClassBoard>
      </ClassContent>
    </Container>
  );
};

export default VideoRoom;
