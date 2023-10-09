import React from "react";
import { ArrowRight } from "react-feather";

const Hero7 = () => {
  return (
    <div className=" p-10">
      <div className="flex justify-between">
        <div className="text-4xl font-bold text-blue-700  font-poppings">
          A.J.T
        </div>
        <div className=" flex gap-10 items-center ">
          <div className="flex gap-4 font-medium  text-slate-800">
            <div>Web design</div>
            <div>SEO</div>
            <div>Our work</div>
            <div>Blog</div>
          </div>
          <div>
            <button className=" border-2 bg-blue-700 hover:bg-blue-500 text-white  py-2 px-4 rounded-lg flex">
              {" "}
              Hire now
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full text-center p-10 ">
        <div className="">
          <div className="mt-10 mb-10 ">
            <button className=" bg-gray-50 border-2 text-xs font-poppings text-center text-gray-400 py-1 px-2 rounded-lg flex items-center gap-2 h-final w-1/3 ">
              <span class="relative flex h-3 w-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
              Delivering elite solutions for5+ years
            </button>
          </div>

          <h1 className=" text-5xl font-bold font-poppings text-left animate-pulse ">
            Helping you move <br />
            forward digitally
          </h1>
          <p className=" text-left font-poppings text-sm mt-10 mb-10 text-gray-400 animate-fade-right ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
          <div className="grid gap-2">
            <button className=" bg-blue-700 hover:bg-blue-500 text-white items-center py-2 px-4 rounded-lg flex justify-between h-final w-1/2 text-2xl">
              Get started <ArrowRight className="animate-bounce " />
            </button>
            <button className=" items-center border-2 border-blue-500 bg-white hover:bg-gray-100 text-blue-500  py-2 px-4 rounded-lg flex justify-between h h-final w-1/2 text-2xl">
              Watch Demo
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="grid gap-10">
          <img
            className="rounded-lg w-1/2"
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
          <div className="grid gap-2 p-10 ">
            <div className="bg-red-500 rounded-xl text-3xl bg-clip-border"></div>
            <div className="bg-blue-500 rounded-xl text-3xl p-10 bg-clip-border"></div>
          </div>

          <div className="bg-gray-100 rounded-xl ">
            <div className="flex justify-evenly ">
              <div>
                <h1 className="text-2xl font-bold text font-poppings ">
                  {" "}
                  45M+
                  <p className="text-sm font-normal text-gray-400">
                    Page Visits
                  </p>
                </h1>
              </div>
              <div>
                <h1 className="text-2xl font-bold text font-poppings">
                  {" "}
                  $250M+
                  <p className="text-sm  text-gray-400 font-normal">
                    Sales Growth
                  </p>
                </h1>
              </div>
              <div>
                <h1 className="text-2xl font-bold text  font-poppings">
                  {" "}
                  50M+
                  <p className="text-sm font-normal text-gray-400">
                    Engagements
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero7;
