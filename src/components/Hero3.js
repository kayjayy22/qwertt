import React from "react";
import { Search, User, Video } from "react-feather";

const Hero3 = () => {
  return (
    <div className="bg-gradient-to-t from-[#505285] via-[#585e92] to-[#65689f] via-[#7474b0] to-[#7e7ebb] via-[#8389c7] to-[#9795d4] via-[#a2a1dc] to-[#b5aee4]] h-screen ">
      <div className="flex justify-between p-5 ">
        <div className="text-2xl text-white font-semibold italic font-dela">
          Zap Pay
        </div>
        <div className=" flex gap-20 text-neutral-200 text-4xl font-dancing  ">
          <div>Features</div>
          <div>Pricing</div>
          <div>About</div>
        </div>
        <div className="flex gap-10 text-purple-200 bg-fuchsia-800 rounded-full py-5 px-10 ">
          <Search />
          <User />
        </div>
      </div>
      <div className="rounded-full bg-red-100 md:w-1/6 sm:collapse md:visible overflow-hidden hover:shadow-lg border-8 border-white cursor-pointer mx-auto bouncy-click">
        <img
          src="https://plus.unsplash.com/premium_photo-1681819806412-418bb52f8cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80"
          alt=""
        />
      </div>
      <div className="flex items-center flex-col text-white font-poppings text-6xl mb-10 gap-5 ">
        <div>Control your expenses with our help.</div>
        <div className="text-blue-100 font-bold text-7xl ">
          Finance with<span className="text-lime-400">Us</span>
        </div>
      </div>
      <div className="flex justify-center gap-10 text-xl">
        <button className=" bg-lime-200 text-black px-10 py-4 rounded-full font-poppings">
          Try free Trial
        </button>{" "}
        <button className=" bg-sky-50 text-black px-10 py-4 rounded-full font-poppings flex gap-4 ">
          <Video />
          Watch video
        </button>
      </div>
    </div>
  );
};

export default Hero3;
