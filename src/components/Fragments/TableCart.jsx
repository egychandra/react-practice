// import { useState, useEffect, useRef, useContext } from "react";
import { useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  const { isDarkMode } = useContext(DarkMode);
  const cart = useSelector((state) => state.cart.data);
  // const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useTotalPriceDispatch();
  const totalPrice = useTotalPrice();

  useEffect(() => {
    if(products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
  
      // setTotalPrice(sum);
      dispatch({ type: "SET_TOTAL_PRICE", payload: sum });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products, dispatch]);

  const totalRef = useRef(null);

  useEffect(() => {
    if(cart.length > 0) {
      totalRef.current.style.display = "table-row";
    } else {
      totalRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-2 ${isDarkMode && "text-white"}`}
    >
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 && cart.map((item) => {
          const product = products.find((product) => product.id === item.id);

          return(
            <tr key={item.id}>
              <td>{product.title.substring(0, 20)} ...</td>
              <td>{product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
              <td>{item.qty}</td>
              <td>{(item.qty * product.price).toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
            </tr>
          )
        })}
        <tr ref={totalRef}>
          <td colSpan={3}><b>Total Price</b></td>
          <td><b>{totalPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })}</b></td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableCart;