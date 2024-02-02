import React from 'react';
import Image from 'next/image';
import { PostProps } from './types';
import CardButton from './CardButton';


const FeaturedPostCard = ({site}:PostProps) => (
  <div className="relative h-72">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${site.image.src}')` }} >

      </div>
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center capitalize">{site.title}</p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={site.author}
          height="30"
          width="30"
          className="align-middle drop-shadow-lg rounded-full"
          src={site.authorImg}
        />   
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">{site.author}</p>
        <CardButton site={site}></CardButton>
      </div>
    </div>
  </div>
);


export default FeaturedPostCard;