import React from 'react';
import { FaDownload } from 'react-icons/fa';

const MySkills = () => {
    return (
        <div data-aos="fade-up">
            <h1 className='text-white text-3xl font-bold mt-12 mb-5'>My Skills</h1>
            <div class="grid grid-cols-2 gap-4 text-white">
                <div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-white text-lg">Web Design</span>
                            <span className="label-text text-white text-lg">65%</span>
                        </label>
                        <progress className="progress progress-primary w-100 bg-black" value="65" max="100"></progress>
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-white text-lg">HTML/CSS</span>
                            <span className="label-text text-white text-lg">85%</span>
                        </label>
                        <progress className="progress progress-primary w-100 bg-black" value="85" max="100"></progress>
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-white text-lg">JavaScript</span>
                            <span className="label-text text-white text-lg">70%</span>
                        </label>
                        <progress className="progress progress-primary w-100 bg-black" value="70" max="100"></progress>
                    </div>
                    
                </div>
                <div>
                <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-white text-lg">React JS</span>
                            <span className="label-text text-white text-lg">70%</span>
                        </label>
                        <progress className="progress progress-primary w-100 bg-black" value="65" max="100"></progress>
                    </div>
                <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-white text-lg">Bootstrap</span>
                            <span className="label-text text-white text-lg">90%</span>
                        </label>
                        <progress className="progress progress-primary w-100 bg-black" value="90" max="100"></progress>
                    </div>
                <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-white text-lg">Tailwind</span>
                            <span className="label-text text-white text-lg">85%</span>
                        </label>
                        <progress className="progress progress-primary w-100 bg-black" value="85" max="100"></progress>
                    </div>
                    
                </div>
            </div>
            <div className='text-center my-7'>
                <a href='Abdur_Rahim_Resume.pdf' download className="btn btn-outline text-zinc-500 rounded-full border-2 border-zinc-500 px-7"> Download CV <FaDownload></FaDownload> </a>
            </div>





        </div>
    );
};

export default MySkills;