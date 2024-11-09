import React from "react";
import Styles from './popup_blog.module.css';
import { Link } from 'react-router-dom';

function PopUpBlog() {
    return(
        <section className={Styles.Container}>



        <article className={Styles.PopUp}>
            {/* Sessão com a foto */}
          <div className={Styles.PosterContainer}>
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
                <Link className={Styles.ButtonProposta}>Receber Proposta</Link>
            </div>
        </article>



    </section>
    );
}
export default PopUpBlog;