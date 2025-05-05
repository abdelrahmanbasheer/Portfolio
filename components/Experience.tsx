import React from 'react'
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  // const { ref: thirdRef, inView: third } = useInView({
  //   triggerOnce:true
  //  });
  return (
    <section className='relative text-white' id='experience'>
  <figure className={`mb-10 line-horz mx-auto`}></figure>
    <div className='flex justify-between items-center absolute top-1 left-[5%]  md:left-[20%]  lg:left-[20%]  xl:left-[30%] 2xl:left-[35%]'>
      <img className='w-[40px] h-[40px] lg:w-[80px] lg:h-auto rounded-full' src="/DiDi-Logo.jpg" alt="" />
      <div className='flex flex-col ml-5 pt-2.5 font-semibold'>
    <h2 className='text-[13px] ' >Frontend Developer</h2>
    <h2 className='text-[13px] md:text-sm'>DiDi</h2>
    <h2 className=' text-[13px] md:text-sm '>June 2024-Present</h2>
    </div>
    </div>
    <div className='flex justify-between items-center absolute top-[25%] left-[55%] 2xl:left-[52%]'>
      <img className='w-[40px] h-[40px] lg:w-[80px] lg:h-auto rounded-full' src="arab-academy-for-science-and-technology-logo-png.png" alt="" />
      <div className='flex flex-col ml-5 pt-2.5 font-semibold'>
    <h2  className='text-[13px] '>Teaching Assistant (SE 291)</h2>
    <h2 className='text-sm'>Arab Academy for Science and Technology</h2>
    <h2 className='text-sm'>FEB 2025-Present</h2>
    </div>
    </div>
    <div className='flex justify-between items-center absolute top-[45%] left-[5%] md:left-[20%] lg:left-[20%] xl:left-[30%] 2xl:left-[35%]'>
      <img className='w-[40px] h-[40px] lg:w-[80px] lg:h-auto rounded-full' src="/mp-logo.png" alt="" />
      <div className='flex flex-col ml-5 pt-2.5 font-semibold'>
    <h2 className='text-[13px] '>Frontend Developer</h2>
    <h2 className='text-[13px] md:text-sm'>Merry People</h2>
    <h2 className='text-[13px] md:text-sm'>AUG 2023- FEB 2024</h2>
    </div>
    </div>
    <div className='flex justify-between items-center absolute top-[70%] left-[55%]  2xl:left-[52%]'>
      <img className='w-[40px] h-[40px] lg:w-[80px] lg:h-auto rounded-full' src="/upwork-icon.svg" alt="" />
      <div className='flex flex-col ml-5 pt-2.5 font-semibold'>
    <h2 className='text-[13px] '>Video Editor</h2>
    <h2 className='text-[13px] md:text-sm'>Upwork</h2>
    <h2 className='text-[13px] md:text-sm'>JUN 2021- NOV 2023</h2>
    </div>
    </div>
    </section>
  )
}

export default Experience
