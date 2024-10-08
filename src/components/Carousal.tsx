import React, { useState } from 'react'

export default function Carousel() {
    const [hover,setIsHovered] = useState(false)
  return (
    <div className={`w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] `}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
    <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scrollInfinite ${hover ? "paused" : ""}`}>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./facebook.svg" alt="Facebook" /> */}
            <p>Javascript</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./disney.svg" alt="Disney" /> */}
            <p>NodeJs</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./airbnb.svg" alt="Airbnb" /> */}
            <p>ReactJs</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./apple.svg" alt="Apple" /> */}
            <p>ExpressJs</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./spark.svg" alt="Spark" /> */}
            <p>MongoDB</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./samsung.svg" alt="Samsung" /> */}
            <p>SQL</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./quora.svg" alt="Quora" /> */}
            <p>Java Springboot</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./sass.svg" alt="Sass" /> */}
            <p>Firebase</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./sass.svg" alt="Sass" /> */}
            <p>Typescript</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./sass.svg" alt="Sass" /> */}
            <p>NextJs</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./sass.svg" alt="Sass" /> */}
            <p>Gsap</p>
        </li>
    </ul>
    <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scrollInfinite ${hover ? "paused" : ""}`}>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md ml-4'>
            {/* <img src="./facebook.svg" alt="Facebook" /> */}
            <p>Javascript</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./disney.svg" alt="Disney" /> */}
            <p>NodeJs</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./airbnb.svg" alt="Airbnb" /> */}
            <p>ReactJs</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./apple.svg" alt="Apple" /> */}
            <p>ExpressJs</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./spark.svg" alt="Spark" /> */}
            <p>MongoDB</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./samsung.svg" alt="Samsung" /> */}
            <p>SQL</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./quora.svg" alt="Quora" /> */}
            <p>Java Springboot</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./sass.svg" alt="Sass" /> */}
            <p>Firebase</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./sass.svg" alt="Sass" /> */}
            <p>Typescript</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./sass.svg" alt="Sass" /> */}
            <p>NextJs</p>
        </li>
        <li className='border whitespace-nowrap py-1 px-2 shadow-md rounded-md'>
            {/* <img src="./sass.svg" alt="Sass" /> */}
            <p>Gsap</p>
        </li>
    </ul>
</div>
  )
}
