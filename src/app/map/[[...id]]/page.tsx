import React from 'react';

import Map from "@/src/components/Map/map";
import SideView from '@/src/components/sideview/sideview';

export default function NeighborGoodMapView({ params }: {
  params: {
    id: string[]
  } | null
}) {
  const neighborhoodid = params != null && params.id?.length > 0 ? params.id[0] : null;
  const goodId = params != null && params.id?.length > 1 ? params?.id[1] : null

  return (
    <div className="flex p-4 h-screen">
      <div className="flex-1 p-30 h-full">
        <Map/>
      </div>
      <div className="w-100">
        <SideView neighborhoodid={neighborhoodid} goodId={goodId} />
      </div>
    </div>
  );
}