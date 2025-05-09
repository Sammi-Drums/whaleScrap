import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section
        className='app__hero px-md py-md '
        id='home'
    >
        <div 
            className='app__hero-text-content'
        >
            <h4
                className='app__hero-sub-heading text-gradient'
            >
                never seen before....
            </h4>
            <h1
                className='app__hero-heading py-base heading-xl '
            >
                Get Latest News About <span
                    className='text-gradient'
                >
                    Crypto 
                </span> Big Wigs...
            </h1>
            
            <input
                className='mb-base py-base app__hero-input'
                type='email'
                placeholder='enter email'
            />
            <div
                className='app__hero-btns'

            >
                <button
                    className='btn hero-cta'
                >
                    Get Started
                </button>

                <button
                    className='btn hero-cta-2'
                >
                    Find Out More
                </button>
            </div>

        </div>

        <div
            className='app__hero-image'
        >
            <img
                src='src\assets\robot.png'
            />
        </div>
    </section>
  )
}

export default Hero