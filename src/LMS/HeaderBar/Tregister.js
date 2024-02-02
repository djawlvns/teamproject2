import styled from "styled-components";
import { useState } from "react";
import { signUp, checkDuplicateId } from "../Api/api";

const Conteiner = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 500px;
  position: relative;
`;

const JoinBody = styled.div`
  width: 1200px;
  height: calc(100%-298px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Namebox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Jointitle = styled.ul`
  width: 200px;
  height: 100%;
  list-style: none;
  text-align: right;
  margin: 20px 0;
  line-height: 160%;
  .li {
    margin: 20px;
  }
`;

const Inputbox = styled.div`
  width: 200px;
  height: 100%;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  input::placeholder {
    text-indent: 1px;
    padding: 0 3px;
  }
`;

const Genderbox = styled.div`
  margin: 5px 0 0 0;
  display: flex;
  gap: 20px;
  .p {
    font-size: 10px;
    gap: 0;
  }
`;

const SubmitButton = styled.button``;

const Idcheck = styled.button``;

export function Tregister() {
  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
    birthDate: "",
    gender: "",
    email: "",
    activated: "1",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenderChange = (event) => {
    const genderValue = event.target.value;
    setFormData({
      ...formData,
      gender: genderValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    signUp(formData)
      .then((data) => {
        console.log("회원가입 성공:", data);
      })
      .catch((error) => {
        console.error("회원가입 에러:", error);
      });
  };

  const handleIdCheck = () => {
    // 아이디 중복 확인을 위한 API 호출
    // 중복 확인 API 호출하는 함수 작성 후 호출하도록 수정해야 합니다.
    checkDuplicateId(formData.loginId)
      .then((data) => {
        // 서버로부터 받은 응답을 확인하고 처리
        if (data.errorMessage) {
          // 서버에서 에러 메시지가 온 경우 처리
          console.error("아이디 중복 확인 에러:", data.errorMessage);
        } else if (data.isDuplicate) {
          // 중복된 아이디인 경우 처리
          console.log("이미 사용 중인 아이디입니다.");
        } else {
          // 중복되지 않은 경우 처리
          console.log("사용 가능한 아이디입니다.");
        }
      })
      .catch((error) => {
        // 클라이언트 측에서 발생한 에러 처리
        console.error("아이디 중복 확인 에러:", error.message);
      });
  };

  return (
    <>
      <Conteiner>
        <JoinBody>
          <Namebox>
            <Jointitle>
              <li>아이디</li>
              <li>비밀번호</li>
              <li>비밀번호 확인</li>
              <li>이름</li>
              <li>생년월일</li>
              <li>성별</li>
              <li>이메일</li>
            </Jointitle>
          </Namebox>
          <Inputbox>
            <input
              placeholder="아이디"
              name="loginId"
              value={formData.loginId}
              onChange={handleInputChange}
              style={{ paddingLeft: "5px" }}
            />
            <input
              placeholder="비밀번호"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              style={{ paddingLeft: "5px" }}
            />
            <input
              placeholder="비밀번호 확인"
              style={{ paddingLeft: "5px" }}
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <input
              placeholder="이름"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{ paddingLeft: "5px" }}
            />
            <input
              placeholder="생년월일"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              style={{ paddingLeft: "5px" }}
            />
            <Genderbox>
              <input
                type="radio"
                name="gender"
                value="MAN"
                checked={formData.gender === "MAN"}
                onChange={handleGenderChange}
                style={{ paddingLeft: "5px" }}
              />
              <p>남성</p>
              <input
                type="radio"
                name="gender"
                value="WOMAN"
                checked={formData.gender === "WOMAN"}
                onChange={handleGenderChange}
                style={{ paddingLeft: "5px" }}
              />
              <p>여성</p>
            </Genderbox>
            <input
              placeholder="이메일"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ paddingLeft: "5px" }}
            />
          </Inputbox>
          <SubmitButton onClick={handleSubmit}>가입하기</SubmitButton>
          <Idcheck onClick={handleIdCheck}>중복확인하기</Idcheck>
        </JoinBody>
      </Conteiner>
    </>
  );
}
