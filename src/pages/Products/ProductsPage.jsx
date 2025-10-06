import React, { useEffect, useMemo, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from './components/ProductCard/ProductCard';
import { GridLoader } from 'react-spinners';

const ProductsPage = () => {
  const { products, loading } = useProducts();
  const [showSpinner, setShowSpinner] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const normalizedSearch = useMemo(() => {
    return search.trim().toLocaleLowerCase();
  }, [search]);

  const searchingProducts = useMemo(() => {
    if (!normalizedSearch) return products;

    return products.filter((product) =>
      product.title.trim().toLocaleLowerCase().includes(normalizedSearch)
    );
  }, [products, normalizedSearch]);

  if (loading || showSpinner) {
    return (
      <div className="flex justify-center items-center h-screen">
        <GridLoader size={50} color="orangered" />
      </div>
    );
  }

  // const convertedSearchInputValue = search.trim().toLocaleLowerCase();
  // const searchingProducts = convertedSearchInputValue
  //   ? products.filter((product) =>
  //       product.title
  //         .trim()
  //         .toLocaleLowerCase()
  //         .includes(convertedSearchInputValue)
  //     )
  //   : products;

  return (
    <>
      {/* All Products Section */}
      <section className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-medium mb-2.5">All Products</h2>
            <span className="text-gray-500">
              ({searchingProducts.length}) products found
            </span>
          </div>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                name="search"
                required
                placeholder="Search Products"
              />
            </label>
          </div>
        </div>

        <hr className="border border-gray-200" />

        <div className="grid grid-cols-4 gap-10">
          {searchingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
