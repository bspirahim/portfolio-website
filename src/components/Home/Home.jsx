import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Resume from './Resume/Resume';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
        </div>
    );
};

export default Home;