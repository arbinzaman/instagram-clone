import React from 'react';
import UseTitle from '../../../Hooks/UseTitle';
import Article from '../Article/Article';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Testimonial from '../Testimonial/Testimonial';
import TrustedPartner from '../TrustedPartner/TrustedPartner';

const Home = () => {
    UseTitle("Home");
    return (
        <div>

            <Hero></Hero>
            <Article></Article>
            <Gallery></Gallery>
            <TrustedPartner></TrustedPartner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;