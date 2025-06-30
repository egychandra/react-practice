import { useState, useEffect, useContext } from "react"
import { useSelector } from "react-redux"
import { DarkMode } from "../../context/DarkMode";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button";

const Navbar = () => {
  const username = useLogin();
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);

    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    // localStorage.removeItem("email");
    // localStorage.removeItem("password");
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <div
      className="flex justify-end items-center h-20 bg-blue-600 text-white px-10"
    >
      {username && <h1 className="text-xl font-bold">Hello, {username}</h1>}
      <Button
        classname="ml-5 bg-black"
        onClick={handleLogout}
      >
        Logout
      </Button>
      <div
        className="bg-white text-black w-8 h-8 rounded-full flex justify-center items-center ml-5"
      >
        {totalCart}
      </div>
      <Button
        classname="bg-black ml-5"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  )
}

export default Navbar;