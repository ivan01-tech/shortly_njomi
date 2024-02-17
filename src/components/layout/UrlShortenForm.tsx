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
    <div className="url_form">
      <form
        className="w-full p-4 flex justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
        style={{
          backgroundImage: "/images/bg-boost-mobile.svg",
        }}
      >
        <Card
          className="w-full bg-transparent"
          style={{
            backgroundImage: "/images/bg-boost-mobile.svg",
          }}
        >
          <CardContent className="grid gap-4">
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
                <p className="text-senborder-secondary-red text-[.7rem]">
                  {errors.url.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full">
              Shorten it !
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
