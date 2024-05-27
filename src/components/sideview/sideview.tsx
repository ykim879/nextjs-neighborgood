import React from 'react';
import ListBox from '../listview/listbox';
import { goods } from '@/src/types/mockdata';

interface SideViewProps {
    neighborhoodid: String | null;
    goodId: String | null;
}


const SideView: React.FC<SideViewProps> = ({neighborhoodid, goodId }) => {
    if (neighborhoodid == null) {
        return null;
    }
    //Todo: fetch neighbor data by neighborhoodId
    const neighbor = {
        id: '1',
        name: 'Downtown',
        img: 'https://example.com/avatar1.jpg',
        headline: 'Heart of the city',
        description: 'A bustling area with lots of shops and restaurants.',
      } 
    //Todo fetch goodId if goodId exists

    //Todo: click join action
    return (
        <div className="border rounded-lg p-4 bg-white shadow-lg h-full w-full flex flex-col">
      {neighbor && (
        <div className="flex flex-col mb-4" style={{ height: '30%' }}>
          <div className="flex items-center mb-4">
            <img src={neighbor.img} alt={neighbor.headline} className="w-20 h-20 rounded-full mr-4" />
            <div>
              <h2 className="font-bold text-lg">{neighbor.headline}</h2>
              <p className="text-gray-600">{neighbor.description}</p>
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 overflow-auto">
       {goodId && <ListBox good= {goods.find((good) => good.id === goodId)}/>}
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">All Products</h3>
          {goods.map((good) => <ListBox good= {good}/>)}
        </div>
      </div>
    </div>
    );
}
//todo caching listbox
export default SideView;