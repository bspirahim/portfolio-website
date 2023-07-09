import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Portfolio.css'
import All from './All';
import Basic from './Basic';
import Mern from './Mern';

const Portfolio = () => {
    return (
        <div className='heading' id='portfolio'>
            <div className='title'>
                <h2>Portfolio</h2>
                <p>My Work</p>
                <hr className='m-auto line' />
            </div>

            <Tabs className="Tabs mt-12">
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