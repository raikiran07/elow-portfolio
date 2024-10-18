'use-client';
import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './ChangeTheme';
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className='w-full  mx-auto   sticky top-0 z-50 dark:bg-background bg-white'>
        <div className='py-4 flex flex-row items-center justify-between  mx-auto max-w-[90%] md:max-w-[60%]  animate-fadeInUp'>
        <h1 className='font-bold  bg-blue-300 p-1 rounded-sm text-xl text-white' id="logo">
            <Link href="/">
            KR
            </Link>
        </h1>
        <div className='flex items-center justify-center gap-3 text-sm'>
           
            <p className='relative cursor-pointer hover:text-blue-200 transition-all ease-linear'>
                <Link href="/projects">Projects</Link>
            </p>
            <p className='relative cursor-pointer hover:text-blue-200 transition-all ease-linear'>
                <Link href="/contact">Contact</Link>
            </p>
            <p className='relative cursor-pointer hover:text-blue-200 transition-all ease-linear'>
                <Link href="/blogs">Blogs</Link>
            </p>
        </div>
        <ModeToggle />
        </div>
        <hr className='max-w-[90%] md:max-w-[60%] mx-auto' />
    </nav>
  )
}
