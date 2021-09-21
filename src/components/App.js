import React from 'react';
import NavigationBar from './Navigationbar';
import { Banner } from './Banner';
import Showcase from './Showcase';
import { Overview } from './Overview';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Banner />
      <NavigationBar />
      <Showcase />
      <Overview />
      <Footer />
    </>
  );
};

export default App;
