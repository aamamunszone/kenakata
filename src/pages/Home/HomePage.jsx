import React from 'react';
import Sidebar from '../../layouts/MainLayout/Sidebar/Sidebar';
import HeroSection from './components/HeroSection';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-between gap-40 px-20 min-h-[400px]">
        {/* Sidebar Section */}
        <aside>
          <Sidebar />
        </aside>
        <HeroSection />
      </section>
    </>
  );
};

export default HomePage;
