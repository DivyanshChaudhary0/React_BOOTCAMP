
import React, { useState } from 'react'

const Practice3 = () => {

    const users = [{name:"Harsh",age:20},{name:"Divyansh",age:19},{name:"Sheetal",age:19}]

    const [data,setData] = useState(users);

  return (
    <div className='w-full h-screen flex gap-3 flex-col items-center justify-center'>
        {data.map((item)=>{
            return <div className='text-center'>
                <h1 className='text-xl'>{item.name}</h1>
                <h2>{item.age}</h2>
            </div>
        })}
        <button onClick={()=> setData(prev => prev.map(item=> item.name.toLocaleLowerCase() === "harsh" ? {name:"Sarthak",age:28} : item)) } 
        className='px-4 py-2 bg-black text-white rounded-md'>Click me</button>
    </div>
  )
}

export default Practice3;