import React from 'react';
import './LandingPage.css'
import Hero from '../../Components/hero/Hero';
import About from '../../Components/about/About';
import Services from '../../Components/services/Services';

const LandingPage = () => {
  return (
    <div
      className='app__landing-page'
    >
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default LandingPage;