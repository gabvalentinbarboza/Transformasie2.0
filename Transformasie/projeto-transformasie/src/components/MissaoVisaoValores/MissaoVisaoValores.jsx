import React from "react";
import Styles from './missao_visao_valores.module.css';
import IconMissao from '../../assets/icons/icon_missao.png';
import IconVisao from '../../assets/icons/icon_visao.png';
import IconValores from '../../assets/icons/icon_valores.png';

function MissaoVisaoValores() {
    return (
        <section className={Styles.Container}>

            <article className={Styles.MissaoContainer}>
                <div className={Styles.Circulo}>
                    <img src={IconMissao} className={Styles.IconVisao} />
                </div>

                <div className={Styles.TituloContainer}>
                    <h1 className={Styles.Titulo}>Nossa Missão</h1>
                </div>

                <div className={Styles.pContainer}>
                    <p className={Styles.paragrafo}>Transformar a vida das<br />
                        pessoas através da Educação Financeira,<br />
                        ampliando especialmente o<br />
                        conhecimento sobre<br />
                        planejamento com o<br />
                        objetivo de realizar sonhos</p>
                </div>
            </article>

            <article className={Styles.VisaoContainer}>
                <div className={Styles.Circulo}>
                    <img src={IconVisao} className={Styles.IconMissao} />
                </div>

                <div className={Styles.TituloContainer}>
                    <h1 className={Styles.Titulo}>Nossa Visão</h1>
                </div>

                <div className={Styles.pContainer}>
                    <p className={Styles.paragrafo}>Ser reconhecida como uma consultoria diversa,<br />
                        inclusiva e participativa e que promova a<br />
                        disseminação do conhecimento para a sociedade,<br />
                        com o objetivo de torná-la mais equânime.</p>
                </div>
            </article>

            <article className={Styles.ValoresContainer}>
                <div className={Styles.Circulo}>
                    <img src={IconValores} className={Styles.IconValores} />
                </div>


                <div className={Styles.TituloContainer}>
                    <h1 className={Styles.Titulo}>Nossos Valores</h1>
                </div>
                <div className={Styles.pContainer}>
                    <p className={Styles.paragrafo}>
                        Diversidade & Inclusão<br />
                        Paixão pelo que faz Ética e<br />
                        Transparência Confiança Integridade Respeito
                    </p>
                </div>

            </article>

        </section >
    );
}

export default MissaoVisaoValores;