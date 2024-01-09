import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;

const PlayBtn = styled.button``;

export function PlayerBar(props) {
  const { playing, setPlaying } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayBtn = () => {
    if (playing == false) {
      setPlaying(true);
    } else {
      setPlaying(false);
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
