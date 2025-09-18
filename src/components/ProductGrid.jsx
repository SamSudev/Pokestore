import Masonry from 'react-masonry-css';
import ProductItem from './ProductItem';
import './ProductGrid.css';

export default function ProductGrid({ products, onProductClick }) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {products.map(product => (
        <ProductItem key={product.id} product={product} onClick={onProductClick} />
      ))}
    </Masonry>
  );
}
