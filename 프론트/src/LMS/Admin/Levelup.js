import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
const UserName = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-left: 10px;
`;
const GoProfileBtn = styled.div``;
const LevelupComponent = () => (
  <ProfileContainer>
    <Profile>
      <ProfileBar>유저 프로필</ProfileBar>
      <UserName>
        김대우
        <GoProfileBtn>
          <NavLink to="/main/Profile">
            <button>더보기→</button>
          </NavLink>
        </GoProfileBtn>
      </UserName>
    </Profile>
  </ProfileContainer>
);

export default LevelupComponent;
