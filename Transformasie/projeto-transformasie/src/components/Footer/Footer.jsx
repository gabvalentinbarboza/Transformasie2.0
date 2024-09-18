import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './footer.module.css'; // Importa o CSS Module com o nome 'Styles'
import logo from '../../assets/logo_branco_transformasie.png';
import WhatsappLogo from '../../assets/icons/Whatsapp_icon.png';
import MailLogo from '../../assets/icons/Mail_icon.png';
import LinkedinLogo from '../../assets/icons/Linkedin_icon.png';
import InstagramLogo from '../../assets/icons/Instagram_icon.png';
import FacebookLogo from '../../assets/icons/Facebook_icon.png';


function Footer() {
  return (
    <footer className={Styles.footer}>

      <div className={Styles.footerContainer}>

        <div className={Styles.logoContainer}>
          <img src={logo} alt="Transformasie Logo" className={Styles.logo} />
        </div>
        <article>
          <div className={Styles.titleContainer}>
            <h1 className={Styles.navTitle}>PROSPERE COM A NOSSA AJUDA</h1>
          </div>

          <div className={Styles.navContainer}>
            {/* PROSPERE COM A NOSSA AJUDA */}

            <nav className={Styles.nav} >
              <ul className={Styles.navUl}>
                <li className={Styles.navItem}>
                  <Link to="/" className={Styles.Links}>Home</Link>
                </li>
                <li className={Styles.navItem}>
                  <Link to="/sobre" className={Styles.Links}>Sobre</Link>
                </li>
                <li className={Styles.navItem}>
                  <Link to="/blog" className={Styles.Links}>Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
        </article>
        <article>
          <div className={Styles.titleContainer}>
            <h1 className={Styles.navTitle}>CONHEÇA-NOS</h1>
          </div>

          <div className={Styles.navContainer}>
          {/* CONHEÇA-NOS */}
            <nav className={Styles.nav}>
              <ul className={Styles.navUl}>
                <li className={Styles.navItem}>
                  <Link to="/para-sua-empresa" className={Styles.Links}>Para a sua empresa</Link>
                </li>
                <li className={Styles.navItem}>
                  <Link to="/para-voce" className={Styles.Links}>Para você</Link>
                </li>
              </ul>
            </nav>
          </div>
        </article>

        <article>
          <div className={Styles.titleContainer}>
            <h1 className={Styles.navTitle}>FALE CONOSCO</h1>
          </div>

          <div className={Styles.navContainer}>
            <nav className={Styles.nav} >

              <ul className={Styles.navUl}>
                <li className={Styles.navItem}>
                  <div className={Styles.iconContainer}>
                    <img src={MailLogo} className={Styles.icon} />
                  </div>
                  <Link to="/E-mail" className={Styles.Links}>E-mail</Link>
                </li>
                <li className={Styles.navItem}>
                  <div className={Styles.iconContainer}>
                    <img src={WhatsappLogo} className={Styles.icon} />
                  </div>
                  <Link to="/WhatsApp" className={Styles.Links}>WhatsApp</Link>
                </li>
              </ul>
            </nav>
          </div>
        </article>

        <article>
          <div className={Styles.titleContainer}>
            <h1 className={Styles.navTitle}>SIGA-NOS</h1>
          </div>
          <div className={Styles.navContainer}>
            <nav className={Styles.nav} >
              <div className={Styles.iconContainer}></div>
              <ul className={Styles.navUl}>
                <li className={Styles.navItem}>
                  <div className={Styles.iconContainer}>
                    <img src={InstagramLogo} className={Styles.icon} />
                  </div>
                  <Link to="/instagram" className={Styles.Links}>Instagram</Link>
                </li>
                <li className={Styles.navItem}>
                  <div className={Styles.iconContainer}>
                    <img src={LinkedinLogo} className={Styles.icon} />
                  </div>
                  <Link to="/linkedin" className={Styles.Links}>LinkedIn</Link>
                </li>
                <li className={Styles.navItem}>

                  <div className={Styles.iconContainer}>
                    <img src={FacebookLogo} className={Styles.icon} />
                  </div>

                  <Link to="/facebook" className={Styles.Links}>Facebook</Link>
                </li>
              </ul>
            </nav>
          </div>
        </article>

      </div>

      <div className={Styles.rigths}>
        <p className={Styles.rigthsPhrase}>© Transformasie todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
