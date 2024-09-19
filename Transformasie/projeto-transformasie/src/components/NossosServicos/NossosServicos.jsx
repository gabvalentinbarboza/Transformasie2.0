import React from "react";
import Styles from './nossos_servicos.module.css'; // Importa o arquivo CSS
import {Link} from 'react-router-dom';
// Importe as imagens necessárias (coloque o caminho correto após mover as imagens para a pasta 'assets/nossosservicos')
import ImgLongetividade from '../../assets/nossos_servicos/Preparacao_Para_Longetividade_image.png';
import ImgWorkshops from '../../assets/nossos_servicos/Palestras_&_Workshops_image.png';
import ImgFinanceira from '../../assets/nossos_servicos/Acessoria_financeira_image.png';
import ImgSupplyChain from '../../assets/nossos_servicos/Consultoria_Supply_Chain_image.png';
import ImgRH from '../../assets/nossos_servicos/Mentoria_Em_Grupo_image.png';
import ImgMentoriaGrupo from '../../assets/nossos_servicos/Mentoria_Em_Grupo_image.png';
import ImgMentoriaIndividual from '../../assets/nossos_servicos/Mentoria_individual_image.png';
import Waveimg from '../../assets/nossos_servicos/Wave_image.png';


function NossosServicos() {
  return (

    
    <section className={Styles.servicesSection}>


    <div className={Styles.TitleServicosContainer}>
      <h1 className={Styles.TitleServicos}>Nossos Serviços</h1>
    </div>



    {/* Seção "Para sua empresa" */}
    <div className={Styles.titleContainer}>
      <h1 className={Styles.sectionTitle}>Para sua empresa</h1> {/* Título principal da seção */}
    </div>




    <div className={Styles.servicesContainer}>
      {/* Bloco de Assessoria Financeira */}
      <div className={Styles.serviceBlock}>
        <img src={ImgFinanceira} alt="Assessoria Financeira" className={Styles.serviceImage} />
        <h3 className={Styles.serviceTitle}>Assessoria Financeira</h3>
      </div>

      {/* Bloco de Palestras e Workshops */}
      <div className={Styles.serviceBlock}>
        <img src={ImgWorkshops} alt="Palestras e Workshops" className={Styles.serviceImage} />
        <h3 className={Styles.serviceTitle}>Palestras e Workshops</h3>
      </div>

      {/* Bloco de Preparação para Longevidade */}
      <div className={Styles.serviceBlock}>
        <img src={ImgLongetividade} alt="Preparação para Longevidade" className={Styles.serviceImage} />
        <h3 className={Styles.serviceTitle}>Preparação para Longevidade</h3>
      </div>

      {/* Bloco de Consultoria de RH */}
      <div className={Styles.serviceBlock}>
        <img src={ImgRH} alt="Consultoria de RH" className={Styles.serviceImage} />
        <h3 className={Styles.serviceTitle}>Consultoria de RH</h3>
      </div>

      {/* Bloco de Consultoria Supply Chain */}
      <div className={Styles.serviceBlock}>
        <img src={ImgSupplyChain} alt="Consultoria Supply Chain" className={Styles.serviceImage} />
        <h3 className={Styles.serviceTitle}>Consultoria Supply Chain</h3>
      </div>
    </div>



    {/* Seção "Para você" */}


    <div className={Styles.titleContainer}>
      <h1 className={Styles.sectionTitle}>Para você</h1> {/* Título principal da seção */}
    </div>


    

    <div className={Styles.servicesContainer}>
      {/* Bloco de Mentoria Individual */}
      <div className={Styles.serviceBlock}>
        <img src={ImgMentoriaIndividual} alt="Mentoria Individual" className={Styles.serviceImage} />
        <h3 className={Styles.serviceTitle}>Mentoria Individual</h3>
      </div>

      {/* Bloco de Mentoria em Grupo */}
      <div className={Styles.serviceBlock}>
        <img src={ImgMentoriaGrupo} alt="Mentoria em Grupo" className={Styles.serviceImage} />
        <h3 className={Styles.serviceTitle}>Mentoria em Grupo</h3>
      </div>
    </div>



  </section>
  );
}

export default NossosServicos;
