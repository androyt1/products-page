import React from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

const Right = () => {
  return (
    <div className='md:w-1/3 flex flex-col sm:flex-row md:flex-col justify-start items-center md:h-[calc(100vh-80px)] bg-white mt-20 sm:mt-0'>
    <div className='h-[20%] w-[90%] sm:w-[50%]  sm:h-full md:w-[100%] md:h-[40%] lg:h-[40%] sm:bg-[#FFEFE7]  flex justify-center items-center relative '>
    <img src='./images/small.png' alt='model' className='h-[300px] sm:h-[100%] ' />
    <div className='top-2 left-2 w-[70px] h-[30px] rounded-2xl bg-stone-900 absolute flex justify-center items-center'>
        <span className='text-stone-50 text-xs font-semibold py-2'>45% off</span>
    </div>
    </div>
    <div className=' sm:w-[50%] sm:h-full md:w-[100%] h-[60%] bg-white  flex flex-col justify-center items-center p-3'>
        <div className='w-full py-3 flex justify-between items-center'>
            <span className='text-stone-900 font-semibold text-xl'>Women's Outfit</span>
            <div className='w-[20%] h-[10px] flex justify-center items-center'>
                <div className='bg-stone-200 h-full w-[25%] rounded-2xl'></div>
                <div className='bg-stone-900 h-full w-[50%] mx-1'></div>
                <div className='bg-stone-200 h-full w-[25%] rounded-2xl'></div> 
            </div>
        </div>
        <div className='w-full '>
            <div className='w-full flex justify-between items-center'>
                <span className='font-semibold text-xl'>Product Info</span>
                <span><AiOutlineMinus className='text-xl cursor-pointer'/></span>
            </div>
            <div className='w-full flex justify-start items-center p-2'>
                <p className='tracking-wide text-stone-700 text-sm'>A hoodie is the type of garm you can practically live in and a boohooMAN printed hoodie is no different 100% Cotton Model 6`1 and Wears  Size M</p>
            </div>
            <div className='w-full flex justify-between items-center py-2 border-[1px] border-slate-200 px-3 rounded-xl'>
                <span className='font-semibold'>Delivery Info</span>
                <span><AiOutlinePlus className='text-xl cursor-pointer'/></span>
            </div>
            <div className='w-full flex justify-between items-center py-2 border-[1px] border-slate-200 px-3 rounded-xl mt-2'>
                <span className='font-semibold'>Returns Info</span>
                <span><AiOutlinePlus className='text-xl cursor-pointer'/></span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Right