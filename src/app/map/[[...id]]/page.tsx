
import Map from "@/src/components/Map/map";
import SideView from "@/src/components/sideview/sideview";
import { Location } from "../../../types/location";
import { useState } from "react";

export default function NeighborGoodMapView({ params }: {
  params: {
    id: string[]
  }
}) {
  const neighborhoodid = params.id?.length > 0 ? params.id[0] : null;
  const goodId = params.id?.length > 1 ? params?.id[1] : null

  return (
    <div className="flex p-4">
      <div className="flex-1">
        <Map/>
      </div>
      <div className="w-80">
        <SideView neighborhoodid={neighborhoodid} goodId={goodId} />
      </div>
    </div>
  );
}