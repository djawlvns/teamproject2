import ReactPlayer from "react-player";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 328px;
  height: 180px;
  border-radiuse: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 80px 0 25px;
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
export function Video(props, url) {
  //상위 컴포넌트에 playing,setPlayin true로 정의
  const { playing, setPlaying, PlayList } = props;
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [curr, setCurr] = useState(url);

  const onEnded = () => {
    setCurr(url);
    setPlaying(true);
  };

  return (
    <>
      <Container>
        <ReactPlayer
          url={curr} // 영상url삽입
          className="player" //  클래스 이름 지정하여 스탙일 적용
          playing={playing} // 재생상태, true = 재생 / false = 일시정지
          controls={false} // 유튜브 재생 컨트롤 바 노출 여부
          onEnded={onEnded} // 현재 재생중인 영상 종료시 호출
          onReady={() => setReady(treu)} // 영상이 로드되어 준비된 상태
        />
      </Container>
    </>
  );
}
