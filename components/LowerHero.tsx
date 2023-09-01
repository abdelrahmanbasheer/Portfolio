'use-client';
import React from 'react'
import { useInView } from "react-intersection-observer";
const lowerHero = () => {
    const { ref: secondRef, inView: second } = useInView({
        triggerOnce:true
       });
  return (
    <div ref={secondRef} className='mt-20 mx-44  relative'>
    <h1 className={` mb-10 ${second? "line":""}`}></h1>
    <ul className='flex absolute top-22 gap-2'>
      <li>
        <img src="./icons8-tailwindcss.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left translate-x-5": "hidden"}`} />
      </li>
      <li>
        <img src="./icons8-react-native.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left1 translate-x-[22px]": "hidden"}`} />
      </li>
      <li>
        <img src="./icons8-redux.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left2 translate-x-[24px]": "hidden"}`} />
      </li>
      <li>
        <img src="./icons8-typescript.svg" alt="" className={`bg-white rounded-full p-1 ${second? "fade-left3 translate-x-[26px]": "hidden"}`} />
      </li>
    </ul>
    <ul className='flex absolute top-28 gap-2'>
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
    </ul>
    <blockquote  className={`w-[50%] mb-6 float-right font-semibold  ${second ? "fade-left translate-x-5":""}`}>My passion for software engineering ignited at a young age, driven by my fascination with technology and the art of creation. However, the true game-changer came when I ventured into freelancing, primarily in video editing. It was during this journey that I discovered my profound affinity for crafting digital media. This newfound passion naturally led me to explore the world of frontend development.And so, the journey began from there.</blockquote>
    </div>
  )
}

export default lowerHero