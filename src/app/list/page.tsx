
import React from 'react';
import ListBox from '@/src/components/listview/listbox';
import { goods } from '@/src/types/mockdata';

const NieghborGoodPage: React.FC = () => {
  //fetch data by it's static user zip code.
  const items = goods;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <ListBox key={index} good={item} />
      ))}
    </div>
  );
};

export default NieghborGoodPage;
