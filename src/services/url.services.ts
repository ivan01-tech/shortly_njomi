import makeRequest from "@/lib/makeRequest";
import { GLOBAL_URL } from "@/lib/url";
import { Url } from "@/lib/userModel";
import { ShrtlnkResponse } from "@/types/axios";

// fucntion to shorten and url
export async function shrtlnkUrl(data: Url) {
  return await makeRequest<ShrtlnkResponse>(GLOBAL_URL.short_url, {
    data,
    method: "POST",
  });
}
