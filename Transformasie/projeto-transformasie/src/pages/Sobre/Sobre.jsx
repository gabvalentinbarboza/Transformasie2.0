import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './sobre.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import SobreNos from '../../components/Sobre_Nos/SobreNos';
import MissaoVisaoValores from '../../components/MissaoVisaoValores/MissaoVisaoValores';
import OqueOferecemos from '../../components/O_Que_Oferecemos/OqueOferecemos';
import AdBlog from '../../components/AdBlog/AdBlog';
import PopUp from '../../components/PopUp_Formulario/PopUp_Formulario';




function Sobre() {
    return (
        <>
            <Header />
            <main>
                <SobreNos />
                <MissaoVisaoValores />
                <OqueOferecemos />
                <AdBlog />
            
                <div className={Styles.PopUpContainerSobre}>
                    <PopUp title="Ficou interessado? Receba agora uma proposta!" />

                </div>
            </main>
            <Footer />
        </>

    );
}

export default Sobre;
