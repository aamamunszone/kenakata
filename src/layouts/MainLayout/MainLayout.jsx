import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <main className="container w-[95%] mx-auto flex-1 py-10 space-y-25">
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
