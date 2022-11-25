import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import searchReducer from "./reducers/search";
import itemsReducer from "./reducers/items";
import paginationReducer from "./reducers/pagination";
import cartReducer from "./reducers/cart";
// import axios from "axios";

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

// fetch("http://localhost:3001/items")
//   .then((response) => response.json())
//   .then((data) => {
//     const getItems = () =>
//       new Promise((resolve, reject) =>
//         resolve(
//           [...data].reduce(async (array, item) => {
//             let isValid = true;
//             const image = new Image();
//             image.src = item.image_link;
//             image.addEventListener("error", () => {
//               isValid = false;
//             });
//             const verify = () => {
//               return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                   resolve(isValid);
//                 }, 5000);
//               });
//             };
//             const result = await verify().then((result) => result);
//             if (!result) {
//               return array;
//             } else {
//               return (await array).concat(item);
//             }
//           }, [])
//         )
//       );
//     return getItems();
//   })
//   .then((items) => console.log(items.length));
