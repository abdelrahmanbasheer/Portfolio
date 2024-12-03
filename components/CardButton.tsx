import React from 'react'
import { PostProps } from './types';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import Link from 'next/link';

const CardButton = ({site}:PostProps) => {
  const para=site.description;
  const newPara = para
      .split(".")
      .map((str, index) => <p key={index}>{str}</p>);
  return (
    <Dialog>
    <DialogTrigger className='m-2 p-2 w-[100px] bg-[#070707] transition-all hover:scale-105 ease-in-out delay-75 text-white rounded-full'>View</DialogTrigger>
    <DialogContent className='bg-white '>
      <DialogHeader>
        <DialogTitle className='text-center'>{site.title}</DialogTitle>
        <DialogDescription className='font-semibold'>
         {newPara}
        </DialogDescription>
      </DialogHeader>
     { site.slug=="" ?
      <Link href={`${site.slug}`} className='text-center bg-black p-2 text-white rounded-full opacity-[97%] hover:opacity-100 capitalize' target='_blank'>Deployment in Progress</Link>
      :
      site.slug.includes("https") ?
      <Link href={`${site.slug}`} className='text-center bg-black p-2 text-white rounded-full opacity-[97%] hover:opacity-100 capitalize' target='_blank'>Visit the Website</Link>
      :
      <Link href={`${site.slug}`} className='text-center bg-black p-2 text-white rounded-full opacity-[97%] hover:opacity-100 capitalize' target='_blank'>View Image</Link>
    }
    </DialogContent>
  </Dialog>
  )
}

export default CardButton