import instance from "@/config/Axios";
import { IError } from "@/types/axios";
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
      if (res.status === 400 || res.status === 500) {
        console.log("status: " + res.status);
        throw new Error((res.data as IError).message);
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
