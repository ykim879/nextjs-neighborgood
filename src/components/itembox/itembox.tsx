import React from 'react';

interface ItemBoxProps {
  header: string;
  img?: string;
  description: string;
  cost: string;
  additional_description: number;
}

const ItemBox: React.FC<ItemBoxProps> = ({ header, img, description, cost, additional_description: additional_description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white mb-4">
      <h3 className="font-semibold text-md mb-2">{header}</h3>
      {img && <img src={img} alt={header} className="w-full mb-2" />}
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">{cost}</button>
        <small className="text-gray-500">{additional_description} available</small>
      </div>
    </div>
  );
};

export default ItemBox;
