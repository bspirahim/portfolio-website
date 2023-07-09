import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='max-w-screen-xl'>
             <div className="relative w-full">
                    <img src='/Bg-img.JPG' className="w-full" />
                    <div className="absolute h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0)">
                        <div className='text-white space-y-7  pr-24 ml-16 text-center'>
                            <h2 className='text-5xl font-bold'>Welcome</h2>
                            <p className='text-5xl font-bold'>I am a Web Developer</p>
                            <p className='text-2xl font-bold'>based in Mirpur Dhaka</p>
                            <button>
                            <button class="primary-btn">Hire Me</button>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Banner;