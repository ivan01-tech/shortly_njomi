import instance from "@/config/Axios";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Une fonction pour effectuer n'importe quel type de requête avec l'instance Axios.
 */
async function makeRequest<T>(
  url: string,
  options: AxiosRequestConfig
): Promise<T> {
  return instance(url, options)
    .then((res: AxiosResponse<T>) => {
      if ("message" in res) {
        console.log("status: " + res.status);
        return Promise.reject(res);
      }
      const data = res.data;
      // TODO à supprimer
      console.log("data : ", data, url);
      return data;
    })
    .catch((err: AxiosError) => {
      console.log("erreur : ", err);
      return Promise.reject({ message: err.message });
    });
}

export default makeRequest;
