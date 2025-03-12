import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  user: { username: "Ramya" },
  // user: null,
  theme: "emerald",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state) => {
      console.log("logout");
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    toggleTheme: (state) => {
      console.log("toggle theme");
    },
  },
});
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
