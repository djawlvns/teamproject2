import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

export function Board() {
  return (
    <>
      <Outlet />
    </>
  );
}
