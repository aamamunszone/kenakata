import React from 'react';

const ThisMonthSection = () => {
  return (
    <div>
      <h3 class="relative pl-6 font-medium text-[red] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-3 before:bg-[red] before:rounded-sm mb-10">
        This Month
      </h3>

      <div className="flex flex-col justify-between gap-7">
        <div className="flex justify-between items-center">
          <h2>Best Selling Products</h2>
          <button className="btn btn-primary">View All</button>
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
      </div>
    </div>
  );
};

export default ThisMonthSection;
