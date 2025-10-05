import React from 'react';
import { NavLink } from 'react-router';

const Sidebar = () => {
  return (
    <div className="h-full">
      <ul className="space-y-3.5">
        <li>
          <NavLink className="whitespace-nowrap">Men's Fashion</NavLink>
        </li>
        <li>
          <NavLink className="whitespace-nowrap">Woman's Fashion</NavLink>
        </li>
        <li>
          <NavLink className="whitespace-nowrap">Electronics</NavLink>
        </li>
        <li>
          <NavLink className="whitespace-nowrap">Home & Lifestyle</NavLink>
        </li>
        <li>
          <NavLink className="whitespace-nowrap">Medicine</NavLink>
        </li>
        <li>
          <NavLink className="whitespace-nowrap">Sports & Outdoor</NavLink>
        </li>
        <li>
          <NavLink className="whitespace-nowrap">Baby's & Toys</NavLink>
        </li>
        <li>
          <NavLink className="whitespace-nowrap">Groceries & Pets</NavLink>
        </li>
        <li>
          <NavLink className="whitespace-nowrap">Health & Beauty</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
