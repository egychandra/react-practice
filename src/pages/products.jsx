import CardProduct from "../components/Fragments/CardProduct"

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shirt-1.jpg" />
        <CardProduct.Body title="Kaos Baru">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus repellendus similique mollitia sint illum sequi corrupti eligendi, laborum fugit?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp.100.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shirt-1.jpg" />
        <CardProduct.Body title="Kaos Baru">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus repellendus similique mollitia sint illum sequi corrupti eligendi, laborum fugit?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp.100.000" />
      </CardProduct>
    </div>
  )
}

export default ProductPage