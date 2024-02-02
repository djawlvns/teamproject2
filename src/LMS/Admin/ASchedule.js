import styled from "styled-components";
import React from "react";

const Container = styled.div`
  padding: 50px 200px 0px 200px;
  height: 700px;
`;
const ScheduleBox = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  overflow: hidden;
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
const Title = styled.div``;
const Text = styled.div``;
const UploadBtn = styled.div``;

const AScheduleComponent = () => (
  <Container>
    <ScheduleBox>
      <ScheduleBar>시간표</ScheduleBar>
      <Schedule>
        <Title>시간</Title>
        <Text>과목</Text>
      </Schedule>
    </ScheduleBox>
    <UploadBtn>
      <button>업로드</button>
    </UploadBtn>
  </Container>
);

export default AScheduleComponent;
