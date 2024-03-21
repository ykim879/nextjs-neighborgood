"use client";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

// Mock data: Replace with real data from your backend
const neighbors = [
  { lat: -3.745, lng: -38.523 },
  { lat: -3.745, lng: -38.524 },
  { lat: -3.745, lng: -38.525 }
];

function Map() {
    return (
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?
        <LoadScript
          googleMapsApiKey= {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {neighbors.map((location, index) => (
              <Marker key={index} position={location} />
            ))}
          </GoogleMap>
        </LoadScript>
        : <>cannot display api key</>
      );
}

export default Map;
