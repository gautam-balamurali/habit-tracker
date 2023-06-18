/* eslint-disable */

import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav className="navigation">
      <NavLink className={"link"} to="/">
        {" "}
        📝 Habits{" "}
      </NavLink>{" "}
      <NavLink className={"link"} to="/archived-habit">
        {" "}
        🔒 Archived Habits{" "}
      </NavLink>
    </nav>
  );
};

export default Header;
