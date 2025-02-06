import React, { useState } from "react";
import Styles from './nossos_servicos.module.css';
import ModalNossosProdutos from "../ModalNossosProdutos/ModalNossosProdutos";
import CloseIcon from "../../assets/icons/CloseIcon.png";
import ImgLongetividade from '../../assets/nossos_servicos/Preparacao_Para_Longetividade_image.png';
import ImgWorkshops from '../../assets/nossos_servicos/Palestras_&_Workshops_image.png';
import ImgFinanceira from '../../assets/nossos_servicos/Acessoria_financeira_image.png';
import ImgSupplyChain from '../../assets/nossos_servicos/Consultoria_Supply_Chain_image.png';
import ImgRH from '../../assets/nossos_servicos/Consultoria_de_RH_image.png';
import ImgMentoriaGrupo from '../../assets/nossos_servicos/Mentoria_Em_Grupo_image.png';
import ImgMentoriaIndividual from '../../assets/nossos_servicos/Mentoria_individual_image.png';

function NossosServicos() {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const abrirModal = (titulo, topicos) => {
    setModalContent({ titulo, topicos });
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
  };

  return (
    <section className={Styles.servicesSection}>
      <div className={Styles.tituloNossosServicosContainer}>
        <h1 className={Styles.tituloNossosServicos}>Nossos Serviços</h1>
      </div>

      <section className={Styles.containerArticleServices}>

        <article className={Styles.ParaSuaEmpresaContainer}>
          <div className={Styles.tituloParaSuaEmpresaContainer}>
            <h1 className={Styles.tituloParaSuaEmpresa}>PARA SUA EMPRESA</h1>
          </div>

          <article className={Styles.BlocksParaSuaEmpresaContainer}>
            <div className={Styles.ParaSuaEmpresaLink} onClick={() => abrirModal(
              'Assessoria Financeira',
              ['Analisamos todos os meses suas vendas, custos, despesas, lucro e fluxo de caixa. Solução ideal para médio/longo prazo, dividida em 3 camadas:     ',
                '• Relatórios: organizamos seus números e registros para você ler o seu negócio.',
                '• Análises: interpretamos seus números para lhe dizer exatamente o que significam.',
                '• Estratégias: quais os planos de ação você deve seguir?'
              ]
            )}>
              <div id="imageAssessoriaFinanceira" className={Styles.imageContainerParaSuaEmpresa} style={{ backgroundImage: `url(${ImgFinanceira})` }}>
              </div>
              <div className={Styles.textContainerParaSuaEmpresa}>
                <h3 className={Styles.ParaSuaEmpresah3}>Assessoria Financeira</h3>
              </div>
            </div>

            <div className={Styles.ParaSuaEmpresaLink} onClick={() => abrirModal(
              'Palestras & Worshops',
              ['Oferecemos palestras e cursos sobre diferentes temas relacionados a planejamento e educação financeira. As palestras podem durar entre uma e três horas e buscamos dialogar com o público durante ou depois, a depender de como o cliente preferir. Alguns temas que podemos desenvolver são:',
                '• Orçamento pessoal: como criar e seguir um orçamento eficaz.',
                '• Fundamentos de educação financeira: conceitos básicos para melhorar sua saúde financeira.',
                '• Estratégias para economizar dinheiro no dia a dia.',
                '• O que o dinheiro representa para você?'
              ]
            )}>
              <div id="imagePalestrasWorkshops" className={Styles.imageContainerParaSuaEmpresa} style={{ backgroundImage: `url(${ImgWorkshops})` }}>
              </div>
              <div className={Styles.textContainerParaSuaEmpresa}>
                <h3 className={Styles.ParaSuaEmpresah3}>Palestras & Workshops</h3>
              </div>
            </div>

            <div className={Styles.ParaSuaEmpresaLink} onClick={() => abrirModal(
              'Programa de Preparação para Longevidade',
              ['Esse programa tem como objetivo promover uma Longevidade Saudável e bem-sucedida, de modo que as pessoas possam se preparar para os desafios e oportunidades que surgem ao longo da vida.',
                'O programa abrange uma variedade de áreas, fornecendo recursos, informações e suporte para que os indivíduos possam ter uma vida plena e satisfatória, tais como: saúde e bem estar (físico e emocional) relacionamento e conexões sociais, aprendizado contínuo & criatividade e planejamento financeiro.',
                'Assim, com uma equipe multidisciplinar formada por médico,nutrólogo, advogado e economista conseguimos desenvolver temas de forma que as pessoas comecem a pensar nessa Longevidade com um novo olhar bem como oferecer aos RHs uma ferramenta para realizar processos de sucessão com maior êxito'
              ]
            )}>
              <div id="imagePreparacaoLongetividade" className={Styles.imageContainerParaSuaEmpresa} style={{ backgroundImage: `url(${ImgLongetividade})` }}>
              </div>
              <div className={Styles.textContainerParaSuaEmpresa}>
                <h3 className={Styles.ParaSuaEmpresah3}>Preparação para Longetividade</h3>
              </div>
            </div>

            <div id="consultoriaRHLink" className={Styles.ParaSuaEmpresaLink} onClick={() => abrirModal(
              'Consultoria Organizacional para Recursos Humanos',
              ['A consultoria organizacional em Recursos Humanos visa otimizar o desempenho e eficácia dessa área fundamental. Colaboramos de perto com as empresas para identificar desafios específicos, analisar processos existentes, e desenvolver estratégias que aprimorem a gestão de talentos, promovam a cultura organizacional e impulsionem o sucesso geral da equipe.',
            
              ]
            )}>
              <div id="imageConsultoriaRH" className={Styles.imageContainerParaSuaEmpresa} style={{ backgroundImage: `url(${ImgRH})` }}>
              </div>
              <div className={Styles.textContainerParaSuaEmpresa}>
                <h3 className={Styles.ParaSuaEmpresah3}>Consultoria de RH</h3>
              </div>
            </div>

            <div className={Styles.ParaSuaEmpresaLink} onClick={() => abrirModal(
              'Consultoria Organizacional para Supply Chain',
              ['Na esfera de Supply Chain a consultoria busca aperfeiçoar a eficiência e eficácia das operações. Trabalhamos em estreita colaboração com as empresas para identificar oportunidades de melhoria, analisar os processos de aquisição e logística, desenvolver estratégias de gestão de cadeia de suprimentos e implementar soluções que promovam a eficácia e a sustentabilidade nessa área crucial do negócio.',
               
              ]
            )}>
              <div id="imageConsultoriaSupplyChain" className={Styles.imageContainerParaSuaEmpresa} style={{ backgroundImage: `url(${ImgSupplyChain})` }}>
              </div>
              <div className={Styles.textContainerParaSuaEmpresa}>
                <h3 className={Styles.ParaSuaEmpresah3}>Consultoria Supply Chain</h3>
              </div>
            </div>
          </article>

          <div className={Styles.Wave}></div>
        </article>

        <article className={Styles.ParaVoceContainer}>
          <div className={Styles.tituloParaVoceContainer}>
            <h1 className={Styles.tituloParaVoce}>PARA VOCÊ</h1>
          </div>

          <div className={Styles.BlocksParaVoceContainer}>
            <div className={Styles.ParaVoceLink} onClick={() => abrirModal(
              'Mentoria Individual',
              ['Transforme sua relação com as finanças! Oferecemos consultoria individual personalizada para ajudá-lo a organizar e planejar sua vida financeira de forma prática e eficiente. Alcance seus objetivos, elimine preocupações e construa um futuro mais tranquilo com o suporte de especialistas dedicados ao seu sucesso .'
              ]
            )}>
              <div id="imageMentoriaIndividual" className={Styles.imageContainerParaVoce} style={{ backgroundImage: `url(${ImgMentoriaIndividual})` }}>
              </div>
              <div className={Styles.textContainerParaVoce}>
                <h3 className={Styles.ParaVoceh3}>Mentoria Individual</h3>
              </div>
            </div>

            <div className={Styles.ParaVoceLink} onClick={() => abrirModal(
            'Mentoria em grupo',
            ['Você deseja alcançar suas metas financeiras e construir um futuro sólido? Se a resposta for sim, a nossa Mentoria em Grupo de Educação Financeira é o caminho ideal para você! Essa mentoria reúne pessoas com objetivos financeiros semelhantes, formando um grupo motivado a aprender, crescer e conquistar o sucesso financeiro. Com a orientação de especialistas em finanças pessoais, você terá acesso a um ambiente colaborativo e de aprendizado, preparado para ajudá-lo a enfrentar os desafios do mundo financeiro com mais segurança e confiança. Ps.: Você pode formar seu grupo exclusivo'
            ]
            )}>
              <div id="imageMentoriaGrupo" className={Styles.imageContainerParaVoce} style={{ backgroundImage: `url(${ImgMentoriaGrupo})` }}>
              </div>
              <div className={Styles.textContainerParaVoce}>
                <h3 className={Styles.ParaVoceh3}>Mentoria em Grupo</h3>
              </div>
            </div>
          </div>
        </article>
      </section>

      {modalOpen && (
        <ModalNossosProdutos
          titulo={modalContent.titulo}
          topicos={modalContent.topicos}
          onClose={fecharModal}
        />
      )}
    </section>
  );
}

export default NossosServicos;
