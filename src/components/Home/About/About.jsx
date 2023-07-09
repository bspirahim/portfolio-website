import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='heading' id='about'>
            <div className='title'>
                <h2>About Me</h2>
                <p>Know Me More</p>
                    <hr className='m-auto line' />
            </div>

            <div class="grid grid-cols-3 mt-12">
                <div className="col-span-2">
                    <h1 className='text-3xl text-white font-semibol mb-3'>I'm <span className='text-[#20c997]'>Abdur Rahim,</span> a Web Developer</h1>
                    <p className='text-[#748C94] mb-3'>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
                    <p className='text-[#748C94]'>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                </div>
                <div className="md:ml-12 text-white">
                    <p className='border-b border-gray-500 mb-5'>Name: Abdur Rahim</p>
                    <p className='border-b border-gray-500 mb-5'>Email: <span className='text-[#20c997]'>bspirahim@gmail.com</span> </p> 
                      <p className='border-b border-gray-500 mb-5'>Age: 23</p>
                    <p className='border-b border-gray-500 mb-5'>From: Mirpur, Dhaka</p>
                    <a href='Abdur_Rahim_Resume.pdf' download class="btn rounded-full px-7 border-0 bg-[#20c997] font-2xl text-white">Download CV</a>
                </div>
            </div>
        </div>
    );
};

export default About;