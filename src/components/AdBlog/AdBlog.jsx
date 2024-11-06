import React from "react";
import { Link } from 'react-router-dom';
import Styles from './adblog.module.css';
import FundoAdBlog from '../../assets/fundo_ad_blog_image.png';


function AdBlog() {
    return (
        <section className={Styles.AdBlogContainer}>
        {/* Título Principal */}
        <div className={Styles.TituloContainer}>
            <h1 className={Styles.Titulo}>Conheça também o nosso Blog!</h1>
        </div>

        <article className={Styles.AdBlog}>

            <div className={Styles.TextoContainer}>

                <p className={Styles.Texto}>
                    Nosso blog é um espaço onde
                    compartilhamos artigos sobre 
                    educação financeira e 
                    planejamento.
                   
                </p>

                <p className={Styles.Texto}>
                    Respondemos perguntas frequentes
                    e oferecemos dicas práticas, fornecendo
                    insights valiosos para ajudar você a
                    melhorar sua saúde financeira.
                </p>

            </div>

            <div className={Styles.ButtonContainer}>
                {/* Usando Link para redirecionar para a página do blog */}
                <Link to="/blog" className={Styles.Button}>
                    Saiba Mais
                </Link>
            </div>

            
        </article>
    </section>
    );
}

export default AdBlog;
