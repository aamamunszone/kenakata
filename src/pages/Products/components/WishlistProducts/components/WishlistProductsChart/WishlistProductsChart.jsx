import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const WishlistProductsChart = ({ wishlist }) => {
  const categoryData = [];

  wishlist.forEach((product) => {
    const existing = categoryData.find((d) => d.category === product.category);

    if (existing) {
      existing.totalPrice += product.price.original;
      existing.itemCount += 1;
    } else {
      categoryData.push({
        category: product.category,
        totalPrice: product.price.original,
        itemCount: 1,
      });
    }
  });

  return (
    <div className="flex flex-col justify-between gap-20 border-2 border-gray-300 overflow-hidden p-10 shadow-md rounded-md">
      <h3 className="text-center font-medium text-xl">Wishlist Summary</h3>
      <div className="bg-gray-100 rounded-md p-4 h-[450px]">
        {categoryData.length === 0 ? (
          <p className="flex justify-center items-center h-full text-gray-500 text-lg font-medium">
            No Data Available
          </p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={'category'} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={'totalPrice'} fill="#82ca9d" />
              <Bar dataKey={'itemCount'} fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default WishlistProductsChart;
