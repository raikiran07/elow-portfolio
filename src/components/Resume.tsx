import React from 'react'
import { Button } from './ui/button'

export default function Resume() {
  return (
    <div className='max-w-[90%] md:max-w-[70%] mx-auto my-8'>
        <h1 className='frontline font-bold text-3xl'>
            Resume
        </h1>
        <section className="education">
            <h2 className='text-yellow-500 my-4'>Education Qualification</h2>
            <div className="item text-xs md:text-base">
            <div className='flex items-center justify-between'>
            <p className='font-semibold'>B.Tech in electronic engineering</p>
            <p>2019-23</p>
            
            </div>
            <p className='font-light  dark:text-gray-50'>Kaziranga University, Jorhat</p>
            <p className='font-light dark:text-gray-50'>CGPA - <span className='font-bold'>9.2</span></p>
            </div>

            <div className="item mt-4 text-xs md:text-base">
            <div className='flex items-center justify-between'>
            <p className='font-semibold'>Higher Secondary Education</p>
            <p>2017-19</p>
            
            </div>
            <p className='font-light  dark:text-gray-50'>JNV, Kohima</p>
            <p className='font-light dark:text-gray-50'>Percentage - <span className='font-bold'>92%</span></p>
            </div>


           
            
        </section>

        <hr className='mt-5'></hr>

        <section className='experience'>
        <h2 className='text-yellow-500 my-4'>Experience</h2>
        <div className="item text-xs md:text-base">
            <div className='flex items-center justify-between'>
            <p className='font-semibold'>Intern at CDAC, Gurgaon</p>
            <p>2023-24</p>
            
            </div>
            <p className='font-light  dark:text-gray-50'>Gurgaon, India</p>
            <p className='font-light dark:text-gray-50'>work on something Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, fugit?</p>
            </div>
            <p className='text-xs md:text-base'><span className='font-semibold'>Technology used - </span>Python, Arduino board, mongodb</p>

            <div className="item mt-4 text-xs md:text-base">
            <div className='flex items-center justify-between'>
            <p className='font-semibold'>TCS remote Internship</p>
            <p>2022-22</p>
            
            </div>
            <p className='font-light  dark:text-gray-50'>Bhubaneswar, India</p>
            <p className='font-light dark:text-gray-50'>work on something Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, fugit?</p>
            </div>

        </section>

        <section className='achievements'>
        <h2 className='text-yellow-500 my-4'>Achievements</h2>
        <ul>
          <li className='before:content-["-"] before:mr-1'>SIH Winner 2023</li>
          <li className='before:content-["-"] before:mr-1'>Something winner</li>
          <li className='before:content-["-"] before:mr-1'>Again Something winner</li>
        </ul>

        </section>

        <Button className='my-4'>Download Resume</Button>

        

    </div>
  )
}
