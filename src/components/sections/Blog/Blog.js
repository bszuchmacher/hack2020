import React from 'react';

import Section from '../../../HOC/Section';

import blogImage1 from '../../../assets/img/blog1.jpg';
import blogImage2 from '../../../assets/img/blog2.jpg';
import blogImage3 from '../../../assets/img/blog3.jpg';

const Blog = () => {
  return (
    <Section id='blog'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Blog
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            I'm so hungry...but I want to still be environmentally conscious...How can I help?
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage1} className='card-img-top' alt='Blog 1' />
                <div className='card-body'>
                  <h5 className='card-title'>Feed Me</h5>
                  <p className='card-text'>
                  There are many different views as to what constitutes a 'sustainable' food system, and what falls within the scope of the term 'sustainability'. 
                  Strictly speaking sustainability implies the use of resources at rates that do not exceed the capacity of the Earth to replace them. 
                  For food, a sustainable system might be seen as encompassing a range of issues such as security of the supply of food, health, safety, affordability, quality, a strong food industry in terms of jobs and growth and, at the same time, environmental 
                  sustainability, in terms of issues such as climate change, biodiversity, water and soil quality.
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage2} className='card-img-top' alt='Blog 2' />
                <div className='card-body'>
                  <h5 className='card-title'>More Info</h5>
                  <p className='card-text'>
                  There are many different views as to what constitutes a 'sustainable' food system, and what falls within the scope of the term 'sustainability'. 
                  Strictly speaking sustainability implies the use of resources at rates that do not exceed the capacity of the Earth to replace them. 
                  For food, a sustainable system might be seen as encompassing a range of issues such as security of the supply of food, health, safety, affordability, quality, a strong food industry in terms of jobs and growth and, at the same time, environmental 
                  sustainability, in terms of issues such as climate change, biodiversity, water and soil quality.
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage3} className='card-img-top' alt='Blog 3' />
                <div className='card-body'>
                  <h5 className='card-title'>Closing Remarks</h5>
                  <p className='card-text'>
                  <p className='card-text'>
                  Food is essential to life. It also forms an important part of our cultural identity, and plays an important role in the economy. 
                  People are aware that the food they eat is an important factor affecting their health, but what is less well known 
                  is the impact producing and consuming food has on the world's resources. 
                  Alongside the cars we drive and the energy we use to heat our houses, the food we produce and consume has a significant 
                  impact on the environment through, for example, greenhouse gas emissions, the use of land and water resources, pollution,
                  depletion of phosphorus, and the impact of chemical products such as herbicides and pesticides
                  </p>
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
