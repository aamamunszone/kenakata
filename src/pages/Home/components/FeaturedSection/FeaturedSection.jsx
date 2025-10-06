import { Headset, ShieldCheck, Truck } from 'lucide-react';
import React from 'react';
import { useProducts } from '../../../../hooks/useProducts';
import FeaturedProductCard from './components/FeaturedProductCard/FeaturedProductCard';

const FeaturedSection = () => {
  const { products } = useProducts();

  const featured = products.filter((product) => product.isFeatured);

  return (
    <div>
      <h3 className="relative pl-6 font-medium text-[red] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-3 before:bg-[red] before:rounded-sm mb-10">
        Featured
      </h3>

      <div className="flex flex-col justify-between gap-7">
      <div>
            <h2 className="text-xl font-medium mb-2.5">New Arrival</h2>
            <span className="text-gray-500">
              ({featured.length}) products found
            </span>
          </div>

        <div className="grid grid-cols-4 gap-10">
          {
            featured.map((product) => <FeaturedProductCard key={product.id} product={product} />)
          }
        </div>

        <div className="flex justify-between items-center gap-1">
          <div className="flex flex-col justify-between items-center gap-1">
            <span className="p-5 bg-gray-200 rounded-full">
              <Truck />
            </span>
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col justify-between items-center gap-1">
            <span className="p-5 bg-gray-200 rounded-full">
              <Headset />
            </span>
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="flex flex-col justify-between items-center gap-1">
            <span className="p-5 bg-gray-200 rounded-full">
              <ShieldCheck />
            </span>
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
