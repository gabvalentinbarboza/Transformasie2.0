import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import Styles from './quem_somos.module.css'; // Importando o arquivo CSS específico
import ceoImage from '../../assets/imagem_quem_somos.png'; // Importando a imagem da CEO
import fundoImage from '../../assets/Home_Imagem_Fundo.png'; // Importando a imagem de fundo
import linkedinIcon from '../../assets/icons/Linkedin_icon.png'; // Ícone do LinkedIn
import whatsappIcon from '../../assets/icons/Whatsapp_icon.png'; // Ícone do WhatsApp

function QuemSomos() {
  return (
    <section className={Styles.Container} style={{ backgroundImage: `url(${fundoImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Imagem de fundo */}

      <section className={Styles.sectionContainer}>
        {/* Seção Quem Somos */}
        <div className={Styles.quemSomosContainer}>
          <h1 className={Styles.quemSomosTitle}>Quem somos?</h1>
          <p className={Styles.description}>
            A Transformasie é uma consultoria dedicada a transformar vidas através da educação financeira.
            Com uma abordagem diversificada, inclusiva e participativa,
            buscamos disseminar o conhecimento e contribuir para uma sociedade mais equitativa e consciente...

          </p>
          <Link to="/sobre" className={Styles.saibaMais}>Saiba mais</Link> {/* Substituído para Link */}
        </div>

        {/* Seção da CEO */}
        <div className={Styles.linksContainer}>


          <div className={Styles.ceoContainer}>
            <img src={ceoImage} alt="CEO da Transformasie" className={Styles.ceoImage} />
            <div className={Styles.socialButtons}>
              <a href="https://www.linkedin.com/company/transformasie/" className={Styles.linkedinButton} target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn Icon" className={Styles.icon} /> LinkedIn
              </a>
              <a href="https://wa.me/+5511993410871" className={Styles.whatsappButton} target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp Icon" className={Styles.icon} /> WhatsApp
              </a>
              <p className={Styles.ceoPhrase}>
                Descubra os próximos passos para a estabilidade e prosperidade financeira do seu negócio.
              </p>
            </div>
          </div>

        </div>


      </section>
    </section>
  );
}

export default QuemSomos;