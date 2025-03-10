import { useGlobalContext } from "../pages/AppContext";

import { useState } from "react";

import { DrawerForm } from "./DrawerForm";
export const Drawer = ({
  icon,
  text,
  selectedDrawer,
  handleChange,
  drawerid,
  isChecked,
  style,
}) => {
  const { isSideBarOpen, openSideBar, closeSideBar } = useGlobalContext();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <label htmlFor={drawerid} onClick={openSideBar} className={style}>
          <div>
            <img src={icon}></img>
          </div>
          <div className="hidden md:flex"> {text}</div>
        </label>
      </div>

      <div className={`drawer-side  ${isSideBarOpen ? "z-10" : "z-0"}`}>
        <label
          htmlFor={drawerid}
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={closeSideBar}
        ></label>

        <DrawerForm
          text={text}
          handleClick={handleClick}
          drawerid={drawerid}
        ></DrawerForm>
      </div>
    </div>
  );
};
