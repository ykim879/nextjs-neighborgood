import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Order } from '@/src/types/order';
import HorizontalSlideRow from '@/src/components/horizontalsliderow';
import { goods } from '@/src/types/mockdata';

const OrderHistoryPage: React.FC = () => {
    //Todo fetch good in orders (manage history to be 30 days) --stretch goal
    const orders: { [key: string]: Order[] } = {
        '1': [
            {
                id: 'order1',
                clientNeighborhoodName: 'Client Neighborhood A',
                clientNeighborhoodDescription: 'A vibrant community with lots of activities.',
                clientNeighborImg: 'https://example.com/client-neighbor-a.jpg',
                neighborhoodId: 'neighborhood1',
                timestamp: '2024-05-18T10:30:00Z',
                goodId: '1',
                userNeighborhoodId: 'user-neighborhood-1',
            },
            {
                id: 'order4',
                clientNeighborhoodName: 'Client Neighborhood D',
                clientNeighborhoodDescription: 'A bustling urban area with shops and restaurants.',
                clientNeighborImg: 'https://example.com/client-neighbor-d.jpg',
                neighborhoodId: 'neighborhood2',
                timestamp: '2024-05-20T14:00:00Z',
                goodId: '1',
                userNeighborhoodId: 'user-neighborhood-2',
            },
        ],
        '2': [
            {
                id: 'order2',
                clientNeighborhoodName: 'Client Neighborhood B',
                clientNeighborhoodDescription: 'A quiet, peaceful neighborhood.',
                clientNeighborImg: 'https://example.com/client-neighbor-b.jpg',
                neighborhoodId: 'neighborhood1',
                timestamp: '2024-05-18T12:45:00Z',
                goodId: '2',
                userNeighborhoodId: 'user-neighborhood-1',
            },
            {
                id: 'order5',
                clientNeighborhoodName: 'Client Neighborhood E',
                clientNeighborhoodDescription: 'A suburban area with lots of green spaces.',
                clientNeighborImg: 'https://example.com/client-neighbor-e.jpg',
                neighborhoodId: 'neighborhood3',
                timestamp: '2024-05-21T16:30:00Z',
                goodId: '2',
                userNeighborhoodId: 'user-neighborhood-3',
            },
        ],
        '3': [
            {
                id: 'order3',
                clientNeighborhoodName: 'Client Neighborhood C',
                clientNeighborhoodDescription: 'A family-friendly area with parks and schools.',
                clientNeighborImg: 'https://example.com/client-neighbor-c.jpg',
                neighborhoodId: 'neighborhood2',
                timestamp: '2024-05-19T09:15:00Z',
                goodId: '3',
                userNeighborhoodId: 'user-neighborhood-2',
            },
            {
                id: 'order6',
                clientNeighborhoodName: 'Client Neighborhood F',
                clientNeighborhoodDescription: 'A newly developed area with modern amenities.',
                clientNeighborImg: 'https://example.com/client-neighbor-f.jpg',
                neighborhoodId: 'neighborhood3',
                timestamp: '2024-05-22T11:00:00Z',
                goodId: '3',
                userNeighborhoodId: 'user-neighborhood-3',
            },
        ],
    };

    /*

  useEffect(() => {
    if (neighbor) {
      fetchGoods();
    }
  }, [neighbor]);

  useEffect(() => {
    const fetchOrders = async () => {
      const allOrders = await Promise.all(
        goods.map(async (good) => {
          const response = await axios.get('/api/orders', {
            params: { goodId: good.id },
          });
          return response.data;
        })
      );
      setOrders(allOrders.flat());
    };

    if (goods.length > 0) {
      fetchOrders();
    }
  }, [goods]);
*/
    return (
        <div className="h-screen w-full overflow-y-scroll p-4">
            {goods.map((good) => <HorizontalSlideRow key={good.id} good={good} orders={orders[good.id]} />)}
        </div>
    );
};

export default OrderHistoryPage;
