import { Logo } from "./Logo";
import { FaBarsStaggered } from "react-icons/fa6";

import { Input } from "./SearchInput";
import { Icons } from "./Icons";
// import { NavLinks } from "./NavLinks";
import { BottomNavbar } from "../components/BottomNavbar";
export const NewNavbar = () => {
  return (
    <nav>
      <div className="flex items-center w-full sm:justify-between">
        {/* <div className="flex items-center w-full justify-between"> */}
        <div className="w-auto px-2 lg:hidden">
          <FaBarsStaggered></FaBarsStaggered>
        </div>
        <div className="w-auto px-2">
          <Logo></Logo>
        </div>
        <div className="hidden lg:block flex-1 px-2">Navlinks</div>
        <div className="hidden md:block flex-2 px-2">
          <Input></Input>
        </div>
        <div className="hidden sm:block navbar-end w-auto">
          <Icons btnClass="btn btn-ghost btn-circle text-xl"></Icons>
        </div>
      </div>
      <div className="sm:hidden ">
        <BottomNavbar></BottomNavbar>
      </div>
    </nav>
  );
};
