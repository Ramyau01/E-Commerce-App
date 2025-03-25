import { NavLink } from "react-router-dom";
export const Logo = () => {
  return (
    <NavLink
      to="/"
      className="btn btn-ghost text-2xl md:text-3xl text-green-700"
    >
      C-MART
    </NavLink>
  );
};
