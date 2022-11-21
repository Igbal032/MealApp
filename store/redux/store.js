import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorites";


export const store = configureStore({
  reducer: {
    favorideMeals: favoriteReducer,
  },
});
