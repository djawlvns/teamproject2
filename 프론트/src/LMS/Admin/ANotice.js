import styled from "styled-components";
import React, { useState } from "react";
import { manageNotice } from "../Api/api";
import { apiGetMyInfo } from "../Api/api";

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
  height: 500px;
  textarea {
    width: 100%;
    height: 500px;
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

const ANoticeComponent = ({ onAddNotice }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const user = await apiGetMyInfo();

      console.log("USER ROLES:", user.data.roleDtoSet);

      const isAdmin = user.data.roleDtoSet.some(
        (role) => role.roleName === "ROLE_ADMIN"
      );
      if (isAdmin) {
        const noticeData = {
          author: user.data.loginId,
          title: title,
          content: content,
        };
        console.log(noticeData);
        const response = await fetch("http://localhost:8080/api/notice", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticeData),
        });
        if (onAddNotice) {
          onAddNotice({ title, content });
        }
        setTitle("");
        setContent("");
      }
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
