import './ProductDetail.css';

export default function ProductDetail({ product, onClose }) {
  if (!product) return null;
  return (
    <div className="product-detail-overlay" onClick={onClose}>
      <div className="product-detail-modal" onClick={e => e.stopPropagation()}>
  <img src={product.image} alt={product.name} className="product-detail-image" />
  <h2>{product.name.charAt(0).toUpperCase() + product.name.slice(1)} <span style={{color:'#f48c06'}}>#{product.id}</span></h2>
  <p className="product-detail-description">Tipos: {product.types.join(', ')}</p>
  <button className="close-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
