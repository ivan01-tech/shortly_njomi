"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UrlModel, UrlType } from "@/lib/userModel";
import { Input } from "../ui/input";

export default function UrlShortenForm() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<UrlType>({
    resolver: zodResolver(UrlModel),
  });

  const handlerSubmitHelper = (Url: UrlType) => {
    console.log("first form submission : ", Url);
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
