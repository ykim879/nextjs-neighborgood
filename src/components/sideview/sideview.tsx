import React from 'react';
import ListBox from '../listbox/listbox';

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
    const goods: Good[] = [
        {
          id: '1',
          name: 'Fresh Vegetables',
          img: 'https://example.com/vegetables.jpg',
          description: 'A variety of fresh vegetables available.',
          cost: '$20',
          available_count: 15,
          neighborhoodId: '1',
          type: 'produce',
        },
        {
          id: '2',
          name: 'Organic Fruits',
          img: 'https://example.com/fruits.jpg',
          description: 'A variety of organic fruits available.',
          cost: '$30',
          available_count: 8,
          neighborhoodId: '2',
          type: 'produce',
        },
        {
          id: '3',
          name: 'Artisan Bread',
          img: 'https://example.com/bread.jpg',
          description: 'Freshly baked artisan bread.',
          cost: '$10',
          available_count: null,
          neighborhoodId: '3',
          type: 'bakery',
        },
        {
          id: '4',
          name: 'Homemade Jam',
          img: 'https://example.com/jam.jpg',
          description: 'Delicious homemade jam made from local fruits.',
          cost: '$5',
          available_count: 20,
          neighborhoodId: '1',
          type: 'preserves',
        },
        {
          id: '5',
          name: 'Free-Range Eggs',
          img: 'https://example.com/eggs.jpg',
          description: 'Farm fresh free-range eggs.',
          cost: '$12',
          available_count: 30,
          neighborhoodId: '2',
          type: 'dairy',
        },
        {
          id: '6',
          name: 'Local Honey',
          img: 'https://example.com/honey.jpg',
          description: 'Pure and natural local honey.',
          cost: '$15',
          available_count: 10,
          neighborhoodId: '3',
          type: 'preserves',
        },
        {
          id: '7',
          name: 'Craft Beer',
          img: 'https://example.com/beer.jpg',
          description: 'Locally brewed craft beer.',
          cost: '$25',
          available_count: 50,
          neighborhoodId: '4',
          type: 'beverages',
        },
        {
          id: '8',
          name: 'Gourmet Cheese',
          img: 'https://example.com/cheese.jpg',
          description: 'A selection of gourmet cheeses.',
          cost: '$40',
          available_count: 5,
          neighborhoodId: '5',
          type: 'dairy',
        },
      ];
      

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