import React from 'react'
import BlogList from '@/components/BlogList'

export default function Blog() {
  return (
    <div className='max-w-[90%] md:max-w-[70%] mx-auto'>
      <h1 className='text-4xl font-bold my-8'>Blogs</h1>
        <BlogList/>
    </div>
  )
}
