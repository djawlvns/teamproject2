import styled from "styled-components";
import React, { useState } from "react";
import { manageNotice } from "../Api/api";

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
const Title = styled.div`
  input {
    width: 100%;
    height: 50px;
  }
`;
const Text = styled.div`
  textarea {
    width: 100%;
    height: 500px;
  }
`;
const UploadBtn = styled.div``;

const ANoticeComponent = ({ onAddNotice }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  console.log(onAddNotice);
  const handleSubmit = async () => {
    try {
      const response = await manageNotice(null, { title, content }, "POST");
      console.log(response);
      if (onAddNotice) {
        onAddNotice({ title, content });
      }
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error posting notice:", error);
    }
  };
  return (
    <Container>
      <NoticeBox>
        <NoticeBar>공지사항</NoticeBar>
        <Notice>
          <Title>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
            />
          </Title>
          <Text>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용"
            ></textarea>
          </Text>
        </Notice>
      </NoticeBox>
      <UploadBtn>
        <button onClick={handleSubmit}>업로드</button>
      </UploadBtn>
    </Container>
  );
};

export default ANoticeComponent;
