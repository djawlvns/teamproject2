import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { MyContext } from "../LayoutApp";
import { NavLink } from "react-router-dom";

/**
 * @typeof {Object} CheckProps;
 * @property {boolean} isChecked;
 * @param {CheckProps} props;
 */

const CenteredContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
// 기본적인 틀
const Container = styled.div`
  width: 100vw;
  /* min-width: 1000px; */
  height: 100%;
  min-height: 100vh;
  padding: 0.1px 0 0 0;
  margin: 0 auto;
  position: relative;
  background-image: url("background2.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: content-box;
`;

// 틀 안의 실질적인 내용이 들어가는곳
const Content = styled.div`
  margin: 0;
  padding: 0;
  display: block;
  margin-top: 100px;
`;

const ContentBox = styled.div``;
// 로그인바
const Loginbar = styled.div`
  background-color: blanchedalmond;
  width: 600px;
  margin: 0 auto;
  display: block;
`;
// 로그인 제목
const Logintitle = styled.div`
  font-size: 25px;
  color: #000;
  padding: 23px 0 0;
  margin-bottom: 83px;
  text-align: center;
  letter-spacing: -0.5px;
  font-weight: 600;
`;
// 로그인바의 기본 속성
const Filedset = styled.fieldset`
  border: none;
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
  border-width: 2px;
  /* border-style: groove; */
  border-color: rgb(192, 192, 192);
  border-image: initial;
`;
// 아이디 비밀번호 입력창 부모
const FormBox = styled.div`
  position: relative;
  margin: 0px 0 0;
  font-size: 14px;
  color: #424242;
`;
// 자식요소
const Form = styled.div`
  margin: 0 0px 0 0;
`;
// 아이디 비밀번호 입력창의 문구
const Eplaceholder = styled.label``;
// 입력하는 곳
const Input = styled.input`
  margin: 0 0 7px;
  color: #000;
  font-weight: 400;
  outline: none;
  font-size: 15px;
  width: 100%;
  text-indent: 5px;
  margin: 0;
  padding: 0;
  height: 58px;
  line-height: 58px;
  background: #ffffff;
  border: none;
  border-bottom: 1px solid #dedede;
  box-sizing: border-box;
`;
// 자동로그인 및 비회원주문조회나 id/pw찾기 부모
const Findinfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0 25px;
`;
// 자동로그인
const Security = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
// 자동로그인 체크
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CHECKED = "https://whoisnerdy.com/web/upload/img/join_checked.png";
const UNCHECKED = "https://whoisnerdy.com/web/upload/img/join_unchecked.png";

// 체크박스
const Check = styled.div`
  border-radius: 0;
  margin: 0 6px 0 0;
  width: 15px;
  height: 15px;
  border: 0;
  /* 클릭시 이미지 바뀌며 자동로그인 체크 */
  background: url(${(props) => (props.isChecked ? CHECKED : UNCHECKED)})
    no-repeat;
  background-size: cover;
`;
// 자동 로그인 문구
const Membercheck = styled.span`
  margin: 0;
  cursor: pointer;
`;
// 비회원 주문조회
const Typelogin = styled.div`
  position: relative;
  padding: 0 8px 0 0;
  display: inline-block;
  font-weight: normal;
  font-size: 14px;
  color: #424242;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
// id/pw찾기창
const Findidpass = styled.a`
  padding: 0 0 0 8px;
  color: black;
  font-family: "Apple SD Gothic Neo";
  text-decoration: none;
  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 5px;
    left: 106px;
    width: 1px;
    height: 12px;
    background: #dbdbdb;
  }
`;
// 로그인 버튼
const Btnbox = styled.div`
  padding: 10px 0 0 0;
`;
// 로그인 버튼 속성
const Button = styled.button`
  display: block;
  background: #000;
  border: none;
  text-align: center;
  width: 100%;
  color: #fff;
  height: 60px;
  line-height: 60px;
  font-size: 15px;
  letter-spacing: -1px;
  font-weight: 500;
`;
// 회원가입 창 부모
const Joinbox = styled.div`
  text-align: center;
  position: relative;
`;
// 회원가입 자식
const Joinspace = styled.div`
  margin: 20px 0;
`;
// 회원가입 클릭
const Join = styled.a`
  text-decoration: none;
  display: block;
  font-size: 15px;
  line-height: 50px;
  border-radius: 25px;
  letter-spacing: -1px;
  color: white;
  line-height: 21px;
  border: none;
  position: relative;
  display: inline-block;
  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: white;
  }
`;

export function Login() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);
  const { tokenState, setTokenState } = useContext(MyContext);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery(
    "login",
    async () => {
      if (loginData) {
        setLoggingIn(true);
        const response = await apiLoginByFetch(loginId, password);
        return response;
      }
    },
    { retry: 0 }
  );

  async function onLogin() {
    const response = await apiLoginByFetch(loginId, password);
    if (response.resultCode === "SUCCESS") {
      // console.log(response.data);
      setToken(response.data.token);
    } else {
      console.log(response.data);
    }
  }
  useEffect(() => {
    if (data) {
      if (data.resultCode === "SUCCES" && loginData) {
        console.log(data);
        sessionStorage.setItem(
          "tokenState",
          JSON.stringify({ id: loginData.loginId })
        );
        setTokenState({ id: loginData.loginId });
        navigate("/main");
      } else if (data.resultCode === "ERROR") {
        navigate("/login");
      }
      setLoggingIn(false);
    }
  }, [data, loginData, setTokenState, navigate]);

  useEffect(() => {
    refetch();
  }, [loginData, refetch]);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", null);
    }
  }, [token]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      loginId: loginId,
      password: password,
    };
    setLoginData(user);
  };

  return (
    <>
      {token ? (
        navigate("/main")
      ) : tokenState?.id ? (
        <h1> 이미 로그인되어 있습니다. {tokenState.id}</h1>
      ) : (
        <>
          <CenteredContent />
          <Container>
            <Content>
              <ContentBox>
                <Loginbar>
                  <Logintitle>LOGIN</Logintitle>
                  <Filedset>
                    <FormBox>
                      <form onSubmit={onSubmit}>
                        <Eplaceholder>
                          <Input
                            placeholder="아이디"
                            id="loginId"
                            value={loginId}
                            onChange={(e) => setLoginId(e.target.value)}
                          />
                          <Input
                            placeholder="비밀번호"
                            id="password"
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Eplaceholder>
                        <Btnbox>
                          <Button onClick={onLogin}>로그인</Button>
                        </Btnbox>
                      </form>
                      <Findinfo>
                        <Security>
                          {/* <HiddenCheckbox
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheck}
                            id="checkboxId"
                          />
                          <Check isChecked={isChecked} onClick={handleCheck} />
                          <Membercheck
                            htmlFor="checkboxId"
                            onClick={() => handleCheck()}
                          ></Membercheck> */}
                        </Security>
                        <Typelogin>
                          <Findidpass></Findidpass>
                        </Typelogin>
                      </Findinfo>

                      <Joinbox>
                        <Joinspace>
                          <NavLink
                            to="/join/register"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <text>회원가입</text>
                          </NavLink>
                        </Joinspace>
                      </Joinbox>
                      <Typelogin />
                    </FormBox>
                  </Filedset>
                </Loginbar>
              </ContentBox>
            </Content>
          </Container>
        </>
      )}
    </>
  );
}

function apiLoginByFetch(loginId, password) {
  return fetch("http://localhost:8080/api/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      loginId: loginId,
      password: password,
    }),
  })
    .then((response) => response.json())
    .catch((err) => err);
}

export function apiGetMyInfo() {
  const token = sessionStorage.getItem("token");
  return fetch("http://localhost:8080/api/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
