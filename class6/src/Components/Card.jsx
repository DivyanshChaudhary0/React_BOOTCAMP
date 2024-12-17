
const Card = ({item,handleClick,idx}) => {
  return (
          <div className="card w-[270px] h-[400px] bg-white rounded-md overflow-hidden mt-10 border border-gray-400">
            <div className="w-full h-[45%] bg-slate-500">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-all"
                src={item.image}
                alt=""
              />
            </div>
            <div className="w-full h-[40%] px-4 py-1 border-b-[1px]">
              <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
              <p className="text-orange-600 font-semibold text-sm w-full line-clamp-2 mt-2">
                {item.description}
              </p>
              <p className="mt-2 font-semibold text-xl">${item.price}</p>
            </div>
            <div className="w-full h-[15%] flex items-center justify-center px-2">
              <button onClick={()=>handleClick(idx)} className={`w-full px-5 py-2 ${item.isAdded ? "bg-blue-400" : "bg-orange-600"} text-white rounded-md`}>
                {item.isAdded ? "Added" : "Add to Cart"}
              </button>
            </div>
          </div>
  )
}

export default Card;