import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { IoNewspaperOutline } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { GrContact } from "react-icons/gr";



import "./nav.css";

const Nav = () => {
  return (
    <>
    
      <Link className="nav" to={"/home"}><IoMdHome /></Link>
      <Link className="nav" to={"/about"}><VscAccount /></Link>
      <Link className="nav" to={"/skills"}><IoNewspaperOutline /></Link>
      <Link className="nav" to={"/education"}><ImBooks /></Link>
      <Link className="nav" to={"/contact"}><GrContact /></Link>
     
    </>
  )
}

export default Nav
