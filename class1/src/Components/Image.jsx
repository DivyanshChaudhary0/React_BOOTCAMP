import React from "react";

const Image = ({bg,center}) => {
  return (
    <div className="group relative w-full h-full flex items-center justify-center rounded-3xl cursor-pointer overflow-hidden transition-all duration-[0.4s] ease-out hover:rounded-[150px]">
      <img
        className="w-full h-full group-hover:scale-110 transition-all duration-[0.4s] ease-out object-cover overflow-hidden"
        src={bg}
        alt=""
      />
      <img
        className=" transition-all duration-[0.6s] ease-out group-hover:opacity-100 absolute w-[350px] h-[350px] object-cover rounded-[60px] opacity-0"
        src={center}
        alt=""
      />
    </div>
  );
};

export default Image;
