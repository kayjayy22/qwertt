import React from "react";
import { ArrowRight, Layout, Share2, Briefcase, Globe } from "react-feather";
import { motion } from "framer-motion";

const Hero8 = () => {
  return (
    <div className="bg-amber-100 h-screen relative -z-20">
      <div className="text-[25rem] text-stone-300 opacity-50 font-bold absolute -z-10 top-0 left-48 w-2/3 leading-none text-right">
        WHY US
      </div>
      <div className="p-10 z-20">
        <div className="flex justify-between">
          <div className="">
            <motion.div
              initial={{ xy: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className=" text-3xl font-poppings font-bold  text-stone-700 "
            >
              A.J.T
            </motion.div>
          </div>
          <motion.div
            initial={{ xy: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex font-poppings text-stone-800 gap-10 "
          >
            <div className=" hover:underline decoration-red-800 decoration-2">
              Web Design
            </div>
            <div className="hover:underline decoration-red-800 decoration-2">
              Expertise
            </div>
            <div className="hover:underline decoration-red-800 decoration-2">
              Portfolio
            </div>
            <div className="hover:underline decoration-red-800 decoration-2">
              Blog
            </div>
          </motion.div>
          <motion.div
            initial={{ xy: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex"
          >
            <button className="flex items-center font-poppings text-stone-800">
              <span class="relative flex h-3 w-3 items-center">
                <span class="relative inline-flex h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
              </span>
              Get in touch
              <ArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 mt-10  ">
          {/* 1ST BOX  */}

          <div className=" text-4xl font-readex text-stone-800 ">
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-left mt-10 ml-10"
            >
              WE'VE DONE <br /> MULTIPLE PORTOFIOLIOS <br /> AND KNOW EXACTLY
              WHAT
            </motion.h1>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 mt-10 text-center gap-14  max-w-2xl"
            >
              <div className=" bg-amber-50 bg-opacity-50 rounded-3xl border-2 border-amber-100 shadow-xl p-5 flex flex-col gap-10 ">
                <div className=" flex justify-between">
                  <h1 className="py-10 text-3xl text-left font">
                    Web <br />
                    Design
                  </h1>
                  <h2 className="text-xl">
                    <Layout size={24} color="red" />
                  </h2>
                </div>
                <div>
                  <p className="text-sm  font-readex text-left mt-10 text-stone-600 w-2/3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                </div>
              </div>
              <div className=" bg-amber-50 bg-opacity-50 rounded-3xl border-2 border-amber-100 shadow-xl p-5 flex flex-col gap-10 ">
                <div className=" flex justify-between">
                  <h1 className="py-10 text-3xl text-left font">
                    SEO <br /> Services
                  </h1>
                  <h2 className="text-xl">
                    {" "}
                    <Share2 size={24} color="red" />
                  </h2>
                </div>
                <div>
                  <p className="text-sm  font-readex text-left mt-10 text-stone-600 w-2/3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* 2ND BOX */}
          <div className=" text-4xl font-readex text-stone-800 ">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 mt-10 text-center gap-14  max-w-2xl"
            >
              <div className=" bg-amber-50 bg-opacity-50 rounded-3xl border-2 border-amber-100 shadow-xl p-5 flex flex-col gap-10 ">
                <div className=" flex justify-between">
                  <h1 className=" text-3xl text-left py-10 font">
                    Competetive <br />
                    Rates
                  </h1>
                  <h2 className="text-xl">
                    {" "}
                    <Briefcase size={24} color="red" />
                  </h2>
                </div>
                <div>
                  <p className="text-sm  font-readex text-left mt-10 text-stone-600 w-2/3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                </div>
              </div>
              <div className=" bg-amber-50 bg-opacity-50 rounded-3xl border-2 border-amber-100 shadow-xl p-5 flex flex-col gap-10 ">
                <div className=" flex justify-between">
                  <h1 className="py-10 text-3xl text-left font">
                    Trusted by <br /> 25+ Clients
                  </h1>
                  <h2 className="text-xl">
                    {" "}
                    <Globe size={24} color="red" />
                  </h2>
                </div>
                <div>
                  <p className="text-sm  font-readex text-left mt-10 text-stone-600 w-2/3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                </div>
              </div>
            </motion.div>
            <div className=" text-right text-4xl font-readex text-stone-800 mt-10 mr-20">
              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className=""
              >
                {" "}
                DISTINGUISHES <br />
                WINNERS FROM THE
                <br /> LOSERS IN THE GAME.
              </motion.h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero8;
