import React from 'react';
import Profile from '../assets/profile.jpg';

type Skills = string[];

const skills : Skills = [
    'JavaScript',
    'React',
    'TypeScript',
    'Node.js',
    'CSS'
]


const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:px-16">
            {/* First Section */}
            <section className="flex flex-col md:flex-row items-center my-8">
                <div className="md:w-1/2">
                    <img src={Profile} alt="Profile" className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p className='font-cursive'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                </div>
            </section>

            {/* Second Section */}
            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <div className="relative border-l border-gray-200">
                    <div className="mb-8 ml-4">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">2015 - 2019</time>
                        <h3 className="text-lg font-semibold text-gray-900">Bachelor's Degree in Computer Science</h3>
                        <p className="text-base font-normal text-gray-500">University Name</p>
                    </div>
                    <div className="mb-8 ml-4">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">2019 - 2021</time>
                        <h3 className="text-lg font-semibold text-gray-900">Master's Degree in Software Engineering</h3>
                        <p className="text-base font-normal text-gray-500">University Name</p>
                    </div>
                </div>
            </section>

            {/* Third Section */}
            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Software Engineer</h3>
                    <p className="text-sm text-gray-500">Company Name | 2021 - Present</p>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Junior Developer</h3>
                    <p className="text-sm text-gray-500">Company Name | 2019 - 2021</p>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <ul className="list-inside">
                    {
                        skills.map((skill, index) => (
                            <li key={index} className="inline-block bg-blue-400 text-white px-2 py-1 rounded-lg text-sm mr-2 mb-2">{skill}</li>
                        ))
                    }
                </ul>
            </section>
        </div>
    );
};

export default Home;