import { createContext, useState } from "react";
import { useContext } from "react";
const Appcontext = createContext();
export const useGlobalContext = () => useContext(Appcontext);

export const AppContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  function openSideBar() {
    setIsSideBarOpen(true);
  }
  function closeSideBar() {
    setIsSideBarOpen(false);
  }
  return (
    <Appcontext.Provider value={{ isSideBarOpen, openSideBar, closeSideBar }}>
      {children}
    </Appcontext.Provider>
  );
};

const DrawerContext = createContext();
export const useDrawerContext = () => useContext(DrawerContext);

export const DrawerContextProvider = ({ children }) => {
  const [selectedCategory, setselectedCategory] = useState("");

  return (
    <DrawerContext.Provider value={{ selectedCategory, setselectedCategory }}>
      {children}
    </DrawerContext.Provider>
  );
};
