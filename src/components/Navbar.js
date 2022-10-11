import React from 'react'
import {BsSearch,BsHeart,BsCart} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='w-full h-[80px] flex justify-between items-center px-3 lg:px-20'>
        <ul className='hidden sm:block'>
            <li className='inline-block mr-2 text-sm cursor-pointer'>New In</li>
            <li className='inline-block mr-2 text-sm cursor-pointer'>Category</li>
            <li className='inline-block mr-2 text-sm cursor-pointer'>Track Order</li>
        </ul>

    <h5 className='text-xl italic font-semibold cursor-pointer uppercase'>Sanwaora</h5>

        <ul>
            <li className='inline-block ml-12 cursor-pointer'><BsSearch className='text-xl font-semibold'/></li>
            <li className='inline-block ml-12 cursor-pointer'><BsHeart className='text-xl font-semibold'/></li>
            <li className='inline-block ml-12 cursor-pointer'><BsCart className='text-xl font-semibold'/></li>
        </ul>
    </nav>
  )
}

export default Navbar