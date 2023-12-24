import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Portfolio.css'
import All from './All';
import Basic from './Basic';
import Mern from './Mern';
import Aos from 'aos';

const Portfolio = () => {
    Aos.init({
        offset: 100,
        duration: 400,
        easing: 'ease-in-sine',
        delay: 100,
      });
    return (
        <div className='bg-[#343A40] py-16 p-2' id='portfolio'>
            <div className='title'>
                <h2>Portfolio</h2>
                <p>My Work</p>
                <hr className='m-auto line' />
            </div>

            <Tabs data-aos="fade-down" className="Tabs mt-16 max-w-screen-lg mx-auto">
                    <TabList className='flex justify-between w-60 mx-auto px-0'>
                        <Tab>All</Tab>
                        <Tab>BASIC</Tab>
                        <Tab>MERN</Tab>
                    </TabList>
                    <TabPanel>
                        <All></All>
                    </TabPanel>
                    <TabPanel>
                    <Basic></Basic>
                    </TabPanel>
                    <TabPanel>
                       <Mern></Mern>
                    </TabPanel>
                </Tabs>

        </div>
    );
};

export default Portfolio;