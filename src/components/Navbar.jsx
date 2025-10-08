import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar  w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink to="/apps">
              <li>
                <a>Apps</a>
              </li>
            </NavLink>
            <NavLink to="/installation">
              <li>
                <a>Installation</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost text-xl">
            {" "}
            <span>
              <img src={logo} alt="logo" className="w-[40px] object-cover" />
            </span>{" "}
            Hero.io
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/">
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <NavLink to="/apps">
            <li>
              <a>Apps</a>
            </li>
          </NavLink>
          <NavLink to="/installation">
            <li>
              <a>Installation</a>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          target="_blank"
          className="btn "
          href="https://github.com/developerenamul/hero-app"
        >
          {" "}
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
