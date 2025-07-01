/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext(null);
const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch(action.type) {
    case "SET_TOTAL_PRICE":
      return action.payload;
    default:
      return state;
  }
}

export const TotalPriceContextProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, 0);

  return(
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  )
}

export const useTotalPrice = () => useContext(TotalPriceContext);
export const useTotalPriceDispatch = () => useContext(TotalPriceDispatchContext); 