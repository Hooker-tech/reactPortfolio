import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { IoNewspaperOutline } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { GrContact } from "react-icons/gr";

const Nav = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-16 bg-800 text-black flex flex-col items-center py-4 gap-6">
      <Link
        className="hover:text-yellow-400 transition-transform transform hover:scale-110"
        to="/"
        aria-label="Home"
      >
        <IoMdHome size={26} />
      </Link>
      <Link
        className="hover:text-yellow-400 transition-transform transform hover:scale-110"
        to="/about"
        aria-label="About"
      >
        <VscAccount size={26} />
      </Link>
      <Link
        className="hover:text-yellow-400 transition-transform transform hover:scale-110"
        to="/skills"
        aria-label="Skills"
      >
        <IoNewspaperOutline size={26} />
      </Link>
      <Link
        className="hover:text-yellow-400 transition-transform transform hover:scale-110"
        to="/experience"
        aria-label="Experience"
      >
        <ImBooks size={26} />
      </Link>
      <Link
        className="hover:text-yellow-400 transition-transform transform hover:scale-110"
        to="/contact"
        aria-label="Contact"
      >
        <GrContact size={28} />
      </Link>
    </aside>
  );
};

export default Nav;
