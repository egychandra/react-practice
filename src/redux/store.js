import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice
  }
});

console.log("On Create Store: ", store.getState());

store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

export default store;