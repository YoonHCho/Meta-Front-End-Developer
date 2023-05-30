import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/reserve">Reserve</NavLink>
    </nav>
  );
};

export default StyledNavbar;
