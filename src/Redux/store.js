import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Slices/filterSlice";
import cakeReducer from "./Slices/cakeSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cake: cakeReducer,
  },
});
