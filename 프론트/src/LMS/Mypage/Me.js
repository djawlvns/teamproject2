import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { user } from "../Api/api";

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
`;
const Name = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
`;
const Gender = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
`;
const ID = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
`;
const Email = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const Title = styled.div`
  display: flex;
  color: white;
  background-color: gray;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  height: 100%;
  width: 100px;
`;

const MyInfoComponent = () => {
  const [loginInfo, setLoginInfo] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await user();
        setLoginInfo(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <ProfileContainer>
        <Profile>
          <ProfileBar>내 프로필</ProfileBar>
          <Name>
            <Title>이름</Title>
            {loginInfo ? loginInfo.data.name : ""}
          </Name>
          <Gender>
            <Title>성별</Title>
            {loginInfo ? loginInfo.data.gender : ""}
          </Gender>
          <ID>
            <Title>아이디</Title>
            {loginInfo ? loginInfo.data.loginId : ""}
          </ID>
          <Email>
            <Title>이메일</Title>
            {loginInfo ? loginInfo.data.email : ""}
          </Email>
        </Profile>
      </ProfileContainer>
    </>
  );
};
export default MyInfoComponent;
