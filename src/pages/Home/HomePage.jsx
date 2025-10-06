import React from 'react';
import Sidebar from './components/HeroSection/Sidebar/Sidebar';
import HeroSection from './components/HeroSection/HeroSection';
import FlashSalesSection from './components/FlashSalesSection/FlashSalesSection';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';
import ThisMonthSection from './components/ThisMonthSection/ThisMonthSection';
import OurProductsSection from './components/OurProductsSection/OurProductsSection';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';

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

      <hr className="border border-gray-200" />

      {/* Categories Section */}
      <section>
        <CategoriesSection />
      </section>

      <hr className="border border-gray-200" />

      {/* This Month Section */}
      <section>
        <ThisMonthSection />
      </section>

      <hr className="border border-gray-200" />

      {/* Our Product Section */}
      <section>
        <OurProductsSection />
      </section>

      <hr className="border border-gray-200" />

      {/* Featured Section */}
      <section>
        <FeaturedSection />
      </section>

      <hr className="border border-gray-200" />
    </>
  );
};

export default HomePage;
