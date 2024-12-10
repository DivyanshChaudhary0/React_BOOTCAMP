
import React from 'react'

const Card = (props) => {
  console.log(props.data);
  const {name,image,description,rating,price} = props.data;
  
  return (
    <div className='relative w-72 flex flex-col gap-1 items-center text-center p-1 bg-gray-100   shadow-gray-900 rounded-lg overflow-hidden'>
        <img className='w-full h-40 object-cover rounded-md' src={image} alt="" />  
        <h2 className='text-2xl font-medium mt-3'>{name}</h2>
        <p className='leading-4 text-sm mt-1'> {description} </p>
        <p className='mt-1 text-2xl'>Price: <span className='text-xl'>{price}₹</span></p>
        <p className='text-2xl'>Rating: {rating}✩</p>
        <button className='w-full bg-black text-white py-4 mt-3 rounded-sm'>Buy Now</button>
    </div>
  )
}

export default Card;