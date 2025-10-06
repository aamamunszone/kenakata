import {
  ActivityIcon,
  CircleDollarSign,
  HandCoins,
  MonitorDot,
} from 'lucide-react';
import React from 'react';

const InfoSection = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-20">
        <div className="flex flex-col justify-between items-center gap-1 border-2 border-gray-200 rounded-sm p-10 w-[25%]">
          <span className="p-5 bg-gray-200 rounded-full">
            <MonitorDot />
          </span>
          <h3>10.5k</h3>
          <p>Sellers active our site</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-1 border-2 border-gray-200 rounded-sm p-10 w-[25%]">
          <span className="p-5 bg-gray-200 rounded-full">
            <CircleDollarSign />
          </span>
          <h3>33k</h3>
          <p>Monthly Product Sale</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-1 border-2 border-gray-200 rounded-sm p-10 w-[25%]">
          <span className="p-5 bg-gray-200 rounded-full">
            <ActivityIcon />
          </span>
          <h3>45.5k</h3>
          <p>Customer active in our site</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-1 border-2 border-gray-200 rounded-sm p-10 w-[25%]">
          <span className="p-5 bg-gray-200 rounded-full">
            <HandCoins />
          </span>
          <h3>25k</h3>
          <p>Annual gross sale in our site</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
