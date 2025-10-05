import React from 'react';
import Sidebar from './components/HeroSection/Sidebar/Sidebar';
import HeroSection from './components/HeroSection/HeroSection';
import FlashSalesSection from './components/FlashSalesSection/FlashSalesSection';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';

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

      <hr class="border border-gray-200" />

      {/* Categories Section */}
      <section>
        <CategoriesSection />
      </section>

      <hr class="border border-gray-200" />
    </>
  );
};

export default HomePage;
