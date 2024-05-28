import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";

const Map = ({ items }) => {
  return (
    <div className="w-full mt-10 h-[400px]  overflow-hidden relative rounded-md">
      <MapContainer
        className="absolute w-full h-full top-0 right-0 "
        center={[40.3834615, 71.832936]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {items.map((item) => (
          <Pin item={item} key={item.id} />
        ))} */}
      </MapContainer>
    </div>
  );
};

export default Map;
