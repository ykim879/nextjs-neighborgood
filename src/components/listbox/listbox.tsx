import React from 'react';

type ListBoxProps = {
  good: Good | undefined
};

const ListBox: React.FC<ListBoxProps> = ({good}) => {
  if (good == undefined) {
    return null;
  }
  return (
    <div className=" p-4 shadow-md bg-white">
      <div className="mb-4">
        <h3 className="font-semibold text-md mb-2">{good.name}</h3>
        {good.img && <img src={good.img} className="w-full mb-2" />}
        <p className="text-gray-700">{good.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                {good.cost}
            </button>
            {good.available_count ? <small className="text-gray-500"> {good.available_count} available</small>
            : <small className="text-gray-500"> event held until {good.effective_to} </small> }
      </div>
    </div>
  );
};

export default ListBox;
