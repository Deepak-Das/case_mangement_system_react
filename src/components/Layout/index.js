import React from 'react';
import { Banner } from '../Banner';
import Footer from '../Footer';
import NavigationBar from '../Navigationbar';

function Layout({ children, ...rest }) {
  return (
    <>
      <Banner />
      <NavigationBar />

      <main {...rest}>{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
