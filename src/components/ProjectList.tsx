import React from 'react'
import {data} from '../lib/data';
import Link from 'next/link';
import BlurImage from './BlurImage';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from "react-icons/fi";

export default function ProjectList() {
    console.log(data);
  return (
    <div>
        {
          data?.map(project=>(
            <div key={project.id} className='mt-4'>

              <div className='title-container flex items-center justify-start gap-5 pb-1'>

              <h1 className='animate-fadeInUp font-semibold text-xl text-blue-400 mb-2'>
               
               {
                 project.title
               }
              
             </h1>
             <div className="link-container flex items-center justify-start gap-2 animate-fadeInUp">
              <Link href={`${project.githubLink ? project.githubLink : "#"}`}>
              <FaGithub />
              </Link>
              <Link href={`${project.liveLink ? project.liveLink : "#"}`}>
              <FiExternalLink />
              </Link>
             </div>

              </div>
              
            
              <p className='animate-fadeInUp'>
                {
                  project.description
                }
              </p>

             {
              project.tech && <div>
                <h2 className='my-2 animate-fadeInUp'>Tech Used </h2>
                <div className='flex items-center justify-start gap-2 flex-wrap animate-blur'>
                {
                  project.tech.map(item=>(
                    <p className='bg-blue-400 p-1 rounded-md text-white' key={item.id}>{item.name}</p>
                  ))
                }
                </div>

                <hr className='my-8'></hr>
                
              </div>
             }
            </div>
          ))
        }
    </div>
  )
}
