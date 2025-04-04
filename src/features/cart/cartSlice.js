import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
  myntraProducts: [],
};
// const getCartFromLocalStorage = () => {
//   return JSON.parse(localStorage.getItem("cart")) || defaultState;
// };
const getCartFromLocalStorage = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
  return {
    ...defaultState,
    ...storedCart,
    myntraProducts: storedCart.myntraProducts || [],
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      console.log(product);
      const item = state.cartItems.find((i) => i.cartID === product.cartID);

      if (item) {
        item.qty += product.qty;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.qty;
      state.cartTotal += product.price * product.qty;

      cartSlice.caseReducers.calculateTotals(state);
      toast.success("item added to cart");
    },
    clearCart: (state) => {
      console.log("cleared");
      state.cartItems = [];
      state.numItemsInCart = 0;
      state.cartTotal = 0;
      state.tax = 0;
      state.orderTotal = state.shipping;
      // state.myntraProducts = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
      state.numItemsInCart -= product.qty;
      state.cartTotal -= product.price * product.qty;
      cartSlice.caseReducers.calculateTotals(state);
      // toast.error("item removed from cart");
    },
    editItem: (state, action) => {
      const { cartID, qty } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += qty - item.qty;
      state.cartTotal += item.price * (qty - item.qty);
      item.qty = qty;
      cartSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      // Prevent negative totals
      if (state.cartTotal < 0) {
        state.cartTotal = 0;
      }
      if (state.orderTotal < 0) {
        state.orderTotal = 0;
      }
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      console.log(state.orderTotal);

      localStorage.setItem("cart", JSON.stringify(state));
    },
    addFKProducts: (state, action) => {
      const { product } = action.payload;

      state.myntraProducts = [...state.myntraProducts, product];
      console.log("here", state.myntraProducts);
    },
    clearFKOrders: (state) => {
      console.log("cleared orders");
      state.myntraProducts = [];

      // state.myntraProducts = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

//Action creators
export const {
  addItem,
  clearCart,
  removeItem,
  editItem,
  addFKProducts,
  clearFKOrders,
} = cartSlice.actions;
export default cartSlice.reducer;
