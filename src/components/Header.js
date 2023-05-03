import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="./logo.svg" alt="Mon Site Logo" />
        </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/nos-services">Nos services</Link>
          </li>
          <li>
            <Link to="/contactez-nous">Contactez-nous</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
