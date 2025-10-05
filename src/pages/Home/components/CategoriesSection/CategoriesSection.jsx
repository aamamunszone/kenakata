import { Smartphone } from 'lucide-react';
import React from 'react';

const CategoriesSection = () => {
  return (
    <div>
      <h3 class="relative pl-6 font-medium text-[red] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-3 before:bg-[red] before:rounded-sm mb-10">
        Categories
      </h3>

      <div className="flex flex-col justify-between gap-7">
        <div className="flex justify-between items-center w-full">
          <h2>Browse By Category</h2>
          <div>
            <div className="join grid grid-cols-2">
              <button className="join-item btn btn-outline">
                Previous page
              </button>
              <button className="join-item btn btn-outline">Next</button>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col justify-center items-center gap-2.5 border rounded-md p-10">
            <Smartphone />
            <span>Phones</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
