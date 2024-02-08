import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

const ScheduleContainer = styled.div``;
const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f1f3f5;
  display: flex;
  align-items: center;
  &:hover {
    color: black;
  }
  &.active {
    color: black;
  }
`;
const ScheduleTextBox = styled.div`
  font-size: 28px;
  max-height: 350px;
  overflow-y: auto;
`;
const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
  }
  &.active {
    color: black;
  }
`;
export function Schedule({ ScheduleList }) {
  return (
    <>
      <ScheduleContainer>
        <StyledNavLink to="/main/scheduleboard">
          <StyledDiv>
            <h2>시간표</h2>
          </StyledDiv>
        </StyledNavLink>
        <ScheduleTextBox>
          {Array.isArray(ScheduleList.data) && ScheduleList.data.length > 0 ? (
            ScheduleList.data.map((Schedule, index) => (
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
