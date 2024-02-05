import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { Player } from "../Module/Player";
import { LiveRoom } from "./LiveRoom.js";
import { LiveSchedule } from "../Module/LiveSchedule.js";

const Container = styled.div`
  width: 1100px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
`;

const ScheduleBox = styled.div`
  width: 1100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const FilterBar = styled.div`
  position: relative;
  width: 1100px;
  height: 50px;
  display: flex;
  border: 1px solid black;
`;

const TimeBox = styled.div`
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
const TimeBoxContent = styled.div`
  margin-left: 15%;
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
export function ClassRoom() {
  return (
    <>
      <Container>
        <FilterBar>
          <TimeBox>
            <TimeBoxContent>시간</TimeBoxContent>
          </TimeBox>
          <ClassNameBox>강의명</ClassNameBox>
          <StartClassBox>수강진행</StartClassBox>
        </FilterBar>
        <ScheduleBox>{RenderLiveSchedule()}</ScheduleBox>
      </Container>
    </>
  );
}

function RenderLiveSchedule() {
  const liveSchedules = [];
  const formatTime = (hour) => {
    return hour < 10 ? `0${hour}` : `${hour}`;
  };

  for (let i = 1, j = 8; i <= 8; i++, j++) {
    liveSchedules.push(
      <LiveSchedule
        key={`period${i}time${j}`}
        period={`${i}교시`}
        time={`(${formatTime(j)}:00 ~ ${formatTime(j)}:50)`}
      />
    );
  }

  return liveSchedules;
}
