import React from "react";
import RoundButton from "./RoundButton";

const Page1 = () => {
  return (
    <div className="w-full min-h-screen flex justify-between px-16 py-32 ">
      <div className="right w-[70%]">
        <h1 className="font-serif font-medium flex flex-col gap-4 text-8xl leading-[80px]">
            <span>Turning</span>
            <span>heads</span>  
            <span>and</span> 
            <span>conquering</span> 
            <span className="flex items-end gap-4"> hearts  
            <img src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/645505004e4ec0e72b8fc921_webclip-niceatnoon.webp" className="rotate w-20 pt-2 object-cover" />
            </span>
        </h1>
      </div>
      <div className="left w-[20%] absolute bottom-40 right-10">
        <p className="font-[myFirstFont] text-xl">NiceAtNoon is een boutique design studio gespecialiseerd in branding en webdesign.</p>
          <RoundButton/>
      </div>
    </div>
  );
};

export default Page1;
