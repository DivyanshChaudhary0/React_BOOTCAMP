import React from "react";

const Page5 = () => {
  return (
    <div className="w-full min-h-screen bg-[#F4F4F1] px-16 pt-24 font-[mySecondFont]">
      <p className="text-base">Services</p>
      <div className="text font-[mySecondFont] mt-8 w-full flex items-center justify-between">
        <h2 className="text-[30px] w-[25%] leading-8">
          Zo onderscheiden we je van de norm
        </h2>
        <div className="group px-5 py-3 bg-black rounded-lg text-white flex items-center gap-6 cursor-pointer transition-all duration-[0.9s] line-clamp-4 hover:rounded-full">
          <span className="group-hover:border-b-2 transition-all duration-[0.1s] ease-linear border-white">
            Leer meer
          </span>
          <span className="group-hover:scale-150 transition-all duration-[0.2s] ease-linear">
            <i class="ri-arrow-right-line"></i>
          </span>
        </div>
      </div>

      <div className="cards w-full flex items-center gap-6 mt-10">
        <div className="group w-[350px] h-[420px] rounded-3xl overflow-hidden cursor-pointer">
          <div className="top transition-all duration-[0.5s] ease-linear w-full h-[60%] group-hover:rounded-[80px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="page5-1.jpg"
              alt=""
            />
          </div>
          <div className="bottom transition-all duration-[0.5s] ease-linear w-full h-[40%] bg-[#AA81B7] px-6 py-6 text-white flex flex-col gap-6 group-hover:rounded-[60px]">
            <h1 className="text-2xl">Brand Story</h1>
            <p className="leading-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, optio!
            </p>
          </div>
        </div>

        <div className="group w-[350px] h-[420px] rounded-3xl overflow-hidden cursor-pointer">
          <div className="top transition-all duration-[0.5s] ease-linear w-full h-[60%] group-hover:rounded-[80px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="page5-2.jpg"
              alt=""
            />
          </div>
          <div className="bottom transition-all duration-[0.5s] ease-linear w-full h-[40%] bg-[#10100F] px-6 py-6 text-white flex flex-col gap-6 group-hover:rounded-[60px]">
            <h1 className="text-2xl">Brand Story</h1>
            <p className="leading-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, optio!
            </p>
          </div>
        </div>

        <div className="group w-[350px] h-[420px] rounded-3xl overflow-hidden cursor-pointer">
          <div className="top transition-all duration-[0.5s] ease-linear w-full h-[60%] group-hover:rounded-[80px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="page5-3.jpg"
              alt=""
            />
          </div>
          <div className="bottom transition-all duration-[0.5s] ease-linear w-full h-[40%] bg-[#36A96A] px-6 py-6 text-white flex flex-col gap-6 group-hover:rounded-[60px]">
            <h1 className="text-2xl">Brand Story</h1>
            <p className="leading-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, optio!
            </p>
          </div>
        </div>

        <div className="group w-[350px] h-[420px] rounded-3xl overflow-hidden cursor-pointer">
          <div className="top transition-all duration-[0.5s] ease-linear w-full h-[60%] group-hover:rounded-[80px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="page5-4.jpg"
              alt=""
            />
          </div>
          <div className="bottom transition-all duration-[0.5s] ease-linear w-full h-[40%] bg-[#FA8A58] px-6 py-6 text-white flex flex-col gap-6 group-hover:rounded-[60px]">
            <h1 className="text-2xl">Brand Story</h1>
            <p className="leading-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, optio!
            </p>
          </div>
        </div>
      </div>

      <div className="w-[70vw] py-20 flex flex-col gap-6 items-start">
        <p className="text-2xl font-[myFirstFont]">
          NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van jargon
          en allergisch voor bureau blabla, gaan we lekker samen aan de slag met
          jouw merk. En dat moet vooral leuk zijn! Want plezier nemen we
          serieus. Vanuit daar ontstaat enthousiasme, trots en het
          zelfvertrouwen om jouw merk de uitstraling te geven die het verdient.
        </p>

        <div className="bg-black text-white px-5 py-3 rounded-xl hover:rounded-full">
          <a href="" className="flex items-center gap-6">
            <span className="font-medium">Contact</span>
            <span>
              <i class="ri-arrow-right-line"></i>
            </span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Page5;
