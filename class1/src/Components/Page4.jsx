import React from "react";
import Image from "./Image";

const Page4 = () => {
  return (
    <div className="w-full p-16 pb-32">

      <div className="w-full min-h-screen flex gap-6">

        <div className="left w-1/2 h-full relative">
          <div className="w-full h-[75vh]">
            <Image bg="page4-1.jpg" center="page4-2.jpg" />
          </div>
         

          <div className="w-full flex flex-col items-start gap-0 mt-6">
            <p className="text-base opacity-35 font-medium">Gaaf Creaties</p>
            <h3 className="text-[22px] font-medium">
              Creating mood-boosting experiences
            </h3>
            <div className="btns mt-4 flex items-center gap-4">
              <button className="text-xs uppercase px-4 py-1 border border-black border-solid rounded-lg">
                Brand Story
              </button>
              <button className="text-xs uppercase px-4 py-1 border border-black border-solid rounded-lg">
                Merkidentiet
              </button>
              <button className="text-xs uppercase px-4 py-1 border border-black border-solid rounded-lg">
                Webdesign
              </button>
            </div>
          </div>
        </div>

        <div className="right w-1/2 h-full relative">
          <div className="w-full h-[95vh]">
            <Image bg="page4-3.jpg" center="page4-4.jpg" />
          </div>

          <div className="w-full flex flex-col items-start gap-0 mt-6">
            <p className="text-base opacity-35 font-medium">Don't Mind</p>
            <h3 className="text-[22px] font-medium">
              Campaigners for eventful brands
            </h3>
            <div className="btns mt-4 flex items-center gap-4">
              <button className="text-xs uppercase px-4 py-1 border border-black border-solid rounded-lg">
                Brand Story
              </button>
              <button className="text-xs uppercase px-4 py-1 border border-black border-solid rounded-lg">
                Merkidentiet
              </button>
              <button className="text-xs uppercase px-4 py-1 border border-black border-solid rounded-lg">
                Webdesign
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="w-[40%] bg-[#F4F4F1] mt-10 py-4 px-6 rounded-xl flex items-center justify-between">
        <p className="font-semibold">Ook aan de slag met jouw merk?</p>
        <a href="" className="border border-black border-solid px-5 py-3 rounded-xl flex gap-6 font-medium hover:rounded-full">
            <span>Let's Meet</span>
            <span><i class="ri-arrow-right-line"></i></span>
        </a>
      </div>
    </div>
  );
};

export default Page4;
