import styled from "styled-components";
import { Link } from "react-router-dom";

const Headerbar = styled.div`
  display: flex;
  position: relative;
  height: 60px;
  border-bottom: 1px solid #e9ecef;
  box-shadow: 0px 0px 10px 0px;
`;
const Logo = styled.div`
  position: absolute;
  left: 10px;
  top: 8px;
`;
const Text = styled.div`
  position: absolute;
  right: 200px;
  top: 10px;
`;
const Logout = styled.div`
  position: absolute;
  right: 10px;
  top: 2px;
`;

export function Header() {
  return (
    <>
      <Headerbar>
        <Logo>
          <Link
            to="/main/home"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1>DWS</h1>
          </Link>
        </Logo>
        <Text>
          <h3>~님 환영합니다</h3>
        </Text>
        <Logout>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h5>로그아웃</h5>
          </Link>
        </Logout>
      </Headerbar>
    </>
  );
}
