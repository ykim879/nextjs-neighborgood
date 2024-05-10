import { Marker } from '@react-google-maps/api';

// Define custom icon properties
const customIcon = {
    url: 'icons/marker.png',
    scaledSize: new google.maps.Size(40, 40), // Scale the icon to 40x40 pixels
    origin: new google.maps.Point(0, 0), // Origin of the icon image
    anchor: new google.maps.Point(20, 20) // Anchor point of the icon
  };

  interface HouseMarkerProps {
    position: {
        lat: number,
        lng: number
    };
    key: React.Key; // Optionally define the 'key' if TypeScript complains about missing properties
}
  
const HouseMarker: React.FC<HouseMarkerProps> = ({ position }) => {
    return <Marker position={position} icon={customIcon} />
}

export default HouseMarker;