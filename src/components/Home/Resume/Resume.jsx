import React from 'react';
import MySkills from './MySkills';
import { FaDownload } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Resume = () => {

    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

    return (
        <div className='bg-[#212529] py-16 p-2' id='resume'>
            <div className='title'>
                <h2>Summary</h2>
                <p>Resume</p>
                <hr className='m-auto line' />
            </div>
            <div className='mt-12 max-w-screen-lg mx-auto'>
                <h1 className='text-3xl font-bold text-white mb-5'>My Education</h1>
                <div class="grid md:grid-cols-2 gap-4">
                    <div className='bg-[#111418] rounded-xl p-7' data-aos="fade-right">

                        <p className='mb-3 mx-auto text-white '><span className='px-3 bg-[#DC3545] rounded-md'>2016-2020</span></p>

                        <h1 className='mb-3 text-white text-2xl font-bold'>Computer Technology</h1>
                        <p className='mb-3 text-[#20c997]'>Bangladesh Sweden Polytechnic Institute</p>
                        <p className='text-[#748C94]'>I studied computer technology at the Bangladesh Sweden Polytechnic Institute from 2016 to 2020. During this period, I likely gained knowledge and skills in various aspects of computer technology, which could include programming, networking, hardware, and software systems. Completing my studies in 2020 suggests that I've completed my polytechnic education in computer technology within that timeframe.</p>
                    </div>
                    <div>
                        <div className='bg-[#111418] rounded-xl p-7' data-aos="fade-left">

                            <p className='mb-3 mx-auto text-white '><span className='px-3 bg-[#DC3545] rounded-md'>2022-Present</span></p>

                            <h1 className='mb-3 text-white text-2xl font-bold'>Computer Science and Engineering</h1>
                            <p className='mb-3 text-[#20c997]'>Green University of Bangladesh</p>
                            <p className='text-[#748C94]'>I am currently studying in the Computer Science and Engineering department at the Green University of Bangladesh from 2022 onwards. This program likely involves a comprehensive curriculum covering various aspects of computer science and engineering, such as programming, algorithms, software development, hardware systems, and possibly other specialized areas within the field.</p>
                        </div>

                    </div>
                </div>
            </div>
            <MySkills></MySkills>    
        </div>

    );
};

export default Resume;