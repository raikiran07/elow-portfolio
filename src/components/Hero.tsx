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
             <h1 className='text-4xl text-left  font-bold mt-8 animate-gradientBlur bg-foo transition-all duration-300 ease-in-out text-transparent bg-clip-text'>Hi, I am Kiran Rai</h1>
            {/* </div> */}
            <div className="content my-4">
                
                <h1 className=''>I am a dedicated software developer with 1 year of experience in developing and optimizing software applications using java and
javascript. I am passionate about learning new technologies and am eager to contribute to innovative projects in a collaborative team
environment.</h1>
            </div>
            
        </div>
        <div className="social-container flex flex-row items-center gap-3">
            <div className="social-item border border-white w-10 h-10 bg-blue-400 dark:bg-slate-100 rounded-full flex items-center justify-center">
                <Link href="https://www.linkedin.com/in/kiran-rai-50b836196/" target="_blank">
                <FaLinkedin className='dark:text-blue-400 text-white text-xl' />
                </Link>
            </div>
            <div className="social-item border border-white w-10 h-10 bg-blue-400 dark:bg-slate-100 rounded-full flex items-center justify-center">
                <Link href="https://github.com/raikiran07" target='_blank'>
                <FaGithub className='dark:text-blue-400 text-white text-xl'/>
                </Link>
            </div>
            <div className="social-item border border-white w-10 h-10 bg-blue-400 dark:bg-slate-100 rounded-full flex items-center justify-center">
                <Link href="https://twitter.com/KiranRai425?t=8JsQw4HRZAgNmVMi1EgJpQ&s=09" target="_blank">
                <FaTwitter className='dark:text-blue-400 text-white text-xl'/>
                </Link>
            </div>
        </div>
        <hr className='my-8'></hr>
       

    </div>
  )
}
