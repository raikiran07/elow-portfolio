'use client'
import React from 'react'
import {data} from '../lib/data';
import Link from 'next/link';
import BlurImage from './BlurImage';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from "react-icons/fi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger)


export default function ProjectList() {
  console.log(data)

  useGSAP(()=>{
    const projectTl = gsap.timeline()

    // projectTl.from(".project-item",{
    //     y:120,
    //     opacity:0,
    //     duration:1,
    //     stagger:0.5
    // })
  },{})

 
   
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
        {
          data?.map(project=>(
            <div key={project.id} className='border project-item mt-4 font-extralight p-2 rounded-md hover:cursor-pointer hover:border-gray-500 transition-all ease-linear animate-fadeInUp text-xs md:text-sm'>
               {
                  project.video && <video width={'100%'} className='rounded-sm' autoPlay loop>
                    <source src={project.video}  type="video/mp4"/>

                  </video>
                }
                  

              <div className='title-container flex items-center justify-between  pb-1 md:mb-2'>
               

              <div className='flex items-center justify-start gap-2'>
              <h1 className='animate-fadeInUp font-semibold text-xl text-blue-400 mt-2'>
               
               {
                 project.title
               }
               </h1>

               {
                project.developing && <span className='text-[10px] font-light dark:bg-white p-[3px] rounded-md mt-2 tracking-wider dark:text-blue-400 bg-orange-200 text-orange-500 '>Developing</span>
               }
              
             
              </div>
             
             <div className="link-container flex items-center justify-start gap-2">
              <Link href={`${project.githubLink ? project.githubLink : "#"}`}>
              <FaGithub className='text-gray-500 hover:text-gray-700 transition-all ease-linear'/>
              </Link>
              <Link href={`${project.liveLink ? project.liveLink : "#"}`}>
              <FiExternalLink className='text-gray-500 hover:text-gray-700 transition-all ease-linear' />
              </Link>
             </div>

              </div>
              
            
              <p className=''>
                {
                  project.description
                }
              </p>

             {
              project.tech && <div>
                <h2 className='my-2 animate-fadeInUp font-light'>Tech Used </h2>
                <div className='flex items-center justify-start gap-2 flex-wrap animate-blur'>
                {
                  project.tech.map(item=>(
                    <p className='bg-blue-400 p-1 rounded-md text-white text-xs' key={item.id}>{item.name}</p>
                  ))
                }
                </div>

                {/* <hr className='my-8'></hr> */}
                
              </div>
             }
            </div>
          ))
        }
    </div>
  )
}
