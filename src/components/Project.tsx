import React from 'react';
import { Link } from 'react-router-dom';
// Assuming you have some CSS for styling

import Project1 from '../assets/project-1.jpg';
import Project2 from '../assets/project-2.jpg';

import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title:"Project 1",
        image: Project1,
        liveLink: 'https://liveproject1.com',
        githubLink: 'https://github.com/user/project1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti magnam dolores illum ullam, necessitatibus corrupti numquam laboriosam! Vitae consectetur quam obcaecati eveniet tempora nemo perspiciatis officiis tempore. Eveniet, quibusdam debitis.',
        technologies: ['React', 'TypeScript', 'CSS']
    },
    {
        id: 2,
        title:"Project 2",
        image: Project2,
        liveLink: 'https://liveproject2.com',
        githubLink: 'https://github.com/user/project2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, atque? Ut reiciendis minus est obcaecati provident aliquam id commodi assumenda.',
        technologies: ['JavaScript', 'HTML', 'CSS']
    },
    // Add more projects as needed
];

const Project: React.FC = () => {
    return (
        <div className="project-grid grid grid-cols-1 md:grid-cols-2 p-4 container mx-auto md:px-16 gap-6 mt-6">
            {projects.map(project => (
                <div key={project.id} className="project-card border rounded-md overflow-hidden hover:border-gray-600 transition-all ease-linear">
                    <img src={project.image} alt={`Project ${project.id}`}  className="project-image h-[400px] w-full object-cover" />
                    <div className="content-container p-2">
                   
                    <div className="header flex items-center justify-between">
                        <h3 className="project-title text-xl font-semibold text-gray-800">{project.title}</h3>

                        <div className="project-links flex items-center justify-start gap-4 my-2 text-lg text-gray-700 hover:text-black">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                        </a>
                    </div>
                    </div>
                    <Link to={`/project-item/${project.id}`} className="project-description">
                        {project.description.slice(0,150)} ...<span className='text-blue-400'>read more</span>
                    </Link>
                    <div className="project-technologies mt-2">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="inline-block bg-blue-400 text-white px-2 py-1 rounded-lg text-sm mr-2 mb-2">{tech}</span>
                        ))}
                    </div>
                    </div>
                    
                </div>
            ))}
        </div>
    );
};

export default Project;