import React from "react";
import Styles from './popup_formulario.module.css';
import { Link } from 'react-router-dom';
import FotoIzabel from '../../assets/Foto_PopUp.png';

function PopUp() {
    return (
        <section className={Styles.Container}>

            <div className={Styles.TitleContainer}>
                <h1 className={Styles.Title}>Comece a sua jornada!</h1>
            </div>

            <article className={Styles.PopUp}>

                <div className={Styles.PosterContainer}>
                    <div className={Styles.TextEsquerdaContainer}>
                        <p className={Styles.TextEsquerda}>
                            {/* Seu conteúdo aqui */}Uma consultoria
                            especializada em finanças para
                            impulsionar o crescimento da sua empresa.
                        </p>
                    </div>

                </div>
                <div className={Styles.PropostaContainer}>
                    <div className={Styles.TextDireitaContainer}>
                        <p className={Styles.TextDireita}>
                            {/* Seu conteúdo aqui */}
                        </p>
                    </div>

                </div>
            </article>

        </section>
    );
}

export default PopUp;
