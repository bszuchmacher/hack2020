import React from 'react';

import Link from '../Link/Link';

const footer = () => {
  return (
    <footer className=''>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>About Us</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-light'>
                3 Data Scientists and 4 FullStack Developers walk in a room....yeah, thats right...walk...because we are trying to not pollute the environment
                We thought for a little bit: What hasnt been done yet in the realm of food....<br></br>We thought and thought and finally said: 
                "Lets figure out a way to scan an item, type in an item or even take a pic of the item and get all the info from about the product to 
                tracing the steps of the product!" It is a work in progress, but we kinda like it :)
                </small>
              </p>
              <button className='btn btn-sm btn-primary rounded-0'>
                Learn more
              </button>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6>Quick Links</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={-120}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link target='about'>About</Link>
                </li>
                <li>
                  <Link target='services'>Services</Link>
                </li>
                <li>
                  <Link target='blog'>Blog</Link>
                </li>
                <li>
                  <Link target='contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Latest News</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-light'>
                Water-based fuel: Electriq Global:
                Founded in 2014, Electriq-Global Energy Solutions Ltd. develops an alternative fuel for the automotive industry that is composed of 60% water. Electriq Global’s technology extracts hydrogen from the water, harnessing it to create electric energy to power the vehicle. The company is based in northern Israeli town Tirat Carmel and Melbourne, Australia suburb Carlton. 
                According to Electriq Global, its fuel delivers twice the range of other alternative fuels, is recyclable, and has zero emissions.
                </small>
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Contact Us</h6>
            </div>
            <div className='footer-content'>
              <p className='text-light'>
                <small>Address : 18 Shoken St TEL AVIV IL</small>
              </p>
              <p className='text-light'>
                <small>Phone : 972.3.757.2703 </small>
              </p>
              <p className='text-light'>
                <small>E-mail :GreenEveryday@gmail.com</small>
              </p>
              <div className='social-media mt-4'>
                <a href='!#' className='text-light'>
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-twitter mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-instagram mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>© All Right Reserved. Design By Da Green Goblins</small>
      </div>
    </footer>
  );
};

export default footer;
