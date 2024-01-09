import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f1f3f5;
  display: flex;
  align-items: center;
`;

export function Notice() {
  return (
    <>
      <StyledDiv>
        <h2>공지사항</h2>
      </StyledDiv>
    </>
  );
}
