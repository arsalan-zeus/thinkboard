import axios from "axios";
// in production, there's no localhost so we have to make this dynamic
// in production, the base URL will be relative to the server's root
// in development, it will point to the local server
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
