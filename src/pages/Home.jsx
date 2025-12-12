import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Programs from '../components/Programs';
import Branches from '../components/Branches';

const Home = () => {
    return (
        <main>
            <Hero />
            <AboutUs />
            <WhyChooseUs />
            <Programs />
            <Branches />
        </main>
    );
};

export default Home;
