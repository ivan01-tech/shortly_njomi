"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Url, UrlModel, UrlType } from "@/lib/userModel";
import { Input } from "../ui/input";
import { ButtonLoading } from "../ui/LoadingBtn";
import { IResponse, ShrtlnkResponse } from "@/types/axios";

type UrlProps = {
  setStoredValue: (
    newValue: IResponse[] | ((value: IResponse[]) => IResponse[])
  ) => void;

  responObjUrl: {
    error: string | null;
    loading: boolean;
    value: ShrtlnkResponse;
    executeFn: (params: Url) => Promise<ShrtlnkResponse>;
  };
};

export default function UrlShortenForm({
  responObjUrl,
  setStoredValue,
}: UrlProps) {
  // zod and RFC
  const { error, loading, executeFn, value } = responObjUrl;
  const {
    register,
    handleSubmit,
    // trigger,
    formState: { errors },
  } = useForm<UrlType>({
    resolver: zodResolver(UrlModel),
  });

  const handlerSubmitHelper = async (data: UrlType) => {
    console.log("first form submission : ", data);
    try {
      const dataUrlValue = await executeFn(data);

      if ("message" in dataUrlValue) {
        console.error("Error:", dataUrlValue.message);
      } else {
        console.log("Short Link:", dataUrlValue, value);
        setStoredValue((prev) => [...prev, dataUrlValue]);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const onSubmit: SubmitHandler<UrlType> = (url) => {
    console.log("first form submission : ", url);
    handlerSubmitHelper(url);
  };

  return (
    <>
      <div className="absolute url_form rounded-md -top-[50px] inset-0     p-0  mx-4 md:m-0 h-[160px]">
        <Card className="  flex justify-center items-center m-auto bg-transparent h-full ">
          <div className="flex items-center justify-center flex-col w-full">
            <form
              className="w-full  !py-4 !px-2 h-full justify-center items-center flex flex-col flex-1  gap-2 md:flex-row "
              onSubmit={handleSubmit(onSubmit)}
            >
              <CardContent className="w-full">
                <Input
                  {...register("url", { required: true })}
                  id="url"
                  type="url"
                  className={` flex-1 w-full  ${
                    errors.url
                      ? "border-secondary-red border-[3px] text-[.7rem]"
                      : ""
                  }`}
                  placeholder="Shorten a link here.."
                />
              </CardContent>
              <CardFooter className="flex flex-col w-full md:w-auto  m-auto">
                {!loading ? (
                  <Button
                    type="submit"
                    className="!w-full font-bold bg-primary-cyan"
                  >
                    Shortten it !
                  </Button>
                ) : (
                  <ButtonLoading />
                )}
              </CardFooter>
              {/* </div> */}
            </form>
            {errors.url && (
              <p className="text-secondary-red">{errors.url.message}</p>
            )}
          </div>
        </Card>
      </div>
    </>
  );
}
