import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import MainDish from "@models/MainDish";

export interface DishReducerState {
  dish: MainDish[];
  getDish: boolean;
}

const initialState: DishReducerState = {
  dish: [],
  getDish: false,
};

export const dishSlice = createSlice({
  name: "maindish",
  initialState,
  reducers: {
    setDish: (state, action: PayloadAction<MainDish[]>) => {
      state.dish = action.payload;
    },
    setGetDish: (state, action: PayloadAction<boolean>) => {
      state.getDish = action.payload;
    },
  },
});

export const { setDish, setGetDish } = dishSlice.actions;
export default dishSlice.reducer;
