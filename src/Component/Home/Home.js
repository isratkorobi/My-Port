import React from 'react';
import About from '../About/About';
import Appbar from '../Appbar/Appbar';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Banner></Banner>
            <Feature></Feature>
            <About></About>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;