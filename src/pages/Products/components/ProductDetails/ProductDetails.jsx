import React from 'react';
import { Link, useParams } from 'react-router';
import { useProducts } from '../../../../hooks/useProducts';
import { GridLoader } from 'react-spinners';
import { Heart } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <GridLoader size={50} color="orangered" />
      </div>
    );
  }

  const product = products.find((product) => String(product.id) === id);

  if (!product) {
    return (
      <p className="text-xl text-center text-red-500 mt-10">
        Product not found !
      </p>
    );
  }

  const handleAddToWishlistClick = () => {
    const existingList = JSON.parse(localStorage.getItem('wishlist'));

    let updatedList = [];

    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) return alert('Sorry Bhai');

      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }

    localStorage.setItem('wishlist', JSON.stringify(updatedList));
  };

  return (
    <div className="flex justify-between gap-20 border-2 border-gray-300 overflow-hidden p-10 shadow-md rounded-md">
      <div className="w-[60%] flex justify-between items-center gap-5 p-5 bg-gray-200 rounded-md">
        <div className="w-[40%] flex flex-col justify-between gap-5">
          <img
            className="rounded-md h-[150px] object-cover"
            src={product.images[0]}
          />
          <img
            className="rounded-md h-[150px] object-cover"
            src={product.images[1]}
          />
          <img
            className="rounded-md h-[150px] object-cover"
            src={product.images[2]}
          />
          <img
            className="rounded-md h-[150px] object-cover"
            src={product.images[3]}
          />
        </div>
        <div className="w-[60%] flex justify-center items-center">
          <img className=" rounded-md object-cover" src={product.thumbnail} />
        </div>
      </div>
      <div className="w-[40%] flex flex-col justify-between gap-5">
        <div className="flex flex-col gap-5">
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
              onClick={handleAddToWishlistClick}
              className="flex items-center justify-center gap-2 bg-gray-200 text-[orangered] p-2 rounded-md hover:bg-gray-300 transition"
            >
              <Heart /> <span>Add to Wishlist</span>
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2.5 self-end">
            <button className="btn btn-primary">Add To Cart</button>
            <button className="btn btn-accent">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
