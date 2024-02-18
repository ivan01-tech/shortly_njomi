import axios from "axios";

const apiUrl = import.meta.env.VITE_SHORTLINK_API_URL;
const apiKey = import.meta.env.VITE_SHORTLINK_API_KEY;
// Create an instance of Axios with custom configurations
console.log("first instance : ", apiKey, apiUrl);
const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    crossDomain: true,
    "api-key": apiKey,

    withCredentials: true,
    transformRequest: [
      function (data: any, headers: any) {
        // Force la capitalisation de l'en-tête "api-key"
        headers["api-key"] = apiKey;

        return JSON.stringify(data);
      },
    ],
  },
});

export default instance;
