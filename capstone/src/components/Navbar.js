import { NavLink } from "react-router-dom";
import LLLogo from "../images/logos/littleLemonLogo.png";

const style = {
  navActive: "nav-font px-3 nav-item nav-link nav-active",
  navNonActive: "nav-font px-3 nav-item nav-link",
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light pd mb-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img className="logo-height img-fluid" src={LLLogo} alt="Little Lemon Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/">
              Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/about">
              About
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/menu">
              Menu
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/reserve">
              Reserve
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
