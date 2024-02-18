import axios from "axios";

const apiUrl = import.meta.env.VITE_SHORTLINK_API_URL;
const apiKey = import.meta.env.VITE_SHORTLINK_API_KEY;
// Create an instance of Axios with custom configurations
console.log("first instance : ", apiKey, apiUrl);
const instance = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "api-key": apiKey,
    Accept: "application/json",
    withCredentials: true,
  },
});

export default instance;
