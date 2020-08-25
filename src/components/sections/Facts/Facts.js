import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/greenery.jpg';

const Facts = () => {
  return (
    <Section id='facts'>
      <div
        className='facts-container'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='container pt-5 pb-4'>
          <div className='row'>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-users' />
              </div>
              <h4 className='facts-counter text-light'>7800</h4>
              <h5 className='facts-title text-light'>Active Members</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-grin-beam' />
              </div>
              <h4 className='facts-counter text-light'>10,000</h4>
              <h5 className='facts-title text-light'>Happy Clients</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-project-diagram' />
              </div>
              <h4 className='facts-counter text-light'>850,000</h4>
              <h5 className='facts-title text-light'>Acres of land daily saved</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-trophy' />
              </div>
              <h4 className='facts-counter text-light'>56</h4>
              <h5 className='facts-title text-light'>New companies daily that are compliant</h5>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facts;
