import Sidebar from "./slidebar/slidebar";
import Map from "./map/map";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="w-1/6 max-h-5xl  h-full items-center justify-between bg-[#EAD8C0]">
      <Sidebar />
      </div>
      <Map/>
    </main>
  );
}
