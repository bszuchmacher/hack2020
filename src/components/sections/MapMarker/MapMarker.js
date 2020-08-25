import React from 'react';
import Section from '../../../HOC/Section';

const mapMarker = () => {
  return (
    <Section id='map'>
      <div>
        <iframe
          title='mapMarker'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.607273697085!2d34.76994095110828!3d32.05281998110445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c9c5ebdf889%3A0x80498b398ad99df4!2sIsrael%20Tech%20Challenge!5e0!3m2!1sen!2sil!4v1598352955592!5m2!1sen!2sil'
          width='100%'
          height='450'
          frameBorder='0'
          style={{ border: 0, marginBottom: '-7px' }}
          allowFullScreen
        />
      </div>
    </Section>
  );
};

export default mapMarker;
