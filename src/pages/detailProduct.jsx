import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById } from "../services/product.service";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(id,(data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {Object.keys(product).length > 0 && (
        <div className="flex font-sans max-w-xl">
          <div className="flex-none w-48 relative">
            <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {product.title}
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                {product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
              </div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                Review {product.rating.rate}/5 ({product.rating.count})
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">
                {product.description}
              </div>
            </div>
            <p className="text-sm text-slate-700">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      )}
    </div>
  )
}

export default DetailProductPage