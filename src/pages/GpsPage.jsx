import MapLeaflet from "../components/MapLeaflet";
import mockReviews from "../data/mockReviews";

function GpsPage() {

  const usersWithLocation = mockReviews.filter(user => user.location && user.location.length === 2);
  
  const mapCenter = [-23.55052, -46.633308];

  return (
    <>
      <MapLeaflet 
        center={mapCenter} 
        zoom={13}
        markers={usersWithLocation}
      />
    </>
  );
}

export default GpsPage;