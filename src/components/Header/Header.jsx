import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom
import Styles from './header.module.css';
import logo from '../../assets/logo_colorido_transformasie.png';
import MenuIcon from '../../assets/icons/MenuIcon.png'; // Caminho para o ícone de menu
import CloseIcon from '../../assets/icons/CloseIcon.png'; // Caminho para o ícone de fechar

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={Styles.header}>
      <div className={Styles.logoContainer}>
        <img
          src={logo}
          alt="Transformasie Inteligência Financeira"
          className={Styles.logo}
        />
      </div>

      <button
        className={`${Styles.icon} ${Styles.menuIcon}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
      >
        <img src={isMenuOpen ? CloseIcon : MenuIcon} alt="Menu" />
      </button>

      <nav className={`${Styles.navContainer} ${isMenuOpen ? Styles.active : ''}`}>
        <ul className={Styles.UlHeader}>
          <li className={Styles.navItem}>
            <Link to="/" className={Styles.Links}>Home</Link>
          </li>
          <li className={Styles.navItem}>
            <Link to="/sobre" className={Styles.Links}>Sobre</Link>
          </li>
          <li className={Styles.navItem}>
            <Link to="/blog" className={Styles.Links}>Blog</Link>
          </li>
         
          <li className={Styles.navItem}>
            <Link to="/para-voce" className={Styles.Links}>Para você</Link>
          </li>
          <li className={Styles.navItem}>
            <Link to="/para-sua-empresa" className={Styles.Links}>Para a sua empresa</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
