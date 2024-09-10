'use-client';
import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './ChangeTheme';
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className='w-full  sticky top-0 z-50 dark:bg-background bg-white'>
        <div className='py-4 flex flex-row items-center justify-between  mx-auto max-w-[90%] md:max-w-[70%]  animate-fadeInUp'>
        <h1 className='font-bold'>
            <Link href="/">Elow Piku</Link>
        </h1>
        <div className='flex items-center justify-center gap-3 text-sm'>
           
            <p>
                <Link href="/projects">Projects</Link>
            </p>
            <p>
                <Link href="/contact">Contact</Link>
            </p>
            <p>
                <Link href="/blogs">Blogs</Link>
            </p>
        </div>
        <ModeToggle />
        </div>
        <hr className='max-w-[90%] md:max-w-[70%] mx-auto' />
    </nav>
  )
}
