import React from "react";
const Card = ({ item,idx,handleDelete }) => {
  return (
    <div className="card w-[250px] py-4 shadow-2xl rounded-lg bg-white overflow-hidden">
      <div className="w-full flex items-center justify-center">
        <img
          src={item.image}
          alt="path shi dede madrchod"
          className="w-32 h-32 object-cover rounded-full"
        />
      </div>
      <div className="desc text-center mt-3">
        <h2 className="text-2xl font-semibold">{item.name}</h2>
        <p className="mt-2 px-4 text-sm leading-none">{item.desc}</p>
        <button onClick={()=> handleDelete(idx)} className="mt-4 px-3 bg-red-600 rounded-md text-white">Delete</button>
      </div>
    </div>
  );
};

export default Card;
