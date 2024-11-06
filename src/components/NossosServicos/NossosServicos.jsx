import React from "react";
import Styles from './nossos_servicos.module.css';
import { Link } from 'react-router-dom';
import ImgLongetividade from '../../assets/nossos_servicos/Preparacao_Para_Longetividade_image.png';
import ImgWorkshops from '../../assets/nossos_servicos/Palestras_&_Workshops_image.png';
import ImgFinanceira from '../../assets/nossos_servicos/Acessoria_financeira_image.png';
import ImgSupplyChain from '../../assets/nossos_servicos/Consultoria_Supply_Chain_image.png';
import ImgRH from '../../assets/nossos_servicos/Consultoria_de_RH_image.png';
import ImgMentoriaGrupo from '../../assets/nossos_servicos/Mentoria_Em_Grupo_image.png';
import ImgMentoriaIndividual from '../../assets/nossos_servicos/Mentoria_individual_image.png';



function NossosServicos() {
  return (
    <section className={Styles.servicesSection}>


      <div className={Styles.tituloNossosServicosContainer}>
        <h1 className={Styles.tituloNossosServicos}>Nossos Serviços</h1>
      </div>

      <section className={Styles.containerArticleServices}>
        
        <article className={Styles.ParaSuaEmpresaContainer}>

          <div className={Styles.tituloParaSuaEmpresaContainer}>
            <h1 className={Styles.tituloParaSuaEmpresa}>PARA SUA EMPRESA</h1>
          </div>

          <div className={Styles.BlocksParaSuaEmpresaContainer}>
            <Link className={Styles.ParaSuaEmpresaLink}>
              <div id="imageAssessoriaFinanceira" className={Styles.imageContainerParaSuaEmpresa} style={{ backgroundImage: `url(${ImgFinanceira})` }}>
              </div>
              <div className={Styles.textContainerParaSuaEmpresa}>
                <h3 className={Styles.ParaSuaEmpresah3}>Assessoria Financeira</h3>
              </div>
            </Link>



            <Link className={Styles.ParaSuaEmpresaLink}>
              <div id="imagePalestrasWorkshops" className={Styles.imageContainerParaSuaEmpresa} style={{ backgroundImage: `url(${ImgWorkshops})` }}>
              </div>
              <div className={Styles.textContainerParaSuaEmpresa}>
                <h3 className={Styles.ParaSuaEmpresah3}>Palestras & Workshops</h3>
              </div>
            </Link>



            <Link className={Styles.ParaSuaEmpresaLink}>
              <div id="imagePreparacaoLongetividade" className={Styles.imageContainerParaSuaEmpresa} style={{ backgroundImage: `url(${ImgLongetividade})` }}>
              </div>
              <div className={Styles.textContainerParaSuaEmpresa}>
                <h3 className={Styles.ParaSuaEmpresah3}>Preparação para Longetividade</h3>
              </div>
            </Link>


            <Link id="consultoriaRHLink" className={Styles.ParaSuaEmpresaLink}>
              <div id="imageConsultoriaRH" className={Styles.imageContainerParaSuaEmpresa} style={{ backgroundImage: `url(${ImgRH})` }}>
              </div>
              <div className={Styles.textContainerParaSuaEmpresa}>
                <h3 className={Styles.ParaSuaEmpresah3}>Consultoria de RH</h3>
              </div>
            </Link>


            <Link className={Styles.ParaSuaEmpresaLink}>
              <div id="imageConsultoriaSupplyChain" className={Styles.imageContainerParaSuaEmpresa} style={{ backgroundImage: `url(${ImgSupplyChain})` }}>
              </div>
              <div className={Styles.textContainerParaSuaEmpresa}>
                <h3 className={Styles.ParaSuaEmpresah3}>Consultoria Supply Chain</h3>
              </div>
            </Link>
          </div>

          <div className={Styles.Wave}></div>
        </article>


        <article className={Styles.ParaVoceContainer}>
          <div className={Styles.tituloParaVoceContainer}>
            <h1 className={Styles.tituloParaVoce}>PARA VOCÊ</h1>
          </div>

          <div className={Styles.BlocksParaVoceContainer}>
            <Link className={Styles.ParaVoceLink}>
              <div id="imageMentoriaIndividual" className={Styles.imageContainerParaVoce} style={{ backgroundImage: `url(${ImgMentoriaIndividual})` }}>
              </div>
              <div className={Styles.textContainerParaVoce}>
                <h3 className={Styles.ParaVoceh3}>Mentoria Individual</h3>
              </div>
            </Link>



            <Link className={Styles.ParaVoceLink}>
              <div id="imageMentoriaGrupo" className={Styles.imageContainerParaVoce} style={{ backgroundImage: `url(${ImgMentoriaGrupo})` }}>
              </div>
              <div className={Styles.textContainerParaVoce}>
                <h3 className={Styles.ParaVoceh3}>Mentoria em Grupo</h3>
              </div>
            </Link>
          </div>
        </article>


      </section>
    </section>
  );
}

export default NossosServicos;
