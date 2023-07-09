import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Resume from './Resume/Resume';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;