import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: darkgrey;
`;

const TimeBox = styled.div`
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  font-size: 1rem;
`;
const Period = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
`;
const Time = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-left: -6%;
`;

const ClassNameBox = styled.div`
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
const StartClassBox = styled.div`
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
export function LiveSchedule(props) {
  return (
    <>
      <Container>
        <TimeBox>
          <Period>{props.period}</Period>
          <Time>{props.time}</Time>
        </TimeBox>
        {/* 여기에 DB에서 불러온 강의이름이 들어가야함 */}
        <ClassNameBox>강의명</ClassNameBox>
        <StartClassBox>
          <NavLink to="/main/classroom/live">강의 듣기</NavLink>
        </StartClassBox>
      </Container>
    </>
  );
}
