import PropTypes from 'prop-types';
import './css/ProfileTabs.css';

function ProfileTabs({ activeTab, onChange }) {
  return (
    <div className="tabs-container">
      <button
        className={`tab-button ${activeTab === 'orders' ? 'active' : ''}`}
        onClick={() => onChange('orders')}
      >
        Meus pedidos
      </button>
      <button
        className={`tab-button ${activeTab === 'products' ? 'active' : ''}`}
        onClick={() => onChange('products')}
      >
        Meus produtos
      </button>
    </div>
  );
}

ProfileTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProfileTabs;