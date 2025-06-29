import axios from "axios"

export const getAllProducts = (callback) => {
  axios.get("https://fakestoreapi.com/products")
  .then((response) => {
    callback(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
}

export const getProductById = (id, callback) => {
  axios.get(`https://fakestoreapi.com/products/${id}`)
  .then((response) => {
    callback(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
}