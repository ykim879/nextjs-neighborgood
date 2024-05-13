import React from 'react';
import { Event } from '../types/event';
import {Location} from '../types/location'
import styles from './SideView.module.css';

interface SideViewProps {
    isVisible: boolean;
    location: Location;
    onActionClick?: () => void;
}


const SideView: React.FC<SideViewProps> = ({ isVisible, location, onActionClick }) => {
    if (!isVisible) {
        return null; // Do not render the component if it is not supposed to be visible
    }
    //Todo: get event by location from firebase 
    const item: Event =
    {
        id: "1a2b3c4d-5e6f-7g8h-9i0j-123k456l789m",
        header: true,
        title: "Community Garden Meeting",
        description: "Join us to discuss the upcoming planting season.",
        additionalInfo: "Bring your own seeds!",
        location: location
    }
    //Todo: click join action
    return (
        <div className={styles.sideView}>
            <div className={styles.content}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.description}>{item.description}</p>
                {item.additionalInfo && <div className="additional-info">{item.additionalInfo}</div>}
                <button className={styles.ctaButton} onClick={onActionClick}>Join</button>
            </div>
        </div>
    );
}

export default SideView;