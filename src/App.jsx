// import { ToastContainer, toast } from "react-toastify";

//import "react-toastify/dist/ReactToastify.css";
import {
  Cart,
  Wishlist,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
  SinglePageError,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { loader as LandingLoader } from "./pages/Landing";
import { SingleProductLoader, CombinedLoader } from "./utils/Loaders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        loader: LandingLoader,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "products",
        element: <Products></Products>,
        errorElement: <SinglePageError></SinglePageError>,
        loader: CombinedLoader,
      },

      {
        path: "product/:api/:id",
        element: <SingleProduct></SingleProduct>,
        loader: SingleProductLoader,
        errorElement: <SinglePageError></SinglePageError>,
      },
      {
        path: "error",
        element: <Error></Error>,
      },
    ],
  },

  // {
  //   path: "pageError",
  //   element: <SinglePageError></SinglePageError>,
  // },
  {
    path: "login",
    element: <Login></Login>,
    errorElement: <Error></Error>,
  },
  {
    path: "register",
    element: <Register></Register>,
    errorElement: <Error></Error>,
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};
export default App;
