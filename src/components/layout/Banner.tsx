/* eslint-disable no-empty-pattern */

import { Button } from "../ui/button";

function Banner() {
  return (
    <div className="flex justify-center items-center bg-white pb-[100px]">
      <div className="w-full flex flex-col md:flex-row-reverse  md:h-[32rem] gap-6 mt-8 max_width">
        <div className="h-full flex justify-center items-center">
          <img
            className="h-auto w-[80%] object-contain md:w-full"
            src="/images/illustration-working.svg"
            alt=""
          />
        </div>

        <section className="flex justify-center flex-col p-4 px-2 gap-4 md:gap-8 md:text-left items-start">
          <h1 className="text-3xl md:text-5xl text-very-dark-blue font-bold title_font_bold ">
            More than just shorter links
          </h1>
          <p className="text-gray">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          <div className="text-gray-600 w-full  font-bold flex justify-center  md:justify-start">
            <Button
              className="hover:opacity-70  font-bold text-white   text-center bg-primary-cyan  rounded-full py-2 px-6 max-w-[250px] m-auto md:m-0"
              // href={"/"}
            >
              Get Started
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Banner;
