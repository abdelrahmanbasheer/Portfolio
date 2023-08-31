import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
type PostProps={
  site:{
    title:string;
    slug:string;
    image:any;
    author:string;
    authorImg:string;
      
    }
  }

const FeaturedPostCard = ({site}:PostProps) => (
  <div className="relative h-72">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${site.image.src}')` }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center ">{site.title}</p>
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
      </div>
    </div>
    <Link href={`${site.slug}`} target='_blank'><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default FeaturedPostCard;