import { Navbar } from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
// import { NewNavbar } from "../components/NewNavbar";
import { Footer } from "../components";
import { Loading } from "../components";
// import { Hero } from "../components";
export const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar></Navbar>

      <section>
        {isPageLoading ? <Loading></Loading> : <Outlet></Outlet>}
      </section>
      {/* <Footer></Footer> */}
    </div>
  );
};
