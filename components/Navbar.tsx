import React from 'react'

const Navbar = () => {
  return (
    
    <nav  className='flex justify-center gap-10 lg:gap-20 mt-6 font-semibold text-white text-base lg:text-xl bg-orange-600 p-3  mx-10 rounded-full'>
    
    <a className='cursor-pointer' href='#websites'>Websites</a>
    <a className='cursor-pointer' href='#lowerhero'>Experience</a>
    <a className='cursor-pointer' href='/Cv.pdf'>Resume</a>
    </nav>
  )
}

export default Navbar