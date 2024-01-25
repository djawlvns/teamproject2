import styled from "styled-components";
import { useLayoutEffect, useState } from "react";
import { Sregister } from "./Sregister";
import { Tregister } from "./Tregister";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";

export function Register() {
  // 반응형을 위한 설정
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  function getIconSize() {
    if (windowWidth <= 768) {
      return "60px";
    } else {
      return "120px";
    }
  }

  const Conteiner = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
    font-weight: 400;
    color: #666;
    line-height: 1.63;
    letter-spacing: -0.03em;
    position: relative;
    height: calc(900px - 356px);
    /* 가로크기 768이하면 높이 700 */
    @media screen and (max-width: 768px) {
      height: 450px;
    }
  `;

  const Body = styled.div`
    width: 100%;
    height: calc(100% - 296px);
  `;

  const Tcontent = styled.div`
    max-width: 1100px;
    margin: 25px auto;
    display: flex;
    width: 100%;
    height: 120px;
    align-items: center;
    justify-content: center;
  `;

  const Title = styled.div`
    border-bottom: 1px solid #eee;
    height: 120px;
    display: inline-block;
    .h1 {
      justify-content: center;
      align-items: center;
    }
  `;

  const Rcontent = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 50px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `;

  const Aregister = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
  `;

  const Bregister = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
  `;

  const Button = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    background-color: #004cc2;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    @media screen and (max-width: 768px) {
      width: 100px;
      height: 25px;
      font-size: 10px;
    }
  `;

  return (
    <>
      <Outlet />
      <Conteiner>
        <Body>
          <Tcontent>
            <Title>
              <h1>회원가입</h1>
            </Title>
          </Tcontent>
          <Rcontent>
            {/* <Aregister>
              <h1>선생님 회원가입</h1>
              <Icon
                icon="la:chalkboard-teacher"
                color="black"
                style={{ fontSize: getIconSize() }}
              />
              <NavLink to="/join/tregister">
                <Button>가입하기</Button>
              </NavLink>
            </Aregister> */}
            <Bregister>
              <Icon
                icon="map:school"
                color="black"
                style={{ fontSize: getIconSize() }}
              />
              <NavLink to="/join/sregister">
                <Button>가입하기</Button>
              </NavLink>
            </Bregister>
          </Rcontent>
        </Body>
      </Conteiner>
    </>
  );
}
