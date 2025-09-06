import mockProducts from '../data/mockProducts';
import ProductCard from './ProductCard';

function ProductsList() {
  return (
    <div>
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;