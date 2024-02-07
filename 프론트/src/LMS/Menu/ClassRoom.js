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
  const [vodData, setVodData] = useState(null);

  useEffect(() => {
    const fetchVodData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/vod");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setVodData(data);
      } catch (error) {
        console.error("Error fetching VOD data: ", error);
      }
    };

    fetchVodData();
  }, []);
  console.log("data");
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
        <ScheduleBox>{RenderLiveSchedule(vodData)}</ScheduleBox>
      </Container>
    </>
  );
}

function RenderLiveSchedule(vodData) {
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
        vodId={i}
        vodData={vodData?.data.length > 0 ? vodData.data[i - 1] : null}
      />
    );
  }

  return liveSchedules;
}
