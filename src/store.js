import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import wishListReducer from "./features/wishlist/wishlistSlice";
import userReducer from "./features/user/userSlice";
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    wishlistState: wishListReducer,
    userState: userReducer,
  },
});
