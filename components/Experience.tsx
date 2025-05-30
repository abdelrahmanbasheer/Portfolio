import React from 'react'
const Experience = () => {
  return (
    <section className='relative text-white flex flex-col lg:flex-row lg:justify-center mb-5 gap-5' id='experience'>
  {/* <figure className={`hidden lg:block mb-10 line-horz mx-auto`}></figure> */}
    <div className='flex items-center lg:flex-col bg-[#131313] p-2 lg:p-5 rounded-2xl mx-10'>
      <img className='w-[40px] h-[40px] lg:w-[80px] lg:h-auto rounded-full' src="/DiDi-Logo.jpg" alt="" />
      <div className='flex flex-col ml-5 xl:ml-0 pt-2.5 font-semibold'>
    <h2 className='text-[13px]'>Frontend Developer</h2>
    <h2 className='text-[13px] md:text-sm'>DiDi</h2>
    <h2 className=' text-[13px] md:text-sm'>June 2024 - Present</h2>
    </div>
    </div>
    <div className='flex items-center lg:flex-col bg-[#131313] p-2 lg:p-5 rounded-2xl mx-10'>
      <img className='w-[40px] h-[40px] lg:w-[80px] lg:h-auto rounded-full' src="/arab-academy-for-science-and-technology-logo-png.png" alt="" />
      <div className='flex flex-col ml-5 xl:ml-0 pt-2.5 font-semibold'>
    <h2 className='text-[13px]'>Teaching Assistant (SE 291)</h2>
    <h2 className='text-[13px] md:text-sm'>Arab Academy for Science and Technology</h2>
    <h2 className=' text-[13px] md:text-sm'>Feb. 2025 - Present</h2>
    </div>
    </div>
    <div className='flex items-center lg:flex-col bg-[#131313] p-2 lg:p-5 rounded-2xl mx-10'>
      <img className='w-[40px] h-[40px] lg:w-[80px] lg:h-auto rounded-full' src="/mp-logo.png" alt="" />
      <div className='flex flex-col ml-5 xl:ml-0 pt-2.5 font-semibold'>
    <h2 className='text-[13px]' >Frontend Developer</h2>
    <h2 className='text-[13px] md:text-sm'>Merry People</h2>
    <h2 className=' text-[13px] md:text-sm'>Aug. 2023 - Feb. 2024</h2>
    </div>
    </div>
   
    
    
    </section>
  )
}

export default Experience
