import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  currentCake: {
    id: 0,
    title: "",
    price: 0,
    weight: 0.0,
    imageUrl: "",
    rating: 0,
  },
};

export const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setCurrentCake: (state, action) => {
      state.currentCake = action.payload;
    },
  },
});

export const { setItems, setCurrentCake } = cakeSlice.actions;
export default cakeSlice.reducer;
