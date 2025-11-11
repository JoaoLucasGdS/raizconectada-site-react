import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue for many bundlers (Vite/webpack)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:    new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl:          new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl:        new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

export default function MapLeaflet({ center, zoom, markerText}) {
  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>{markerText}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
