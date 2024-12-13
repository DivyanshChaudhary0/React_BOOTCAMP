
import React from "react";
const Card = ({item}) => {
  return (
    <div className="card w-[250px] h-[350px] shadow-2xl rounded-lg bg-slate-600 text-white overflow-hidden">
      <img
        src={item.image}
        alt="path shi dede madrchod"
        className="w-full h-[55%] object-cover rounded-md"
      />
      <div className="desc text-center mt-3 mb-3">
        <h2 className="text-2xl">{item.name.toUpperCase()}</h2>
        <p className="mt-2 px-4 leading-5 text-sm">{item.desc}</p>
      </div>
    </div>
  );
};

export default Card;