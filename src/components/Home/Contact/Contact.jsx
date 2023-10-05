import React, { useRef } from 'react';
import { FaEnvelope, FaFacebook, FaFax, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_isc713q', 
        'template_g884uiu',
         form.current,
          'MdkweZg1yI3EQPB1n')
          .then((result) => {
              console.log(result.text);
              toast.success('message send');
          }, (error) => {
              console.log(error.text);
              toast.error(error.message);
          });
      };
    

    return (
        <div className='heading bg-[#343A40]' id='contact'>
            <div className='title'>
                <h2>Contact</h2>
                <p>Get in Touch</p>
                <hr className='m-auto line' />
            </div>

            <div class="grid grid-cols-3 gap-4 mt-12">

                <div className="text-white">
                    <h3 className='text-white mb-5 text-xl font-bold'>ADDRESS</h3>
                    <div className='mb-5'>
                        <p className='text-lg'>8th Floor, House-802/02</p>
                        <p className='text-lg'>Kajipara, Mirpur</p>
                        <p className='text-lg'>Dhaka, Bangladesh</p>
                    </div>
                    <div className='mb-5'>
                        <p className='inline text-lg'><FaPhone className='inline mr-2 text-primary'></FaPhone>+880 01716289767</p>
                        <br />
                        <span className='text-lg'><FaFax className='text-primary inline mr-2'></FaFax>555 555 555</span>
                        <br />
                        <span className='text-lg'><FaEnvelope className='text-primary inline mr-2'></FaEnvelope>bspirahim@gmail.com</span>
                    </div>
                    <div className='mb-5'>
                        <p className='text-white mb-5 text-xl font-bold'>FOLLOW ME</p>
                        <div className='flex'>
                            <Link className='mr-5 text-xl' to='https://www.facebook.com/mamunurrahim.rahim.1/' target="_blank"><FaFacebook /></Link>
                            <Link className='mr-5 text-xl' to='https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F' target="_blank"><FaLinkedin></FaLinkedin></Link>
                            <Link className='mr-5 text-xl' to='https://github.com/bspirahim?tab=repositories' target="_blank"><FaGithub></FaGithub></Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 ...">
                    <h1 className=' text-white mb-5 text-xl font-bold uppercase'>Send Us a Note</h1>

                    <form ref={form} onSubmit={sendEmail}>
                        <div class="grid grid-cols-2 gap-4 mb-3">
                            <div>
                                <input type="text" name='from_name' placeholder="Name" className="w-full input input-bordered border-0 bg-[#212529] text-white" required />
                            </div>

                            <div>
                                <input type="text" name='from_email' placeholder="email" className="w-full input input-bordered border-0 bg-[#212529] text-white" required />
                            </div>
                        </div>

                        <div className='w-100 '>
                            <textarea name="message" id="" placeholder='Tell us more about your needs.....' className='w-full bg-[#212529] rounded-lg text-white p-3' rows="5"></textarea>
                        </div>
                        <div className='text-center  mt-3'>
                            <button className="btn btn-primary rounded-full text-white px-10">Send Message</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;