import styled from "styled-components";
import React, { useState } from "react";
import { manageSchedule } from "../Api/api";

const Container = styled.div`
  padding: 50px 200px 0px 200px;
  height: 502px;
`;
const ScheduleBox = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
`;
const ScheduleBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;
const Schedule = styled.div`
  display: flex;
`;
const Time = styled.div`
  width: 50%;
  input {
    width: 100%;
    height: 50px;
  }
`;
const Subject = styled.div`
  width: 50%;
  border-left: 1px solid gray;
  input {
    width: 100%;
    height: 50px;
  }
`;
const UploadBtn = styled.div`
  position: absolute;
  right: 35%;
  margin-top: 20px;
  button {
    width: 200px;
    height: 50px;
  }
`;
const fixedTimes = [
  "08:00-08:50",
  "09:00-09:50",
  "10:00-10:50",
  "11:00-11:50",
  "12:00-12:50",
  "14:00-14:50",
  "15:00-15:50",
  "16:00-16:50",
];
const AScheduleComponent = ({ onAddSchedule }) => {
  const [schedules, setSchedules] = useState(
    Array(8).fill({ time: "", subject: "" })
  );

  const handleScheduleChange = (index, field, value) => {
    const newSchedules = schedules.map((schedule, i) => {
      if (i === index) {
        return { ...schedule, [field]: value };
      }
      return schedule;
    });
    setSchedules(newSchedules);
  };

  const handleSubmit = async () => {
    console.log("Submit Schedules", schedules);
    try {
      //await manageSchedule(null, schedules, "POST");
      if (onAddSchedule) {
        onAddSchedule(schedules);
      }
      setSchedules(fixedTimes.map((time) => ({ time, subject: "" })));
    } catch (error) {
      console.error("Error posting schedule:", error);
    }
  };

  return (
    <Container>
      <ScheduleBox>
        <ScheduleBar>시간표</ScheduleBar>
        {schedules.map((schedule, index) => (
          <Schedule key={index}>
            <Time>
              <input type="text" value={schedule.time} readOnly />
            </Time>
            <Subject>
              <input
                type="text"
                value={schedule.subject}
                onChange={(e) =>
                  handleScheduleChange(index, "subject", e.target.value)
                }
                placeholder="과목"
              />
            </Subject>
          </Schedule>
        ))}
      </ScheduleBox>
      <UploadBtn>
        <button onClick={handleSubmit}>업로드</button>
      </UploadBtn>
    </Container>
  );
};

export default AScheduleComponent;
