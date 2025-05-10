import React from 'react';
import services from '../../data/services';
import './Services.css'

const ServiceCard = ({ tier, icon, features }) => (
    <div className="app__services-card">
      <div className="app__services-header">
        <span className="app__services-emoji">{icon}</span>
        <h2>{tier} Tier</h2>
      </div>
      <ul className="app__services-features">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="bullet-marker">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="btn btn-cta">Get {tier}</button>
    </div>
);  
  
const Services = () => {
  return (
    <section className='p-section px-md app__services'>
       <div className='app__services-content'>
            <h1 className='app__services-heading heading-xl'>
                What <span className='text-gradient'>Can WE</span> do for you?
            </h1>
       </div>

        <div className="app__services-container">
            {Object.entries(services).map(([key, { tier, icon, features }]) => (
                <ServiceCard
                    key={key}
                    tier={tier}
                    icon={icon} // this is a string (emoji)
                    features={features}
                />
            ))}
        </div>
    </section>
  )
}

export default Services;