import { FaRegUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Theme } from "./Theme";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { useGlobalContext } from "../pages/AppContext";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

export const Icons = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  const user = useSelector((state) => state.userState.user);
  const numItemsInWish = useSelector(
    (state) => state.wishlistState.numItemsInWishList
  );

  const { isSideBarOpen } = useGlobalContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(clearCart());
    dispatch(logoutUser());
    navigate("/");
  }
  function register() {
    navigate("register");
  }

  return (
    <>
      <div className="dropdown dropdown-end">
        <div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-xl"
          >
            <FaRegUserCircle></FaRegUserCircle>
          </div>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-200 rounded-box z-10 w-52 p-2 shadow-sm"
        >
          {user ? (
            <>
              <li>
                <p className="text-md ">
                  Hi,<span>{user.username}</span>
                </p>
              </li>
              <li>
                <Link
                  to="/orders"
                  className="link link-hover font-semibold justify-start"
                >
                  Orders
                </Link>
              </li>
              <li>
                <a
                  className="btn btn-link btn-sm justify-start"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <p className="text-md ">
                  Existing User?{" "}
                  <Link to="/login" className="link link-hover font-semibold">
                    Login
                  </Link>
                </p>
              </li>
              <li>
                <p className="text-md ">
                  New User ?{" "}
                  <Link
                    to="/register"
                    className="link link-hover font-semibold"
                  >
                    Register
                  </Link>
                </p>
              </li>
            </>
          )}
          <li className="flex flex-row">
            <div>
              <p className="text-md ">Theme</p>
            </div>
            <div>
              <Theme></Theme>
            </div>
          </li>
        </ul>
      </div>

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
