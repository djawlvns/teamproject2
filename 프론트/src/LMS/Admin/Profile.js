import styled from "styled-components";

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
const PhoneNum = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-bottom: 1px solid gray;
`;
const IDType = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-left: 10px;
`;
const Delete = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-left: 10px;
`;

export function Profile() {
  return (
    <>
      <ProfileContainer>
        <ProfileBox>
          <ProfileBar>유저 세부 프로필</ProfileBar>
          <ID>ID</ID>
          <Name>이름</Name>
          <Gender>성별</Gender>
          <Age>생년월일</Age>
          <PhoneNum>전화번호</PhoneNum>
          <Email>이메일</Email>
          <IDType>
            <p>
              학생
              <input type="checkbox" id="학생" />
            </p>
            <p>
              교사
              <input type="checkbox" id="교사" />
            </p>
          </IDType>
          <Delete>회원삭제</Delete>
        </ProfileBox>
      </ProfileContainer>
      <button>저장하기</button>
    </>
  );
}
