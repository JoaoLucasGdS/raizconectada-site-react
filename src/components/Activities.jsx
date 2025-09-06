import { useState } from 'react';
import Tabs from './ProfileTabs';
import OrdersList from './OrdersList';
import ProductsList from './ProductsList';
import './css/Activities.css';

function Activities() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="activities-wrapper card mt-3">
      <div className="row g-0">
        <div className="activities-main">
          <h2 className="activities-header">Atividades</h2>
          <Tabs activeTab={activeTab} onChange={setActiveTab} />
          {activeTab === 'orders' ? <OrdersList /> : <ProductsList />}
        </div>
      </div>
    </div>
  );
}

export default Activities;