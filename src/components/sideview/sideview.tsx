import React, { useEffect, useState } from 'react';
import ListBox from '../listview/listbox';
import { INeighbor } from '@/src/models/neighbor';
import { IGood } from '@/src/models/good';

interface SideViewProps {
    neighborhoodid: String | null;
    goodId: String | null;
}


const SideView: React.FC<SideViewProps> = ({neighborhoodid, goodId }) => {
  const [neighbor, setNeighbor] = useState<INeighbor | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [goods, setGoods] = useState<IGood[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      if (neighborhoodid) {
        setLoading(true);
        try {
          // Fetch neighbor data
          const neighborResponse = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/neighbor?id=${neighborhoodid}`);
          if (!neighborResponse.ok) {
            throw new Error('Failed to fetch neighbor');
          }
          const neighborData = await neighborResponse.json();
          setNeighbor(neighborData);

          // Fetch goods data
          const goodsResponse = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/goods?neighborhoodId=${neighborhoodid}`);
          if (!goodsResponse.ok) {
            throw new Error('Failed to fetch goods');
          }
          const goodsData = await goodsResponse.json();
          setGoods(goodsData);
        } catch (error) {
          console.error('Error fetching data for', neighborhoodid, error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [neighborhoodid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (neighborhoodid == null || neighbor == null) {
    return null;
  }

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