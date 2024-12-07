
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const RoundButton = () => {
  return (
    <div className='bg-white w-[80%] px-6 py-4 rounded-xl mt-5 cursor-pointer flex items-center justify-between gap-10 hover:rounded-full'>
        <button className='font-medium hover:border-b-2 border-black'>Bekijk Projecten
        </button>
        <i class="ri-arrow-right-line"></i>
    </div>
  )
}

export default RoundButton;