import React from 'react';
import Styles from './sobre.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import SobreNos from '../../components/Sobre_Nos/SobreNos';
import MissaoVisaoValores from '../../components/MissaoVisaoValores/MissaoVisaoValores';



function Sobre() {
    return (
    <div>
        <Header />
        <main>
            <SobreNos />
            <MissaoVisaoValores />
        </main>
       <Footer />
    </div>

        );
    }
    
        export default Sobre;
    