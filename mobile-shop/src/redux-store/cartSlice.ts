import { createSlice } from "@reduxjs/toolkit/react";
type myobj = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
};
type data = {
  items: myobj[];
};
const initialState: data = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const data = [...state.items];
      const main = data.filter((item) => item.id !== action.payload);
      console.log(main);

      state.items = main;
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
