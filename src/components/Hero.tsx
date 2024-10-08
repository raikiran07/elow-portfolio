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
import Profile from '../../public/images/profile.png'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)


export default function Hero() {

    useGSAP(()=>{

        const heroTl = gsap.timeline()

        heroTl.from("#author",{
            y:20,
            opacity:0,
            duration:0.7,
            ease: "power2.out"
        })

        heroTl.from("#header-content",{
            y:20,
            opacity:0,
            duration:0.7,
            stagger:0.5
        })

        heroTl.to(".author-image",{
        
            x:250,
            y:-200,
            rotate:45,
            duration:1,
            scrollTrigger:{
                trigger:".author-image",
                start:"top 10%",
                scrub:true
            }
        })
        heroTl.from(".social-item",{
            x:50,
            opacity:0,
            rotate:360,
            duration:0.7,
            borderRadius:'20px',
            stagger:0.5,
            
        })

        heroTl.fromTo("#hr",{
            width:0,
            opacity:0,
            duration:0.7
        },{
            width:"100%",
            opacity:1,
            duration:0.7,
            ease: "bounce.out"
        })

       
          heroTl.from(".education",{
            y:20,
            opacity:0,
            duration:0.7,
            stagger:0.5,
            scrollTrigger:{
                trigger:".education",
                start:"top 60%",
                scrub:true
            }
          })
      
         

    },{})


  return (
    <div className='max-w-[90%] md:max-w-[70%] mx-auto'>
        

        <div className="profile-image z-10 min-h-[80vh]">
            <div className="image-container flex flex-col-reverse md:flex-row items-center justify-between md:mt-10">
            <div>
                 {/* </div> */}
            <h1 id="author" className='text-4xl md:text-6xl lg:text-8xl text-left  font-bold mt-8 bg-foo  text-transparent bg-clip-text md:leading-[4rem] lg:leading-[6rem]'><span className='text-4xl md:text-6xl'>Hi, I am</span> <br></br> Kiran Rai</h1>
            <div className="content my-6" id="header-content">
                
                <h1 className=''>I am a dedicated software developer with 1 year of experience in developing and optimizing software applications using java and
                javascript. I am passionate about learning new technologies and am eager to contribute to innovative projects in a collaborative team
                environment.</h1>
            </div>
            <div className="social-container flex flex-row items-center gap-3 my-4">
            <div className="social-item border border-white w-10 h-10 bg-blue-400 dark:bg-slate-100 flex items-center justify-center">
                <Link href="https://www.linkedin.com/in/kiran-rai-50b836196/" target="_blank">
                <FaLinkedin className='dark:text-blue-400 text-white text-xl' />
                </Link>
            </div>
            <div className="social-item border border-white w-10 h-10 bg-blue-400 dark:bg-slate-100  flex items-center justify-center">
                <Link href="https://github.com/raikiran07" target='_blank'>
                <FaGithub className='dark:text-blue-400 text-white text-xl'/>
                </Link>
            </div>
            <div className="social-item border border-white w-10 h-10 bg-blue-400 dark:bg-slate-100 flex items-center justify-center">
                <Link href="https://twitter.com/KiranRai425?t=8JsQw4HRZAgNmVMi1EgJpQ&s=09" target="_blank">
                <FaTwitter className='dark:text-blue-400 text-white text-xl'/>
                </Link>
            </div>
        </div>
            </div>
           
            <Image src={Profile} alt='author image' className='mt-10 ml-4 rounded-md author-image max-w-full md:max-w-[350px]'></Image>
            </div>
           
            
           
            
        </div>
       
        <hr className='my-8 w-0 education'></hr>

        <h1 className='frontline font-bold text-3xl resume-header education'>
            Resume
        </h1>
        <section className="education">
            <h2 className='text-blue-400 my-4'>Education Qualification</h2>
            <div className="item text-xs md:text-base">
            <div className='flex items-center justify-between'>
            <p className='font-semibold'>B.Tech in Computer Science and Engineering</p>
            <p className='text-sm'>2019-23</p>
            
            </div>
            <p className='font-light  dark:text-gray-50'>Kaziranga University, Jorhat</p>
            <p className='font-light dark:text-gray-50'>CGPA - <span className='font-bold'>8.0 / 10</span></p>
            </div>

            <div className="item mt-4 text-xs md:text-base">
            <div className='flex items-center justify-between'>
            <p className='font-semibold'>Higher Secondary Education</p>
            <p className='text-sm'>2017-19</p>
            
            </div>
            <p className='font-light  dark:text-gray-50'>JNV, Longding Arunachal Pradesh</p>
            <p className='font-light dark:text-gray-50'>Percentage - <span className='font-bold'>74%</span></p>
            </div>


           
            
        </section>

        <hr className='mt-5 hr education' id="second-hr"></hr>

        <section className='experience education'>
        <h2 className='text-blue-400 my-4'>Experience</h2>
        <div className="item text-xs md:text-base">
            <div className='flex items-start justify-between'>
              <div>
              <p className='font-semibold'>Member Technical </p>
                <p className='text-sm'>ADP Private Limited</p>
              </div>
           
            <p className='text-sm'>Oct 2023 - Sept 2024</p>
            
            </div>
            <p className='font-light  dark:text-gray-50 text-sm'>Hyderabad, India</p>
            <p className='font-light dark:text-gray-50 mt-2'>Developed backend apis using java springboot and spring hibernate, maintain and debug production pipeline</p>
            </div>
            {/* <p className='text-xs md:text-base'><span className='font-semibold'>Technology used - </span>Python, Arduino board, mongodb</p> */}

            <div className="item mt-4 text-xs md:text-base">
            <div className='flex items-start justify-between'>
            <div>
            <p className='font-semibold'>Python Fullstack Developer</p>
            <p className='text-sm'>TCS remote Internship</p>
            </div>
            
            <p className='text-sm'>Aug 2022 - Sept 2022</p>
            
            </div>
            <p className='font-light  dark:text-gray-50 text-sm'>Bhubaneswar, India</p>
            <p className='font-light dark:text-gray-50 mt-2 education'>accessive training in django and flask frameworks and building projects to implement the learnings.</p>
            </div>

        </section>

        <section className='achievements education'>
        <h2 className='text-blue-400 my-4'>Skills</h2>
       
        <Carousel/>

        </section>

      <Link href="https://drive.google.com/file/d/153kVu3NvCTBT73uNbG_G_BHzQDecbKTq/view?usp=drive_link" target="_blank">
      <Button className='my-6'>Download Resume</Button>
      </Link>
        

        
       

    </div>
  )
}
