import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#212529]'>
            <div style={{padding: "5rem"}} className='text-white flex justify-between mx-auto p-12'>
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