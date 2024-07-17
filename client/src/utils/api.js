import axios from "axios";

//create axios instance
const API = axios.create({
  baseURL: "https://studyhipe.onrender.com/",
  timeout: 10000,
  withCredentials: true,
});

//export default
export default API;
