import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
  <h1>PokeStore</h1>
  <p>¡Bienvenido a la tienda Pokémon! Descubre y explora los Pokémon más populares.</p>
  <div className="pokemon-games-info">
    <h2>Juegos Clásicos de Pokémon</h2>
    <ul style={{textAlign:'left', maxWidth:'500px', margin:'0 auto', color:'#6d4ea7', fontSize:'1.1rem'}}>
      <li><strong>Pokémon Red & Blue</strong> (1996): Los primeros juegos, donde comenzó la aventura en Kanto.</li>
      <li><strong>Pokémon Gold & Silver</strong> (1999): Introducción de la región Johto y 100 nuevos Pokémon.</li>
      <li><strong>Pokémon Ruby & Sapphire</strong> (2002): Nueva región Hoenn y batallas dobles.</li>
      <li><strong>Pokémon Diamond & Pearl</strong> (2006): Región Sinnoh y gráficos mejorados.</li>
      <li><strong>Pokémon Black & White</strong> (2010): Región Unova y una historia más profunda.</li>
      <li><strong>Pokémon X & Y</strong> (2013): Primeros juegos en 3D, región Kalos.</li>
      <li><strong>Pokémon Sword & Shield</strong> (2019): Región Galar y mundo abierto.</li>
      <li><strong>Pokémon Scarlet & Violet</strong> (2022): Última generación, exploración libre y multijugador.</li>
    </ul>
  </div>
  <button className="home-btn" onClick={() => navigate('/productos')}>Ver Pokémon</button>
    </div>
  );
}
