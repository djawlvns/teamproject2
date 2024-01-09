import styled from "styled-components";
import React from "react";

const ProfileContainer = styled.div`
  padding: 50px 200px 0px 200px;
  height: 700px;
`;
const Profile = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  overflow: hidden;
`;
const ProfileBar = styled.div`
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
const Class = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-left: 10px;
`;
const Name = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-left: 10px;
`;
const Gender = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-left: 10px;
`;
const ID = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-left: 10px;
`;
const Email = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-left: 10px;
`;
const PhoneNum = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const MyInfoComponent = () => (
  <ProfileContainer>
    <Profile>
      <ProfileBar>내 프로필</ProfileBar>
      <Class>Backend-C#반</Class>
      <Name>김대우</Name>
      <Gender>남</Gender>
      <ID>DW001145</ID>
      <Email>dw123@naver.com</Email>
      <PhoneNum>010-1234-5678</PhoneNum>
    </Profile>
  </ProfileContainer>
);

export default MyInfoComponent;
