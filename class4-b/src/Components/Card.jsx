
import React from 'react'

const Card = ({item,handleChange,index}) => {
  const {name,image,profession,isFriend} = item;

  return (
    <div className='w-56 rounded-md bg-white overflow-hidden'>
      <div className='w-full h-36'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className='p-4'>
        <h1 className='text-xl font-medium'>{name}</h1>
        <p className='text-sm'>{profession}</p>

        <button 
          onClick={()=> handleChange(index)}
          className={`px-3 py-1 ${isFriend ? "bg-green-600" : "bg-blue-500"} rounded-full text-[12px] mt-4 font-medium text-white`}>
          {isFriend ? "Friends" : "Add Friend"}
        </button>

      </div>
    </div>
  )
}

export default Card;