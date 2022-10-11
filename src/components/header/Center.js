import React from 'react'
import {BsHeart} from 'react-icons/bs' 
import {FaPoundSign} from 'react-icons/fa'

const Center = () => {
  return (
    <div className='sm:w-1/2 md:w-1/3 flex flex-col justify-start items-center md:h-[calc(100vh-80px)] relative'>
    <div className='w-full h-[40%] absolute top-0 left-0 z-10  flex justify-center items-center'>
        <div className='w-[90%] h-full bg-[#FFEFE7] flex justify-between items-start p-3'>
            <div className='w-[40px] h-[40px] bg-stone-900 flex justify-center items-center'>
                <BsHeart className='text-2xl text-stone-50'/>
            </div>
            <p className='font-semibold flex justify-start items-center'><FaPoundSign/> 25.00 <span className='text-[#D2786B]'> (50% OFF)</span></p>
        </div>
    </div>
        <img src="./images/jacket.png" alt="" className='relative z-20 w-[70%] object-cover sm:h-full sm:w-[100%]  mt-8 sm:mt-16 md:mt-20 lg:mt-20'/>
</div>
  )
}

export default Center