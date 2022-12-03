import { createSlice } from "@reduxjs/toolkit";
import ItemTypes from "../types/item";

interface InitialState {
  value: { name: string; items: ItemTypes[] };
}

const initialValues = {
  name: "",
  items: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState: { value: initialValues } as InitialState,
  reducers: {
    searchFor: (state, action) => {
      state.value.name = action.payload.name;
      state.value.items = action.payload.items;
    },
    clearSearch: (state) => {
      state.value = initialValues;
    },
    clearSearchName: (state) => {
      state.value.name = "";
    },
  },
});

export const { searchFor, clearSearch, clearSearchName } = searchSlice.actions;
export default searchSlice.reducer;
