import React from "react";

const Hero = () => {
  return (
    <div class="flex justify-center w-full h-full py-10 px-14 bg-slate-900 text-white ">
      <img
        class="sm:w-1/2 h-64 mb-8 "
        src="https://avatars.githubusercontent.com/u/71329942?v=4"
        alt="avatar"
      />
      <div class=" flex flex-col justify-center  sm:w-1/2 w-1/2  ">
        <h1 class="sm:text-6xl text-3xl font-bold">lorem ipsum</h1>
        <p class="mt-4 sm:text-xl text-xs font-bold text-gray-500 sm:w-1/2 w-full">
          lorem ipsum lulli khulli dulli lorem ipsum lulli khulli dulli lorem
          ipsum lulli khulli dulli ipsum lulli khulli dulliipsum lulli khulli
          dulliipsum lulli khulli dulli{" "}
        </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white sm:font-bold font-semibold sm:py-2 sm:px-4 sm:w-1/4 rounded-lg mt-10">
          Button
        </button>
      </div>
    </div>
  );
};

export default Hero;
