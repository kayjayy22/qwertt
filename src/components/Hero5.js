import React from "react";

const Hero5 = () => {
  return (
    <div className=" h-screen max-w-6xl mx-auto font-readex">
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
          <button className=" bg-zinc-950 border-2 border-black hover:bg-gray-100 text-white  py-3 px-6 flex font-light">
            {" "}
            Hire now
          </button>
        </div>
      </div>
      <div className=" ">
        <div className="flex flex-row items-center justify-center gap-10 p-10">
          <img
            className=" rounded-full bg-red-100 md:w-2/12 sm:collapse md:visible overflow-hidden hover:shadow-lg border-2 border-white cursor-pointer bouncy-click"
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80"
            alt=""
          />
          <h1 className="text-8xl font-poppings font-extrabold">
            Bring the newly{" "}
          </h1>
        </div>
        <div className="flex items-center justify-center gap-10 p-10">
          <h1 className="text-7xl font-poppings font-semibold">
            designed change{" "}
          </h1>
          <img
            className=" object-cover rounded-full rounded-tr-none bg-red-100 w-full h-40 sm:collapse md:visible overflow-hidden hover:shadow-lg border-2 border-white cursor-pointer bouncy-click"
            src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-10 p-10">
          <h1 className="text-7xl font-poppings font-bold">to your home </h1>

          <img
            className=" rounded-full  bg-red-100 md:w-2/12 sm:collapse md:visible overflow-hidden hover:shadow-lg border-2 border-white cursor-pointer bouncy-click"
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero5;
