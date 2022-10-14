import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Subscription } from "../../types";
import { RootState } from "../store";
import type { User } from "../../types";

const initialState: { user: User; subscription: Subscription | null } = {
  user: { uid: "", email: "" },
  subscription: null,
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
      state.subscription = initialState.subscription;
    },
    setSubscription: (state, action: PayloadAction<Subscription>) => {
      state.subscription = action.payload;
    },
  },
});

export const { login, logout, setSubscription } = userSlice.actions;
export const selectUser: (state: RootState) => User = (state: RootState) =>
  state.user.user;
export const selectSubscription = (state: RootState) => state.user.subscription;
export default userSlice.reducer;
