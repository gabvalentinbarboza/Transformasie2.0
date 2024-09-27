import React from "react";
import Styles from './popup_formulario.module.css';
import { Link } from 'react-router-dom';
import FotoIzabel from '../../assets/Foto_PopUp.png';

function PopUp({ title }) { // Aceitando a prop title
    return (
        <section className={Styles.Container}>
            <div className={Styles.TitleContainer}>
                <h1 className={Styles.Title}>{title}</h1> {/* Usando a prop title */}
            </div>

            <section className={Styles.PopUpContainer}>
                <article className={Styles.PopUp}>
                    {/* Sessão com a foto */}
                    <div className={Styles.PosterContainer}>
                        <img src={FotoIzabel} alt="Foto de Izabel" className={Styles.PosterImage} />
                        <p className={Styles.TextoSobreImagem}>
                            Uma consultoria <br /> especializada em <br /> finanças para <br /> impulsionar o <br />crescimento da sua <br /> empresa.
                        </p>
                    </div>

                    {/* Sessão com a proposta */}
                    <div className={Styles.PropostaContainer}>
                        <h2 className={Styles.PropostaTitle}>RECEBA UMA PROPOSTA</h2>
                        <p className={Styles.TextDireita}>
                            Com apenas alguns cliques, informe-nos sua necessidade e receba nossa proposta personalizada de forma rápida e fácil.
                        </p>
                        <button className={Styles.ButtonProposta}>Receber Proposta</button>
                    </div>
                </article>
            </section>
        </section>
    );
}

export default PopUp;