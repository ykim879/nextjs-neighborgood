import Sidebar from "./slidebar/slidebar";
import Map from "./map/map";
export default function Home() {
  return (
    <main style={{ display: 'flex', height: '100vh', padding: 0 }}>
      <div style={{ width: '16.666%', height: '100%', backgroundColor: '#EAD8C0' }}>
        <Sidebar />
      </div>
      <div style={{ flexGrow: 1, padding: '10px', height: '100%' }}>
        <Map />
      </div>
    </main>
  );
}
