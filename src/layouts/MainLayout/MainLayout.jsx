import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';

const MainLayout = () => {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <Outlet />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default MainLayout;
