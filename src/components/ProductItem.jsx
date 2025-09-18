import './ProductItem.css';

function getRandomSizeClass() {
  const classes = ['poke-img-rect', 'poke-img-square', 'poke-img-tall'];
  return classes[Math.floor(Math.random() * classes.length)];
}

export default function ProductItem({ product, onClick }) {
  const sizeClass = getRandomSizeClass();
  return (
    <div className="product-item" onClick={() => onClick(product)}>
      <div className={`product-image-wrapper ${sizeClass}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-price-overlay">#{product.id}</div>
      </div>
      <div className="product-name">{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</div>
    </div>
  );
}
