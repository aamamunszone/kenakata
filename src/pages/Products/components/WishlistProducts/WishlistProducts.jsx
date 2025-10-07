import React, { useEffect, useMemo, useState } from 'react';
import WishlistProductCard from './components/WishlistProductCard/WishlistProductCard';

const WishlistProducts = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('wishlist'));
    if (savedList) setWishlist(savedList);
  }, []);

  const sortedItem = useMemo(() => {
    if (sortOrder === 'price-asc') {
      return [...wishlist].sort((a, b) => a.price.original - b.price.original);
    } else if (sortOrder === 'price-desc') {
      return [...wishlist].sort((a, b) => b.price.original - a.price.original);
    } else {
      return wishlist;
    }
  }, [sortOrder, wishlist]);

  return (
    <>
      {/* All Wishlist Products Section */}
      <section className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-medium mb-2.5">
              All Wishlist Products
            </h2>
            <span className="text-gray-500">
              ({sortedItem.length}) products found
            </span>
          </div>

          <label className="w-[250px] text-right">
            <select
              className="select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by Price</option>
              <option value="price-asc">Low -&gt; High</option>
              <option value="price-desc">High -&gt; Low</option>
            </select>
          </label>
        </div>

        <hr className="border border-gray-200" />

        <div className="grid grid-cols-4 gap-10">
          {sortedItem.map((product) => (
            <WishlistProductCard
              key={product.id}
              product={product}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default WishlistProducts;
