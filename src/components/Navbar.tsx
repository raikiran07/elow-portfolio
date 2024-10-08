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
            <Link href="/">Kiran Rai</Link>
        </h1>
        <div className='flex items-center justify-center gap-3 text-sm'>
           
            <p className='hover:before:content-[""] hover:before:w-[110%] hover:before:h-[3px] hover:before:absolute hover:before:left-[-5%] hover:before:bg-blue-400 hover:before:bottom-2 relative cursor-pointer'>
                <Link href="/projects">Projects</Link>
            </p>
            <p className='hover:before:content-[""] hover:before:w-[110%] hover:before:h-[3px] hover:before:absolute hover:before:left-[-5%] hover:before:bg-blue-400 hover:before:bottom-2 relative cursor-pointer'>
                <Link href="/contact">Contact</Link>
            </p>
            <p className='hover:before:content-[""] hover:before:w-[110%] hover:before:h-[3px] hover:before:absolute hover:before:left-[-5%] hover:before:bg-blue-400 hover:before:bottom-2 relative cursor-pointer'>
                <Link href="/blogs">Blogs</Link>
            </p>
        </div>
        <ModeToggle />
        </div>
        <hr className='max-w-[90%] md:max-w-[70%] mx-auto' />
    </nav>
  )
}
