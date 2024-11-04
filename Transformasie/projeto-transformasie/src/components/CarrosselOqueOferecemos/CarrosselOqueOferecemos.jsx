import React from "react";
import Style from "./carrossel_oque_oferecemos.module.css";

function CarrosselOqueOferecemos() {
    return (
        <section className={Style.ContainerCarrossel}>
            <div className={Style.TitleContainer}>
                <h1 className={Style.Title}>
                    O que oferecemos?
                </h1>
            </div>

            <article className={Style.BlockServicos}>
                <div className={Style.Block} id="ConsultoriaRH">
                    <h2 className={Style.TitleServico}>
                        Consultoria em Recursos Humanos
                    </h2>
                    <p className={Style.TextServico}>
                        Consultoria RH: Otimize a gestão de talentos e melhore a cultura organizacional.
                        Identificamos desafios, analisamos processos e
                        desenvolvemos estratégias personalizadas.
                    </p>
                </div>

                <div className={Style.Block} id="ConsultoriaSupplyChain">
                    <h2 className={Style.TitleServico}>
                        Consultoria em Supply Chain
                    </h2>
                    <p className={Style.TextServico}>
                        Consultoria Supply Chain: Aperfeiçoe a eficiência das operações de aquisição e logística.
                        Reduzimos custos e promovemos sustentabilidade.
                    </p>
                </div>

                <div className={Style.Block} id="PalestraseWorkshops">
                    <h2 className={Style.TitleServico}>
                        Palestras & Workshops
                    </h2>
                    <p className={Style.TextServico}>
                        Palestras & Workshops: Oferecemos palestras interativas sobre educação financeira,
                        cobrindo temas como orçamento pessoal,
                        estratégias de economia e inteligência financeira.
                    </p>
                </div>

                <div className={Style.Block} id="PreparacaoparaLongevidade">
                    <h2 className={Style.TitleServico}>
                        Preparação para Longevidade
                    </h2>
                    <p className={Style.TextServico}>
                        Preparação para Longevidade: Promova uma vida longa e saudável com nosso programa abrangente.
                        Cobrimos saúde, relacionamentos,
                        aprendizado contínuo e planejamento financeiro.
                    </p>
                </div>

                <div className={Style.Block} id="BenefíciosdaEducaçãoFinanceira">
                    <h2 className={Style.TitleServico}>
                        Benefícios da Educação Financeira
                    </h2>
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
