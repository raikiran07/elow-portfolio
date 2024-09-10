'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'


export default function BlurImage(props:any) {
    const [isLoading,setIsLoading] = useState(true)
  return (
    <Image
    {...props}
    alt={props.alt}
    className={clsx("duration-700 ease-in-out rounded-md mobile:rounded-sm" ,
        isLoading
          ? "grayscale blur-xl scale-100"
          : "grayscale-0 blur-0 scale-100")}
    onLoadingComplete={()=>setIsLoading(false)}
     />
  )
}
