"use client";
import { Marker } from '@react-google-maps/api';
import { Location } from '../types/location';
import { useRouter } from 'next/navigation'

const customIcon = {
  url: 'icons/marker.png',
  scaledSize: { width: 40, height: 40 }, // Scale the icon to 40x40 pixels
  origin: { x: 0, y: 0 }, // Origin of the icon image
  anchor: { x: 20, y: 20 } // Anchor point of the icon
};

interface HouseMarkerProps {
  position: Location;
  key: React.Key;
  nav: string;
}
//todo: onclick
const HouseMarker: React.FC<HouseMarkerProps> = ({ position, nav }) => {
  const router = useRouter()

  return <Marker position={position} icon={customIcon} onClick={() => router.push(nav)}/>;
}

export default HouseMarker;