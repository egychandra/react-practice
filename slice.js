import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice (Reducer + Action)
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    }
  }
});

// Store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

console.log("On Create Store: ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

// Dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 1 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 2 }));