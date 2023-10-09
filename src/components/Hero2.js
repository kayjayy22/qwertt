import React from "react";

const Hero2 = () => {
  return (
    <div className="bg-orange-200">
      <div className="bg-orange-200 flex justify-between p-10">
        <div>
          <img
            src="https://images.unsplash.com/photo-1696484863977-7f7feb9a2adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
            className="w-1/2 max-w-lg"
          />
        </div>
        <div className="flex gap-20 ">
          <div>contact</div>
          <div>contact</div>
          <div>contact</div>
        </div>
        <div>
          <button className=" bg-orange-100 px-3 py-3 text-black font-semibold">
            Login
          </button>
        </div>
      </div>
      <div className="">
        <h1 className=" flex text-5xl text-left mt-20 font-poppings text-blue-950">
          Launch your own online learning platform
        </h1>
      </div>
    </div>
  );
};
export default Hero2;

{
  /* <h1 className=" flex text-5xl text-left mt-20 font-poppings text-blue-950">
            Launch your own online learning platform
          </h1>
          <div className=" grid grid-flow-row gap-4 font-poppings text-slate-800 ">
            <p className=" flex gap-1 ">
              <CheckCircle className="bg-white p-1 rounded-full" /> Skilled and
              experienced coaches
            </p>
            <p className=" flex gap-1 ">
              <CheckCircle className="bg-white p-1 rounded-full " />
              Supportive 1:1 Coaching
            </p>
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 "
            />
            <button className="bg-blue-950 py-3 w-1/2 rounded-md text-white text-sm">
              Start learning
            </button>
            <p>
              <span className="text-blue-950 font-bold flex">
                {" "}
                <Award className="  bg-slate-800 text-white w-20 h-10 rounded-full " />
                Free trial available for new users. Get started today and enjoy
                the benefits of our platform.
              </span>{" "}
            </p> */
}
