import React from 'react';
import Slider from '../Slider/Slider';
import Organize from '../Organize/Organize';
import Gallery from '../Gallery/Gallery';
import { tabTitle } from '../../Title/Title';
import About from '../About/About';
import ToyCard from '../Toys/ToyCard/ToyCard';

const Home = () => {
    tabTitle ('Toy Store | Home');
    return (
        <>
            <Slider></Slider> 
            <ToyCard></ToyCard>
            <Organize></Organize>
            <Gallery></Gallery>
            <About></About>           
        </>
    );
};

export default Home;