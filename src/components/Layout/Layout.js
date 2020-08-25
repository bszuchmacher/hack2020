import React, { Fragment } from 'react';
import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import Sections from '../sections/Sections';
// import {CameraFeed} from '../Camerafeed/Camerafeed'

// const uploadImage = async file => {
//   const formData = new FormData();
//   formData.append('file', file);
// }

const Layout = () => {
  return (
    <Fragment>
      <Header />
      {/* <CameraFeed sendFile={uploadImage} /> */}
      <main>
        <Sections />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
