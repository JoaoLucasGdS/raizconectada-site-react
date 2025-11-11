import MapLeaflet from "../components/MapLeaflet";

function GpsPage() {
  return (
    <MapLeaflet 
      center={[-23.55052, -46.633308]} 
      zoom={13} 
      markerText="Você está aqui" 
    />
  );
}

export default GpsPage;