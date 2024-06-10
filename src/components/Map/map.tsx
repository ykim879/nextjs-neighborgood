"use client";
import React, { memo } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import HouseMarker from '../marker';
import { user } from '@/src/types/mockdata';
import { INeighbor } from '@/src/models/neighbor';
const containerStyle = {
  width: '800px',
  height: '800px'
};

const mapOptions = {
  mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID, // Replace 'YOUR_MAP_ID_HERE' with your actual map ID
  // Include other map options here as needed
};

interface MapComponentProps {
  onMarkerClick: (neighborId: string) => void;
  neighbors: INeighbor[];
}

const Map: React.FC<MapComponentProps> = ({neighbors, onMarkerClick}) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    console.error('Google Maps API key is missing');
    return <div>Error: Google Maps API key is missing</div>;
  }
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={user.position}
        zoom={17}
        options={mapOptions}
      >
        {neighbors.map((neighbor, index) => (
          <HouseMarker key={index} position={neighbor.position} onClick= {() => onMarkerClick(neighbor.id)}/>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(Map);
