import React from 'react'
import type{ Metadata } from 'next'
import ProjectList from '@/components/ProjectList'




export default function Projects() {
  return (
    <div className='max-w-[90%] md:max-w-[60%] mx-auto'>
        {/* <h1 className='frontline font-bold mt-4 text-3xl'>Projects</h1> */}
        <h1 className='text-4xl font-bold my-6 md:my-8'>Projects</h1>
        <ProjectList/>
    </div>
  )
}
