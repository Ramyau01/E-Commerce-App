import { links } from "../assets/data";
import { NavLink } from "react-router-dom";
export const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <li key={id}>
            <NavLink
              className="capitalize font-semibold text-info-content text-sm md:text-base lg:text-lg"
              to={url}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
