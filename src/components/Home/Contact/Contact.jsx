import React, { useRef } from 'react';
import { FaEnvelope, FaFacebook, FaFax, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Aos from 'aos';


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

      Aos.init({
        offset: 100,
        duration: 400,
        easing: 'ease-in-sine',
        delay: 100,
      });

    return (
        <div className='heading bg-[#212529] py-16' id='contact'>
            <div className='title'>
                <h2>Contact</h2>
                <p>Get in Touch</p>
                <hr className='m-auto line' />
            </div>

            <div data-aos="fade-up"  class="grid gap-4 mt-12 max-w-screen-lg mx-auto p-2">
                <div className="col-span-2 ...">
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                                <input type="text" name='from_name' placeholder="Full Name" className="w-full input input-bordered border-0 bg-[#343A40] text-white" required />
                            </div>

                            <div>
                                <input type="text" name='from_email' placeholder="Email" className="w-full input input-bordered border-0 bg-[#343A40] text-white" required />
                            </div>
                            <div>
                                <input type="text" name='from_email' placeholder="Phone" className="w-full input input-bordered border-0 bg-[#343A40] text-white" required />
                            </div>
                            <div>
                                <input type="text" name='from_email' placeholder="Subject" className="w-full input input-bordered border-0 bg-[#343A40] text-white" required />
                            </div>
                        </div>

                        <div className='w-100 '>
                            <textarea name="message" id="" placeholder='Tell us more about your needs.....' className='border-0 w-full bg-[#343A40] rounded-lg text-white p-3' rows="5"></textarea>
                        </div>
                        <div className='text-center  mt-7'>
                            <button className="btn btn-primary rounded-full text-white px-7 text-lg">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;