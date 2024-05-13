import { Marker } from '@react-google-maps/api';

// Define custom icon properties
const customIcon = {
    url: 'icons/marker.png',
    scaledSize: { width: 40, height: 40 }, // Scale the icon to 40x40 pixels
    origin: { x: 0, y: 0 }, // Origin of the icon image
    anchor: { x: 20, y: 20 } // Anchor point of the icon
  };

  interface HouseMarkerProps {
    position: {
        lat: number,
        lng: number
    };
    key: React.Key; // Optionally define the 'key' if TypeScript complains about missing properties
}
  
const HouseMarker: React.FC<HouseMarkerProps> = ({ position }) => {
    return <Marker position={position} icon={customIcon} onClick={() => {}}/>
}

export default HouseMarker;