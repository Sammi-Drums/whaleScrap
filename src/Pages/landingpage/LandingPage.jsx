import React from 'react';
import './LandingPage.css'
import Hero from '../../Components/hero/Hero';
import About from '../../Components/about/About';

const LandingPage = () => {
  return (
    <div
      className='app__landing-page'
    >
      <Hero />
      <About />
    </div>
  )
}

export default LandingPage;