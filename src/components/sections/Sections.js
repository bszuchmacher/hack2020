import React, { Fragment, useState } from 'react';

import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Facts from './Facts/Facts';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import MapMarker from './MapMarker/MapMarker';
import TableContainer from '../Table/Table';
import CameraFeedNew from '../CameraFeedNew/CameraFeedNew'

// const uploadImage = async file => {
//   const formData = new FormData();
//   formData.append('file', file);
// }

const sections = () => {
  return (
    <Fragment>
      <Home />
      <CameraFeedNew/>
      <TableContainer/>
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
