import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchAllUsers } from "../Api/api";

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

const GoProfileBtn = styled.div`
  position: absolute;
  right: 20%;
  button {
    border: none;
    background-color: white;
  }
`;

const LevelupComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers()
      .then((data) => {
        setUsers(data.data); // 응답 데이터로 상태 설정
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <ProfileContainer>
      {users.map((user) => (
        <Profile key={user.id}>
          <ProfileBar>유저 프로필</ProfileBar>
          <UserName>
            {user.name}
            <GoProfileBtn>
              <NavLink to={`/main/Profile/${user.id}`}>
                <button>더보기→</button>
              </NavLink>
            </GoProfileBtn>
          </UserName>
        </Profile>
      ))}
    </ProfileContainer>
  );
};

export default LevelupComponent;
