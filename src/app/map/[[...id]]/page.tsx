"use client";

import React, { useEffect, useState } from 'react';

import Map from "@/src/components/Map/map";
import SideView from '@/src/components/sideview/sideview';

export default function NeighborGoodMapView({ params }: {
  params: {
    id: string[]
  } | null
}) {
  const [neighborhoodid, setSelectedNeighborId] = useState<string | null>(null);
  const [goodId, setSelectedGoodId] = useState<string | null>(null);

  useEffect(() => {
    if (params) {
      const neighborId = params.id?.length > 0 ? params.id[0] : null;
      const goodId = params.id?.length > 1 ? params.id[1] : null;
      setSelectedNeighborId(neighborId);
      setSelectedGoodId(goodId);
    }
  }, [params]);
  
  const handleMarkerClick = (neighborId: string) => {
    setSelectedNeighborId(neighborId);
    window.location.href = `/map/${neighborId}`; 
  };
  return (
    <div className="flex p-4 h-screen">
      <div className="flex-1 p-30 h-full">
        <Map onMarkerClick={handleMarkerClick}/>
      </div>
      <div className="w-100">
        <SideView neighborhoodid={neighborhoodid} goodId={goodId} />
      </div>
    </div>
  );
}