"use client";

import React from 'react';
import Link from 'next/link';
import styles from './slidbar.module.css';
import { usePathname } from 'next/navigation';
//import { useSession, signOut } from "next-auth/react"

const Sidebar: React.FC = () => {
  //Todo: const { data: session } = useSession()
  const pathName = usePathname();
  //Todo: depends on user's login status do log in
  //Todo: {session ? (
  //<button className="bg-blue-500 text-white px-3 py-1 rounded"  onClick={() => signOut()}>
  //Sign Out
  //</button> 
  return (
    <nav className={styles.sidebar} style={{ width: '16.666%', height: '100%', backgroundColor: '#EAD8C0' }}>
      <div className="flex justify-between items-center p-4">
        <div>
          <img src="/path-to-your-logo.png" alt="Logo" className="w-12 h-12" />
        </div>
        <div>
            <Link className="bg-blue-500 text-white px-3 py-1 rounded" href="/signin">
              Sign In
            </Link>
        </div>
      </div>
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
          <Link className={styles.link} href="/history">
            Order History
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
