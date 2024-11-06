import React from "react";
import Fundo from '../../assets/sobre/Sobre_Fundo.png';
import Styles from './sobre_nos.module.css';

function SobreNos() {
    return (
        <>
            <section className={Styles.SobreNosContainer}>

                
                <article className={Styles.FotoFundoContainer}>
                   
                </article>

                <article className={Styles.TextoContainer}>
                    <div className={Styles.h1Container}>
                        <h1 className={Styles.Tituloh1}>Sobre nós</h1>
                    </div>
                    <div className={Styles.paragrafoContainer}>
                        <p className={Styles.paragrafo}>
                        Izabel Rocha é uma economista e professora universitária
                        dedicada a transformar a vida das pessoas através da educação financeira.
                        Com mais de 20 anos de experiência em áreas administrativas,
                        fundos de pensão, gestão de pessoas e suprimentos, Izabel traz uma vasta
                        expertise que beneficia tanto indivíduos quanto organizações.
                        </p>
                        
                    </div>
                </article>
            </section>
        </>
    );
}

export default SobreNos;
