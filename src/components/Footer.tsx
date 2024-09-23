import React from 'react'
import { FaGithub,FaTwitter,FaLinkedin, FaLink, } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mt-8'>
        {/* <hr className='max-w-[90%] md:max-w-[70%] mx-auto' /> */}
        <div className='max-w-[90%] md:max-w-[70%] mx-auto flex items-center justify-between py-6'>
        <div className="socials flex items-center justify-start gap-2 text-xl text-blue-400">
            <Link href="https://github.com/raikiran07" target='_blank'>
            <FaGithub />
            </Link>
            <Link href="https://twitter.com/KiranRai425?t=8JsQw4HRZAgNmVMi1EgJpQ&s=09" target='_blank'>
            <FaTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/kiran-rai-50b836196/" target='_blank'>
            <FaLinkedin />
            </Link>
            
        </div>
        <h2 className='font-bold text-blue-400'>Kiran Rai</h2>
        </div>
    </footer>
  )
}
