import React from 'react';
import Image from 'next/image';
import styles from './slidbar.module.css'; 

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
        <h2>Menu</h2>
      </div>
      <div style={{ padding: '20px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>
        <Image src="/path-to-your-profile-image.jpg" alt="Profile Picture" width={80} height={80} />
        <p>Jane Melwin</p>
        <p>janemelvin@gmail.com</p>
      </div>
      <div style={{ padding: '20px' }}>
        <button style={{ marginBottom: '10px' }}>Add account</button>
        <div>Home</div>
        <div>Journal stats</div>
        <div>Calendar</div>
        <div>Sign out</div>
      </div>
    </div>
  );
};

export default Sidebar;
