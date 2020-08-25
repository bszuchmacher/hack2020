import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Idea for the Initiative. 
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
          <p>The most important insight from our research was that there are massive differences in the Greenhouse Gas emissions of different foods:  
          Such as producing a kilogram of beef emits 60 kilograms of 
          greenhouse gases (CO2-equivalents). While peas emits just 1 kilogram per kg.</p>
          <p>Overall, animal-based foods tend to have a higher footprint than plant-based. 
          Lamb and cheese both emit more than 20 kilograms CO2-equivalents per kilogram. 
          Poultry and pork have lower footprints but are still higher than most plant-based foods, at 6 and 7 kg 
          CO2-equivalents, respectively.</p>
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title'>About us</h3>
              <div className='about-description'>
                <p>
                3 Data Scientists and 4 FullStack Developers walk in a room....yeah, thats right...walk...because we are trying to not pollute the environment
                </p>
                <p>
                  We thought for a little bit: What hasnt been done yet in the realm of food....we thought and thought and finally said: "Lets figure out a way to scan an item, type in an item or even take a pic of the item and get all the info from about the product to tracing the steps of the product!"
                </p>
                <p>
                  It is a work in progress, but we kinda like it :)
                </p>
                <button className='btn btn-primary rounded-0'>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
