import React from "react";
import Styles from './o_que_oferecemos.module.css';

function OqueOferecemos() {
    return (
        <section className={Styles.Container}>
            {/* Título principal */}
            <div className={Styles.TituloContainer}>
                <h1 className={Styles.Titulo}>O que oferecemos?</h1>
            </div>

            {/* Parágrafo com descrição */}
            <div className={Styles.TextoFrameContainer}>
                <p className={Styles.TextoFrame}>
                    Oferecemos palestras e workshops dinâmicos, abordando temas como orçamento pessoal, estratégias de economia e inteligência financeira.
                    Além disso, temos um programa de preparação para a longevidade, focado em saúde, bem-estar e planejamento financeiro para uma vida plena.
                    Nossas consultorias organizacionais para Recursos Humanos e Supply Chain são projetadas para otimizar o desempenho empresarial, promovendo eficiência e sustentabilidade.
                </p>
            </div>
        </section>
    );
}

export default OqueOferecemos;
