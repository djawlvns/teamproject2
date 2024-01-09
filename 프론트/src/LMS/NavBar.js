import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const MenuItem = styled.div`
  width: 200px;
  color: gray;
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h3:hover {
    color: #495057;
  }
`;

export function NavBar() {
  return (
    <>
      <Menu>
        <NavLink
          to="/main/classroom"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem>
            <h3>강의실</h3>
          </MenuItem>
        </NavLink>
        <NavLink
          to="/main/vodroom"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem>
            <h3>교육자료실</h3>
          </MenuItem>
        </NavLink>
        <NavLink
          to="/main/board"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem>
            <h3>게시판</h3>
          </MenuItem>
        </NavLink>
        <NavLink
          to="/main/mypage"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem>
            <h3>마이페이지</h3>
          </MenuItem>
        </NavLink>
      </Menu>
    </>
  );
}
