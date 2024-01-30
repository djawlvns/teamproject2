import styled from "styled-components";
import React from "react";

const Container = styled.div`
  padding: 50px 200px 0px 200px;
  height: 700px;
`;
const NoticeBox = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  overflow: hidden;
`;
const NoticeBar = styled.div`
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
const Notice = styled.div``;
const Title = styled.div``;
const Text = styled.div``;
const UploadBtn = styled.div``;

const ANoticeComponent = () => (
  <Container>
    <NoticeBox>
      <NoticeBar>공지사항</NoticeBar>
      <Notice>
        <Title>제목</Title>
        <Text>내용</Text>
      </Notice>
    </NoticeBox>
    <UploadBtn>
      <button>업로드</button>
    </UploadBtn>
  </Container>
);

export default ANoticeComponent;
