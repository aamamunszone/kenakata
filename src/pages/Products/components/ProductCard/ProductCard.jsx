import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <div className="flex flex-col justify-between gap-5 border-2 border-gray-300 overflow-hidden p-5 shadow-md rounded-md hover:scale-102 transition-all duration-400 ease-in-out cursor-pointer">
          <div className="w-full">
            <img
              className="w-full rounded-md h-[150px] object-cover"
              src={product.thumbnail}
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <h2 className="font-bold">{product.title}</h2>
            <span className="px-2 py-[2px] rounded-md bg-gray-200 self-start">
              {product.category}
            </span>
            <div className="flex justify-between items-center">
              <span>
                Tk {product.price.original} {product.price.currency}
              </span>
              <span className="text-[orange] text-sm">
                Rating : {product.rating.average} ({product.rating.count})
              </span>
            </div>
            <p className="text-gray-500 text-sm">{product.description}</p>
          </div>
          <div className="flex justify-between items-center gap-2.5 self-end">
            <button className="btn btn-primary">Add To Cart</button>
            <button className="btn btn-accent">Buy Now</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
