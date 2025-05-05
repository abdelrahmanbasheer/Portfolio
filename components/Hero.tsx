'use-client';
import Link from 'next/link';
import React from 'react'
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const { ref: firstRef, inView: first } = useInView({
    triggerOnce:true
   });

  return (
    <section className='mt-36 mx-10 lg:mx-44 md:flex mb-20 h-[80vh] md:h-[50vh] lg:h-[70vh]'>
      <div>
        <h1 className='typewriter font-sans font-bold text-lg tracking-widest p-1 lg:text-2xl xl:text-3xl text-white'>Crafting Digital Experiences</h1>
        <blockquote className='mt-10 font-semibold md:w-[55%] lg:w-[55%] mb-6 text-white'>I'm Abdelrahman Basheer, a passionate software engineer  With a keen eye for design , I transform ideas into seamless digital solutions. Explore my projects and witness the fusion of creativity and technology that brings user experiences to life</blockquote>
          <a href="/Cv.pdf" className='p-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-900 ease-in-out  transition-all' target="_blank" rel="noopener noreferrer">
        <button>View my CV</button>
        </a>
        <ul ref={firstRef} className='flex gap-4 mt-5'>
          <Link className='hover:scale-105 ease-in-out delay-75 transition-all' target='_blank' href={"https://github.com/abdelrahmanbasheer"}>
        <img src="github-icon.png" alt="" className='bg-gray-900 w-[60px] rounded-full' />
        </Link>
        <Link  target='_blank' className='hover:scale-105 ease-in-out  transition-all' href={"https://www.linkedin.com/in/abdelrahman-basheer/"}>
        <img src="linkedin-icon.webp" alt="" className='w-[60px] bg-gray-900 rounded-full' />
        </Link>
        <Link target='_blank' className='hover:scale-105 ease-in-out  transition-all' href={"https://www.upwork.com/freelancers/~0147257aa5c1f8d43f"}>
        <img src="upwork-icon.svg" alt="" className='w-[60px] mb-7' />
        </Link>
        </ul>
        </div>
        <div ref={firstRef}  className={` ${first ? "fade-in translate-y-2.5 ":""}`}>
        <img loading='eager' src="./hero-img.png" alt="" className={` ${first? "w-[300px] mx-auto md:w-[1500px]": "hidden"}`} />
        
        </div>
    </section>
  )
}

export default Hero