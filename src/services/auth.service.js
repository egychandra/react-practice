import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (payload, callback) => {
  axios.post("https://fakestoreapi.com/auth/login", payload)
  .then((response) => {
    callback(true, response.data.token);
  })
  .catch((error) => {
    callback(false, error.response.data);
  })
}

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
}