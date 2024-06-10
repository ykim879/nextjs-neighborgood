"use client";

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import HouseMarker from '../marker';
import { user } from '@/src/types/mockdata';
const containerStyle = {
  width: '800px',
  height: '800px'
};
//Todo: get it from database
const center = {
  lat: user.lat,
  lng: user.lng
};

// Mock data: Replace with real data from your backend
const neighbors = [
  { lat: 37, lng: -121 },
  { lat: 37.29753497565366, lng: -121.86716724652739 }
];

const mapOptions = {
  mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID, // Replace 'YOUR_MAP_ID_HERE' with your actual map ID
  // Include other map options here as needed
};

interface MapComponentProps {
  onMarkerClick: (neighborId: string) => void;
}

const Map: React.FC<MapComponentProps> = () => {
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
        center={center}
        zoom={17}
        options={mapOptions}
      >
        {neighbors.map((location, index) => (
          <HouseMarker key={index} position={location} nav='/map/1' />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
