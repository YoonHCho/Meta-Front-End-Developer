import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import StyledNavbar from "../components/StyledNavbar";
import { Outlet } from "react-router-dom";

const SharedPage = () => {
  return (
    <>
      {/* <StyledNavbar /> => NavLink that knows whether or not it is active or pending */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedPage;
