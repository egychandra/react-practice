import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button"

const products = [
  {
    id: 1,
    title: "Kaos Baru",
    image: "/images/shirt-1.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus repellendus similique mollitia sint illum sequi corrupti eligendi, laborum fugit?",
    price: "Rp.100.000"
  }
]

const email = localStorage.getItem("email");

const ProductPage = () => {
const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
}

  return (
    <>
      <div className="flex justify-end items-center h-20 bg-blue-600 text-white px-10">
        {email}
        <Button
          classname="ml-5 bg-black"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title}>
              {product.desc}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  )
}

export default ProductPage