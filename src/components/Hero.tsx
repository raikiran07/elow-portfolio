import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import Carousel from './Carousal';
import { Button } from './ui/button';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)


export default function Hero() {

    useGSAP(()=>{

        const heroTl = gsap.timeline()

        heroTl.from("#author",{
            y:20,
            opacity:0,
            duration:1,
            ease: "power2.out"
        })

        heroTl.from("#header-content",{
            y:20,
            opacity:0,
            duration:1,
            stagger:0.5
        })

        heroTl.from(".social-item",{
            x:50,
            opacity:0,
            rotate:360,
            duration:1,
            stagger:0.5
        })

        heroTl.fromTo("#hr",{
            width:0,
            opacity:0,
            duration:1
        },{
            width:"100%",
            opacity:1,
            duration:1,
            ease: "bounce.out"
        })

        heroTl.from(".resume-header",{
            y:20,
            opacity:0,
            duration:1,
            
          })
          heroTl.from(".education",{
            y:20,
            opacity:0,
            duration:1,
            stagger:0.5
          })
      
          heroTl.from(".hr",{
            y:20,
            opacity:0,
            duration:1
          })

    },{})


  return (
    <div className='max-w-[90%] md:max-w-[50%] mx-auto overflow-hidden'>
        

        <div className="profile-image z-10">
           
             <h1 id="author" className='text-4xl text-left  font-bold mt-8 bg-foo  text-transparent bg-clip-text'>Hi, I am Kiran Rai</h1>
            {/* </div> */}
            <div className="content my-4" id="header-content">
                
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
        <hr className='my-8 w-0' id="hr"></hr>

        <h1 className='frontline font-bold text-3xl resume-header'>
            Resume
        </h1>
        <section className="education">
            <h2 className='text-yellow-500 my-4 education'>Education Qualification</h2>
            <div className="item text-xs md:text-base">
            <div className='flex items-center justify-between education'>
            <p className='font-semibold'>B.Tech in Computer Science and Engineering</p>
            <p className='text-sm'>2019-23</p>
            
            </div>
            <p className='font-light  dark:text-gray-50 education'>Kaziranga University, Jorhat</p>
            <p className='font-light dark:text-gray-50 education'>CGPA - <span className='font-bold'>8.0 / 10</span></p>
            </div>

            <div className="item mt-4 text-xs md:text-base">
            <div className='flex items-center justify-between education'>
            <p className='font-semibold'>Higher Secondary Education</p>
            <p className='text-sm'>2017-19</p>
            
            </div>
            <p className='font-light  dark:text-gray-50 education'>JNV, Longding Arunachal Pradesh</p>
            <p className='font-light dark:text-gray-50 education'>Percentage - <span className='font-bold'>74%</span></p>
            </div>


           
            
        </section>

        <hr className='mt-5 hr' id="second-hr"></hr>

        <section className='experience'>
        <h2 className='text-yellow-500 my-4 education'>Experience</h2>
        <div className="item text-xs md:text-base">
            <div className='flex items-start justify-between education'>
              <div>
              <p className='font-semibold'>Member Technical </p>
                <p className='text-sm'>ADP Private Limited</p>
              </div>
           
            <p className='text-sm'>Oct 2023 - Sept 2024</p>
            
            </div>
            <p className='font-light  dark:text-gray-50 text-sm education'>Hyderabad, India</p>
            <p className='font-light dark:text-gray-50 mt-2 education'>Developed backend apis using java springboot and spring hibernate, maintain and debug production pipeline</p>
            </div>
            {/* <p className='text-xs md:text-base'><span className='font-semibold'>Technology used - </span>Python, Arduino board, mongodb</p> */}

            <div className="item mt-4 text-xs md:text-base">
            <div className='flex items-start justify-between education'>
            <div>
            <p className='font-semibold'>Python Fullstack Developer</p>
            <p className='text-sm'>TCS remote Internship</p>
            </div>
            
            <p className='text-sm'>Aug 2022 - Sept 2022</p>
            
            </div>
            <p className='font-light  dark:text-gray-50 text-sm education'>Bhubaneswar, India</p>
            <p className='font-light dark:text-gray-50 mt-2 education'>accessive training in django and flask frameworks and building projects to implement the learnings.</p>
            </div>

        </section>

        <section className='achievements'>
        <h2 className='text-yellow-500 my-4'>Skills</h2>
       
        <Carousel/>

        </section>

      <Link href="https://drive.google.com/file/d/153kVu3NvCTBT73uNbG_G_BHzQDecbKTq/view?usp=drive_link" target="_blank">
      <Button className='my-6'>Download Resume</Button>
      </Link>
        

        
       

    </div>
  )
}
