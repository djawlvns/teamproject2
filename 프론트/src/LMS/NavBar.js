import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const MenuItem = styled.div`
  position: relative;
  width: 200px;
  color: gray;
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #495057;
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 60px;
  left: 28pxpx;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: black;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
            <h3>VOD</h3>
          </MenuItem>
        </NavLink>
        <MenuItem onClick={toggleDropdown}>
          <h3>게시판</h3>
          <DropdownContent isOpen={isDropdownOpen}>
            <NavLink
              to="/main/board/free"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <DropdownItem>자유게시판</DropdownItem>
            </NavLink>
            <NavLink
              to="/main/board/suggestion"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <DropdownItem>건의게시판</DropdownItem>
            </NavLink>
            <NavLink
              to="/main/board/inquiry"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <DropdownItem>문의게시판</DropdownItem>
            </NavLink>
          </DropdownContent>
        </MenuItem>
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
