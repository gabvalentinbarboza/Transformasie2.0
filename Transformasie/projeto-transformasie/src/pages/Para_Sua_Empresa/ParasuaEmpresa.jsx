import React from 'react';
import Styles from './para-sua-empresa.module.css';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ServicoDescricao from '../../components/ServicoDescricao/ServicoDescricao.jsx';

// Importação das imagens para os serviços
import ImgFinanceira from '../../assets/ParaSuaEmpresaImg/assessoriafinanceiraimg.png';
import ImgWorkshops from '../../assets/ParaSuaEmpresaImg/palestrasworkshopsimg.png';
import ImgLongetividade from '../../assets/ParaSuaEmpresaImg/preparacaoparalongetividade.png';
import ImgSupplyChain from '../../assets/ParaSuaEmpresaImg/supplychainimg.png';
import ImgRH from '../../assets/ParaSuaEmpresaImg/consultoriarhimg.png';

function ParaSuaEmpresa() {
    return (
        <>
            <Header />
            <main>
                <section className={Styles.ParaSuaEmpresaContainer}> {/*h1 - foto - h2 - texto - ficou interessado - botão*/}
                    <div className={Styles.tituloContainer}>
                        <h1 className={Styles.titulo}>Nossos serviços Para a sua empresa</h1>
                    </div>
                    <ServicoDescricao
                        titulo="Assessoria Financeira"
                        imagem={ImgFinanceira}
                        subtitulo="Como funciona uma Assessoria Financeira?"
                        texto={
                            <>
                                {"Analisamos todo santo mês suas vendas, custos, despesas, lucro e fluxo de caixa. Solução ideal para médio/longo prazo, dividida em 3 camadas:"}<br /><br />
                                {"• Relatórios: organizamos seus números e registros para você ler o seu negócio."}<br />
                                {"• Análises: interpretamos seus números para lhe dizer exatamente o que significam."}<br />
                                {"• Estratégias: quais os planos de ação você deve seguir?"}
                            </>
                        }
                    />


                    <ServicoDescricao
                        titulo="Palestras e Workshops"
                        imagem={ImgWorkshops}
                        subtitulo="Palestras e Workshops Dinâmicos"
                        texto="Nossas palestras e workshops abordam temas cruciais como planejamento financeiro, estratégias de economia e inteligência financeira."
                    />
                    <ServicoDescricao
                        titulo="Preparação para Longevidade"
                        imagem={ImgLongetividade}
                        subtitulo="Planejamento para o Futuro"
                        texto="Nossa consultoria ajuda a planejar sua vida financeira para garantir uma longevidade com qualidade e segurança econômica."
                    />
                    <ServicoDescricao
                        titulo="Consultoria Supply Chain"
                        imagem={ImgSupplyChain}
                        subtitulo="Gestão Eficiente de Supply Chain"
                        texto="Oferecemos soluções inovadoras para otimizar a cadeia de suprimentos, aumentando a eficiência e reduzindo custos."
                    />
                    <ServicoDescricao
                        titulo="Consultoria de RH"
                        imagem={ImgRH}
                        subtitulo="Desenvolvimento de Recursos Humanos"
                        texto="A nossa consultoria em RH é focada no desenvolvimento de pessoas, promovendo a eficiência organizacional e o bem-estar dos colaboradores."
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ParaSuaEmpresa;
