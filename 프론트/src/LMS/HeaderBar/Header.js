import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "./Logout";
import { useState, useEffect } from "react";

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
const LogoutContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 2px;
`;

export function Header() {
  const [userName, setUserName] = useState(null);
  const [hasToken, setHasToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const token = sessionStorage.getItem("token");

        if (token && token !== "null") {
          setHasToken(true);

          const response = await apiGetMyInfo();
          if (response.resultCode === "SUCCESS") {
            setUserName(response.data.name);
          } else {
            console.log(response);
          }
        } else {
          setHasToken(false);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }
    fetchData();
  }, []);

  const handleLogoClick = () => {
    if (hasToken) {
      navigate("/main/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Headerbar>
        <Logo>
          <h1 onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            DWS
          </h1>
        </Logo>
        {hasToken && (
          <>
            <Text>
              <h3>환영합니다 {userName}님</h3>
            </Text>
            <LogoutContainer>
              <Logout />
            </LogoutContainer>
          </>
        )}
      </Headerbar>
    </>
  );
}

export function apiGetMyInfo() {
  const token = sessionStorage.getItem("token");
  return fetch("http://localhost:8080/api/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(),
  }).then((response) => response.json());
}
