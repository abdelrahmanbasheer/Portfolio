'use-client';
import React from 'react'
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const { ref: firstRef, inView: first } = useInView({
    triggerOnce:true
   });

  return (
    <section className='mt-36 mx-44 '>
        <h1 className='typewriter font-sans text-3xl tracking-widest '>Crafting Digital Experiences</h1>
        <blockquote className='mt-10 font-semibold w-[50%] mb-6'>I'm Abdelrahman Basheer, a passionate software engineer  With a keen eye for design , I transform ideas into seamless digital solutions. Explore my projects and witness the fusion of creativity and technology that brings user experiences to life</blockquote>
        <a className='bg-black text-white p-2.5 rounded-full capitalize' href='#websites'>view my portfolio</a>
        <div ref={firstRef}  className={` ${first ? "fade-in translate-y-2.5 ":" "}`}>
        <img  src="./hero-img.png" alt="" className={`${first? "float-right": "hidden"}`} />
       
        </div>
    </section>
  )
}

export default Hero