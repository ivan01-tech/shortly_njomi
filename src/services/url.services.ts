import makeRequest from "@/lib/makeRequest";
import { GLOBAL_URL } from "@/lib/url";
import { Url } from "@/lib/userModel";
import { ShrtlnkResponse } from "@/types/axios";

// fucntion to shorten and url
export async function shrtlnkUrl(data: Url) {
  return await makeRequest<ShrtlnkResponse>(GLOBAL_URL.short_url, {
    data,
    method: "POST",
  })
    .then((res) => {
      if ("message" in res) {
        return Promise.reject(res);
      }

      return res;
    })
    .catch((err) => Promise.reject({ message: err.message }));
}
