import React from 'react'

const Navbar = () => {
  return (
    
    <nav  className='hidden md:flex justify-center gap-20 mt-6 font-semibold text-xl bg-orange-600 p-3 mx-10 rounded-full'>
    
    <a className='cursor-pointer' href='#websites'>Websites</a>
    <a className='cursor-pointer' href='#lowerhero'>About Me</a>
    </nav>
  )
}

export default Navbar