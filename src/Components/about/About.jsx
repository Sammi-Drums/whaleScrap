import React from 'react'
import { stats } from '../../data/stats';
import "./About.css"
import { features } from '../../data/features';
import { Link } from 'react-router-dom';

const FeatureCard = ({icon:Icon, title, content, index}) => (
  <div className='app__about-feature-card mb-lg'>
    <div className='icon-parent'>
      <Icon  size={32}  className='app__about-features-icon'/>
    </div>
    <div>
      <h4 className='mb-base app__features-title'>{title}</h4>
      <p>{content}</p>
    </div>
  </div>
)

const About = () => {
  return (
    <section className='px-md py-md app__about' id='about'>
        <h1
            className='app__about-heading py-base heading-xl'
        >
            Our <span className='text-gradient'>Stats</span>
        </h1>

        <div 
          className='app__about-stats-row mt-lg mb-lg'
        >
          {
              stats.map(({statDigits, statTitle}) => (
                <div 
                key={statTitle}
                className='app__about-stats-row_item '>
                  <span className='text-gradient stat-digit'>{statDigits}</span>
                  <h4 className=' stat-title'>{statTitle}</h4>
                </div>
              ))
          }
          
        </div>
        <div
          className='app__about-features p-section' 
        >
          <div
            className='app__about-features-desc  mb-lg'
          >
            <h1
              className='app__about-heading py-base heading-xl'
            >
              You analyze, We track Whales
            </h1>

            <p className='app__about-txt py-md'>
              You just need to focus on your analysis and we provide you timely notifications about what the whales are trading, when they traded and how much they traded, putting you on the same track as market movers
            </p>

            <button 
             className='btn features__btn'
            >
              <Link to={'/'} className=' features__btn-link'>
                Join Now
              </Link>
            </button>

          </div>

          <div
            className='app__features-features'
          >
           {
            features.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} index={index} />
            ))
           }
          </div>
        </div>
    </section>
  )
}

export default About