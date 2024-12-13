// Layout File: i want to keep my navbar on every page and everything elde render as is on pages
import { Outlet } from "react-router-dom";
import Navbar from "../components/Top/navBar/Nav";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
export default Layout
