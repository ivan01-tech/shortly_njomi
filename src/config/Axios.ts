import axios from "axios";

const apiUrl = import.meta.env.REACT_APP_SHORTLINK_API_URL;
const apiKey = import.meta.env.REACT_APP_SHORTLINK_API_KEY;
// Create an instance of Axios with custom configurations
const instance = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "api-key": apiKey,
    Accept: "application/json",
  },
});

export default instance;
