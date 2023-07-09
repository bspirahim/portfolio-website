import React from 'react';
import MySkills from './MySkills';

const Resume = () => {
    return (
        <div className='heading bg-[#343A40]'>
            <div className='title'>
                <h2>Summary</h2>
                <p>Resume</p>
                <hr className='m-auto line' />
            </div>
            <div className='mt-12'>
                <h1 className='text-3xl font-bold text-white mb-5'>My Education</h1>
                <div class="grid grid-cols-2 gap-4">
                    <div className='bg-[#111418] rounded-xl p-7'>

                    <p className='mb-3 mx-auto text-white '><span className='px-3 bg-[#DC3545] rounded-md'>2016-2020</span></p>

                        <h1 className='mb-3 text-white text-2xl font-bold'>Computer Technology</h1>
                        <p className='mb-3 text-[#20c997]'>Bangladesh Sweden Polytechnic Institute</p>
                        <p className='text-[#748C94]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus consequatur dicta quis, quam reprehenderit sapiente assumenda veritatis reiciendis temporibus ratione?</p>
                    </div>
                    <div>
                        <div className='bg-[#111418] rounded-xl p-7'>

                                <p className='mb-3 mx-auto text-white '><span className='px-3 bg-[#DC3545] rounded-md'>2022-Present</span></p>

                            <h1 className='mb-3 text-white text-2xl font-bold'>Computer Science and Engineering</h1>
                            <p className='mb-3 text-[#20c997]'>Green University of Bangladesh</p>
                            <p className='text-[#748C94]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus consequatur dicta quis, quam reprehenderit sapiente assumenda veritatis reiciendis temporibus ratione?</p>
                        </div>

                    </div>
                </div>
            </div>
            <MySkills></MySkills>
        </div>
    );
};

export default Resume;