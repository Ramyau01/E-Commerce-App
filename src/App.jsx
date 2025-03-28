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
import {
  SingleProductLoader,
  CombinedLoader,
  CheckoutLoader,
  OrdersLoader,
} from "./utils/Loaders";
import { registerAction, LoginAction, CheckoutAction } from "./utils/actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./store";
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
        loader: CheckoutLoader(store),
        action: CheckoutAction(store),
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        errorElement: <SinglePageError></SinglePageError>,
        loader: OrdersLoader(store),
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

  {
    path: "login",
    element: <Login></Login>,
    errorElement: <Error></Error>,
    action: LoginAction(store),
  },
  {
    path: "register",
    element: <Register></Register>,
    errorElement: <Error></Error>,
    action: registerAction,
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
