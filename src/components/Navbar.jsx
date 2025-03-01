// import { links } from "../assets/data";
import { FaBarsStaggered } from "react-icons/fa6";
import { Input } from "./SearchInput";
import { NavLinks } from "./NavLinks";
// import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { Icons } from "./Icons";
export const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 justify-between px-0 sm:px-8">
        <div className="navbar-start w-auto">
          <div className="hidden md:flex items-center">
            <Logo></Logo>
          </div>
          <div className="dropdown lg:hidden">
            <div
              className="btn btn-ghost btn-circle"
              role="button"
              tabIndex={0}
            >
              <FaBarsStaggered className="h-6 w-6" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box bg-base-200 mt-3 w-52 z-[1] p-2 shadow"
            >
              <NavLinks></NavLinks>
            </ul>
          </div>
        </div>
        <div className="navbar-center flex-2 gap-x-4">
          <div className="md:hidden">
            <Logo></Logo>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLinks></NavLinks>
            </ul>
          </div>

          <div className="hidden md:block  md:w-80 ml-auto">
            <Input></Input>
          </div>
        </div>
        <div className="navbar-end w-auto">
          <Icons btnClass="btn btn-ghost btn-circle text-xl"></Icons>
        </div>
      </div>
      {/* input here */}
      <div className="px-4 md:px-0 md:hidden bg-base-100">
        <Input></Input>
      </div>
    </nav>
  );
};
