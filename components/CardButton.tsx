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
    <DialogTrigger className='m-2 p-2 bg-gray-500 opacity-90 hover:opacity-100 hover:scale-105 text-white rounded-full'>View</DialogTrigger>
    <DialogContent className='bg-white '>
      <DialogHeader>
        <DialogTitle className='text-center'>{site.title}</DialogTitle>
        <DialogDescription className='font-semibold'>
         {newPara}
        </DialogDescription>
      </DialogHeader>
      <Link href={`${site.slug}`} className='text-center bg-black p-2 text-white rounded-full opacity-[97%] hover:opacity-100' target='_blank'>visit the website</Link>
    </DialogContent>
  </Dialog>
  )
}

export default CardButton