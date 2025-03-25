import { redirect } from "react-router-dom";
import { strapiFetch } from ".";
import { fakestoreFetch } from ".";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

import { formatPrice } from "../utils";
export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const json_data = JSON.stringify(data);

  try {
    const response = await strapiFetch.post("/auth/local/register", json_data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    console.log(error);
    toast.error(errorMessage);
    return null;
  }
};

export const LoginAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const json_data = JSON.stringify(data);

    try {
      const response = await strapiFetch.post("/auth/local", json_data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      console.log(error);
      toast.error(errorMessage);
      return null;
    }
  };

export const CheckoutAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const items = cartItems.filter((item) => item.company !== "Myntra");

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems: items,
      numItemsInCart,
    };

    try {
      const response = await strapiFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";

      toast.error(errorMessage);
      if ([401, 403].includes(error?.response?.status)) {
        return redirect("/login");
      }

      return null;
    }
  };
