
import React, { useState } from 'react'
import { IoArrowForward } from "react-icons/io5";
const Practice4 = () => {

    const [val,setVal] = useState(false);

    function toggle(){
        setVal((prev)=>!prev)
    }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='relative w-[350px] h-52 flex bg-slate-500 rounded-md overflow-hidden'>
            <img className={`w-full h-full ${val ? "-translate-x-[100%]" : "-translate-x-[0%]"} flex-shrink-0 object-cover transition-all duration-700 ease-in-out`} src="https://images.unsplash.com/photo-1733331643931-d089b14b3c4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={`w-full h-full ${val ? "-translate-x-[100%]" : "-translate-x-[0%]"} flex-shrink-0 object-cover transition-all duration-700 ease-in-out`} src="https://plus.unsplash.com/premium_photo-1731948132439-29777fe3be46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span onClick={toggle} className='w-10 h-10 bg-white flex items-center justify-center rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                <IoArrowForward />
            </span>
        </div>
    </div>
  )
}

export default Practice4;