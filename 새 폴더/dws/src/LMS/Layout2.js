import { Footer } from "./Footer";
import { Header } from "./HeaderBar/Header";
import { Outlet } from "react-router-dom";

export function Layout2() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
