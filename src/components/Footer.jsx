import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© 2025 PokeStore</span>
        <span style={{marginLeft:'12px', fontSize:'1.2rem'}}>Hecho con <span style={{color:'#6d4ea7'}}>❤</span> y PokéAPI</span>
      </div>
    </footer>
  );
}
