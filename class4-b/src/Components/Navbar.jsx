import React from "react";

const Navbar = ({data}) => {
  return (
    <div className="nav w-full flex items-center justify-between py-8 ">
      <h2 className="text-orange-500 font-medium text-xl">Orange</h2>
      <div className="px-6 py-1 rounded-2xl bg-orange-600 text-white flex items-center justify-center gap-2 cursor-pointer">
        <p className="font-medium">Favourites</p>
        <p className="w-6 h-6 text-[12px] mt-1 flex items-center justify-center bg-orange-700 rounded-md font-medium">
          {data.filter((item)=> item.isAdded).length}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
