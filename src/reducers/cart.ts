import { createSlice } from "@reduxjs/toolkit";
import CartItemTypes from "../types/cartItem";

interface InitialState {
  value: {
    items: CartItemTypes[];
    opened: boolean | null;
    modalTitle: string;
    itemToEdit: CartItemTypes | null;
  };
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      items: [],
      opened: false,
      modalTitle: "",
      itemToEdit: null,
    },
  } as InitialState,
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
    setItemToEdit: (state, action) => {
      state.value.itemToEdit = action.payload;
    },
  },
});

export const { setItemsOnCart, setCartOpened, setModalTitle, setItemToEdit } =
  cartSlice.actions;
export default cartSlice.reducer;
