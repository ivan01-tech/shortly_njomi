/* eslint-disable no-empty-pattern */
import React from "react";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="w-full flex flex-col md:flex-row-reverse  md:h-[20rem] gap-3 mt-8">
      <div className="h-full flex justify-center items-center">
        <img
          className="h-auto object-contain w-full m-w-[500px]"
          src="/images/illustration-working.svg"
          alt=""
        />
      </div>

      <section className="flex flex-col p-4 px-2 gap-4 md:text-left items-start">
        <h1 className="text-5xl text-very-dark-blue font-bold title_font_bold">
          More than just shorter links
        </h1>
        <p className="text-gray">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>

        <div className="text-gray-600 md:w-full  font-bold md:flex justify-center  md:justify-start">
          <a
            className="hover:opacity-70 block w-auto font-bold text-white   text-center bg-primary-cyan  rounded-full py-2 px-6"
            href={"/"}
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}

export default Banner;
