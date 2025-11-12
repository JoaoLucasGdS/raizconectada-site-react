import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"; 

import "./css/MapLeaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

const createStars = (rating) => {
  if (rating == null) return '';
  const roundedRating = Math.round(rating);
  const full = '★'.repeat(roundedRating);
  const empty = '☆'.repeat(5 - roundedRating);
  return `<div class="user-marker-stars">${full}${empty}</div>`;
};

const createUserIcon = (user) => {
  const iconHtml = `
    <div class="user-marker-bubble">
      ${createStars(user.rating)}
      <img src="${user.avatarUrl}" alt="${user.name}" class="user-marker-pfp" />
    </div>
  `;
    
  return L.divIcon({
    html: iconHtml,
    className: 'custom-user-marker',
    iconSize: [56, 68],
    iconAnchor: [28, 56],
    popupAnchor: [0, -70]
  });
};

const UserPopupContent = ({ user, onNavigate }) => (
  <div className="user-tooltip-card"> 
    <strong>
      {user.name} 
      {user.isVerified && <i className="bi bi-patch-check-fill text-primary" title="Verified"></i>}
    </strong>
    <p className="user-tooltip-snippet">{user.snippet}</p>
    
    <button className="btn-see-review" onClick={onNavigate}>
      Ver Avaliações
    </button>
  </div>
);

UserPopupContent.propTypes = {
    user: PropTypes.object.isRequired,
    onNavigate: PropTypes.func.isRequired
};

export default function MapLeaflet({ center = [-23.55052, -46.633308], zoom = 13, markers = [] }) {
  
  const navigate = useNavigate();

  const handleSeeReview = (id) => {
    navigate(`/reviews/${id}`);
  };

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(user => (
          <Marker
            key={user.id}
            position={user.location}
            icon={createUserIcon(user)}
            
            eventHandlers={{
              mouseover: (e) => {
                e.target.openPopup();
              }
            }}
          >
            <Popup>
              <UserPopupContent
                user={user} 
                onNavigate={() => handleSeeReview(user.id)} 
              />
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    </div>
  );
}

MapLeaflet.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  markers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    isVerified: PropTypes.bool,
    snippet: PropTypes.string,
  }))
};