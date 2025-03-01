import { useGlobalContext } from "../pages/AppContext";
import { FaTimes } from "react-icons/fa";
import { SubmitButton } from "./SubmitButton";
import { SortItems } from "./SortItems";
import { FilterItems } from "./FilterItems";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
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
  // const [category, setCategory] = useState("");
  // const [brand, setBrand] = useState("");
  // const [price, setPrice] = useState("");
  function handleClick() {
    setIsDrawerOpen(!isDrawerOpen);
    handleChange(null);

    closeSideBar();
  }

  function handleFilterFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
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
        <Form
          onSubmit={handleFilterFormSubmit}
          className="min-h-full bg-base-200 "
        >
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
                    <FaTimes></FaTimes>
                  </button>
                </div>
              </div>
            </li>
            {/* sort list  */}
            {drawerid === "sidebar-sort" ? (
              <SortItems></SortItems>
            ) : (
              <FilterItems></FilterItems>
            )}

            <div className="btm-nav flex justify-between border-none">
              <div>
                <Link to="/products">
                  <SubmitButton
                    text="Cancel"
                    style="btn-sm px-8 "
                  ></SubmitButton>
                </Link>
              </div>
              <div>
                <SubmitButton text="Apply" style="btn-sm px-8 "></SubmitButton>
              </div>
            </div>
          </ul>
        </Form>
      </div>
    </div>
  );
};
