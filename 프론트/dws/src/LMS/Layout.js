import { Footer } from "./Footer";
import { Header } from "./HeaderBar/Header";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
