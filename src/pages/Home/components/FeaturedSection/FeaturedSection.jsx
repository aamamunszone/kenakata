import { Headset, ShieldCheck, Truck } from 'lucide-react';
import React from 'react';

const FeaturedSection = () => {
  return (
    <div>
      <h3 class="relative pl-6 font-medium text-[red] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-3 before:bg-[red] before:rounded-sm mb-10">
        Featured
      </h3>

      <div className="flex flex-col justify-between gap-7">
        <div>
          <h2>New Arrival</h2>
        </div>

        <div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Card Title
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
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
