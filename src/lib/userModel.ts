import { z } from "zod";

export type Url = {
  url: string;
};

export const UrlModel = z.object({
  url: z.string().url().trim().toLowerCase(),
});

export type UrlType = z.infer<typeof UrlModel>;
