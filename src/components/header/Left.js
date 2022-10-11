import React from 'react'
import {FaFacebookF,FaPinterestP} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Left = () => {
  return (
    <div className='sm:w-1/2 md:w-1/3 flex flex-col pt-4 justify-center md:justify-center items-center md:h-[calc(100vh-80px)] bg-white'>
    <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-7xl tracking-widest font-semibold'>Men's</h1>
    <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-7xl tracking-widest font-semibold mt-3'>Casual</h1>
    <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-7xl tracking-widest font-semibold mt-3'>Jacket</h1>
    <p className='md:text-xs lg:text-sm mt-8 px-3'>100% Cotton, Model is 6`1 And Wears Size M</p>
  
    <div className='flex justify-center items-center w-full mt-6'>
        <span>Colors</span>
        <div className='h-[20px] w-[20px] rounded-full bg-[#BD723E] ml-3'></div>
        <div className='h-[20px] w-[20px] rounded-full bg-[#46505A] ml-3'></div>
        <div className='h-[20px] w-[20px] rounded-full bg-[#FF8F7F] ml-3'></div>
    </div>
    <div className='mt-8'>
        <button className='bg-stone-900 py-2 px-8 text-sm text-stone-50 rounded-2xl'>Add to Cart</button>
    </div>

    <div className='w-[80%] flex justify-start items-center mt-8 mb-8  bg-stone-100 py-2'>
        <div className='w-[33.33%] flex justify-center items-center'>
       <div className='w-[30px] h-[30px] flex justify-center items-center bg-stone-900 rounded-full mr-2'>
       <FaFacebookF className='text-md text-stone-50'/>
       </div>
            <span className='text-sm text-stone-700'>Share</span>                  
        </div>
        <div className='w-[33.33%] flex justify-center items-center '>
       <div className='w-[30px] h-[30px] flex justify-center items-center bg-stone-900 rounded-full mr-2'>
       <BsTwitter className='text-md text-stone-50'/>
       </div>
            <span className='text-sm text-stone-700'>Tweet</span>                   
        </div>
        <div className='w-[33.33%] flex justify-center items-center '>
       <div className='w-[30px] h-[30px] flex justify-center items-center bg-stone-900 rounded-full mr-2'>
       <FaPinterestP className='text-md text-stone-50'/>
       </div>
            <span className='text-sm text-stone-700'>Pin It</span>                   
        </div>  
    </div>
</div>
  )
}

export default Left