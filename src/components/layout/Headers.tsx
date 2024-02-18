import { Menu } from "lucide-react";
import React from "react";
import { HoverCard } from "../ui/hover-card";
import { HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Separator } from "../ui/separator";

function Headers() {
  const [state] = React.useState(false);

  const menus = [
    { title: "Features", path: "/your-path" },
    { title: "Pricing", path: "/your-path" },
    { title: "Ressources", path: "/your-path" },
  ];
  return (
    <header className="bg-white">
      <nav className="bg-white w-full max_width">
        <div className="items-center gap-6  max-w-screen-xl mx-auto md:flex ">
          <div className="flex  items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <img src="/images/logo.svg" alt="" />
            </a>
            <div className="md:hidden ">
              <HoverCard>
                <HoverCardTrigger>
                  <button className="text-primary-dark-violet/40 outline-none p-2 rounded-md focus:border-gray-400 focus:border">
                    <Menu />
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="!w-[100%] text-white">
                  <div className="w-[90vw] m-4 bg-transparent flex justify-center ">
                    <ul className="space-y-6 flex flex-col p-4 mr-4 rounded-[10px] bg-primary-dark-violet justify-center items-center w-[90%]">
                      {menus.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 hover:text-indigo-600 font-bold "
                        >
                          <a className="font-bold " href={item.path}>
                            {item.title}
                          </a>
                        </li>
                      ))}
                      <Separator className="bg-gray" />

                      <li className="text-gray-600 w-[90%] font-bold  flex justify-center items-center">
                        <a
                          className="font-bold   text-center w-full rounded-full py-2 px-3"
                          href={"/"}
                        >
                          Log in
                        </a>
                      </li>

                      <li className="text-gray-600 w-[90%] font-bold  flex justify-center items-center">
                        <a
                          className="font-bold   text-center bg-primary-cyan w-full rounded-full py-2 px-3"
                          href={"/"}
                        >
                          Sign Up
                        </a>
                      </li>
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <div className="flex flex-1 gap-4 items-center">
                {menus.map((item, idx) => (
                  <li key={idx} className="text-gray-600 ">
                    <a
                      className="hover:text-black hover:font-bold text-gray"
                      href={item.path}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </div>
              <div className="flex gap-4 items-center w-auto">
                <li className="text-gray-600  font-bold ">
                  <a
                    className="hover:text-black hover:font-bold text-gray font-bold"
                    href={"/"}
                  >
                    Log in
                  </a>
                </li>

                <li className="text-gray-600  font-bold ">
                  <a
                    className="hover:opacity-70 font-bold text-white   text-center bg-primary-cyan  rounded-full py-2 px-3"
                    href={"/"}
                  >
                    Sign Up
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Headers;
