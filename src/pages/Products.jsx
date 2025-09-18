
import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductGrid from '../components/ProductGrid';
import ProductDetail from '../components/ProductDetail';
import './Products.css';

const PAGE_SIZE = 30;


export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    getProducts(page * PAGE_SIZE, PAGE_SIZE)
      .then(data => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

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
      <div className="products-pagination">
        <button className="products-page-btn" onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}>Anterior</button>
        <span style={{margin: '0 12px', color:'#6d4ea7'}}>Página {page + 1}</span>
        <button className="products-page-btn" onClick={() => setPage(p => p + 1)}>Siguiente</button>
      </div>
      <ProductGrid products={filtered} onProductClick={setSelected} />
      <ProductDetail product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
