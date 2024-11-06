import React, { useState, useRef } from 'react';
import Style from './carrossel_oque_oferecemos.module.css';
import ImgRH from '../../assets/CARD_OQO_RH.png'
import ImgSupplyChain from '../../assets/CARD_OQO_SUPPLY_CHAIN.png'
import ImgPalestras from '../../assets/CARD_OQO_PALESTRAS.png'
import ImgLongetividade from '../../assets/CARD_OQO_LONGETIVIDADE.png'
import ImgBeneficios from '../../assets/CARD_OQO_BENEFICIOS.png'

function CarrosselOqueOferecemos() {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);  // Para armazenar a posição atual de rolagem
    const containerRef = useRef(null);

    // Função para iniciar o arraste
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX); // Pegamos a posição inicial do mouse
        setScrollLeft(containerRef.current.scrollLeft); // Armazenamos a posição de rolagem atual
        containerRef.current.style.cursor = 'grabbing'; // Muda o cursor para "grabbing"
    };

    // Função para mover o carrossel enquanto arrasta
    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const distance = e.clientX - startX; // Distância movida pelo mouse
        containerRef.current.scrollLeft = scrollLeft - distance; // Move o carrossel com base na distância
    };

    // Função para parar o arraste
    const handleMouseUp = () => {
        setIsDragging(false);
        containerRef.current.style.cursor = 'grab';
    };

    return (
        <section className={Style.ContainerCarrossel}>
        <div className={Style.TitleContainer}>
            <h1 className={Style.Title}>O que oferecemos?</h1>
        </div>

        <article
            className={Style.BlockServicos}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className={`${Style.Block} ${Style.ConsultoriaRH}`}>
                <h2 className={Style.TitleServico}>Consultoria em Recursos Humanos</h2>
                <p className={Style.TextServico}>
                    Consultoria RH: Otimize a gestão de talentos e melhore a cultura organizacional.
                    Identificamos desafios, analisamos processos e
                    desenvolvemos estratégias personalizadas.
                </p>
            </div>
            <div className={`${Style.Block} ${Style.ConsultoriaSupplyChain}`}>
                <h2 className={Style.TitleServico}>Consultoria em Supply Chain</h2>
                <p className={Style.TextServico}>
                    Consultoria Supply Chain: Aperfeiçoe a eficiência das operações de aquisição e logística.
                    Reduzimos custos e promovemos sustentabilidade.
                </p>
            </div>
            <div className={`${Style.Block} ${Style.PalestraseWorkshops}`}>
                <h2 className={Style.TitleServico}>Palestras & Workshops</h2>
                <p className={Style.TextServico}>
                    Palestras & Workshops: Oferecemos palestras interativas sobre educação financeira,
                    cobrindo temas como orçamento pessoal,
                    estratégias de economia e inteligência financeira.
                </p>
            </div>
            <div className={`${Style.Block} ${Style.PreparacaoparaLongevidade}`}>
                <h2 className={Style.TitleServico}>Preparação para Longevidade</h2>
                <p className={Style.TextServico}>
                    Preparação para Longevidade: Promova uma vida longa e saudável com nosso programa abrangente.
                    Cobrimos saúde, relacionamentos,
                    aprendizado contínuo e planejamento financeiro.
                </p>
            </div>
            <div className={`${Style.Block} ${Style.BeneficiosEducacaoFinanceira}`}>
                <h2 className={Style.TitleServico}>Benefícios da Educação Financeira</h2>
                <p className={Style.TextServico}>
                    Benefícios: Funcionários financeiramente educados são mais satisfeitos,
                    focados e saudáveis, resultando em menor rotatividade
                    e uso eficiente dos benefícios.
                </p>
            </div>
        </article>
    </section>
    );
}

export default CarrosselOqueOferecemos;
