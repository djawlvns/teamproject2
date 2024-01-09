import styled from "styled-components";
import React, { useState } from "react";
import MyInfoComponent from "./Me";
import ClassCheckComponent from "./ClassCheck";
import BookmarkComponent from "./Bookmark";
import GradeComponent from "./Grade";
import HomeworkComponent from "./Homework";

const Container = styled.div`
  display: flex;
  height: 1000px;
  border-top: 1px solid grey;
`;
const MypageMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  gap: 15%;
  border-right: 1px solid grey;
`;
const MenuItem = styled.div`
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #eee;
  }
`;
const MypageView = styled.div`
  flex: 1;
`;

export function Mypage() {
  const [selectedMenu, setSelectedMenu] = useState("MyInfo");

  const renderSelectedComponent = () => {
    switch (selectedMenu) {
      case "MyInfo":
        return <MyInfoComponent />;
      case "ClassCheck":
        return <ClassCheckComponent />;
      case "Bookmark":
        return <BookmarkComponent />;
      case "Grade":
        return <GradeComponent />;
      case "Homework":
        return <HomeworkComponent />;
      default:
        return null;
    }
  };
  return (
    <>
      <Container>
        <MypageMenu>
          <MenuItem onClick={() => setSelectedMenu("MyInfo")}>내정보</MenuItem>
          <MenuItem onClick={() => setSelectedMenu("ClassCheck")}>
            출결관리
          </MenuItem>
          <MenuItem onClick={() => setSelectedMenu("Bookmark")}>
            즐겨찾기
          </MenuItem>
          <MenuItem onClick={() => setSelectedMenu("Grade")}>성적관리</MenuItem>
          <MenuItem onClick={() => setSelectedMenu("Homework")}>
            숙제관리
          </MenuItem>
        </MypageMenu>
        <MypageView>{renderSelectedComponent()}</MypageView>
      </Container>
    </>
  );
}
