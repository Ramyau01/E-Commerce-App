import { Form } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { SubmitButton } from "./SubmitButton";
import { SortItems } from "./SortItems";
import { FilterItems } from "./FilterItems";

import { Link } from "react-router-dom";
// import { DrawerContextProvider } from "../pages/AppContext";
export const DrawerForm = ({ text, handleClick, drawerid }) => {
  //fetch the categories here and pass it down the components
  return (
    <>
      {/* <DrawerContextProvider> */}
      <Form className="min-h-full bg-base-200 ">
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

          {drawerid === "sidebar-sort" ? (
            <SortItems></SortItems>
          ) : (
            <FilterItems></FilterItems>
          )}

          <div className="btm-nav flex justify-between border-none">
            <div>
              <Link to="/products">
                <button
                  className="btn rounded-full btn-primary btn-sm px-8 "
                  type="submit"
                  onClick={handleClick}
                >
                  Cancel
                </button>
              </Link>
            </div>
            <div>
              <button
                className="btn rounded-full btn-primary btn-sm  px-8 "
                type="submit"
                onClick={handleClick}
              >
                Apply
              </button>
            </div>
          </div>
        </ul>
      </Form>
      {/* </DrawerContextProvider> */}
    </>
  );
};
