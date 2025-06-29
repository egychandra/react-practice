import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   cart: []
// };

// Action
const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

// Reducer
                                  // initialState
const cartReducer = createReducer([], (builder) => {
                  // Action Type
  builder.addCase(addToCart, (state, action) => {
    // state.cart.push(action.payload);
    state.push(action.payload);
  });
});

                                   // initialState
const loginReducer = createReducer({ status: false }, (builder) => {
                  // Action Type
  builder.addCase(login, (state, action) => {
    state.status = action.payload;
  });
});

// Store
const store = configureStore({
  // reducer: cartReducer
  reducer: {
    cart: cartReducer,
    login: loginReducer
  }
});

console.log("On Create Store: ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

// Dispatch
// const action = { type: "ADD_TO_CART", payload: { id: 1, qty: 1 } };
// store.dispatch(action);
store.dispatch(addToCart({ id: 1, qty: 1 }));
store.dispatch(addToCart({ id: 2, qty: 2 }));
store.dispatch(login(true));