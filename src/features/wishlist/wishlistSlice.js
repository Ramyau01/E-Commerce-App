import { createSlice } from "@reduxjs/toolkit";
const defaultState = {
  wishListItems: [],
  numItemsInWishList: 0,
};
const getWishFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("favorites")) || defaultState;
};
const wishListSlice = createSlice({
  name: "wishlist",
  initialState: getWishFromLocalStorage(),
  reducers: {
    addItemToWishlist: (state, action) => {
      const { product } = action.payload;
      state.numItemsInWishList += 1;

      state.wishListItems.push(product);
      localStorage.setItem("favorites", JSON.stringify(state));
      console.log(state.wishListItems.length);
    },
    removeItemFromWishlist: (state, action) => {
      const { id } = action.payload;
      state.numItemsInWishList -= 1;
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== id
      );
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    // addItemToCart: (state, action) => {
    //   const { product } = action.payload;
    //   state.wishListItems = state.wishListItems.filter(
    //     (item) => item.id !== product.id
    //   );
    //   state.numItemsInWishList = state.wishListItems.length;
    //   localStorage.setItem("favorites", JSON.stringify(state));
    // },

    // deleteItemFromWish:(state, action)=>{
    //     const { ItemID } = action.payload;

    // }
    // const { cartID } = action.payload;
    //       const product = state.cartItems.find((i) => i.cartID === cartID);
    //       state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
  },
});

export default wishListSlice.reducer;
export const { addItemToWishlist, removeItemFromWishlist, addItemToCart } =
  wishListSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";

// const defaultState = {
//   cartItems: [],
//   numItemsInCart: 0,
//   cartTotal: 0,
//   shipping: 500,
//   tax: 0,
//   orderTotal: 0,
// };
// const getCartFromLocalStorage = () => {
//   return JSON.parse(localStorage.getItem("cart")) || defaultState;
// };
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: getCartFromLocalStorage(),
//   reducers: {
//     addItem: (state, action) => {
//       const { product } = action.payload;
//       const item = state.cartItems.find((i) => i.cartID === product.cartID);
//       if (item) {
//         item.qty += product.qty;
//       } else {
//         state.cartItems.push(product);
//       }
//       state.numItemsInCart += product.qty;
//       state.cartTotal += product.price * product.qty;
//       cartSlice.caseReducers.calculateTotals(state);
//     },
//     clearCart: (state) => {
//       localStorage.setItem("cart", JSON.stringify(defaultState));
//       return defaultState;
//     },
//     removeItem: (state, action) => {
//       const { cartID } = action.payload;
//       const product = state.cartItems.find((i) => i.cartID === cartID);
//       state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
//       state.numItemsInCart -= product.qty;
//       state.cartTotal -= product.price * product.qty;
//       cartSlice.caseReducers.calculateTotals(state);
//     },
//     editItem: (state, action) => {
//       const { cartID, qty } = action.payload;
//       const item = state.cartItems.find((i) => i.cartID === cartID);
//       state.numItemsInCart += qty - item.qty;
//       state.cartTotal += item.price * (qty - item.qty);
//       item.qty = qty;
//       cartSlice.caseReducers.calculateTotals(state);
//     },
//     calculateTotals: (state) => {
//       state.tax = 0.1 * state.cartTotal;
//       state.orderTotal = state.cartTotal + state.shipping + state.tax;
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//   },
// });

// //Action creators
// export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
// export default cartSlice.reducer;
