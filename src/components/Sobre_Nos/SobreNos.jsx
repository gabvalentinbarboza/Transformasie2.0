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
                            A Transformasie é uma consultoria dedicada a transformar vidas através da educação financeira. Com uma abordagem diversificada, inclusiva e participativa, buscamos disseminar o conhecimento e contribuir para uma sociedade mais equitativa e consciente. < br />

                            Nossa missão é clara: capacitar indivíduos e empresas a alcançarem seus objetivos financeiros,
                            promovendo o planejamento e a realização de sonhos e objetivos.
                            Oferecemos palestras, workshops e consultorias personalizadas que abordam desde a gestão financeira pessoal
                            até estratégias para um futuro sustentável e próspero.< br />< br />
                            Guiados por valores como ética, integridade, respeito, confiança e paixão pelo que fazemos,
                            somos uma empresa comprometida com a diversidade e a inclusão.
                            Queremos ser reconhecidos como referência em consultoria que promova impacto positivo,
                            fortalecendo a conexão entre educação financeira e qualidade de vida.< br />< br />
                            Transformasie: ajudando você a planejar hoje para realizar amanhã.
                        </p>

                    </div>
                </article>
            </section>
        </>
    );
}

export default SobreNos;
