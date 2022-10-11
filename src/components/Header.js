import React from 'react'
import Left from './header/Left'
import Center from './header/Center'
import Right from './header/Right'

const Header = () => {
  return (
    <header className='w-full lg:px-20 flex flex-col sm:flex-row   flex-wrap'>
       <Left/>
       <Center/>
       <Right/>
    </header> 
  )
}

export default Header