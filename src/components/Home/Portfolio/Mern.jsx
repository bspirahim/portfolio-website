import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Link } from 'react-router-dom';

const Mern = () => {
    const [data, setData] = useState({})
    const [mern, setMern] = useState([])

    useEffect(()=>{
        fetch('/portfolio.json')
        .then(res => res.json())
        .then(data => setMern(data.filter(pf => pf.category == "MERN")))
    },[])

    
    const loadModal = (id) => {
        console.log(id);
        window.my_modal_4.showModal(id)
        const found = mern.find(element => element.id == id);
        setData(found);
    }

    Aos.init({
        offset: 100,
        duration: 300,
        easing: 'ease-in-sine',
        delay: 100,
      });
    return (
        <div>
             <>
            {/*         {
            data.map(dt => console.log(dt))
        } */}
            <div data-aos="fade-up" className='my-10 '>
                <div className='grid md:grid-cols-3 gap-10'   >
                   
                        {mern.map((pf, i) => (
                            <div className='w-full h-fit group border-2 hover:border-[#20C997]'>
                            <div className='relative overflow-hidden'>
                            <img className=''
                                key={i}
                                src={pf.image}
                                style={{ width: "100%", display: "block", cursor: 'pointer' }}
                                alt=""
                                onClick={() => loadModal(pf.id)}
                            />
                                <div className='absolute h-full w-full bg-black/30 flex items-center justify-center -bottom-10 group-hover:bottom-0  opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <button    onClick={() => loadModal(pf.id)} className='bg-[#20C997]/60  text-white py-2 px-5'>Open</button>
                                </div>
                            </div>
                        </div>
                        ))}
                   
                </div>


            </div>

            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl  bg-[#212529]">

                    <div class="grid grid-cols-2  gap-4">
                        <div>
                            <img src={data.image} alt="" />
                        </div>
                        <div>
                            <h3 className='text-white text-2xl font-bold mb-2'>{data.website_name}</h3>
                            <div className=' mb-3'>
                                <h3 className='text-white text-lg font-bold'>Project Info:</h3>
                                <p className='text-slate-400 mb-2'>{data.title}</p>
                                <hr  className='mt-4 bg-gray-500'/>
                            </div>

                            <div className=' mb-3'>
                                <h3 className='text-white text-lg font-bold'>Project Details:</h3>
                                <span className='text-white font-bold'>Technologies:</span> <span className='text-slate-400'>{data.tech}</span>
                                <hr  className='mt-4 bg-gray-500'/>
                            </div>
                            
                            <div className='mb-3'>
                                <span className='text-white font-bold mb-2'>Date:</span> <span className='text-slate-400 mb-2'>June 20 2023</span>
                                <hr  className='mt-4 bg-gray-500'/>
                            </div>

                            <div>
                            <Link className='btn btn-outline btn-primary mt-2' to={data.website_link} target='_blank'>Live Preview</Link>
                            </div>
                            
                        </div>
                    </div>

                    <div className="modal-action">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn btn-primary">Close</button>
                    </div>
                </form>
            </dialog>
        </>
        </div>
    );
};

export default Mern;