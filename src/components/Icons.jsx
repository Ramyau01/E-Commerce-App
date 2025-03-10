import { FaRegUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Theme } from "./Theme";
// import PropTypes from "prop-types";
import { useGlobalContext } from "../pages/AppContext";
import { useSelector } from "react-redux";
export const Icons = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  const numItemsInWish = useSelector(
    (state) => state.wishlistState.numItemsInWishList
  );
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
        <div className="indicator">
          <FaHeart></FaHeart>
          <span className="badge badge-xs badge-primary indicator-item">
            {numItemsInWish}
          </span>
        </div>
      </button>
      <button
        onClick={() => navigate("/cart")}
        className="btn btn-ghost btn-circle text-xl"
      >
        {!isSideBarOpen && (
          <div className="indicator">
            <FaCartShopping></FaCartShopping>
            <span className="badge badge-xs badge-primary indicator-item">
              {numItemsInCart}
            </span>
          </div>
        )}
      </button>
    </>
  );
};
