'use-client';
import React from 'react'
import { useInView } from "react-intersection-observer";
const lowerHero = () => {
    const { ref: secondRef, inView: second } = useInView({
        triggerOnce:true
       });
  return (
    <section ref={secondRef} id='lowerhero' className='mt-32 mx-6 lg:mx-44 relative'>
    <figure className={`hidden lg:block mb-10 ${second? "line w-[100%]":"w-[0%]"}`}></figure>
    <ul className='flex  absolute top-22 pt-5 md:pt-0 gap-2'>
      <li>
        <img src="./icons8-tailwindcss.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left translate-x-5": "hidden"}`} />
      </li>
      <li>
        <img src="./icons8-javascript.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left1 translate-x-[22px]": "hidden"}`} />
      </li>
      <li>
        <img src="./icons8-react-native.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left2 translate-x-[24px]": "hidden"}`} />
      </li>
      <li>
        <img src="./icons8-redux.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left3 translate-x-[26px]": "hidden"}`} />
      </li>
      <li>
        <img src="./icons8-typescript.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left3 translate-x-[28px]": "hidden"}`} />
      </li>
    </ul>
    <ul className='hidden md:flex absolute top-28  gap-2'>
    <li>
        <img src="./icons8-graphql.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left translate-x-[20px]": "hidden"}`} />
      </li>
      <li>
        <img src="./icons8-html.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left1 translate-x-[22px]": "hidden"}`} />
      </li>
      <li>
        <img src="./icons8-css.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left2 translate-x-[24px]": "hidden"}`} />
      </li>
      <li>
        <img src="./icons8-git.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left3 translate-x-[26px]": "hidden"}`} />
      </li>
      <li>
        <img src="./icons8-level-up-your-coding-skills-and-quickly-land-a-job-48.png" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left3 translate-x-[28px]": "hidden"}`} />
      </li>
    </ul>
    <blockquote  className={`md:w-[55%] md:pl-7 mb-6 float-right font-semibold mt-20 md:mt-0 ${second ? "fade-left translate-x-5":"hidden"}`}>My passion for software engineering ignited at a young age, driven by my fascination with technology and the art of creation. However, the true game-changer came when I ventured into freelancing, primarily in video editing. It was during this journey that I discovered my profound affinity for crafting digital media. This newfound passion naturally led me to explore the world of frontend development.And so, the journey began from there.</blockquote>
    </section>
  )
}

export default lowerHero