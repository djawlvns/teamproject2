import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;

const PlayBtn = styled.button``;

export function PlayerBar(props) {
  const { playing, setPlaying, onSeek, played } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayBtn = () => {
    if (playing == false) {
      setPlaying(true);
      console.log("이건 재생이고?");
    } else {
      setPlaying(false);
      console.log("이때가 멈춰있는건가?");
      onSeek((played) => {
        console.log("Seek된시간: ", played);
      });
    }
  };
  return (
    <>
      <Container>
        <PlayBtn onClick={handlePlayBtn}>
          <img
            // src={playing === true ? PauseIcon : PlayIcon}
            alt="재생/멈춤 버튼"
          />
        </PlayBtn>
      </Container>
    </>
  );
}
