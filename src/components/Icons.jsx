import { FaRegUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Theme } from "./Theme";
// import PropTypes from "prop-types";
import { useGlobalContext } from "../pages/AppContext";
export const Icons = () => {
  const { isSideBarOpen } = useGlobalContext();
  const navigate = useNavigate();
  function UserIconClick() {
    navigate("/login");
  }

  return (
    <>
      <Theme></Theme>
      <button
        className="btn btn-ghost btn-circle text-xl"
        onClick={UserIconClick}
      >
        <FaRegUserCircle></FaRegUserCircle>
      </button>
      <button
        onClick={() => navigate("/wishlist")}
        className="btn btn-ghost btn-circle text-xl"
      >
        <FaHeart></FaHeart>
      </button>
      <button
        onClick={() => navigate("/cart")}
        className="btn btn-ghost btn-circle text-xl"
      >
        {/* <div className={`indicator ${isSideBarOpen ? "z-0" : "z-1"}`}>
          <FaCartShopping></FaCartShopping>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div> */}
        {!isSideBarOpen && (
          <div className="indicator">
            <FaCartShopping></FaCartShopping>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        )}
      </button>
    </>
  );
};

// <button className="btn btn-ghost btn-circle text-xl">
//     <FaRegUserCircle></FaRegUserCircle>
//   </button>
//   <button className="btn btn-ghost btn-circle text-xl">
//     <FaHeart></FaHeart>
//   </button>
//   <button className="btn btn-ghost btn-circle text-xl">
//     <FaCartShopping></FaCartShopping>
//   </button>
