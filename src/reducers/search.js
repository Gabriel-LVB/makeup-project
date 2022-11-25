import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  name: "",
  items: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState: { value: initialValues },
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
