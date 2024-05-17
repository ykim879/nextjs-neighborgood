"use client";

import Sidebar from "../components/slidebar/slidebar";

export default function Home({ children, }: { children: React.ReactNode }) {
  return (
    <main style={{ display: 'flex', height: '100vh', padding: 0 }}>
      <div style={{ width: '16.666%', height: '100%', backgroundColor: '#EAD8C0' }}>
        <Sidebar />
      </div>
      {children}
    </main>
  );
}
