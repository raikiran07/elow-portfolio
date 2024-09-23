import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


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
            <p className='font-semibold'>B.Tech in Computer Science and Engineering</p>
            <p>2019-23</p>
            
            </div>
            <p className='font-light  dark:text-gray-50'>Kaziranga University, Jorhat</p>
            <p className='font-light dark:text-gray-50'>CGPA - <span className='font-bold'>8.0 / 10</span></p>
            </div>

            <div className="item mt-4 text-xs md:text-base">
            <div className='flex items-center justify-between'>
            <p className='font-semibold'>Higher Secondary Education</p>
            <p>2017-19</p>
            
            </div>
            <p className='font-light  dark:text-gray-50'>JNV, Longding Arunachal Pradesh</p>
            <p className='font-light dark:text-gray-50'>Percentage - <span className='font-bold'>74%</span></p>
            </div>


           
            
        </section>

        <hr className='mt-5'></hr>

        <section className='experience'>
        <h2 className='text-yellow-500 my-4'>Experience</h2>
        <div className="item text-xs md:text-base">
            <div className='flex items-start justify-between'>
              <div>
              <p className='font-semibold'>Member Technical </p>
                <p className='text-sm'>ADP Private Limited</p>
              </div>
           
            <p>Oct 2023 - Sept 2024</p>
            
            </div>
            <p className='font-light  dark:text-gray-50 text-sm'>Hyderabad, India</p>
            <p className='font-light dark:text-gray-50 mt-2'>Developed backend api&apos;s using java springboot and spring hibernate, maintain and debug production pipeline</p>
            </div>
            {/* <p className='text-xs md:text-base'><span className='font-semibold'>Technology used - </span>Python, Arduino board, mongodb</p> */}

            <div className="item mt-4 text-xs md:text-base">
            <div className='flex items-start justify-between'>
            <div>
            <p className='font-semibold'>Python Fullstack Developer</p>
            <p className='text-sm'>TCS remote Internship</p>
            </div>
            
            <p>Aug 2022 - Sept 2022</p>
            
            </div>
            <p className='font-light  dark:text-gray-50 text-sm'>Bhubaneswar, India</p>
            <p className='font-light dark:text-gray-50 mt-2'>accessive training in django and flask frameworks and building projects to implement the learnings.</p>
            </div>

        </section>

        <section className='achievements'>
        <h2 className='text-yellow-500 my-4'>Skills</h2>
        <ul>
          <li className='font-semibold'>Programming Languages - 
            <div className="flex items-center justify-start gap-1 flex-wrap font-normal text-sm p-1">
            <span>Java</span>,<span>Javascript</span>,<span>Python</span>
            </div>
          </li>
          <li className='font-semibold mt-2'>Frameworks and Tools - 
            <div className='flex items-center justify-start gap-1 flex-wrap font-normal text-sm md:text-base p-1'>
            <span className=''>Springboot</span>,
          <span>JSP</span>,
          <span>JDBC</span>,
          <span>Spring Hibernate</span>,
          <span>Hibernate ORM</span>,
          <span>ReactJs</span>,
          <span>Nodejs</span>,
          <span>Typescript</span>,
          <span>SQL</span>,
          <span>MongoDB</span>,
          <span>Jenkins</span>,
          <span>AWS</span>
            </div>
          </li>
         
        </ul>

        </section>

      <Link href="https://drive.google.com/file/d/153kVu3NvCTBT73uNbG_G_BHzQDecbKTq/view?usp=drive_link" target="_blank">
      <Button className='my-4'>Download Resume</Button>
      </Link>
        

        

    </div>
  )
}
