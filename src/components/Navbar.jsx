import { Link } from 'react-router-dom';
import './Navbar.css';
import pokeball from '../assets/pokeball.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
  <div className="navbar-logo">
    <img src={pokeball} alt="Pokeball" />
    PokeStore
  </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
  <li><Link to="/productos">Pokémon</Link></li>
        <li><Link to="/acerca">Acerca de</Link></li>
      </ul>
    </nav>
  );
}
