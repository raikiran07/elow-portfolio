
import React from 'react'
import { getSingleBlog } from '@/lib/getBlog'
import BlurImage from '@/components/BlurImage';


export default function Blog({params}:{params:{
    blogId:string
}}) {

    const {blogId} = params;
    
    const reqBlog = getSingleBlog(Number(blogId))
   
    

  return (
    <div  className='mt-8 max-w-[90%] md:max-w-[50%] mx-auto'>
           <BlurImage
            width={700}
            height={400}
            src={reqBlog.imageUrl}
            alt="blog image"
            aspectRatio="auto 1042 / 201"
            priority
            loading="eager"
             />
            
             <h1 className='animate-fadeInUp font-semibold text-blue-400 mt-4 text-4xl'>
                {reqBlog.title}
              </h1>
              <div className='flex items-center justify-start gap-1 text-sm font-light mb-4 animate-fadeInUp dark:text-gray-300'>
              <p>{reqBlog.date} .</p>
              <p>{reqBlog.readTime} minute</p>
             </div>
              
              <p className='animate-fadeInUp'>
                {
                  reqBlog.description
                }
              </p>
            </div>

  )
}
