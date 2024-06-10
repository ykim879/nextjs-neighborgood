"use client";

import React, { useEffect, useState } from 'react';
import { user } from '@/src/types/mockdata';
import Map from "@/src/components/Map/map";
import SideView from '@/src/components/sideview/sideview';

export default function NeighborGoodMapView({ params }: {
  params: {
    id: string[]
  } | null
}) {
  const [neighborhoodid, setSelectedNeighborId] = useState<string | null>(null);
  const [goodId, setSelectedGoodId] = useState<string | null>(null);
  const [neighbors, setNeighbors] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params) {
      const neighborId = params.id?.length > 0 ? params.id[0] : null;
      const goodId = params.id?.length > 1 ? params.id[1] : null;
      setSelectedNeighborId(neighborId);
      setSelectedGoodId(goodId);
    }
  }, [params]);
  useEffect(() => {
    const fetchNeighbors = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/neighbors?zipcode=' + user.zipcode);
        if (!response.ok) {
          throw new Error('Failed to fetch neighbors');
        }
        const data = await response.json();
        setNeighbors(data);
      } catch (error) {
        console.error('Error fetching neighbors:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNeighbors();
  }, []);

  const handleMarkerClick = (neighborId: string) => {
    setSelectedNeighborId(neighborId);
    //window.location.href = `/map/${neighborId}`; 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex p-4 h-screen">
      <div className="flex-1 p-30 h-full">
        <Map neighbors={neighbors} onMarkerClick={handleMarkerClick} />
      </div>
      <div className="w-100">
        <SideView neighborhoodid={neighborhoodid} goodId={goodId} />
      </div>
    </div>
  );
}