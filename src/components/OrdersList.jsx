import mockOrders from '../data/mockOrders';
import OrderCard from './OrderCard';

function OrdersList() {
  return (
    <div>
      {mockOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrdersList;