import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { IoNewspaperOutline } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { GrContact } from "react-icons/gr";
import "./nav.css";

const Nav = () => {
  return (
    <aside className="side-nav">
      <Link className="nav-item" to="/home" aria-label="Home">
        <IoMdHome />
      </Link>
      <Link className="nav-item" to="/about" aria-label="About">
        <VscAccount />
      </Link>
      <Link className="nav-item" to="/skills" aria-label="Skills">
        <IoNewspaperOutline />
      </Link>
      <Link className="nav-item" to="/experience" aria-label="Experience">
        <ImBooks />
      </Link>
      <Link className="nav-item" to="/contact" aria-label="Contact">
        <GrContact />
      </Link>
    </aside>
  );
};

export default Nav;
