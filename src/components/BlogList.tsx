import React from 'react'
import { blogs } from '@/lib/data'
import Link from 'next/link'
import BlurImage from './BlurImage'

export default function BlogList() {
  return (
    <div>
        {
          blogs?.map(blog=>(
            <div key={blog.blogId} className='mt-4 md:border md:p-2 md:rounded-md md:hover:scale-101 md:hover:translate-y-[-2px] md:hover:border-gray-400 transition-all ease-linear font-extralight'>
            {/* <BlurImage
            width={760}
            height={400}
            src={blog.imageUrl}
            alt="blog image"
            aspectRatio="auto 1042 / 401"
            priority
            loading="eager"
             /> */}
             <Link href={`/blogs/${blog.blogId}`}>
             <div className='flex flex-col md:flex-row md:items-center justify-between'>
             <h1 className='animate-fadeInUp font-semibold text-xl text-blue-400   md:my-4'>
              
                {
                  blog.title
                }
                
              </h1>
              <p className='animate-fadeInUp mb-4 md:mb-0 text-xs md:text-base'>
                {`${blog.date} . ${blog.readTime} minute`}
              </p>
             </div>
             <p className='animate-fadeInUp'>
                {
                  `${blog.summary}...`
                }
              </p>
             </Link>
             
              
              
              
                <hr className='my-8 md:hidden'></hr>
            
            </div>
          ))
        }
    </div>
  )
}
