import React from 'react';
import Sidebar from './components/HeroSection/Sidebar/Sidebar';
import HeroSection from './components/HeroSection/HeroSection';
import FlashSalesSection from './components/FlashSalesSection/FlashSalesSection';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-between gap-60 min-h-[400px]">
        {/* Sidebar Section */}
        <aside>
          <Sidebar />
        </aside>
        <HeroSection />
      </section>

      {/* Flash Sales Section */}
      <section>
        <FlashSalesSection />
      </section>
    </>
  );
};

export default HomePage;
