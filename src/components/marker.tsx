"use client";
import React, { memo } from 'react';
import { Marker } from '@react-google-maps/api';
import { Location } from '../types/location';

const customIcon = {
  url: 'icons/marker.png',
  scaledSize: { width: 40, height: 40 }, // Scale the icon to 40x40 pixels
  origin: { x: 0, y: 0 }, // Origin of the icon image
  anchor: { x: 20, y: 20 } // Anchor point of the icon
};

interface HouseMarkerProps {
  position: Location;
  key: React.Key;
  onClick: () => void;
}
//todo: onclick
const HouseMarker: React.FC<HouseMarkerProps> = ({ position, onClick }) => {

  return <Marker gmpClickable= {true} position={position} icon={customIcon} onClick={onClick}/>;
}

export default memo(HouseMarker);