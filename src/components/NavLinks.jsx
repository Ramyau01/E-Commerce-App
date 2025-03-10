import { links } from "../assets/data";
import { Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <li key={id}>
            <Link
              to={url}
              className="capitalize font-semibold text-primary-content text-sm md:text-base lg:text-lg "
            >
              {text}
            </Link>
          </li>
        );
      })}
    </>
  );
};
