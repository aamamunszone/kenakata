import { Heart, ShoppingCart } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
  return (
    <header className="bg-white/50 backdrop-blur-md shadow-md py-5 sticky top-0 z-50">
      <div className="container w-[95%] mx-auto flex justify-between items-center gap-2.5">
        <div>
          <h1 className="text-2xl font-bold tracking-widest leading-relaxed">
            KenaKata
          </h1>
        </div>
        <div className="flex justify-between items-center gap-5">
          <NavLink className="btn btn-ghost" to="/">
            Home
          </NavLink>
          <NavLink className="btn btn-ghost" to="/products">
            Products
          </NavLink>
          <NavLink className="btn btn-ghost" to="/services">
            Services
          </NavLink>
          <NavLink className="btn btn-ghost" to="/about">
            About
          </NavLink>
          <NavLink className="btn btn-ghost" to="/contact">
            Contact
          </NavLink>
        </div>
        <div className="flex justify-between items-center gap-5">
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
              className="min-w-[180px]"
              type="search"
              required
              placeholder="What are you looking for ?"
            />
          </label>
          <Link to="/wishlist">
            <Heart />
          </Link>
          <button>
            <ShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
