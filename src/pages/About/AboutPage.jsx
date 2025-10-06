import React from 'react';
import OurStorySection from './components/OurStorySection/OurStorySection';
import InfoSection from './components/InfoSection/InfoSection';

const AboutPage = () => {
  return (
    <>
      {/* Our Story Section */}
      <section>
        <OurStorySection />
      </section>

      {/* Info Section */}
      <section>
        <InfoSection />
      </section>
    </>
  );
};

export default AboutPage;
