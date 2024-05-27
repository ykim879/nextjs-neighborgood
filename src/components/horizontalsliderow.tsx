import React from 'react';
import { Order } from '../types/order';
import { IGood } from '../models/good';

interface HorizontalSlideRowProps {
  good: IGood;
  orders: Order[];
}

const HorizontalSlideRow: React.FC<HorizontalSlideRowProps> = ({ good, orders }) => {
  return (
    <div key={good.id} className="flex mb-8" style={{ height: '20vh' }}>
      <div className="w-1/5">
        <img src={good.img} className="w-full h-full object-cover" />
      </div>
      <div className="w-4/5 ml-4">
        <h3 className="text-xl font-semibold">{good.name}</h3>
        <p className="text-gray-600 mb-2">{good.description}</p>
        <div className="flex overflow-x-scroll">
          {orders
            .filter((order) => order.goodId === good.id)
            .map((order) => (
              <div key={order.id} className="min-w-max mr-4 p-2 border rounded">
                <p className="font-semibold">Order ID: {order.id}</p>
                <div className="flex items-center">
                  <img
                    src={order.clientNeighborImg}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <p>{order.clientNeighborhoodName}</p>
                </div>
                <p className="text-gray-500">{new Date(order.timestamp).toLocaleString()}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlideRow;
