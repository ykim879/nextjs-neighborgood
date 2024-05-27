"use client";

import { useState, useCallback } from 'react';
import { Location } from '../types/location'

const useSelectLocation = () => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

    const handleMarkerClick = useCallback((event: Location) => {
        setSelectedLocation(event);
    }, []);
    

    return { selectedLocation, handleMarkerClick };
};

export default useSelectLocation;