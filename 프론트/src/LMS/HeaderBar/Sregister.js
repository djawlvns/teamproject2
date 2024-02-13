import styled from "styled-components";
import { useState } from "react";
import { signUp, checkDuplicateId } from "../Api/api";
import { useNavigate } from "react-router-dom";

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
  margin-top: 200px;
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

const SubmitButton = styled.button`
  position: absolute;
  right: 45%;
`;

const Idcheck = styled.button`
  position: absolute;
  top: 4.5%;
  right: 35%;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export function Sregister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
    email: "",
    name: "",
  });
  const [feedback, setFeedback] = useState({ message: "", type: "" });
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
      setFeedback({ message: "비밀번호가 일치하지 않습니다.", type: "error" });
      return;
    }

    signUp(formData)
      .then((data) => {
        setFeedback({ message: "회원가입이 완료되었습니다.", type: "success" });
        navigate("/login");
      })
      .catch((error) => {
        setFeedback({
          message: "회원가입에 실패했습니다. 다시 시도해주세요.",
          type: "error",
        });
      });
  };
  const handleIdCheck = () => {
    checkDuplicateId(formData.loginId)
      .then((data) => {
        if (data.errorMessage) {
          setFeedback({
            message: "오류가 발생했습니다. 다시 시도해주세요.",
            type: "error",
          });
        } else if (data.isDuplicate) {
          setFeedback({
            message: "이미 사용 중인 아이디입니다.",
            type: "error",
          });
        } else {
          setFeedback({
            message: "사용 가능한 아이디입니다.",
            type: "success",
          });
        }
      })
      .catch((error) => {
        setFeedback({
          message: "아이디 중복 확인 중 오류가 발생했습니다.",
          type: "error",
        });
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
          <Idcheck onClick={handleIdCheck}>중복확인하기</Idcheck>
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
        </JoinBody>
        <SubmitButton onClick={handleSubmit}>가입하기</SubmitButton>
        <TextBox>
          {feedback.message && (
            <div
              style={{
                color: feedback.type === "error" ? "red" : "green",
                marginTop: "10px",
              }}
            >
              {feedback.message}
            </div>
          )}
        </TextBox>
      </Conteiner>
    </>
  );
}
