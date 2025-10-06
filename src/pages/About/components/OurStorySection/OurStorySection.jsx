import React from 'react';

import ourStory from '../../../../assets/images/AboutPage/our-story.jpg';

const OurStorySection = () => {
  return (
    <div className="flex justify-between items-center gap-[10%]">
      <div className="w-[45%]">
        <h2 className="text-5xl font-extrabold tracking-wider mb-10">
          Our Story
        </h2>
        <p className="leading-relaxed">
          Launched in 2015, Exclusive is South Asia's premier online shopping
          marketplace with an active presence in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sellers and 300 brands and serves 3 millions customers across
          the region.
          <br />
          <br />
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assortment in categories ranging from
          consumer.
        </p>
      </div>

      <div className="w-[45%]">
        <img
          src={ourStory}
          alt="Portrait two african females holding shopping bags while reacting something their smartphone"
        />
      </div>
    </div>
  );
};

export default OurStorySection;
