import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: { items: [], opened: false, modalTitle: "" } },
  reducers: {
    setItemsOnCart: (state, action) => {
      state.value.items = action.payload;
    },
    setCartOpened: (state, action) => {
      state.value.opened = action.payload;
    },
    setModalTitle: (state, action) => {
      state.value.modalTitle = action.payload;
    },
  },
});

export const { setItemsOnCart, setCartOpened, setModalTitle } =
  cartSlice.actions;
export default cartSlice.reducer;
