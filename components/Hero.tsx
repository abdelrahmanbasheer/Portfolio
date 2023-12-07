'use-client';
import Link from 'next/link';
import React from 'react'
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const { ref: firstRef, inView: first } = useInView({
    triggerOnce:true
   });

  return (
    <section className='mt-36 mx-10 lg:mx-44'>
        <h1 className='typewriter font-sans text-lg tracking-widest p-1 lg:text-2xl xl:text-3xl'>Crafting Digital Experiences</h1>
        <blockquote className='mt-10 font-semibold md:w-[55%] lg:w-[55%] mb-6'>I'm Abdelrahman Basheer, a passionate software engineer  With a keen eye for design , I transform ideas into seamless digital solutions. Explore my projects and witness the fusion of creativity and technology that brings user experiences to life</blockquote>
  
        <ul ref={firstRef} className='flex gap-4 mt-5'>
          <Link target='_blank' href={"https://github.com/abdelrahmanbasheer"}>
        <img src="github-icon.png" alt="" className=' w-[60px]' />
        </Link>
        <Link target='_blank' href={"https://www.linkedin.com/in/abdelrahman-basheer/"}>
        <img src="linkedin-icon.png" alt="" className='w-[60px] rounded-full' />
        </Link>
        <Link target='_blank' href={"https://www.upwork.com/freelancers/~0147257aa5c1f8d43f"}>
        <img src="upwork-icon.svg" alt="" className='w-[60px]' />
        </Link>
        </ul>
        
        <div ref={firstRef}  className={`pb- ${first ? "fade-in translate-y-2.5 ":""}`}>
        <img loading='eager' src="./hero-img.png" alt="" className={` ${first? "float-right": "hidden"}`} />
       
        </div>
    </section>
  )
}

export default Hero