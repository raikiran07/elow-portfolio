import React from 'react'
import { blogs } from '@/lib/data'
import Link from 'next/link'
import BlurImage from './BlurImage'

export default function BlogList() {
  return (
    <div>
        {
          blogs?.map(blog=>(
            <div key={blog.blogId} className='mt-4'>
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
             <div className='flex items-center justify-between'>
             <h1 className='animate-fadeInUp font-semibold text-xl text-blue-400 my-4'>
              
                {
                  blog.title
                }
                
              </h1>
              <p className='animate-fadeInUp'>
                {`${blog.date} . ${blog.readTime} minute`}
              </p>
             </div>
             <p className='animate-fadeInUp'>
                {
                  blog.summary
                }
              </p>
             </Link>
             
              
              
              
                <hr className='my-8'></hr>
            
            </div>
          ))
        }
    </div>
  )
}
