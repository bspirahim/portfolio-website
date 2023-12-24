import React from 'react';
import './About.css';
import Aos from 'aos';

const About = () => {
    Aos.init({
        offset: 100,
        duration: 400,
        easing: 'ease-in-sine',
        delay: 100,
      });
    return (
        <div className='bg-[#343A40] py-16' id='about'>
            <div className='title'>
                <h2>About Me</h2>
                <p>Know Me More</p>
                <hr className='m-auto line' />
            </div>

            <div class="grid md:grid-cols-3 items-center mt-12 max-w-screen-lg mx-auto p-2">
                <div data-aos="fade-up" className="col-span-2 py-2">
                    <h1 className='md:text-3xl text-xl text-white font-semibol mb-3'>I'm <span className='text-[#20c997]'>Abdur Rahim,</span> a Web Developer</h1>
                    <p className='text-[#748C94] mb-3 text-justify'>I'm a passionate Front-End Web Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). <br />

                        I have a expertise for creating beautiful and user-friendly websites using HTML, CSS, and JavaScript. Whether it's crafting seamless user experiences or diving into full-stack development, I'm always up for a challenge. I'm eager to work with innovative teams to build visually appealing, responsive, and high-performing web applications.</p>
                </div>
                <div data-aos="fade-down" className="md:ml-12 py-2 text-white">
                    <p className='border-b border-gray-500 mb-5'>Name: Abdur Rahim</p>
                    <p className='border-b border-gray-500 mb-5'>Email: <span className='text-[#20c997]'>bspirahim@gmail.com</span> </p>
                    <p className='border-b border-gray-500 mb-5'>Age: 23</p>
                    <p className='border-b border-gray-500 mb-5'>From: Mirpur, Dhaka</p>
                    <a href='Resume_of_Abdur_Rahim.pdf' download class="btn rounded-full px-7 border-0 bg-[#20c997] font-2xl text-white">Download CV</a>
                </div>
            </div>
        </div>
    );
};

export default About;