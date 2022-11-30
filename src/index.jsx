import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import searchReducer from "./reducers/search";
import itemsReducer from "./reducers/items";
import paginationReducer from "./reducers/pagination";
import cartReducer from "./reducers/cart";

const store = configureStore({
  reducer: {
    search: searchReducer,
    items: itemsReducer,
    pagination: paginationReducer,
    cart: cartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
