import React from 'react';
import { Link,} from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navber = () => {
    const navOptions = <>

        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>What I Do</a></li>
        <li><a>Resume</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className="navbar fixed z-10 text-white bg-black opacity-60">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl">Abdur Rahim</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='mr-2 text-xl' to='https://www.facebook.com/mamunurrahim.rahim.1/' target="_blank"><FaFacebook /></Link>
                <Link className='mr-2 text-xl' to='https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F' target="_blank"><FaLinkedin></FaLinkedin></Link>
                <Link className='mr-2 text-xl' to='https://github.com/bspirahim?tab=repositories' target="_blank"><FaGithub></FaGithub></Link>
            </div>
        </div>
    );
};

export default Navber;