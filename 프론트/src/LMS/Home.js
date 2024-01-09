import { Notice } from "./Notice";
import { Schedule } from "./Schedule";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: calc(100vw-10px);
`;
const MainContent = styled.div`
  background-color: #3c4751;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const MainTitle = styled.div`
  color: white;
  text-align: center;
  h1 {
    font-size: 4rem;
    font-weight: 500;
  }
  h3 {
    font-weight: 300;
  }
`;
const GoClassBtn = styled.div`
  margin-top: 30px;
  button {
    width: 150px;
    height: 50px;
    font-size: 16px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: white;
    color: #3c4751;
  }
`;
const StyledMain = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export function Home() {
  return (
    <>
      <Container>
        <MainContent>
          <MainTitle>
            <h1>Clone Startups.</h1>
            <h1>Learn to code.</h1>
            <h3>코딩은 진짜를 만들어보는거야!</h3>
            <h3>실제 서비스를 따라 만들면서 코딩을 배우세요.</h3>
          </MainTitle>
          <GoClassBtn>
            <NavLink to="/main/ClassRoom">
              <button>강의실가기→</button>
            </NavLink>
          </GoClassBtn>
        </MainContent>
        <StyledMain>
          <NavLink
            to="/main/notice"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Notice />
          </NavLink>
          <NavLink
            to="/main/schedule"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Schedule />
          </NavLink>
        </StyledMain>
      </Container>
    </>
  );
}
