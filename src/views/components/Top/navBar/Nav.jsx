import React from "react";
import { IoMdHome } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { IoNewspaperOutline } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { GrContact } from "react-icons/gr";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <div class="nav">
          <a href="/" class="active"><IoMdHome /></a>
          <a href="/about" className="icons"><VscAccount /></a>
          <a href="/skills"  className="icons"><IoNewspaperOutline /></a>
          <a href="/education"><ImBooks /></a>
          <a href="/contact"><GrContact /></a>
       
      </div>
    </>
  )
}

export default Nav
