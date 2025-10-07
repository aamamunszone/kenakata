import { Info, Trash } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const WishlistProductCard = ({ product, wishlist, setWishlist }) => {
  const handleRemoveFromWishlistClick = (id) => {
    let updatedList = wishlist.filter((p) => p.id !== id);
    setWishlist(updatedList);

    localStorage.setItem('wishlist', JSON.stringify(updatedList));
  };

  return (
    <div className="flex flex-col justify-between gap-5 border-2 border-gray-300 overflow-hidden p-5 shadow-md hover:shadow-lg rounded-md hover:scale-101 transition-all duration-300 ease-in-out">
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
      <div className="flex justify-between items-center gap-2.5">
        <div>
          <Link
            to={`/products/${product.id}`}
            className="flex items-center justify-center bg-gray-200 text-[orangered] p-2 rounded-md hover:bg-gray-300 transition"
          >
            <Info />
          </Link>
        </div>
        <div className="flex justify-between items-center gap-2.5 self-end">
          <button className="btn btn-accent">Buy Now</button>
          <button
            onClick={() => handleRemoveFromWishlistClick(product.id)}
            className="btn btn-primary"
          >
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;
