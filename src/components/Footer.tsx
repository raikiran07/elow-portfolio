import React from 'react'
import { FaGithub,FaTwitter,FaLinkedin, FaLink, } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mt-8'>
        {/* <hr className='max-w-[90%] md:max-w-[70%] mx-auto' /> */}
        <div className='max-w-[90%] md:max-w-[70%] mx-auto flex items-center justify-between py-6'>
        <div className="socials flex items-center justify-start gap-2 text-xl text-blue-400">
            <Link href="/">
            <FaGithub />
            </Link>
            <Link href="/">
            <FaTwitter />
            </Link>
            <Link href="/">
            <FaLinkedin />
            </Link>
            
        </div>
        <h2 className='font-bold text-blue-400'>Elow Piku</h2>
        </div>
    </footer>
  )
}
