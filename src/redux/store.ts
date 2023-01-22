import { configureStore } from "@reduxjs/toolkit";
import DishReducer from "./reducers/DishReducer";
import RecipeReducer from "./reducers/RecipeReducer";

export const store = configureStore({
  reducer: {
    recipe: RecipeReducer,
    dishes: DishReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
