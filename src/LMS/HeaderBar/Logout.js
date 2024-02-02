import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../LayoutApp";
import styled from "styled-components";

export function Logout() {
  const onLogout = () => {
    sessionStorage.removeItem("token");
  };
  return (
    <>
      <Link
        to="/login"
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={onLogout}
      >
        로그아웃
      </Link>
    </>
  );
}
