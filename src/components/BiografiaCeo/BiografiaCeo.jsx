import React from "react";
import Style from "./biografia_e_ceo.module.css";
import { Link } from 'react-router-dom';
function BiografiaCeo() {

    return (
        <section className={Style.BioeMensagemContainer}>

            <article className={Style.TodoTextoContainer}>
                <div className={Style.MensagemContainer}>
                    <h1 className={Style.TituloMensagem}>
                        Sobre a CEO: Izabel Cristina da Rocha
                    </h1>
                    <p className={Style.Texto}>

                        Mensagem da CEO
                        <br /><br />
                        “Acreditar que a educação financeira é uma ferramenta poderosa para transformar vidas, criar oportunidades e ajudar as pessoas a alcançarem seus sonhos. Como CEO da Transformasie, minha missão é liderar com paixão e propósito, promovendo impacto positivo na vida das pessoas e das organizações que atendemos.”


                    </p>
                </div>
                <div className={Style.BiografiaContainer}>
                    <h1 className={Style.TituloBio}>
                        Biografia
                    </h1>
                    <p className={Style.Texto}>
                        Izabel Cristina da Rocha é economista pela UNIARA, Mestra em Administração com ênfase em Finanças pela FECAP e possui Pós Graduação em Administração da Produção e Gestão da Produtividade pela UNIARA, bem como MBA em Controladoria e Finanças pela UFF. Com mais de 20 anos de experiência em empresas multinacionais, Izabel acumulou um extenso portfólio nas áreas de gestão de pessoas, planejamento estratégico, educação financeira e previdenciária, além de lideranças de equipes regionais e multifuncionais.
                        Como professora universitária desde 2005, Izabel compartilha sua expertise em disciplinas como liderança, gestão de pessoas e economia.
                        <br /><br />
                        Destaques Profissionais
                        Certificado Green Belt
                        Experiência na implementação de Programas de Educação Financeira e Preparação para Aposentadoria.
                        Líder de projetos globais de diversidade e inclusão, com foco em etnia e raça.
                        Autora de artigos publicados sobre economia, empreendedorismo feminino e educação financeira.
                        Valores e Propósito
                        Izabel acredita que a diversidade, a ética e a inclusão são fundamentais para o sucesso de qualquer iniciativa. Sua liderança reflete um compromisso com a transformação social, promovendo igualdade de oportunidades e desenvolvimento contínuo.
                        <br /><br />
                        Conecte-se com Izabel <br /><br />
                        <Link>📧 E-mail: izabel@transformasie.com.br</Link><br />
                        <Link to="https://wa.me/+511970328578"> 📱 Telefone: (11) 97032-8578</Link><br />
                        <Link to="https://www.linkedin.com/company/transformasie/">🔗 LinkedIn: Izabel Cristina da Rocha</Link><br />
                    </p>
                </div>
            </article>

        </section>
    );

}
export default BiografiaCeo;