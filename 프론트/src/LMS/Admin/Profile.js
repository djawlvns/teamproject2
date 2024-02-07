import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfileContainer = styled.div`
  padding: 50px 200px 0px 200px;
  height: 700px;
`;
const ProfileBox = styled.div`
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
const Age = styled.div`
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

const IDType = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-left: 10px;
`;

export function Profile() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    // 유저의 세부 정보를 불러오기
    const token = sessionStorage.getItem("token");
    axios({
      method: "GET",
      url: `http://localhost:8080/api/users/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        setUserDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [userId]);

  return (
    <>
      <ProfileContainer>
        <ProfileBox>
          <ProfileBar>유저 세부 프로필</ProfileBar>
          <ID>ID: {userDetails?.loginId}</ID>
          <Name>이름: {userDetails?.name}</Name>
          <Gender>성별: {userDetails?.gender}</Gender>
          <Age>생년월일: {userDetails?.birthDate}</Age>
          <Email>이메일: {userDetails?.email}</Email>
          {/* <p>
            {userDetails?.rRoles.map((u) => (
              <p>{u.roleName}</p>
            ))}
          </p> */}
          {/* <IDType>
            <p>
              학생
              <input
                type="checkbox"
                id="학생"
                checked={userDetails.type.student}
                readOnly
              />
            </p>
            <p>
              교사
              <input
                type="checkbox"
                id="교사"
                checked={userDetails.type.teacher}
                readOnly
              />
            </p>
          </IDType> */}
        </ProfileBox>
      </ProfileContainer>
      <button>저장하기</button>
    </>
  );
}
