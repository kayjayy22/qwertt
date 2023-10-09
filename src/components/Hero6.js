import React from "react";
import { ArrowUpRight, Shield } from "react-feather";

const Hero4 = () => {
  return (
    <div className=" h-screen max-w-7xl mx-auto">
      <div className=" flex justify-between px-10 py-4">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex gap-10 text-neutral-800 ">
          <div className="hover:text-black hover:font-semibold">Home</div>
          <div className="hover:text-black hover:font-semibold">Work</div>
          <div className="hover:text-black hover:font-semibold">About</div>
          <div className="hover:text-black hover:font-semibold">Services</div>
          <div className="hover:text-black hover:font-semibold">Contact</div>
        </div>
        <div>
          <button className=" bg-white border-2 border-black hover:bg-gray-100 text-black font-bold py-2 px-4 rounded-full flex">
            {" "}
            Hire now <ArrowUpRight />
          </button>
        </div>
      </div>
      <div className="flex mt-10 px-5 py-10 items">
        <h1 className=" text-7xl text-neutral-800 font-normal ">
          Building next-level products, brands & experiences
        </h1>
        <div className="flex flex-col items-center">
          <img
            className=" rounded-3xl  bg-red-100 md:w-1/2 sm:collapse md:visible overflow-hidden hover:shadow-lg border-2 border-white cursor-pointer mx-auto bouncy-click"
            src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <p className="font-semibold font-poppings rounded-r-full text-lg text-center flex text-stone-700">
            <Shield className="w-10" />
            We are a professional agency working with hearts from 2020
          </p>
        </div>
      </div>
      <div className=" flex justify-end gap-1 ">
        <img
          className="p-1 rounded-ss-full w-1/2 "
          src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <h1 className=" text-7xl text-neutral-800 font-poppings ">
          What we do :{" "}
          <span className="text-2xl ">
            For almost 100 years, we’ve forged a solid reputation for providing
            exceptional service and innovative, top-quality mechanical system
            solutions backed by a deep and growing expertise.
          </span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Hero4;
