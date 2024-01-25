import styled from "styled-components";
import React from "react";

const NoticeContainer = styled.div``;

const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f1f3f5;
  display: flex;
  align-items: center;
`;
const NoticeTextBox = styled.div`
  font-size: 2rem;
`;
export function Notice({ noticeList }) {
  return (
    <>
      <NoticeContainer>
        <StyledDiv>
          <h2>공지사항</h2>
        </StyledDiv>
        <NoticeTextBox>
          {Array.isArray(noticeList) && noticeList.length > 0 ? (
            noticeList.map((notice, index) => (
              <p key={index}>{`${notice.title} - ${notice.content}`}</p>
            ))
          ) : (
            <p>No notices available.</p>
          )}
        </NoticeTextBox>
      </NoticeContainer>
    </>
  );
}
