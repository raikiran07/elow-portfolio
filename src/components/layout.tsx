import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }:{
    children: React.ReactNode
}) => {
    return (
        <div>
            <nav className='border border-gray-400 p-4 flex items-center justify-between mx-auto max-w-[93%] sm:max-w-[81%]  sticky top-5 rounded-md backdrop-blur-sm'>
                <Link to="/"><h1 className='font-bold text-blue-600 text-xl'>My Portfolio</h1></Link>
                
                <ul className='flex items-center justify-center gap-2 md:gap-4 font-semibold'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;