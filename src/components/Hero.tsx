import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Profile from '../../public/images/profile.jpg'
import BlurImage from './BlurImage';

export default function Hero() {
  return (
    <div className='max-w-[90%] md:max-w-[70%] mx-auto overflow-hidden'>
        

        <div className="profile-image z-10">
            {/* <div className="image-container md:flex-1 border  overflow-hidden relative object-contain"> */}
            {/* <BlurImage
            width={760}
            height={400}
            src={Profile}
            alt="profile image"
            aspectRatio="auto 1042 / 401"
            priority
            loading="eager"
             /> */}
             <h1 className='text-4xl text-left  font-bold mt-8 animate-gradientBlur bg-foo transition-all duration-300 ease-in-out text-transparent bg-clip-text'>Hi, I am Elow Piku</h1>
            {/* </div> */}
            <div className="content my-4">
                
                <h1 className=''>I am Elow Piku, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, natus aliquid. Velit laboriosam soluta voluptate, quaerat quod laborum! Facilis non fuga deserunt repellat mollitia blanditiis voluptatibus reprehenderit perferendis ipsam itaque?</h1>
            </div>
            
        </div>
        <div className="social-container flex flex-row items-center gap-3">
            <div className="social-item border border-white w-10 h-10 bg-blue-400 dark:bg-slate-100 rounded-full flex items-center justify-center">
                <Link href="#">
                <FaLinkedin className='dark:text-blue-400 text-white text-xl' />
                </Link>
            </div>
            <div className="social-item border border-white w-10 h-10 bg-blue-400 dark:bg-slate-100 rounded-full flex items-center justify-center">
                <Link href="#">
                <FaGithub className='dark:text-blue-400 text-white text-xl'/>
                </Link>
            </div>
            <div className="social-item border border-white w-10 h-10 bg-blue-400 dark:bg-slate-100 rounded-full flex items-center justify-center">
                <Link href="#">
                <FaTwitter className='dark:text-blue-400 text-white text-xl'/>
                </Link>
            </div>
        </div>
        <hr className='my-8'></hr>
       

    </div>
  )
}
