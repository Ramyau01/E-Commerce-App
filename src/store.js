import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import wishListReducer from "./features/wishlist/wishlistSlice";
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    wishlistState: wishListReducer,
  },
});
