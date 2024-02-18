"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UrlModel, UrlType } from "@/lib/userModel";
import { Input } from "../ui/input";
import { useAsyncFn } from "@/hooks/useAsync";
import { shrtlnkUrl } from "@/services/url.services";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function UrlShortenForm() {
  // zod and RFC
  const {
    register,
    handleSubmit,
    // trigger,
    formState: { errors },
  } = useForm<UrlType>({
    resolver: zodResolver(UrlModel),
  });

  // state to keep user data from local storage
  const { value, removeStoredValue, setStoredValue } = useLocalStorage(
    "myStorage",
    []
  );
  const {
    executeFn,
    error,
    value: dataUrlValue,
    loading,
  } = useAsyncFn(shrtlnkUrl);

  const handlerSubmitHelper = async (data: UrlType) => {
    console.log("first form submission : ", data);
    try {
      await executeFn(data);

      // save it to the loacalstorage
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const onSubmit: SubmitHandler<UrlType> = (url) => {
    console.log("first form submission : ", url);
    handlerSubmitHelper(url);
  };

  return (
    <div className="absolute url_form rounded-md -top-[50px] inset-0 h-max  w-full    p-0 m-O">
      <Card className="  flex justify-center items-center m-auto bg-transparent h-full">
        <form
          className="w-full p-4 h-full justify-center items-center flex !pt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex h-full flex-1 items-center">
            <CardContent className=" flex-1">
              <div className="grid gap-2">
                <Input
                  {...register("url", { required: true })}
                  id="url"
                  type="url"
                  className={`${
                    errors.url
                      ? "border-secondary-red border-[3px] text-[.7rem]"
                      : ""
                  }`}
                  placeholder="Shorten a link here.."
                />
                {errors.url && (
                  <p className="text-secondary-red">{errors.url.message}</p>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                className="w-full font-bold bg-primary-cyan"
              >
                Shorten it !
              </Button>
            </CardFooter>
          </div>
        </form>
      </Card>
    </div>
  );
}
