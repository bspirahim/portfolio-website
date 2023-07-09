import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Link } from 'react-router-dom';

const Mern = () => {
    const [data, setData] = useState({})
    const [mern, setMern] = useState([])

    useEffect(()=>{
        fetch('portfolio.json')
        .then(res => res.json())
        .then(data => setMern(data.filter(pf => pf.category == "MERN")))
    },[])

    
    const loadModal = (id) => {
        console.log(id);
        window.my_modal_4.showModal(id)
        const found = mern.find(element => element.id == id);
        setData(found);
    }
    return (
        <div>
             <>
            {/*         {
            data.map(dt => console.log(dt))
        } */}
            <div className='my-10'>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter='20px'>
                        {mern.map((pf, i) => (
                            <img
                                key={i}
                                src={pf.image}
                                style={{ width: "100%", display: "block", cursor: 'pointer' }}
                                alt=""
                                onClick={() => loadModal(pf.id)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>


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