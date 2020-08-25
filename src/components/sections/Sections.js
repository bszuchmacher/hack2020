import React, { Fragment } from 'react';

import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Facts from './Facts/Facts';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import MapMarker from './MapMarker/MapMarker';

import {CameraFeed} from '../Camerafeed/Camerafeed'

const uploadImage = async file => {
  const formData = new FormData();
  formData.append('file', file);
}

const sections = () => {
  return (
    <Fragment>
      <Home />
      <CameraFeed sendFile={uploadImage} />
      <About />
      <Service />
      <Blog />
      <Facts />
      <Contact />
      <MapMarker />
    </Fragment>
  );
};

export default sections;
