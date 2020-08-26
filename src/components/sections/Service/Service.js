import React from 'react';
import blogImage4 from '../../../assets/img/facts_bg.jpg';
import blogImage6 from '../../../assets/img/foodontable.jpg';
import blogImage5 from '../../../assets/img/blog1.jpg';
import Section from '../../../HOC/Section';

const Service = () => {
  return (
    <Section id='services'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Services
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            When you trust the FoodPrint for your data info, it's like trusting your family!
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-briefcase' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Dietary Planning</h5>
                  <p className='service-description'>
                  1) Eat a wide variety of planet-based foods and ensure they make up a large proportion of your diet <br></br>
                  2) Look for trusted third party accreditations, or traceability information, which can help you understand where your food came from and how it was produced<br></br>
                  3) Make sure any meat and fish you eat is sustainably produced - if you can't find a trusted certification ask your supplier if they know where it came from <br></br>
                  4) Don’t eat types of fish which are over-harvested – shellfish and molluscs are great alternatives
                  </p>
                  <img src={blogImage6} className='card-img-top' alt='Blog 2' />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-fist-raised' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Risk Management</h5>
                  <p className='service-description'>
                  1) We took the risk for you. Trust us to help you achieve your personal and environmental/sustainable needs. <br></br>
                  2) In the past, consumers knew little about — or misunderstood — many sustainable practices. For their part, most food and beverage companies did little to help consumers understand. <br></br> 
                  3) But consumer interest has grown in how and where products are grown, processed, and distributed. And companies no longer have as much control over the distribution of information relating to their products as social media platforms have become a significant source of product information. <br></br>
                  4) As a result, consumers are inquiring about energy used to produce and transport a product, fair labor standards, chemicals used to grow and process a product, and waste streams.
                  </p>
                  <img src={blogImage5} className='card-img-top' alt='Blog 2' />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='far fa-paper-plane' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Market Research</h5>
                  <p className='service-description'>
                    At FoodPrint, we have researched the market for you, so all you have to do is:<br></br>
                    1) Snap a picture or Upload your picture <br></br>
                    2) Hit Search Button <br></br>
                    3) Information presented...just that easy <br></br>
                  </p>
                  <img src={blogImage4} className='card-img-top' alt='Blog 2' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
