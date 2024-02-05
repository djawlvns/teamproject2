import styled from "styled-components";
import React, { useState } from "react";
import LevelupComponent from "./Levelup";
import AScheduleComponent from "./ASchedule";
import ANoticeComponent from "./ANotice";

const Container = styled.div`
  display: flex;
  height: 1000px;
  border-top: 1px solid grey;
`;
const AdminpageMenu = styled.div`
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
const AdminpageView = styled.div`
  flex: 1;
`;

export function Adminpage() {
  const [selectedMenu, setSelectedMenu] = useState("Levelup");

  const renderSelectedComponent = () => {
    switch (selectedMenu) {
      case "Levelup":
        return <LevelupComponent />;
      case "ANotice":
        return <ANoticeComponent />;
      case "ASchedule":
        return <AScheduleComponent />;
      default:
        return null;
    }
  };
  return (
    <>
      <Container>
        <AdminpageMenu>
          <MenuItem onClick={() => setSelectedMenu("Levelup")}>
            등업관리
          </MenuItem>
          <MenuItem onClick={() => setSelectedMenu("ANotice")}>
            공지사항
          </MenuItem>
          <MenuItem onClick={() => setSelectedMenu("ASchedule")}>
            시간표
          </MenuItem>
        </AdminpageMenu>
        <AdminpageView>{renderSelectedComponent()}</AdminpageView>
      </Container>
    </>
  );
}
