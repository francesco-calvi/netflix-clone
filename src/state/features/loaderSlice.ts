import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: { isLoading: boolean } = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loaderSlice.actions;
export const selectLoading = (state: RootState) => state.loader.isLoading;
export default loaderSlice.reducer;
