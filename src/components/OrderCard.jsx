import PropTypes from 'prop-types';
import './css/OrderCard.css';

const statusMap = {
  delivered: { text: 'Entregue', className: 'status-delivered' },
  canceled: { text: 'Cancelado', className: 'status-canceled' },
  pending: { text: 'Pendente', className: 'status-pending' },
};

function OrderCard({ order }) {
  const { id, items, date, status, image } = order;
  const statusInfo = statusMap[status] || {};

  return (
    <div className="order-card">
      <img src={image} alt={items.join(', ')} className="order-image" />
      <div className="order-details">
        <div className="order-id">Pedido #{id}</div>
        <div className="order-items">{items.join(', ')}</div>
        <div className="order-date">{date}</div>
      </div>
      <div className="order-status">
        <span className={`status-badge ${statusInfo.className}`}>
          {statusInfo.text}
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