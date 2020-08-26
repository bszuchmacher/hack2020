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
            <i className='fas fa-shoe-prints mr-2'/>
            <i className='fas fa-shoe-prints mr-2'/>
            <i className='fas fa-shoe-prints mr-2'/>
            <h1 className='title' >FoodPrint</h1>
            <i className='fas fa-shoe-prints ml-2'/>
            <i className='fas fa-shoe-prints ml-2'/>
            <i className='fas fa-shoe-prints ml-2'/>
            <br></br>
            <br></br>
            <h2 className='sub-title mb-4' style ={{fontSize: "22px"}} >
            Scan your grocery product<br></br><br></br>Know your CO2 footprint
            <br></br><br></br>
            Consume smart <br></br>

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
