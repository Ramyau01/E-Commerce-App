import { Link } from "react-router-dom";
import emptyCart from "../assets/empty cart.jpg";
export const EmptyContainer = ({ component }) => {
  return (
    <div className="flex flex-col w-3/4 md:w-1/2 m-4 p-4 rounded-lg shadow-md text-center">
      <div>
        <h2 className="text-xl font-bold leading-8 ">
          Your {component} is empty
        </h2>
        <p>Have an account? Sign in to see your {component}</p>

        <Link
          to="/login"
          className="btn btn-primary btn-sm btn-block mt-4 max-w-96"
        >
          Please Login
        </Link>
      </div>
      <div className="p-4">
        <img src={emptyCart}></img>
      </div>
    </div>
  );
};
