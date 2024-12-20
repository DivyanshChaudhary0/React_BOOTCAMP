
import React from 'react'
import Image from './Image';

const Page3 = () => {
  return (
    <div className='w-full min-h-screen px-16 text-center relative'>

        <p className='font-[mySecondFont] mb-8'>Cases</p>

        <h1 className='text-9xl font-[mySecondFont] font-semibold uppercase'>Head Turning Projects</h1>

        <p className='px-8 py-5 bg-yellow-400 text-black absolute left-[900px] top-72 rounded-full font-[mySecondFont] -rotate-12'>Gotta see 'm all</p>

        <div className="absolute right-16 border border-black border-solid px-5 py-3 rounded-xl hover:rounded-full">
            <a href="" className="flex items-center gap-6">
                <span className="font-medium">Alle projecten</span>
                <span><i class="ri-arrow-right-line"></i></span>
            </a>
        </div>

        <div className="image w-full h-[90vh] mt-20">
           <Image bg="page3.jpg" center="bird.jpg" />
        </div>

        <div className='w-full flex flex-col items-start gap-0 mt-6'>
            <p className='text-base opacity-35 font-medium'>Nieuw Schaijk</p>
            <h3 className='text-xl font-medium'>De smaak van thuis</h3>
            <div className="btns mt-4 flex items-center gap-6">
                <button className='text-xs uppercase px-4 py-1 border border-black border-solid rounded-lg'>
                    Brand Story
                </button>
                <button className='text-xs uppercase px-4 py-1 border border-black border-solid rounded-lg'>
                    Merkidentiet
                </button>
            </div>
        </div>
    </div>
  )
}

export default Page3;