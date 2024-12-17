import React from "react";

const SongCard = ({data,addToFavourite,index}) => {
    const {image,song_name,artist_name,isAdded} = data;
  return (
    <div className="w-56 h-32 bg-white rounded-2xl text-black p-2">
      <div className="flex items-center gap-4">
        <img
          className="w-24 h-20 object-cover rounded-lg"
          src={image}
          alt=""
        />
        <div className="right flex flex-col">
          <div className="text-lg font-semibold leading-6">{song_name}</div>
          <div className="text-[12px] leading-5">{artist_name}</div>
        </div>
      </div>

      <div className="w-full mt-6 text-center">
        <button onClick={()=> addToFavourite(index)} className={`px-4 py-1 rounded-xl ${isAdded ? "bg-cyan-600" : "bg-orange-500"} text-white text-[12px] font-medium`}>
          {isAdded ? "Added" : "Add To Favourites"}
        </button>
      </div>
    </div>
  );
};

export default SongCard;
