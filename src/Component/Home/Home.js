import React from 'react';
import About from '../About/About';
import Appbar from '../Appbar/Appbar';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Banner></Banner>
            <Feature></Feature>
            <About></About>
            <Project></Project>
        </div>
    );
};

export default Home;