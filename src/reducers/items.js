import { createSlice } from "@reduxjs/toolkit";
import database from "../db.json";

const initialItems = database.items;

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    value: { items: initialItems, title: "All Products", opened: null },
  },
  reducers: {
    setInitial: (state) => {
      state.value.items = initialItems;
      state.value.title = "All products";
    },
    setItems: (state, action) => {
      state.value.items = action.payload.items;
      action.payload.title && (state.value.title = action.payload.title);
    },
    setItemOpened: (state, action) => {
      state.value.opened = action.payload;
    },
  },
});

export const { setInitial, setItems, setItemOpened } = itemsSlice.actions;
export default itemsSlice.reducer;
