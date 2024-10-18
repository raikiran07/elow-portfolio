
import React from 'react'
import { getSingleBlog } from '@/lib/getBlog'
import BlurImage from '@/components/BlurImage';


export default function Blog({params}:{params:{
    blogId:string
}}) {

    const {blogId} = params;
    
    const reqBlog = getSingleBlog(Number(blogId))
   
    

  return (
    <div  className='mt-8 max-w-[90%] md:max-w-[60%] mx-auto font-extralight'>
           <BlurImage
            width={700}
            height={400}
            src={reqBlog.imageUrl}
            alt="blog image"
            aspectRatio="auto 1042 / 201"
            priority
            loading="eager"
             />
            
             <h1 className='animate-fadeInUp font-regular text-blue-400 mt-4 text-3xl'>
                {reqBlog.title}
              </h1>
              <div className='flex items-center justify-start gap-1 text-xs font-extralight mb-4 animate-fadeInUp dark:text-gray-300 ml-1'>
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
