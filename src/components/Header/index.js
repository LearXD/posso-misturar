import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className='header-logo-container'>
          <Link to="/">POSSO MISTURAR?</Link>
        </div>
        <div className='header-nav-container'>
          {/* 
          <Link to="/medicamentos">PRODUTOS</Link>
          <Link to="/produdos">MEDICAMENTOS</Link> 
          */}
          <Link to="/about">SOBRE</Link>
        </div>
      </div>

    </header>
  )
}

export default Header;