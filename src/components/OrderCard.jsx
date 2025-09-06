import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import './css/OrderCard.css';

const statusMap = {
  delivered: { key: 'delivered', className: 'status-delivered' },
  canceled: { key: 'canceled', className: 'status-canceled' },
  pending: { key: 'pending', className: 'status-pending' },
};

function OrderCard({ order }) {
  const { t } = useTranslation();

  const { id, items, date, status, image } = order;
  const statusInfo = statusMap[status] || {};

  return (
    <div className="order-card">
      <img src={image} alt={items.join(', ')} className="order-image" />
      <div className="order-details">
        <div className="order-id">{t("orders.orderId", { id })}</div>
        <div className="order-items">
          {items.map(item => t(`cart.${item}`)).join(", ")}
        </div>
        <div className="order-date">{date}</div>
      </div>
      <div className="order-status">
        <span className={`status-badge ${statusInfo.className}`}>
          {t(`orders.status.${statusInfo.key}`)}
        </span>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['delivered', 'canceled', 'pending']).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
