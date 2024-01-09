import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
`;

export function Schedule() {
  return (
    <>
      <StyledDiv>
        <h2>강의 시간표</h2>
      </StyledDiv>
    </>
  );
}
