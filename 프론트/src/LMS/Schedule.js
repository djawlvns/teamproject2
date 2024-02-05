import styled from "styled-components";
import React from "react";

const ScheduleContainer = styled.div``;
const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f1f3f5;
  display: flex;
  align-items: center;
`;
const ScheduleTextBox = styled.div`
  font-size: 2rem;
`;

export function Schedule({ ScheduleList }) {
  return (
    <>
      <ScheduleContainer>
        <StyledDiv>
          <h2>시간표</h2>
        </StyledDiv>
        <ScheduleTextBox>
          {Array.isArray(ScheduleList) && ScheduleList.length > 0 ? (
            ScheduleList.map((Schedule, index) => (
              <p key={index}>{`${Schedule.time} - ${Schedule.subject}`}</p>
            ))
          ) : (
            <p></p>
          )}
        </ScheduleTextBox>
      </ScheduleContainer>
    </>
  );
}
