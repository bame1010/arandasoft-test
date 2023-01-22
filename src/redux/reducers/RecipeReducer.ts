import Recipe from "@models/Recipe";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RecipeReducerState {
  recipes: Recipe[];
  getRecipes: boolean;
}

const initialState: RecipeReducerState = {
  recipes: [],
  getRecipes: false,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload;
    },
    setGetRecipes: (state, action: PayloadAction<boolean>) => {
      state.getRecipes = action.payload;
    },
  },
});

export const { setRecipes, setGetRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
