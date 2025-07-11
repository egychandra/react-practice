import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div
      className="flex flex-col justify-between w-full max-w-xs bg-gray-600 border border-gray-500 rounded-lg shadow mx-2 my-2"
    >
      {children}
    </div>
  )
}

const Header = (props) => {
  const { image, id } = props;

  return (
    <Link to={`/product/${id}`}>
      <img
        className="p-8 rounded-t-lg h-60 w-full"
        src={image}
        alt="shoes"
      />
    </Link>
  )
}

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="h-full px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title.substring(0, 20)} ...
        </h5>
        <p className="text-m text-white">
          {children.substring(0, 100)} ...
        </p>
      </a>
    </div>
  )
}

const Footer = (props) => {
  const dispatch = useDispatch();
  // const { price, id, handleAddToCart } = props;
  const { price, id } = props;

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
      <Button
        classname="bg-blue-600"
        // onClick={() => handleAddToCart(id)}
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add to cart
      </Button>
    </div>
  )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct