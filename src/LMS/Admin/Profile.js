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
  const [userDetails, setUserDetails] = useState({
    id: "",
    name: "",
    gender: "",
    birthdate: "",
    email: "",
    type: { student: false, teacher: false }, // 실제 구조에 맞게 조정 필요
  });

  useEffect(() => {
    // 유저의 세부 정보를 불러오기
    axios
      .get(`/api/users/${userId}`)
      .then((response) => {
        const data = response.data;
        setUserDetails({
          ...userDetails,
          id: data.id,
          name: data.name,
          gender: data.gender,
          birthdate: data.birthdate,
          email: data.email,
          type: data.type, // 데이터 구조에 따라 조정
        });
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
          <ID>ID: {userDetails.id}</ID>
          <Name>이름: {userDetails.name}</Name>
          <Gender>성별: {userDetails.gender}</Gender>
          <Age>생년월일: {userDetails.birthdate}</Age>
          <Email>이메일: {userDetails.email}</Email>
          <IDType>
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
          </IDType>
        </ProfileBox>
      </ProfileContainer>
      <button>저장하기</button>
    </>
  );
}
