import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { Home } from "./Home";

const NoticeContainer = styled.div``;

const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f1f3f5;
  display: flex;
  align-items: center;
`;
const NoticeTextBox = styled.div`
  font-size: 22px;
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
export function Notice({ noticeList }) {
  return (
    <>
      <NoticeContainer>
        <StyledNavLink to="/main/Noticeboard">
          <StyledDiv>
            <h2>공지사항</h2>
          </StyledDiv>
        </StyledNavLink>
        <NoticeTextBox>
          {Array.isArray(noticeList.data) && noticeList.data.length > 0 ? (
            noticeList.data.map((notice, index) => (
              <p key={index}>{`${notice.title} - ${notice.content}`}</p>
            ))
          ) : (
            <p></p>
          )}
        </NoticeTextBox>
      </NoticeContainer>
    </>
  );
}
