import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import './css/ProfileTabs.css';

function ProfileTabs({ activeTab, onChange }) {

  const { t } = useTranslation();

  return (
    <div className="tabs-container">
      <button
        className={`tab-button ${activeTab === 'orders' ? 'active' : ''}`}
        onClick={() => onChange('orders')}
      >
        {t("profileTabs.orders")}
      </button>
      <button
        className={`tab-button ${activeTab === 'products' ? 'active' : ''}`}
        onClick={() => onChange('products')}
      >
        {t("profileTabs.products")}
      </button>
    </div>
  );
}

ProfileTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProfileTabs;