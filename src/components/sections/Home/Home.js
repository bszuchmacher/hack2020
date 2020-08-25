import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/globalgreen.jpg';
import Link from '../../UI/Link/Link';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>גובלינים ירוקים</h1>
            <h2 className='sub-title mb-4'>
              This CO2 Project was made with love by: <br></br>

              FULLSTACK: Ben, Marta, Eduardo and Moshe <br></br>
              DATA SCIENCE: Michael, Aviv and Nico
            </h2>
            <Link target='about' classes='btn btn-primary rounded-0 mr-2'>
              Learn More
            </Link>
            <Link target='contact' classes='btn btn-light text-dark rounded-0'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
