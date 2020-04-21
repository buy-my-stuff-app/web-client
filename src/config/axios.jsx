import axios from "axios";
axios.defaults.withCredentials = true;

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SERVER_URL
    : "http://localhost:5000";

const axiosService = axios.create({
  baseURL: BASE_URL
});

export default axiosService;
