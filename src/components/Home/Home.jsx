import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Resume from './Resume/Resume';
import Portfolio from './Portfolio/Portfolio';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;