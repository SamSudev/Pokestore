import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductGrid from '../components/ProductGrid';
import ProductDetail from '../components/ProductDetail';
import './Products.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFiltered(
      products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, products]);

  if (loading) return <div className="products-loading">Cargando...</div>;
  if (error) return <div className="products-error">Error al cargar: {error}</div>;

  return (
    <div className="products-container">
      <h2>Pokémon</h2>
      <input
        type="text"
        className="products-search"
        placeholder="Buscar Pokémon por nombre..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ProductGrid products={filtered} onProductClick={setSelected} />
      <ProductDetail product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
