"use client";

import React from 'react';
import Link from 'next/link';
import styles from './slidbar.module.css';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathName = usePathname();
  return (
    <nav className={styles.sidebar} style={{ width: '16.666%', height: '100%', backgroundColor: '#EAD8C0' }}>
      <h2>Neighbor Goods</h2>
      <ul className="flex flex-col gap-y-5 pl-5 mb-8" style={{ padding: '20px' }}>
        <li>
          <Link className={styles.link} href="/list">
            List
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/map">
            Map
          </Link>
        </li>
      </ul>
      <h2>Personal</h2>
      <ul className="flex flex-col gap-y-5 pl-5" style={{ padding: '20px' }}>
        <li>
          <Link className={styles.link} href="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/orders">
            Orders
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/post">
            Post My Goods
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
