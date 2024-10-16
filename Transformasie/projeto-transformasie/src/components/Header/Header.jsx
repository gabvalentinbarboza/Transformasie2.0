import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom
import Styles from './header.module.css';
import logo from '../../assets/logo_colorido_transformasie.png';

function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.logoContainer}>
        <img src={logo} alt="Transformasie Inteligencia Financeira" className={Styles.logo} />
      </div>
      <nav className={Styles.navContainer}>
        <ul className={Styles.UlHeader}>
          <li className={Styles.navItem}>
            <Link to="/" className={Styles.Links}>Home</Link> {/* Link para a página Home */}
          </li>
          <li className={Styles.navItem}>
            <Link  to="/sobre" className={Styles.Links}>Sobre</Link> {/* Link para a página Sobre */}
          </li>
          <li className={Styles.navItem}>
            <Link  to="/blog" className={Styles.Links}>Blog</Link> {/* Link para a página Blog */}
          </li>
          <li className={Styles.navItem}>
            <Link  to="/para-sua-empresa" className={Styles.Links}>Para a sua empresa</Link> {/* Link para a página Para a sua empresa */}
          </li>
          <li className={Styles.navItem}>
            <Link  to="/para-voce" className={Styles.Links}>Para você</Link> {/* Link para a página Para você */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
