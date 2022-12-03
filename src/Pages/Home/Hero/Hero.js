import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero  mb-10 min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1635352416471-91fdac82ca2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">We Build Your ENVIRONMENT</h1>
                        <p className="mb-5">WE ARE THE LARGEST JUTE GOODS MANUFACTURER IN  THE BANGLADESH</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;