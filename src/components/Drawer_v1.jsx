import { useGlobalContext } from "../pages/AppContext";
import { FaTimes } from "react-icons/fa";
import { SubmitButton } from "./SubmitButton";
import { SortItems } from "./SortItems";
import { FilterItems } from "./FilterItems";
import { useState } from "react";

export const Drawer = ({
  icon,
  text,
  selectedDrawer,
  handleChange,
  drawerid,
  isChecked,
}) => {
  const { isSideBarOpen, openSideBar, closeSideBar } = useGlobalContext();
  // const isChecked = selectedDrawer === text;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  console.log("drawer loaded", isChecked);
  function handleClick() {
    setIsDrawerOpen(!isDrawerOpen);
    handleChange(null);

    closeSideBar();
  }
  return (
    <div className="drawer drawer-end ">
      <input
        id={drawerid}
        type="checkbox"
        onChange={() => handleChange(text)}
        checked={isChecked}
        className="drawer-toggle"
      />
      <div className="drawer-content ">
        <label
          htmlFor={drawerid}
          onClick={openSideBar}
          className="drawer-button btn btn-primary px-4 btn-sm rounded-full flex gap-4 "
        >
          <div>
            <img src={icon}></img>
          </div>
          <div> {text}</div>
        </label>
      </div>

      <div className={`drawer-side  ${isSideBarOpen ? "z-10" : "z-0"}`}>
        <label
          htmlFor={drawerid}
          aria-label="close sidebar"
          className="drawer-overlay"
          // onClick={handleClick}
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 relative">
          {/* Sidebar content here */}
          <li>
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{text}</h2>
              </div>
              <div>
                <button
                  className="btn btn-circle text-xl"
                  onClick={handleClick}
                >
                  {/* <FaTimes></FaTimes> */} X
                </button>
              </div>
            </div>
          </li>
          {/* sort list  */}
          {/* {drawerid === "sidebar-sort" ? (
            <SortItems></SortItems>
          ) : (
            <FilterItems></FilterItems>
          )} */}
          <li>list item</li>

          <div className="btm-nav flex justify-between border-none">
            <div>
              <SubmitButton text="Cancel" style="btn-sm px-8 "></SubmitButton>
            </div>
            <div>
              <SubmitButton text="Apply" style="btn-sm px-8 "></SubmitButton>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
