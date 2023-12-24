import React from 'react';
import './Banner.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaFacebook, FaGithub, FaLinkedin, FaAngleDown, FaArrowDown } from 'react-icons/fa';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Web Developer', 'FrontEnd Developer', 'Web Designer'],
        loop: {},
    });
    return (

        <div className="bg-[#212529]  w-full md:h-[480px] p-2 relative">
            <div className='grid md:grid-cols-2  items-center gap-10 max-w-screen-lg mx-auto my-10'>
                <div className='text-white text-center md:text-left '>
                    <h2 className='md:text-5xl font-bold'>Welcome</h2>
                    <h1 className='md:text-4xl font-bold py-4'>I am a
                        <span className='text-primary'> {text}</span>
                        <Cursor />
                    </h1>
                    <p className='md:text-2xl font-bold text-gray-300'>based in Dhaka Bangladesh</p>
                    <div className='space-x-5 my-5'>
                        <button class="border border-primary py-2 px-7 rounded-lg bg-primary text-xl text-black font-bold  hover:bg-transparent hover:text-primary duration-500">Hire Me</button>
                        <button class="border border-primary py-2 px-7 rounded-lg  text-xl text-primary font-bold hover:bg-primary duration-500 hover:text-white">Let's Talk</button>
                    </div>
                    <div className='flex z-10 text-3xl space-x-3 absolute md:bottom-10 left-32'>
                        <a target="_blank" href="https://www.facebook.com/bspirahim/"><FaFacebook className='border border-primary rounded-full p-2 cursor-pointer text-primary hover:bg-primary hover:text-white duration-500'></FaFacebook></a>

                        <a target='_blank' href="https://github.com/bspirahim/"><FaGithub className='border border-primary rounded-full p-2 cursor-pointer text-primary hover:bg-primary hover:text-white duration-500'></FaGithub></a>
                        <a target='_blank' href="https://www.linkedin.com/in/bspirahim/"> <FaLinkedin className='border border-primary rounded-full p-2 cursor-pointer text-primary hover:bg-primary hover:text-white duration-500' /></a>


                    </div>

                </div>
                <div className='py-2'>
                    <img className='max-w-full h-auto' src="/images/banner-img-2.png" alt="" />
                </div>
               
            </div>
            <div className='w-full absolute md:bottom-8 bottom-2'>
                    <div class="animate-bounce w-10 h-10 font-bold text-white mx-auto ">
                        <svg className=' rounded-full' xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                            <path fill="#20CB98" d="m17.117,13.118l-4.617,4.617V5h-1v12.733l-4.617-4.617-.707.707,4.718,4.717c.295.296.688.459,1.107.459s.812-.163,1.106-.459l4.717-4.716-.707-.707Z" />
                        </svg>
                    </div>
                </div>
        </div>
    );
};

export default Banner;