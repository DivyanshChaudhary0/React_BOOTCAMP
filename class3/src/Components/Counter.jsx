
import React, { useState } from 'react'

const Counter = () => {
    const [num,setNum] = useState(0);

  return (
    <div className='counter'>
        <p className='text-center text-2xl mb-2'>Number = {num}</p>
        <button onClick={()=>setNum(num+1)} className='px-3 py-1 border rounded mr-2' >Plus +</button>
        <button onClick={()=>setNum(num-1)} className='px-3 py-1 border rounded' >Minus -</button>
    </div>
  )
}

export default Counter;