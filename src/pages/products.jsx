// import { useState, useEffect, useRef } from "react"
import { useState, useEffect, useContext } from "react"
import { getAllProducts } from "../services/product.service"
// import { getUsername } from "../services/auth.service"
import { useLogin } from "../hooks/useLogin"
import { DarkMode } from "../context/DarkMode"
import CardProduct from "../components/Fragments/CardProduct"
import TableCart from "../components/Fragments/TableCart"
import Navbar from "../components/Layouts/Navbar"
// import Counter from "../components/Fragments/Counter"

// const products = [
//   {
//     id: 1,
//     title: "Kaos Adadeh",
//     image: "/images/shirt-1.jpg",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus repellendus similique mollitia sint illum sequi corrupti eligendi, laborum fugit?",
//     price: 500000
//   },
//   {
//     id: 2,
//     title: "Kaos Adadong",
//     image: "/images/shirt-1.jpg",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus repellendus similique mollitia sint illum sequi corrupti eligendi, laborum fugit?",
//     price: 200000
//   },
//   {
//     id: 3,
//     title: "Kaos AdaJuga",
//     image: "/images/shirt-1.jpg",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus repellendus similique mollitia sint illum sequi corrupti eligendi, laborum fugit?",
//     price: 100000
//   }
// ]

// const email = localStorage.getItem("email");

const ProductPage = () => {
  // const [username, setUsername] = useState("");
  useLogin();
  const { isDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if(token) {
  //     setUsername(getUsername(token));
  //   } else {
  //     window.location.href = "login";
  //   }
  // }, []);

  useEffect(() => {
    getAllProducts((data) => {
      setProducts(data);
    });
  }, []);

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  // useEffect(() => {
  //   if(products.length > 0 && cart.length > 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return acc + product.price * item.qty;
  //     }, 0);
  
  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart, products]);

// const handleAddToCart = (id) => {
//   if(cart.find((item) => item.id === id)) {
//     setCart(
//       cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
//     );
//   } else {
//     setCart([...cart, {id, qty: 1}]);
//   }
// }

// useRef
// const cartRef = useRef(JSON.parse(localStorage.getItem("cartRef")) || []);

// const handleAddToCartRef = (id) => {
//   if(cartRef.current.find((item) => item.id === id)) {
//     cartRef.current = cartRef.current.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item);
//   } else {
//     cartRef.current = [...cartRef.current, {id, qty: 1}];
//   }
//   localStorage.setItem("cartRef", JSON.stringify(cartRef.current));
// }

  return (
    <>
      <Navbar />
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-800"}`}>
        <div className="flex flex-wrap w-4/6">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} id={product.id} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                // handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-2 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
      {/* <div className="flex justify-center mb-5">
        <Counter />
      </div> */}
    </>
  )
}

export default ProductPage