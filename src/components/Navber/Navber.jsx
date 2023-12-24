import React from 'react';
import { Link,} from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navber = () => {
    const navOptions = <>

        <li><a className='hover:text-primary' href='#home'>Home</a></li>
        <li><a className='hover:text-primary' href='#about'>About</a></li>
        <li><a className='hover:text-primary' href='#resume'>Resume</a></li>
        <li><a className='hover:text-primary' href='#portfolio'>Portfolio</a></li>
        <li><a className='hover:text-primary' href='#contact'>Contact</a></li>
    </>
    return (
        <div className='bg-[#212529] '>
            <div className="navbar p-0 text-white bg-[#212529] max-w-screen-lg mx-auto">
            <div className="navbar-start max-w-screen-lg">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl text-white p-0">Portfolio.</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg text-white">
                    {navOptions}
                </ul>
            </div>

        </div>
        </div>
    );
};

export default Navber;