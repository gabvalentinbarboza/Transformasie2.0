import React, { useEffect, useState } from "react";
import Styles from './o_que_oferecemos.module.css';

function OqueOferecemos() {
    const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar o índice do carrossel

    const textos = [
        "Oferecemos palestras e workshops dinâmicos, abordando temas como orçamento pessoal, estratégias de economia e inteligência financeira.",
        "Além disso, temos um programa de preparação para a longevidade, focado em saúde, bem-estar e planejamento financeiro para uma vida plena.",
        "Nossas consultorias organizacionais para Recursos Humanos e Supply Chain são projetadas para otimizar o desempenho empresarial, promovendo eficiência e sustentabilidade."
    ];

    // Função para rodar o carrossel automaticamente
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textos.length); // Muda o texto a cada 3 segundos
        }, 3000);

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [textos.length]);

    return (
        <section className={Styles.Container}>
            {/* Título principal */}
            <div className={Styles.TituloContainer}>
                <h1 className={Styles.Titulo}>O que oferecemos?</h1>
            </div>

            {/* Texto em carrossel com transição suave */}
            <div className={Styles.TextoFrameContainer}>
                <div className={Styles.TextoFrameWrapper} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {textos.map((texto, index) => (
                        <p className={Styles.TextoFrame} key={index}>{texto}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OqueOferecemos;
