import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search";
import itemsReducer from "./items";
import paginationReducer from "./pagination";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    search: searchReducer,
    items: itemsReducer,
    pagination: paginationReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
