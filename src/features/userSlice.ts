import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import type { User } from "../types";

const initialState: { user: User } = {
  user: { uid: "", email: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
