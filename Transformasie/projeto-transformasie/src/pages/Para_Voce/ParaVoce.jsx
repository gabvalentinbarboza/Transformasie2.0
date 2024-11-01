import React from 'react';
import Styles from './para-voce.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ServicoDescricao from '../../components/ServicoDescricao/ServicoDescricao.jsx';

// Importação das imagens para os serviços

import ImgGrupo from '../../assets/ParaVoceImg/MentoriaEmGrupoImg.png';
import ImgIndividual from '../../assets/ParaVoceImg/MentoriaIndividualImg.png';

function ParaVoce() {
    return (
        <>
            <Header />
            <main>
                <section className={Styles.ParaVoceContainer}>
                    
                    {/* Título da seção */}
                    <div className={Styles.TituloParaVoceContainer}>
                        <h1 className={Styles.TituloParaVoce}>Nossos serviços para você</h1>
                    </div>

                    {/* Serviço: Mentoria em Grupo */}
                    <ServicoDescricao
                        titulo="Mentorias em grupo"
                        imagem={ImgGrupo}
                        subtitulo="Como funciona a Mentoria em Grupo?"
                        texto="As mentorias em grupo são ideais para quem busca compartilhar experiências, tirar dúvidas e aprender com outros participantes. Cada sessão é guiada por especialistas que ajudam no desenvolvimento coletivo e individual."
                    />

                    {/* Serviço: Mentoria Individual */}
                    <ServicoDescricao
                        titulo="Mentoria Individual"
                        imagem={ImgIndividual}
                        subtitulo="Como funciona a Mentoria Individual?"
                        texto="A mentoria individual é focada exclusivamente no seu crescimento. Um especialista trabalha com você para desenvolver planos personalizados que atendam suas necessidades específicas."
                    />

       
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ParaVoce;
