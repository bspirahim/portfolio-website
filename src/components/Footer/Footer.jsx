import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#343A40]'>
            <div style={{padding: "2rem"}} className='text-white md:flex justify-between items-center text-center md:text-left max-w-screen-lg mx-auto'>
                <div>
                    <h1>Copyright © 2023 <span className='text-primary'>Abdur Rahim</span>. All Rights Reserved.</h1>
                </div>
                <div>
                    <p>Terms & Policy |  Disclaimer</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;