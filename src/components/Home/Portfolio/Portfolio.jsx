import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='heading'>
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
                        <h1>All</h1>
                    </TabPanel>
                    <TabPanel>
                    <h1>BASIC</h1>
                    </TabPanel>
                    <TabPanel>
                       <h1>MERN</h1>
                    </TabPanel>
                </Tabs>

        </div>
    );
};

export default Portfolio;